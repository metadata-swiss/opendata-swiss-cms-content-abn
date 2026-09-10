---
active: true
title: Wie viele Briefkästen gibt es? – Interaktive Analyse der Briefkästen in der Schweiz
images:
  - image: https://raw.githubusercontent.com/davidoesch/wo-sind-briefkaesten/refs/heads/master/images/screenshot.png
url: https://wieviele-briefkaesten-gibt-es.streamlit.app
themes:
  - http://publications.europa.eu/resource/authority/data-theme/SOCI
  - http://publications.europa.eu/resource/authority/data-theme/REGI
type: https://opendata.swiss/vocabulary/showcase-type/application
datasets:
  - id: https://opendata.swiss/set/data/100232-kanton-basel-stadt
    label: Wohnungen (Gebäude- und Wohnungsregister GWR)
  - id: https://opendata.swiss/set/data/cb0f8401-c49a-4bdf-aff6-40a7015ba43a
    label: Landeskarte 1:10'000 (farbig)
keywords:
  - Adressen
  - Briefkästen
  - GWR-Datenanalyse
  - GeoAdmin API
  - Marketinganalyse
  - Stadtplanung
  - Wohnungen nach Adressen
  - Wohnungsanalyse
  - interaktive Karte Schweiz
relationships:
  - type: person
    name: David Oesch
    role: author
---
_Deutsch_

### Wie viele Briefkästen gibt es? - Ein Tool für Marketing, Stadtplanung und Logistik

Diese interaktive Web-Anwendung ermöglicht eine einfache Berechnung der Anzahl von Briefkästen (Verteiladressen) in einem geografischen Gebiet Ihrer Wahl in der Schweiz. Sie verwendet präzise Geodaten und bietet eine schnelle und zuverlässige Berechnung von Verteiladressen, was sie zu einem nützlichen Werkzeug für verschiedene Branchen macht. Die App basiert auf modernen Technologien wie Python, DuckDB und Streamlit, die ein reibungsloses und interaktives Erlebnis garantieren.  
Die verwendeten Daten stammen aus zwei Hauptquellen:

*   **Das Gebäude- und Wohnungsregister (GWR)** des Bundesamtes für Statistik (BFS), das aktuelle Informationen über Wohnungen in der Schweiz bietet.
*   **Die Datenbank „Places“ der Opening Maps Foundation**, die diese Informationen durch die Hinzufügung von Standortpunkten von Unternehmen und Einrichtungen erweitert.

### Konkrete Anwendungsfälle

*   Marketing:
    *   Verteilkampagnen: Berechnen Sie die Anzahl der Briefkästen in einem bestimmten Umkreis, um die Verteilung von Flyern zu planen.
    *   Geografische Segmentierung: Wählen Sie anhand der Anzahl der Adressen bestimmte Gebiete für Ihre Marketingaktionen aus.
*   Stadtplanung und -entwicklung:
    *   Bauprojekte: Berechnen Sie die von einem Projekt betroffenen Adressen für die Infrastrukturplanung.
    *   Netzwerkplanung: Unterstützen Sie lokale Behörden bei der Planung von Versorgungsnetzen auf der Grundlage der Anzahl der Adressen in einem bestimmten Gebiet.
*   Wissenschaftliche Forschung:
    *   Demografische Analyse: Untersuchen Sie die Verteilung der Bevölkerung in einem Sektor für soziale und georäumliche Forschung.
*   Logistik:
    *   Lieferoptimierung: Planen Sie Lieferrouten basierend auf der Anzahl der Adressen in einem bestimmten Gebiet.

### Zugang und Nutzungsbedingungen

