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
  - id: https://opendata.swiss/set/data/d8864f44-7392-47b5-ad0e-cf1d52d156ac
    label: SWISSIMAGE 10 cm, digitale Orthophotomosaik der Schweiz
  - id: https://opendata.swiss/set/data/ab24e5cc-7f53-451a-820a-f113fa545943
    label: swissNAMES3D Geografische Namen der Landesvermessung
  - id: https://opendata.swiss/set/data/c6b8a141-9e08-4083-b654-620c43ffebe7
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
