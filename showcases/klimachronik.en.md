---
active: true
title: Klimachronik
images:
  - image: https://www.klimachronik.com/bla/CH/420.jpg
url: https://www.klimachronik.com/?country=ch
themes:
  - http://publications.europa.eu/resource/authority/data-theme/ENVI
type: https://opendata.swiss/vocabulary/showcase-type/application
datasets:
  - id: https://opendata.swiss/set/data/35323752-ed32-4cc1-8a75-898c749b777b
    label: Automatische Wetterstationen - Messwerte
  - id: https://opendata.swiss/set/data/45f279d5-0289-47b5-8762-a610365e55b6@bundesamt-fur-meteorologie-und-klimatologie-meteoschweiz
    label: Automatische Niederschlagsstationen - Messwerte (missing)
  - id: https://opendata.swiss/set/data/5ab7db80-25b1-4ea9-b9b9-3505107ca023@bundesamt-fur-meteorologie-und-klimatologie-meteoschweiz
    label: Manuelle Niederschlagsstationen - Messwerte (missing)
keywords:
  - Klima
  - klimaerwaehrmung
  - temperatur
  - wetter
relationships:
  - type: person
    name: Christian Girstmair
    role: author
---
### Klimachronik: Die Klimaentwicklung anhand von Rohdaten aus Wetterstationen erkunden

**Klimachronik** wurde als eigenständiges Projekt entwickelt und ist eine interaktive Plattform, die der Erkundung und dem Vergleich historischer und aktueller Beobachtungsdaten aus offiziellen Wetterstationen gewidmet ist. Das Tool deckt Österreich, Deutschland, die Schweiz und Frankreich ab und umfasst auch globale Zeitreihen (HadCRUT5). Es ermöglicht die Visualisierung der Entwicklung von Klimaparametern (Temperatur, Niederschlag, Sonneneinstrahlung usw.) über Zeiträume, die teilweise bis ins 18. Jahrhundert zurückreichen. Sein Ziel ist es, lange Zeitreihen für eine faktenbasierte Analyse des Klimawandels zugänglich und verständlich zu machen, wobei der Schwerpunkt auf den tatsächlichen lokalen Messwerten und nicht auf regionalen Schätzungen liegt.

**Daten und Methodik**

*   **Offizielle Quellen:** Die Daten stammen ausschliesslich von nationalen Wetterdiensten (MeteoSchweiz, DWD, Météo-France, GeoSphere Austria) und globalen Referenzdatenbanken.
*   **Keine Interpolation:** Im Gegensatz zu vielen Klimakarten schätzt Klimachronik fehlende Werte niemals. Eine Messlücke bleibt als solche sichtbar („Data Gap“), wodurch sichergestellt wird, dass der Nutzer klar zwischen beobachteten Fakten und fehlenden Daten unterscheiden kann.
*   **Modulare Verarbeitung:** Eine technische Pipeline standardisiert heterogene Formate (CSV-Dateien, ZIP-Dateien, unterschiedliche Datumsformate) in ein gemeinsames JSON-Schema, wobei die ursprüngliche Genauigkeit der Messungen erhalten bleibt.
*   **Präzise Visualisierung:** Die Heatmap zeigt farbige Kreise um die tatsächlichen Messstationen an, ohne falsche geografische Kontinuitäten zu erzeugen. Die Werte werden nicht wissenschaftlich zwischen benachbarten Stationen gemittelt, um Fehlinterpretationen in nicht mit Messgeräten ausgestatteten Gebieten zu vermeiden.

**Konkrete Anwendungsfälle**

*   **Bildung:** Visuelle Unterstützung für Lehrkräfte, um das Konzept des Klimawandels anhand konkreter lokaler Daten statt abstrakter globaler Durchschnittswerte zu veranschaulichen.
*   **B Bürgerliches Interesse:**B Erkundung der Wettergeschichte der eigenen Stadt oder des eigenen Dorfes, um zu verstehen, wie sich das lokale Klima seit der Geburt der Grosseltern verändert hat.
*   **B Datenjournalismus:**B Erstellung visueller Darstellungen auf der Grundlage beobachteter Fakten zur Illustration von Artikeln über Hitzewellen oder historische Dürren.