Die Anwendung ist kostenlos und Open Source. Sie können über diesen Link direkt darauf zugreifen: [https://wieviele-briefkaesten-gibt-es.streamlit.app/](https://wieviele-briefkaesten-gibt-es.streamlit.app/)  
Der Quellcode ist auf GitHub für interessierte Entwickler verfügbar:  
[https://github.com/davidoesch/wo-sind-briefkaesten/](https://github.com/davidoesch/wo-sind-briefkaesten/)

### Tipps zur Nutzung

Teilen Sie größere Gebiete (z. B. 100 km²) in Untergebiete auf, um die Ladezeiten zu verkürzen.

Entdecken Sie die App jetzt und vereinfachen Sie Ihre Geodatenanalysen!

* * *

_Français_

### Combien y a-t-il de boîtes aux lettres ? - Un outil pour le marketing, l’urbanisme et la logistique

Cette application interactive permet de calculer facilement le nombre de boîtes aux lettres (adresses de distribution) dans un périmètre géographique de votre choix en Suisse. Utilisant des données géospatiales précises, elle offre un calcul rapide et fiable des adresses de distribution, ce qui en fait un outil utile pour divers secteurs. L’application repose sur des technologies modernes telles que Python, DuckDB et Streamlit, garantissant une expérience fluide et interactive.  
Les données utilisées proviennent de deux sources majeures :

*   **Le registre des bâtiments et des appartements (RegBL)** de l’Office fédéral de la statistique (OFS), qui offre des informations actualisées sur les logements en Suisse.
*   **La base de données “Places” d’Overture Maps Foundation**, qui enrichit ces informations en y ajoutant des points de localisation d’entreprises et d’établissements.

### Cas d’usages concrets

*   Marketing :
    *   Campagnes de distribution : Calculez le nombre de boîtes aux lettres dans un périmètre pour planifier des distributions de flyers.
    *   Segmentation géographique : Ciblez des zones spécifiques pour vos actions marketing en fonction du nombre d’adresses.
*   Urbanisme et aménagement :
    *   Projets de construction : Calculez les adresses touchées par un projet pour la planification des infrastructures.
    *   Planification de réseaux : Aidez les autorités locales à planifier des réseaux d’approvisionnement en fonction du nombre d’adresses dans une zone donnée.
*   Recherche scientifique :
    *   Analyse démographique : Étudiez la répartition de la population dans un secteur pour des recherches sociales et géospatiales.
*   Logistique :
    *   Optimisation des livraisons : Planifiez les itinéraires de livraison en fonction du nombre d’adresses dans une zone précise.

### Accès et conditions d’utilisation

L’application est gratuite et open source. Vous pouvez y accéder directement via ce lien : [https://wieviele-briefkaesten-gibt-es.streamlit.app/](https://wieviele-briefkaesten-gibt-es.streamlit.app/)  
Le code source est disponible sur GitHub pour les développeurs intéressés :  
[https://github.com/davidoesch/wo-sind-briefkaesten/](https://github.com/davidoesch/wo-sind-briefkaesten/)

### Conseils d’utilisation

Pour des zones plus grandes (ex. 100 km²), divisez-les en sous-zones pour réduire les temps de chargement.

Explorez l’application dès maintenant et simplifiez vos analyses géospatiales !

* * *

_Italiano_

### Quanti sono i cassonetti della posta? - Uno strumento per il marketing, l’urbanistica e la logistica

Questa applicazione interattiva permette di calcolare facilmente il numero di cassette postali (indirizzi di distribuzione) in un’area geografica a scelta in Svizzera. Utilizzando dati geospaziali precisi, offre un calcolo rapido e affidabile degli indirizzi di distribuzione, rendendola uno strumento utile per vari settori. L’applicazione si basa su tecnologie moderne come Python, DuckDB e Streamlit, che garantiscono un’esperienza fluida e interattiva.  
I dati utilizzati provengono da due fonti principali:

*   **Il registro degli edifici e delle abitazioni (RegBL)** dell’Ufficio federale di statistica (UST), che fornisce informazioni aggiornate sugli alloggi in Svizzera.
*   **La banca dati “Places” della OpenStreetMap Foundation**, che arricchisce queste informazioni aggiungendo punti di localizzazione di aziende e stabilimenti.

### Casi d’uso concreti

*   Marketing:
    *   Campagne di distribuzione: calcola il numero di cassette postali in un’area per pianificare la distribuzione di volantini.
    *   Segmentazione geografica: individua aree specifiche per le tue azioni di marketing in base al numero di indirizzi.
*   Urbanistica e pianificazione:
    *   Progetti di costruzione: calcola gli indirizzi interessati da un progetto per la pianificazione delle infrastrutture.
    *   Pianificazione delle reti: aiuta le autorità locali a pianificare le reti di approvvigionamento in base al numero di indirizzi in una determinata zona.
*   Ricerca scientifica:
    *   Analisi demografica: studia la distribuzione della popolazione in un settore per la ricerca sociale e geospaziale.
*   Logistica:
    *   Ottimizzazione delle consegne: pianifica i percorsi di consegna in base al numero di indirizzi in una determinata zona.

### Accesso e condizioni d’uso

L’applicazione è gratuita e open source. Puoi accedervi direttamente tramite questo link: [https://wieviele-briefkaesten-gibt-es.streamlit.app/](https://wieviele-briefkaesten-gibt-es.streamlit.app/)  
Il codice sorgente è disponibile su GitHub per gli sviluppatori interessati:  
[https://github.com/davidoesch/wo-sind-briefkaesten/](https://github.com/davidoesch/wo-sind-briefkaesten/)

### Consigli per l’uso

Per aree più grandi (ad es. 100 km²), suddividile in sottozone per ridurre i tempi di caricamento.

Esplora subito l’applicazione e semplifica le tue analisi geospaziali!

* * *

_English_

### How many letterboxes are there? - A tool for marketing, urban planning and logistics

This interactive application allows you to easily calculate the number of letterboxes (distribution addresses) in a geographical area of your choice in Switzerland. Using accurate geospatial data, it offers a fast and reliable calculation of distribution addresses, making it a useful tool for various sectors. The application is based on modern technologies such as Python, DuckDB and Streamlit, guaranteeing a smooth and interactive experience.  
The data used comes from two major sources:

*   The Federal Statistical Office’s (FSO) **register of buildings and apartments (RegBL)**, which provides up-to-date information on housing in Switzerland.
*   **The ‘Places’ database of the Overture Maps Foundation**, which enriches this information by adding location points of businesses and establishments.

### Concrete use cases

*   Marketing:
    *   Distribution campaigns: Calculate the number of letterboxes in a given area to plan flyer distribution.
    *   Geographical segmentation: Target specific areas for your marketing activities based on the number of addresses.
*   Urban planning and development:
    *   Construction projects: Calculate the addresses affected by a project for infrastructure planning.
    *   Network planning: Help local authorities plan supply networks based on the number of addresses in a given area.
*   Scientific research:
    *   Demographic analysis: Study the distribution of the population in a sector for social and geospatial research.
*   Logistics:
    *   Delivery optimisation: Plan delivery routes based on the number of addresses in a specific area.

### Access and terms of use

The application is free and open source. You can access it directly via this link: [https://wieviele-briefkaesten-gibt-es.streamlit.app/](https://wieviele-briefkaesten-gibt-es.streamlit.app/)  
The source code is available on GitHub for interested developers:  
[https://github.com/davidoesch/wo-sind-briefkaesten/](https://github.com/davidoesch/wo-sind-briefkaesten/)

### Instructions for use

For larger areas (e.g. 100 km²), divide them into sub-areas to reduce loading times.

Explore the application now and simplify your geospatial analyses!
