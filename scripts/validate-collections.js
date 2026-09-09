#!/usr/bin/env node

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import * as yaml from 'yaml'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export function parseSelectOptions(options) {
  if (!Array.isArray(options)) return []
  return options.map(opt => (typeof opt === 'object' && opt !== null && 'value' in opt ? opt.value : String(opt)))
}

export function validateField(fieldName, val, fieldDef, filePath, isDefaultLocale = true) {
  const errors = []

  const isExplicitlyRequired = fieldDef.required === true || (fieldDef.min !== undefined && fieldDef.min > 0)
  const isRequired = isExplicitlyRequired || (fieldDef.required !== false && ['title', 'images'].includes(fieldDef.name))

  if (val === undefined || val === null || val === '') {
    if (isRequired && fieldDef.widget !== 'markdown') {
      if (isDefaultLocale || fieldDef.i18n !== true) {
        errors.push(`Field '${fieldName}' is required by Decap schema but is missing or empty`)
      }
    }
    return errors
  }

  const widget = fieldDef.widget

  if (fieldDef.pattern && typeof val === 'string') {
    const patternRegex = Array.isArray(fieldDef.pattern) ? new RegExp(fieldDef.pattern[0]) : new RegExp(fieldDef.pattern)
    const patternMsg = Array.isArray(fieldDef.pattern) && fieldDef.pattern[1] ? fieldDef.pattern[1] : `Field '${fieldName}' does not match pattern '${patternRegex}'`
    if (!patternRegex.test(val)) {
      errors.push(patternMsg)
    }
  }

  switch (widget) {
    case 'boolean': {
      if (typeof val !== 'boolean') {
        errors.push(`Field '${fieldName}' must be a boolean (received ${typeof val})`)
      }
      break
    }
    case 'string':
    case 'markdown': {
      if (typeof val !== 'string') {
        errors.push(`Field '${fieldName}' must be a string (received ${typeof val})`)
      }
      break
    }
    case 'datetime': {
      if (typeof val !== 'string' && !(val instanceof Date)) {
        errors.push(`Field '${fieldName}' must be a valid datetime string or Date (received ${typeof val})`)
      }
      else if (typeof val === 'string' && Number.isNaN(Date.parse(val))) {
        errors.push(`Field '${fieldName}' must be a valid datetime string (received '${val}')`)
      }
      break
    }
    case 'image': {
      if (typeof val !== 'string' || !val.trim()) {
        errors.push(`Field '${fieldName}' must be a non-empty image path or URL`)
      }
      break
    }
    case 'relation': {
      if (typeof val !== 'string' && typeof val !== 'number') {
        errors.push(`Field '${fieldName}' must be a string or number relation reference`)
      }
      break
    }
    case 'select': {
      const allowed = parseSelectOptions(fieldDef.options)
      if (allowed.length > 0 && !allowed.includes(val)) {
        errors.push(`Field '${fieldName}' has invalid value '${val}'. Allowed values: ${allowed.join(', ')}`)
      }
      break
    }
    case 'piveau-organization': {
      if (typeof val !== 'string' && (typeof val !== 'object' || val === null)) {
        errors.push(`Field '${fieldName}' must be an organization string or object`)
      }
      break
    }
    case 'piveau-vocabulary': {
      if (fieldDef.multiple) {
        if (!Array.isArray(val)) {
          errors.push(`Field '${fieldName}' must be an array of vocabulary IRIs`)
        }
        else {
          val.forEach((item, idx) => {
            if (typeof item !== 'string' || !item.trim()) {
              errors.push(`Field '${fieldName}[${idx}]' must be a non-empty string`)
            }
          })
        }
      }
      else {
        if (typeof val !== 'string' || !val.trim()) {
          errors.push(`Field '${fieldName}' must be a non-empty vocabulary IRI string`)
        }
      }
      break
    }
    case 'piveau-dataset': {
      if (fieldDef.multiple) {
        if (!Array.isArray(val)) {
          errors.push(`Field '${fieldName}' must be an array of dataset references`)
        }
        else {
          val.forEach((item, idx) => {
            if (!item || typeof item !== 'object') {
              errors.push(`Field '${fieldName}[${idx}]' must be an object with 'id' and 'label'`)
            }
            else {
              if (!item.id || typeof item.id !== 'string') {
                errors.push(`Field '${fieldName}[${idx}].id' must be a non-empty string`)
              }
              if (item.label === undefined || typeof item.label !== 'string') {
                errors.push(`Field '${fieldName}[${idx}].label' must be a string`)
              }
            }
          })
        }
      }
      break
    }
    case 'object': {
      if (typeof val !== 'object' || Array.isArray(val) || val === null) {
        errors.push(`Field '${fieldName}' must be an object`)
      }
      else if (Array.isArray(fieldDef.fields)) {
        for (const subField of fieldDef.fields) {
          const subErrors = validateField(
            `${fieldName}.${subField.name}`,
            val[subField.name],
            subField,
            filePath,
            isDefaultLocale,
          )
          errors.push(...subErrors)
        }
      }
      break
    }
    case 'list': {
      if (!Array.isArray(val)) {
        errors.push(`Field '${fieldName}' must be an array`)
        break
      }

      if (fieldDef.min !== undefined && val.length < fieldDef.min) {
        errors.push(`Field '${fieldName}' must contain at least ${fieldDef.min} item(s) (found ${val.length})`)
      }
      if (fieldDef.max !== undefined && val.length > fieldDef.max) {
        errors.push(`Field '${fieldName}' must contain at most ${fieldDef.max} item(s) (found ${val.length})`)
      }

      if (Array.isArray(fieldDef.types)) {
        const typeMap = new Map(fieldDef.types.map(t => [t.name, t]))
        val.forEach((item, idx) => {
          if (!item || typeof item !== 'object' || !item.type) {
            errors.push(`Field '${fieldName}[${idx}]' must be an object with a 'type' property`)
            return
          }
          const itemTypeDef = typeMap.get(item.type)
          if (!itemTypeDef) {
            const allowedTypes = Array.from(typeMap.keys()).join(', ')
            errors.push(`Field '${fieldName}[${idx}].type' '${item.type}' is invalid. Allowed types: ${allowedTypes}`)
            return
          }
          if (Array.isArray(itemTypeDef.fields)) {
            for (const subField of itemTypeDef.fields) {
              const subErrors = validateField(
                `${fieldName}[${idx}].${subField.name}`,
                item[subField.name],
                subField,
                filePath,
                isDefaultLocale,
              )
              errors.push(...subErrors)
            }
          }
        })
      }
      else if (Array.isArray(fieldDef.fields)) {
        val.forEach((item, idx) => {
          if (!item || typeof item !== 'object') {
            errors.push(`Field '${fieldName}[${idx}]' must be an object`)
            return
          }
          for (const subField of fieldDef.fields) {
            const subErrors = validateField(
              `${fieldName}[${idx}].${subField.name}`,
              item[subField.name],
              subField,
              filePath,
              isDefaultLocale,
            )
            errors.push(...subErrors)
          }
        })
      }
      else if (fieldDef.field) {
        val.forEach((item, idx) => {
          const subErrors = validateField(
            `${fieldName}[${idx}]`,
            item,
            fieldDef.field,
            filePath,
            isDefaultLocale,
          )
          errors.push(...subErrors)
        })
      }
      else {
        val.forEach((item, idx) => {
          if (typeof item !== 'string') {
            errors.push(`Field '${fieldName}[${idx}]' must be a string`)
          }
        })
      }
      break
    }
  }

  return errors
}

