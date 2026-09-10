---
active: true
title: Swisstopo Batch and Merge
images:
  - image: https://ckan.opendata.swiss/uploads/showcase/2022-08-15-141905.019429batch-and-merge.gif
url: "https://github.com/davidoesch/swisstopoBatchNmerge "
themes:
  - http://publications.europa.eu/resource/authority/data-theme/REGI
  - http://publications.europa.eu/resource/authority/data-theme/ENVI
type: https://opendata.swiss/vocabulary/showcase-type/application
datasets:
  - id: https://opendata.swiss/set/data/691cb471-c3b5-48ec-a107-d0ad612fa70b
    label: swissALTI3D
  - id: https://opendata.swiss/set/data/d8864f44-7392-47b5-ad0e-cf1d52d156ac
    label: SWISSIMAGE 10 cm, digitale Orthophotomosaik der Schweiz
  - id: https://opendata.swiss/set/data/2987a492-a097-46f3-b162-abc1b3115f85
    label: Landeskarte 1:25'000
  - id: https://opendata.swiss/set/data/66b36053-e5c9-45b3-8049-22f037fbe8be
    label: Swiss Map Vector 10, vektorielle Landeskarte der Schweiz 1:10 000
  - id: https://opendata.swiss/set/data/4c8c7c58-61c7-4a61-8e7a-6ffb95d183df
    label: Landeskarte 1:50'000
  - id: https://opendata.swiss/set/data/e8be74b0-fc58-4fc7-be9a-5dcc70dcea6e
    label: Landeskarte 1:100'000
keywords:
  - Luftbilder
  - batch
  - csv
  - hoehenmodell
  - karten
  - merge
  - swisstopo
relationships:
  - type: person
    name: David Oesch
    role: author
---
Ein einfaches graphisches Werkzeug um die aktuellsten swisstopo Karten und Höhenmodell und Luftbilder für ein Gebiet als ein File richtig zugeschnitten zu beziehen. Des weiteren können die über \[swisstopo website\](https://www.swisstopo.admin.ch/de/geodata.html) Werkzeuge erstellten Listen von DownloadLinks (CSV) via Kommando Zeile einfache bezogen zusammengeführt und zurechtgeschnitten werden. Hauptfunktionen: - Daten Auswählen, herunterladen und zusammenführen in einem Schritt - Einfach: keine Installation nötig, graphisches Nutzerinterface - Automatisierter Datenbezug: über die Command Line kann eine Vielzahl von verschiedenen Datenbezügen gemacht werden Voraussetzung: es handelt sich um Rohdatenbezug: der Speicherplatzbedarf kann je nach gewähltem Perimeter und Produkt sehr gross sein.
