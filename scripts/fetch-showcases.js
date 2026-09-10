#!/usr/bin/env node

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { Command } from 'commander'
import TurndownService from 'turndown'
import * as yaml from 'yaml'
import { ParsingClient } from 'sparql-http-client'
import env from '@zazuko/env'

import 'node-loader-sparql'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  }
  catch {
    return false
  }
}

const LANGUAGES = ['de', 'fr', 'it', 'en']
const THEME_BASE = 'http://publications.europa.eu/resource/authority/data-theme/'
const SHOWCASE_TYPE_BASE = 'https://opendata.swiss/vocabulary/showcase-type/'
const DATASET_BASE = 'https://opendata.swiss/set/data/'

const HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'application/json, text/plain, */*',
}

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
})

function getGermanLabel(val) {
  if (!val) return ''
  if (typeof val === 'string') {
    if (val.trim().startsWith('{')) {
      try {
        const parsed = JSON.parse(val)
        return (
          parsed.de
          || parsed.en
          || parsed.fr
          || parsed.it
          || Object.values(parsed)[0]
          || val
        )
      }
      catch {
        return val
      }
    }
    return val
  }
  if (typeof val === 'object') {
    return val.de || val.en || val.fr || val.it || Object.values(val)[0] || ''
  }
  return String(val)
}

async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { headers: HEADERS, ...options })
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`)
      }
      return await res.json()
    }
    catch (err) {
      if (i === retries - 1) throw err
      await new Promise(resolve => setTimeout(resolve, delay * (i + 1)))
    }
  }
}

const seenDatasets = new Map()

async function fetchDatasets(showcaseId, client) {
  const { default: findDataset } = await import('./find-dataset.rq')

  const url = `https://ckan.opendata.swiss/api/3/action/ckanext_showcase_package_list?showcase_id=${encodeURIComponent(
    showcaseId,
  )}`
  try {
    const data = await fetchWithRetry(url)
    if (!data.success || !Array.isArray(data.result)) {
      return []
    }

    const references = await Promise.all(data.result.map(async pkg => {
      if (!pkg.identifier) {
        return null
      }

      if (!seenDatasets.has(pkg.identifier)) {
        let id
        let label = getGermanLabel(pkg.display_name || pkg.title || pkg.name)

        const bindings = await findDataset({ identifier: env.literal(pkg.identifier) }, { env, client })
        if (bindings.length === 0) {
          id = `https://opendata.swiss/set/data/${pkg.identifier}`
          label += ' (missing)'
        } else {
          id = bindings[0].dataset.value
        }

        seenDatasets.set(pkg.identifier, { id, label })
      }

      return seenDatasets.get(pkg.identifier)
    }))

    return references.filter(Boolean)
  }
  catch (e) {
    console.warn(`Failed to fetch datasets for showcase ${showcaseId}:`, e.message)
    return []
  }
}

function processShowcase(showcase, datasets) {
  const slug = showcase.name || showcase.id

  // Images
  const imageUrlExtra = showcase.extras?.find(e => e.key === 'image_url')?.value
  const images = []
  if (imageUrlExtra) {
    let fullUrl = imageUrlExtra.trim()
    if (fullUrl) {
      if (!fullUrl.startsWith('http://') && !fullUrl.startsWith('https://')) {
        fullUrl = `https://ckan.opendata.swiss/uploads/showcase/${fullUrl}`
      }
      images.push({ image: fullUrl })
    }
  }

  // Themes
  const themes = Array.from(
    new Set(
      (showcase.groups || [])
        .filter(g => g.state !== 'deleted')
        .map((g) => {
          const code = (g.name || g.id || '').toUpperCase()
          return `${THEME_BASE}${code}`
        })
        .filter(t => t !== THEME_BASE),
    ),
  )

  // Type
  const showcaseTypeExtra = showcase.extras?.find(
    e => e.key === 'showcase_type',
  )?.value
  let type
  if (showcaseTypeExtra) {
    type = showcaseTypeExtra.startsWith('http')
      ? showcaseTypeExtra
      : `${SHOWCASE_TYPE_BASE}${showcaseTypeExtra}`
  }

  // Keywords
  const keywords = (showcase.tags || [])
    .map(tag => tag.display_name || tag.name)
    .filter(Boolean)

  // Relationships / Author
  const relationships = []
  if (showcase.author && showcase.author.trim()) {
    const rel = {
      type: 'person',
      name: showcase.author.trim(),
      role: 'author',
    }
    relationships.push(rel)
  }

  // Body from notes HTML -> Markdown
  const body = showcase.notes ? turndownService.turndown(showcase.notes) : ''

  // Build Frontmatter object matching Decap schema
  const frontmatter = {
    active: true,
    title: showcase.title || '',
  }

  if (images.length > 0) {
    frontmatter.images = images
  }
  if (showcase.url) {
    frontmatter.url = showcase.url
  }
  if (themes.length > 0) {
    frontmatter.themes = themes
  }
  if (type) {
    frontmatter.type = type
  }
  if (datasets.length > 0) {
    frontmatter.datasets = datasets
  }
  if (keywords.length > 0) {
    frontmatter.keywords = keywords
  }
  if (relationships.length > 0) {
    frontmatter.relationships = relationships
  }

  const yamlStr = yaml.stringify(frontmatter, {
    lineWidth: -1
  })
  const fileContent = `---\n${yamlStr}---\n${body ? `${body}\n` : ''}`

  return { slug, fileContent }
}