export async function validateMarkdownFile(filePath, collection, defaultLocale = 'de') {
  const content = await fs.readFile(filePath, 'utf-8')
  const errors = []

  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) {
    return ['Invalid Markdown format: Missing YAML frontmatter delimited by \'---\'']
  }

  let frontmatter
  try {
    frontmatter = yaml.parse(match[1]) || {}
  }
  catch (e) {
    return [`Invalid YAML frontmatter: ${e.message}`]
  }

  const body = match[2] || ''
  const isDefaultLocale = filePath.endsWith(`.${defaultLocale}.md`) || !filePath.includes('.')

  const fields = collection.fields || []
  const fieldMap = new Map(fields.map(f => [f.name, f]))
  if (collection.identifier_field) {
    fieldMap.set(collection.identifier_field, { name: collection.identifier_field, widget: 'string' })
  }

  // Validate known fields defined in Decap config
  for (const field of fields) {
    if (field.name === 'body') {
      const fieldErrors = validateField('body', body, field, filePath, isDefaultLocale)
      errors.push(...fieldErrors)
    }
    else {
      const fieldErrors = validateField(field.name, frontmatter[field.name], field, filePath, isDefaultLocale)
      errors.push(...fieldErrors)
    }
  }

  // Check for unknown fields in frontmatter
  for (const key of Object.keys(frontmatter)) {
    if (!fieldMap.has(key)) {
      errors.push(`Unknown property '${key}' not defined in Decap schema`)
    }
  }

  return errors
}

