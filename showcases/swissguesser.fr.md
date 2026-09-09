---
active: true
title: Swissguesser
images:
  - image: https://ckan.opendata.swiss/uploads/showcase/2021-07-22-092810.585108swissguesser.png
url: https://swissguesser.github.io/swissguesser/about.html
themes:
  - http://publications.europa.eu/resource/authority/data-theme/REGI
  - http://publications.europa.eu/resource/authority/data-theme/ENVI
type: https://opendata.swiss/vocabulary/showcase-type/application
datasets:
  - id: https://opendata.swiss/set/data/1244f15c-3314-4b10-aaf4-f130895c8585
    label: SWISSIMAGE 10 cm, digitale Orthophotomosaik der Schweiz
  - id: https://opendata.swiss/set/data/b62da77d-60af-466c-a0d9-77aa9786c642
    label: swissNAMES3D Geografische Namen der Landesvermessung
  - id: https://opendata.swiss/set/data/573014c2-0ffa-4d4e-9424-ad0ea50a62f9
    label: swissSURFACE3D Raster Reliefschattierung multidirektional
keywords:
  - geodata
  - geodaten
  - orthofoto
  - postleitzahl-plz
relationships:
  - type: person
    name: Ralph Straumann; David Oesch
    role: author
---
Der Swissguesser Bot lädt zwei Mal pro Tag zum Mitraten ein und krönt anschliessend die richtigen Antworten Der Bot wurde in Python unter Nutzung der APIs (Programmierschnittstellen) von Twitter und der Bundesgeodateninfrastruktur (BGDI, geo.admin.ch) programmiert. Er nutzt OpenData von Bundesamt für Landestopographie swisstopo. Der Bot läuft voll automatisiert in der Cloud. Die Antworten von Teilnehmenden werden mit einem FuzzyStringMatching und einigen weiteren Kriterien evaluiert und als richtig oder falsch klassiert. Die Datenhaltung für die Rangliste erfolgt in SQLite. Mehr Informationen: https://swissguesser.github.io/swissguesser/about.html
