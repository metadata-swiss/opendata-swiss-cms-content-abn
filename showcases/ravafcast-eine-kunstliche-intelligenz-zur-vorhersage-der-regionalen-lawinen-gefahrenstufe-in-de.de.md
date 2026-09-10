---
active: true
title: RAvaFcast - Eine Künstliche Intelligenz zur Vorhersage der regionalen Lawinen-Gefahrenstufe in der Schweiz
images:
  - image: https://cdn.prod.website-files.com/63f1f58039379743bd96333e/65e70ac4565c6ce67ebcfdc9_blog_RAvaFcast_thumbnail-p-1600.jpg
url: https://www.datascience.ch/articles/ravafcast-automating-regional-avalanche-danger-prediction-switzerland
themes:
  - http://publications.europa.eu/resource/authority/data-theme/ENVI
type: https://opendata.swiss/vocabulary/showcase-type/application
datasets:
  - id: https://opendata.swiss/set/data/691cb471-c3b5-48ec-a107-d0ad612fa70b
    label: swissALTI3D
keywords:
  - aggregation
  - avalanche-forecasting
  - classification
  - danger-level
  - interpolation
  - machine-learning
relationships:
  - type: person
    name: Swiss Data Science Center
    role: author
---
_Deutsch_

RAvaFcast ist ein dreistufiges Modell des Maschinellen Lernens zur Vorhersage der regionalen Lawinengefahrenstufe. Im ersten Schritt werden die Gefahrenstufen an den Standorten der Wetterstationen des IMIS- und SwissMetNet-Netzwerks auf der Grundlage verschiedener meteorologischer und schneebezogener Faktoren vorhergesagt. In einem zweiten Schritt werden diese lokalen Vorhersagen interpoliert, um hochauflösende Gefahrenkarten für Gebiete ohne Wetterstationen zu erstellen. Dabei kommen Features aus einem digitalen Höhenmodell (z.B. swissALTI3D) zum Einsatz. In der letzten Phase werden diese Vorhersagen zu einem Lawinenbulletin zusammengestellt, das dem offiziellen Format des SLF entspricht.

* * *

_Français_

RAvaFcast est un modèle d’apprentissage automatique en trois étapes pour la prévision du danger d’avalanche régional. La première étape consiste à prévoir le danger d’avalanche aux emplacements de stations météo des réseaux IMIS et SwissMetNet. Cette prévision se base sur plusieurs facteurs météorologiques et de la condition de la neige. Dans la deuxième étape, ces prévisions localisées sont interpolées pour créer des cartes des niveaux de dangers d’avalanche à haute résolution spatiale, pour toutes les zones dépourvues de stations météo. Cette phase se base sur des caractéristiques dérivées du modèle numérique de terrain (p. ex. SwissALTI3D). Dans la dernière étape, ces prédictions sont agrégées en reproduisant le bulletin officiel produit par le SLF.

* * *

_Italiano_

RAvaFcast è un modello di machine learning in tre elementi per predire il pericolo di valanghe regionale. La prima fase riguarda la predizione di valanghe dove sono presenti stazioni meteo delle reti IMIS e SwissMetNet. Questo stadio prende come input diversi fattori meteorologici e dello stato della neve. La seconda fase interpola queste predizioni locali per predire il pericolo di valanghe in zone sprovviste di stazioni meteo. Questa fase produce mappe ad alta risoluzione spaziale, basandosi su caratteristiche geomorfologiche estratte dal un modello digitale del terreno (p. es. SwissALTI3D). Nella fase finale, queste predizioni sono aggregate e compilate in un bollettino di pericolo di valanghe come ufficiale prodotto dal SLF.

* * *

_Rumantsch_

RAvaFcast è in model da machine learning en trais stgalims per predir il stgalim da privel da lavinas regiunal. En in emprim pass vegnan previs il nivel da privel als lieus da las staziuns meteorologicas da las raits IMIS e SwissMetNet a basa da differents facturs meteorologics e cundiziuns da naiv. Silsuneter vegnan questas prognosas localas, cun l’agid d’in model d’autezza digital (p. ex. swissALTI3D), interpoladas per generar cartas da privel d’auta resoluziun per ils territoris senza staziuns meteorologicas. En la davosa fasa vegnan questas prognosas messas ensemen ad in bulletin da lavinas che correspunda al format uffizial dal SLF.

* * *

English

RAvaFcast is a three-stage machine learning model pipeline for regional avalanche danger level forecasting. The first stage involves predicting danger levels at weather station locations within the IMIS and SwissMetNet networks, based on various meteorological factors and snowpack conditions. In the second stage, these localized predictions are interpolated to generate high-resolution danger level maps for areas lacking weather stations, using features derived from a digital elevation model (e.g., swissALTI3D). In the final stage, these predictions are compiled into an avalanche bulletin that mimics the official format from SLF.