export async function getMarkdownFilesRecursively(dir) {
  const results = []
  let entries = []
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      return []
    }
    throw err
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const subFiles = await getMarkdownFilesRecursively(fullPath)
      results.push(...subFiles)
    }
    else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(fullPath)
    }
  }

  return results.sort()
}

export async function validateCollection(collection, contentBaseDir, defaultLocale = 'de') {
  const folderName = collection.folder || collection.name
  const collectionDir = path.resolve(contentBaseDir, folderName)

  console.log(`\nValidating collection '${collection.name}' in directory: ${collectionDir}`)

  const mdFiles = await getMarkdownFilesRecursively(collectionDir)
  if (mdFiles.length === 0) {
    console.warn(`No .md files found for collection '${collection.name}' in ${collectionDir}`)
    return { collection: collection.name, total: 0, valid: 0, invalid: 0, results: [] }
  }

  console.log(`Found ${mdFiles.length} file(s) to validate in '${collection.name}'.`)

  let validCount = 0
  let invalidCount = 0
  const validationResults = []

  for (const file of mdFiles) {
    const relPath = path.relative(contentBaseDir, file)
    const errors = await validateMarkdownFile(file, collection, defaultLocale)

    if (errors.length > 0) {
      invalidCount++
      validationResults.push({ file: relPath, errors })
    }
    else {
      validCount++
    }
  }

  if (invalidCount > 0) {
    console.error(`\x1b[31mValidation failed for ${invalidCount} of ${mdFiles.length} file(s) in collection '${collection.name}':\x1b[0m`)
    for (const res of validationResults) {
      console.error(`\x1b[33m${res.file}:\x1b[0m`)
      for (const err of res.errors) {
        console.error(`  - \x1b[31m${err}\x1b[0m`)
      }
    }
  }
  else {
    console.log(`\x1b[32mAll ${validCount} file(s) in collection '${collection.name}' are valid according to the Decap schema!\x1b[0m`)
  }

  return {
    collection: collection.name,
    total: mdFiles.length,
    valid: validCount,
    invalid: invalidCount,
    results: validationResults,
  }
}

const DEFAULT_REMOTE_CONFIG_URL =
  'https://raw.githubusercontent.com/opendata-swiss/metadata.swiss/main/opendata.swiss/ui/src/admin/config.yml'