**Zugang und Nutzungsbedingungen**

Kostenloses Tool, keine Registrierung erforderlich, online verfügbar. Die Daten werden regelmässig aktualisiert.

🌍 **Daten erkunden:** [https://www.klimachronik.com/](https://www.klimachronik.com/?country=ch)

💡 **Anwendungstipp:** Nutzen Sie die Vergleichsfunktion, um zwei verschiedene Messstationen oder zwei unterschiedliche Zeiträume gegenüberzustellen, und beobachten Sie die Trendkurven, um die langfristige Entwicklung zu veranschaulichen.

* * *

### Klimachronik : Explorer l'évolution du climat par les données brutes des stations météorologiques 

Développé comme un projet indépendant, **Klimachronik** est une plateforme interactive dédiée à l'exploration et à la comparaison des observations historiques et actuelles issues de stations météorologiques officielles. Couvrant l'Autriche, l'Allemagne, la Suisse, la France et incluant des séries globales (HadCRUT5), l'outil permet de visualiser l'évolution des paramètres climatiques (température, précipitations, ensoleillement, etc.) sur des périodes s'étendant parfois jusqu'au 18ème siècle. Son objectif est de rendre accessibles et compréhensibles de longues séries temporelles pour une analyse factuelle du changement climatique, en se concentrant sur la réalité des mesures locales plutôt que sur des estimations régionales. 

**Données et méthodologie**  

*   **Sources officielles :** Les données proviennent exclusivement de services météorologiques nationaux (MeteoSwiss, DWD, Météo-France, GeoSphere Austria) et de bases globales de référence. 
*   **Pas d'interpolation :** Contrairement à de nombreuses cartes climatiques, Klimachronik n'estime jamais les valeurs manquantes. Une lacune de mesure reste visible comme telle (« data gap »), garantissant que l'utilisateur distingue clairement les faits observés des absences de données. 
*   **Traitement modulaire :** Un pipeline technique normalise des formats hétérogènes (fichiers CSV, ZIP, structures de dates variées) en un schéma commun JSON, tout en préservant la précision originale des mesures. 
*   **Visualisation précise:** La carte thermique (heatmap) affiche des cercles colorés autour des stations réelles sans créer de fausses continuités géographiques. Les valeurs ne sont pas moyennées scientifiquement entre les stations voisines pour éviter les interprétations erronées sur des zones non instrumentées. 

**Cas d’usages concrets** 

*   **Éducation :** Support visuel pour les enseignants illustrant le concept de changement climatique avec des données locales concrètes plutôt que des moyennes globales abstraites. 
*   **Curiosité citoyenne :** Exploration de l'histoire météo de sa ville ou de son village pour comprendre comment le climat local a changé depuis la naissance de ses grands-parents. 
*   **Journalisme de données :** Création de récits visuels basés sur des faits observés pour illustrer des articles sur les canicules ou les sécheresses historiques. 

**Accès et conditions d’utilisation** 

Outil gratuit, sans inscription, disponible en ligne. Les données sont mises à jour périodiquement. 

🌍 **Explorer les données :** [https://www.klimachronik.com/](https://www.klimachronik.com/?country=ch)  

💡 **Conseil d'utilisation :** Utilisez la fonction de comparaison pour mettre en regard deux stations différentes ou deux périodes distinctes et observez les courbes de tendance pour visualiser l'évolution à long terme. 

* * *

### Klimachronik: Esplorare l'evoluzione del clima attraverso i dati grezzi delle stazioni meteorologiche

Sviluppato come progetto indipendente, **Klimachronik** è una piattaforma interattiva dedicata all'esplorazione e al confronto delle osservazioni storiche e attuali provenienti dalle stazioni meteorologiche ufficiali. Coprendo Austria, Germania, Svizzera, Francia e includendo serie globali (HadCRUT5), lo strumento consente di visualizzare l’evoluzione dei parametri climatici (temperatura, precipitazioni, insolazione, ecc.) su periodi che in alcuni casi risalgono fino al XVIII secolo. Il suo obiettivo è rendere accessibili e comprensibili lunghe serie temporali per un’analisi oggettiva del cambiamento climatico, concentrandosi sulla realtà delle misurazioni locali piuttosto che su stime regionali.

**Dati e metodologia**

*   **Fonti ufficiali:** I dati provengono esclusivamente dai servizi meteorologici nazionali (MeteoSwiss, DWD, Météo-France, GeoSphere Austria) e da banche dati globali di riferimento.
*   **Nessuna interpolazione:** A differenza di molte mappe climatiche, Klimachronik non stima mai i valori mancanti. Una lacuna di misurazione rimane visibile come tale («data gap»), garantendo che l’utente distingua chiaramente i fatti osservati dalle assenze di dati.
*   **Elaborazione modulare:** Una pipeline tecnica standardizza formati eterogenei (file CSV, ZIP, diverse strutture di date) in uno schema JSON comune, preservando al contempo la precisione originale delle misurazioni.
*   **Visualizzazione precisa:** La mappa termica (heatmap) mostra cerchi colorati attorno alle stazioni reali senza creare false continuità geografiche. I valori non vengono mediati scientificamente tra le stazioni vicine per evitare interpretazioni errate su aree non strumentate.

**Casi d’uso concreti**

*   **Istruzione:** Supporto visivo per gli insegnanti che illustra il concetto di cambiamento climatico con dati locali concreti anziché medie globali astratte.
*   **Curiosità dei cittadini:** Esplorazione della storia meteorologica della propria città o del proprio paese per comprendere come il clima locale sia cambiato dalla nascita dei propri nonni.
*   **Giornalismo di dati:** Creazione di narrazioni visive basate su fatti osservati per illustrare articoli su ondate di calore o siccità storiche.

**Accesso e condizioni d’uso**

Strumento gratuito, senza registrazione, disponibile online. I dati vengono aggiornati periodicamente.

🌍 **Esplora i dati:** [https://www.klimachronik.com/](https://www.klimachronik.com/)

💡 **Consiglio d’uso:** Utilizza la funzione di confronto per mettere a confronto due stazioni diverse o due periodi distinti e osserva le curve di tendenza per visualizzare l’evoluzione a lungo termine.

* * *

### Klimachronik: Exploring Climate Change Using Raw Data from Weather Stations

Developed as an independent project, **Klimachronik** is an interactive platform dedicated to exploring and comparing historical and current observations from official weather stations. Covering Austria, Germany, Switzerland, and France—and including global data sets (HadCRUT5)—the tool allows users to visualize changes in climate parameters (temperature, precipitation, sunshine duration, etc.) over periods that sometimes extend back to the 18th century. Its goal is to make long time series accessible and understandable for a fact-based analysis of climate change, focusing on actual local measurements rather than regional estimates.

**Data and Methodology**

*   **Official Sources:** The data comes exclusively from national meteorological services (MeteoSwiss, DWD, Météo-France, GeoSphere Austria) and global reference databases.
*   **No interpolation:** Unlike many climate maps, Klimachronik never estimates missing values. A measurement gap remains visible as such (“data gap”), ensuring that users can clearly distinguish observed facts from data gaps.
*   **Modular processing:** A technical pipeline standardizes heterogeneous formats (CSV files, ZIP files, various date structures) into a common JSON schema, while preserving the original precision of the measurements.
*   **Accurate visualization:** The heatmap displays colored circles around actual stations without creating false geographic continuities. Values are not scientifically averaged across neighboring stations to avoid misinterpretations regarding unmonitored areas.

**Real-world use cases**

*   **Education:** A visual aid for teachers illustrating the concept of climate change using concrete local data rather than abstract global averages.
*   **Public curiosity:** Explore the weather history of your city or town to understand how the local climate has changed since your grandparents were born.
*   **Data journalism:** Create visual narratives based on observed facts to illustrate articles on heat waves or historic droughts.

**Access and Terms of Use**

Free tool, no registration required, available online. Data is updated periodically.

🌍 **Explore the data:** [https://www.klimachronik.com/](https://www.klimachronik.com/?country=ch)

💡 **Tip:** Use the comparison feature to compare two different stations or two distinct time periods, and observe the trend lines to visualize long-term changes.
