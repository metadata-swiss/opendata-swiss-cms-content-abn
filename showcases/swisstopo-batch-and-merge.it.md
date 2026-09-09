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
  - id: https://opendata.swiss/set/data/549438da-d913-40bb-9b0b-f7df343d928d
    label: swissALTI3D
  - id: https://opendata.swiss/set/data/1244f15c-3314-4b10-aaf4-f130895c8585
    label: SWISSIMAGE 10 cm, digitale Orthophotomosaik der Schweiz
  - id: https://opendata.swiss/set/data/dbeb2e43-06ae-47ac-9fa5-ce7aea6a19e7
    label: Landeskarte 1:25'000
  - id: https://opendata.swiss/set/data/01c41134-9013-472a-912a-a8a448883de3
    label: Swiss Map Vector 10, vektorielle Landeskarte der Schweiz 1:10 000
  - id: https://opendata.swiss/set/data/2565d982-e793-4edd-a269-962d1fb84a8c
    label: Landeskarte 1:50'000
  - id: https://opendata.swiss/set/data/6302edf0-df75-4b28-b451-0abaac3dd977
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