export async function loadDecapConfig(configPathOption) {
  if (configPathOption) {
    if (configPathOption.startsWith('http://') || configPathOption.startsWith('https://')) {
      console.log(`Fetching Decap config from URL: ${configPathOption}`)
      const res = await fetch(configPathOption)
      if (!res.ok) {
        throw new Error(`Failed to fetch Decap config from ${configPathOption}: ${res.status} ${res.statusText}`)
      }
      return await res.text()
    }
    const resolved = path.resolve(process.cwd(), configPathOption)
    try {
      const content = await fs.readFile(resolved, 'utf-8')
      console.log(`Loading Decap config from: ${resolved}`)
      return content
    }
    catch (err) {
      console.warn(`Local Decap config path '${resolved}' does not exist (${err.message}), falling back to remote URL...`)
    }
  }

  // Check if content is located inside the parent metadata.swiss repository
  const localPath = path.resolve(__dirname, '../../src/admin/config.yml')
  try {
    const content = await fs.readFile(localPath, 'utf-8')
    console.log(`Loading Decap config from: ${localPath}`)
    return content
  }
  catch {
    // Not inside parent repo or file not found, fall back to remote
  }

  // Fallback to fetching remote config from repository main branch
  console.log(`Loading Decap config from remote URL: ${DEFAULT_REMOTE_CONFIG_URL}`)
  const res = await fetch(DEFAULT_REMOTE_CONFIG_URL)
  if (!res.ok) {
    throw new Error(`Failed to fetch remote Decap config from ${DEFAULT_REMOTE_CONFIG_URL}: ${res.status} ${res.statusText}`)
  }
  return await res.text()
}

export async function runValidation(options = {}) {
  const contentBaseDir = options.contentDir
    ? path.resolve(process.cwd(), options.contentDir)
    : path.resolve(__dirname, '..')

  let rawConfig
  try {
    rawConfig = await loadDecapConfig(options.configPath)
  }
  catch (err) {
    console.error('Error reading Decap config:', err.message)
    process.exit(1)
  }

  const config = yaml.parse(rawConfig)
  const defaultLocale = config.i18n?.default_locale || 'de'
  const collections = config.collections || []

  if (collections.length === 0) {
    console.error('Error: No collections found in Decap config')
    process.exit(1)
  }

  let collectionsToValidate = collections
  if (options.targetCollection && options.targetCollection !== 'all') {
    const target = options.targetCollection.toLowerCase()
    const found = collections.find(
      c => c.name.toLowerCase() === target || (c.folder && c.folder.toLowerCase() === target),
    )
    if (!found) {
      console.error(`Error: Collection '${options.targetCollection}' not found in Decap config. Available collections: ${collections.map(c => c.name).join(', ')}`)
      process.exit(1)
    }
    collectionsToValidate = [found]
  }

  let totalInvalid = 0
  for (const collection of collectionsToValidate) {
    const result = await validateCollection(collection, contentBaseDir, defaultLocale)
    totalInvalid += result.invalid
  }

  if (totalInvalid > 0) {
    console.error(`\n\x1b[31mValidation failed with ${totalInvalid} total error(s).\x1b[0m`)
    process.exit(1)
  }
  else {
    console.log('\n\x1b[32mAll validated collections are valid!\x1b[0m')
  }
}

function parseArgs() {
  const args = process.argv.slice(2)
  const options = {}

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg.startsWith('--collection=')) {
      options.targetCollection = arg.split('=')[1]
    }
    else if (arg === '--collection' && i + 1 < args.length) {
      options.targetCollection = args[++i]
    }
    else if (arg.startsWith('--config=')) {
      options.configPath = arg.split('=')[1]
    }
    else if (arg === '--config' && i + 1 < args.length) {
      options.configPath = args[++i]
    }
    else if (arg.startsWith('--content-dir=')) {
      options.contentDir = arg.split('=')[1]
    }
    else if (arg === '--content-dir' && i + 1 < args.length) {
      options.contentDir = args[++i]
    }
    else if (!options.targetCollection && !arg.startsWith('-')) {
      options.targetCollection = arg
    }
    else if (!options.contentDir && !arg.startsWith('-')) {
      options.contentDir = arg
    }
    else if (!options.configPath && !arg.startsWith('-')) {
      options.configPath = arg
    }
  }

  return options
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const options = parseArgs()
  runValidation(options).catch((err) => {
    console.error('Validation error:', err)
    process.exit(1)
  })
}