export async function fetchShowcases(options = {}) {
  const showcasesDir = options.showcasesDir
    ? path.resolve(process.cwd(), options.showcasesDir)
    : path.resolve(__dirname, '../showcases')

  console.log(`Target showcases directory: ${showcasesDir}`)
  console.log(`Overwrite existing files: ${Boolean(options.overwrite)}`)
  await fs.mkdir(showcasesDir, { recursive: true })

  console.log('Fetching showcases list from CKAN...')
  const listUrl = 'https://ckan.opendata.swiss/api/3/action/ckanext_showcase_list'
  const listData = await fetchWithRetry(listUrl)

  if (!listData.success || !Array.isArray(listData.result)) {
    throw new Error('Failed to retrieve showcase list from CKAN API')
  }

  const showcases = listData.result
  console.log(`Found ${showcases.length} showcases. Processing files...`)

  // Process concurrently with a concurrency limit
  const CONCURRENCY = 5
  let completed = 0
  let savedCount = 0
  let skippedCount = 0

  for (let i = 0; i < showcases.length; i += CONCURRENCY) {
    const batch = showcases.slice(i, i + CONCURRENCY)
    await Promise.all(
      batch.map(async (showcase) => {
        const slug = showcase.name || showcase.id
        const targetFiles = LANGUAGES.map(lang => path.join(showcasesDir, `${slug}.${lang}.md`))

        // Check if all language files already exist when overwrite is disabled
        if (!options.overwrite) {
          const existence = await Promise.all(targetFiles.map(fileExists))
          if (existence.every(Boolean)) {
            skippedCount++
            completed++
            if (completed % 10 === 0 || completed === showcases.length) {
              console.log(`Progress: ${completed}/${showcases.length} showcases processed (${savedCount} saved, ${skippedCount} skipped)`)
            }
            return
          }
        }

        const datasets = await fetchDatasets(showcase.id, options.sparqlClient)
        const { fileContent } = processShowcase(showcase, datasets)

        let savedAny = false
        for (let j = 0; j < LANGUAGES.length; j++) {
          const filename = targetFiles[j]

          if (!options.overwrite && (await fileExists(filename))) {
            continue
          }

          await fs.writeFile(filename, fileContent, 'utf-8')
          savedAny = true
        }

        if (savedAny) {
          savedCount++
        }
        else {
          skippedCount++
        }

        completed++
        if (completed % 10 === 0 || completed === showcases.length) {
          console.log(`Progress: ${completed}/${showcases.length} showcases processed (${savedCount} saved, ${skippedCount} skipped)`)
        }
      }),
    )
  }

  console.log(`\nFetch completed: ${savedCount} showcase(s) saved, ${skippedCount} showcase(s) skipped.`)
}

const program = new Command()
  .name('fetch-showcases')
  .description('Fetch showcases from CKAN and export as Decap CMS markdown files')
  .argument('[dir]', 'destination directory for showcase files')
  .option('--dir <dir>', 'destination directory for showcase files')
  .option('--showcases-dir <dir>', 'destination directory for showcase files')
  .option('--overwrite', 'overwrite existing showcase files', false)
  .option('--env', 'ODS-next environment', 'ABN')
  .action(async (dirArg, options) => {
    const targetDir = options.dir || options.showcasesDir || dirArg
    const sparqlClient = new ParsingClient({
      endpointUrl: `https://trifid.${options.env.toLowerCase()}.ods.zazukoians.org/query`
    })
    await fetchShowcases({
      showcasesDir: targetDir,
      overwrite: options.overwrite,
      sparqlClient,
    })
  })

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  program.parseAsync(process.argv).catch((err) => {
    console.error('Error fetching showcases:', err)
    process.exit(1)
  })
}
