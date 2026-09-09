---
active: true
title: swiss-public-data-mcp - Swiss open data for AI assistants
images:
  - image: https://raw.githubusercontent.com/malkreide/swiss-public-data-mcp/main/docs/showcase-card.png
url: https://github.com/malkreide/swiss-public-data-mcp
type: https://opendata.swiss/vocabulary/showcase-type/application
datasets:
  - id: https://opendata.swiss/set/data/a7ab23c9-a30c-4c18-ae81-5062db0b5f7b
    label: Bevölkerungsszenarien
  - id: https://opendata.swiss/set/data/7787e156-657b-4477-9c87-ac95b4d2579d
    label: Gebäude (Gebäude- und Wohnungsregister GWR)
  - id: https://opendata.swiss/set/data/da9f966c-aab6-4633-87bd-96acdc147e8a
    label: ÖV-Güteklassen
  - id: https://opendata.swiss/set/data/80ce5aa6-0570-49f1-9d79-707d098b0939
    label: Amtliche Sammlung des Bundesrechts (BS / AS) 1948-2018
  - id: https://opendata.swiss/set/data/e78dbdc6-d8d4-4e51-b193-ba0bc7d90254
    label: Zefix - Zentraler Firmenindex
keywords:
  - AI
  - api
  - llm
  - mcp
  - open-data
  - open-source
  - python
relationships:
  - type: person
    name: Hayal Oezkan
    role: author
---
### Offizielle Schweizer Daten in natürlicher Sprache abfragen

**Swiss Public Data MCP** wurde als unabhängiges Open-Source-Projekt entwickelt und erleichtert den Zugang zu öffentlichen Daten der Schweiz, indem es KI-Assistenten ermöglicht, offizielle Datenquellen des Bundes und der Kantone direkt abzufragen. Damit lassen sich Anwendungen entwickeln, die diese Daten in natürlicher Sprache abfragen und nutzen können, ohne dass jeder Integrator individuelle Schnittstellen zu den verschiedenen APIs und Datenformaten entwickeln muss. Journalisten, Mitarbeitende der öffentlichen Verwaltung, Forschende und Bürgerinnen und Bürger können dadurch leichter fundierte, mit Quellen belegte Antworten auf komplexe Fragen erhalten. Das Projekt macht derzeit **41 offizielle Datenquellen** (Verkehr, Energie, Umwelt, Statistik usw.) für KI-Assistenten zugänglich.

**Daten und technische Architektur**

Das Herzstück des Systems bilden 42 schlanke Server (Model Context Protocol), die als schreibgeschützte Clients fungieren.

*   **Keine Kopien:** Die Daten werden nicht gespeichert, sondern in Echtzeit direkt an der offiziellen Quelle abgefragt.
*   **Nachvollziehbarkeit:** Jede Antwort enthält die genaue Quelle, den Zeitpunkt der Abfrage und einen Link zu den Rohdaten. Dadurch können die erhaltenen Informationen überprüft und das Risiko von Halluzinationen reduziert werden.
*   **Technische Transparenz:** Die Architektur jedes Servers wird durch Tests unter realen Bedingungen («Live Probes») definiert. Diese ermöglichen es, die Besonderheiten der APIs zu erkennen und zu dokumentieren, einschliesslich bestimmter technischer Einschränkungen oder unerwarteter Formate (z. B. SQLite-Formate oder User-Agent-Anforderungen).

**Konkrete Anwendungsfälle**

*   **Öffentliche Verwaltung:** Mitarbeitende ohne Programmierkenntnisse können schnell auf wichtige Kennzahlen (Demografie, Wirtschaft, Umwelt) zugreifen, ohne auf einen internen Datendienst angewiesen zu sein.
*   **Journalismus und Forschung:** Analystinnen und Analysten können den Zeitaufwand für die Suche, Extraktion und Verarbeitung von Daten deutlich reduzieren und die Überprüfung von Fakten (Fact-Checking) erleichtern.
*   **Softwareentwicklung:** Integratoren von KI-Lösungen erhalten eine vorgefertigte und dokumentierte Zugriffsschicht, um öffentliche Schweizer Daten einfacher in ihre eigenen Anwendungen und Dienste zu integrieren.

**Zugang und Nutzungsbedingungen**

Das Projekt ist kostenlos, Open Source (MIT-Lizenz) und kann mit einem einzigen Befehl für jeden MCP-kompatiblen Assistenten installiert werden.

🔗 Portfolio entdecken: [https://github.com/malkreide/swiss-public-data-mcp](https://github.com/malkreide/swiss-public-data-mcp)

📦 Installation: Pakete sind auf PyPI verfügbar; die vollständige Dokumentation befindet sich auf GitHub.

💡 Tipp: Beginnen Sie mit der Konfiguration eines einzelnen Servers, der Ihrem Bedarf entspricht (z. B. Verkehr oder Gesundheit), und überprüfen Sie systematisch die mit jeder Antwort bereitgestellten Quellenmetadaten.

* * *

### Interroger les données officielles suisses en langage naturel 

Développé comme un projet open source indépendant, **Swiss Public Data MCP** facilite l’accès aux données publiques suisses en permettant aux assistants d'intelligence artificielle d’interroger directement des sources de données officielles de la Confédération et des cantons. Il permet ainsi de construire des applications capables d’interroger et d’exploiter ces données en langage naturel, sans que chaque intégrateur doive développer individuellement les connexions aux différentes APIs et formats de données. Journalistes, collaborateurs de l’administration, chercheurs ou citoyens peuvent ensuite bénéficier de ces applications pour obtenir plus facilement des réponses chiffrées et sourcées à des questions complexes. Le projet transforme actuellement **41 sources officielles** (transports, énergie, environnement, statistiques, etc.) en outils accessibles aux assistants IA. 

**Données et architecture technique** 

Le cœur du système repose sur 42 serveurs légers (Model Context Protocol) qui agissent comme des clients « lecture seule ». 

*   **Zéro copie :** Les données ne sont jamais stockées ; elles sont interrogées en temps réel à la source officielle. 
*   **Traçabilité :** Chaque réponse inclut la source exacte, l'heure de la requête et le lien vers la donnée brute, permettant de vérifier les informations obtenues et de réduire le risque d'hallucinations. 
*   **Transparence technique :** L'architecture de chaque serveur est définie par des tests réels (« live probes ») qui permettent d’identifier et de documenter les spécificités des API, y compris certaines contraintes techniques ou formats inattendus (p. ex: formats SQLite ou contraintes de user-agent). 

**Cas d’usages concrets** 

*   **Administration publique :** Les collaborateurs sans compétences en programmation peuvent obtenir rapidement des indicateurs clés (démographie, économie, environnement) sans dépendre d'un service de données interne. 
*   **Journalisme et recherche :** Les analystes peuvent réduire considérablement le temps consacré à la recherche, à l’extraction et au traitement des données, et faciliter la vérification des faits (fact-checking). 
*   **Développement logiciel :** Les intégrateurs de solutions IA disposent d'une couche d'accès pré-construite et documentée pour intégrer plus facilement des données publiques suisses dans leurs propres applications et services. 

**Accès et conditions d’utilisation** 

Le projet est gratuit, open source (licence MIT), et peut être installé en une ligne de commande pour tout assistant compatible MCP.  

🔗 **Découvrir le portfolio :** [https://github.com/malkreide/swiss-public-data-mcp](https://github.com/malkreide/swiss-public-data-mcp)  

📦 **Installation :** Paquets disponibles sur PyPI ; documentation complète sur GitHub.  

💡 **Conseil :** Commencez par configurer un seul serveur correspondant à votre besoin (ex: transports ou santé) et vérifiez systématiquement les métadonnées de source fournies avec chaque réponse. 

* * *

### Querying official Swiss data using natural language

Developed as an independent open-source project, **Swiss Public Data MCP** facilitates access to Swiss public data by enabling artificial intelligence assistants to query official data sources of the Confederation and the cantons directly. It makes it possible to build applications that can query and use this data in natural language, without each integrator having to develop individual connections to different APIs and data formats. Journalists, public administration staff, researchers and citizens can then benefit from these applications to more easily obtain sourced, quantitative answers to complex questions. The project currently transforms **41 official sources** (transport, energy, environment, statistics, etc.) into tools accessible to AI assistants.

**Data and technical architecture**

The core of the system consists of 42 lightweight servers (Model Context Protocol) that act as read-only clients.

*   **Zero copies:** Data is never stored; it is queried in real time directly from the official source.
*   **Traceability:** Each response includes the exact source, the time of the query and a link to the raw data, making it possible to verify the information obtained and reduce the risk of hallucinations.
*   **Technical transparency:** The architecture of each server is defined through real-world tests (“live probes”) that identify and document API-specific characteristics, including certain technical constraints or unexpected formats (e.g. SQLite formats or user-agent requirements).

**Concrete use cases**

*   **Public administration:** Staff without programming skills can quickly obtain key indicators (demographics, economy, environment) without relying on an internal data service.
*   **Journalism and research:** Analysts can significantly reduce the time spent on data research, extraction and processing, while facilitating fact-checking.
*   **Software development:** AI solution integrators have access to a pre-built and documented access layer for more easily integrating Swiss public data into their own applications and services.

**Access and terms of use**

The project is free, open source (MIT licence) and can be installed with a single command for any MCP-compatible assistant.

🔗 Discover the portfolio: [https://github.com/malkreide/swiss-public-data-mcp](https://github.com/malkreide/swiss-public-data-mcp)

📦 Installation: Packages are available on PyPI; full documentation is available on GitHub.

💡 Tip: Start by configuring a single server corresponding to your needs (e.g. transport or health) and systematically check the source metadata provided with each response.

* * *

### Interrogare i dati ufficiali svizzeri in linguaggio naturale

Sviluppato come progetto open source indipendente, **Swiss Public Data MCP** facilita l’accesso ai dati pubblici svizzeri consentendo agli assistenti di intelligenza artificiale di interrogare direttamente le fonti di dati ufficiali della Confederazione e dei Cantoni. Permette così di sviluppare applicazioni in grado di interrogare e utilizzare questi dati in linguaggio naturale, senza che ogni integratore debba sviluppare individualmente i collegamenti alle diverse API e ai diversi formati di dati. Giornalisti, collaboratori dell’amministrazione pubblica, ricercatori e cittadini possono quindi beneficiare di queste applicazioni per ottenere più facilmente risposte quantitative e corredate di fonti a domande complesse. Il progetto trasforma attualmente **41 fonti ufficiali** (trasporti, energia, ambiente, statistica, ecc.) in strumenti accessibili agli assistenti di IA.

**Dati e architettura tecnica**

Il cuore del sistema è costituito da 42 server leggeri (Model Context Protocol) che fungono da client di sola lettura.

*   **Nessuna copia:** I dati non vengono mai memorizzati, ma interrogati in tempo reale direttamente alla fonte ufficiale.
*   **Tracciabilità:** Ogni risposta include la fonte esatta, l’ora della richiesta e un link ai dati grezzi, consentendo di verificare le informazioni ottenute e di ridurre il rischio di allucinazioni.
*   **Trasparenza tecnica:** L’architettura di ogni server è definita attraverso test reali («live probes») che consentono di identificare e documentare le specificità delle API, comprese alcune limitazioni tecniche o formati inattesi (ad es. formati SQLite o requisiti relativi allo user-agent).

**Casi d’uso concreti**

*   **Amministrazione pubblica:** I collaboratori senza competenze di programmazione possono ottenere rapidamente indicatori chiave (demografia, economia, ambiente) senza dipendere da un servizio dati interno.
*   **Giornalismo e ricerca:** Gli analisti possono ridurre notevolmente il tempo dedicato alla ricerca, all’estrazione e all’elaborazione dei dati, facilitando al contempo la verifica dei fatti (fact-checking).
*   **Sviluppo software:** Gli integratori di soluzioni di IA dispongono di un livello di accesso preconfigurato e documentato per integrare più facilmente i dati pubblici svizzeri nelle proprie applicazioni e nei propri servizi.

**Accesso e condizioni d’uso**

Il progetto è gratuito, open source (licenza MIT) e può essere installato con un unico comando per qualsiasi assistente compatibile con MCP.

🔗 Scopri il portfolio: [https://github.com/malkreide/swiss-public-data-mcp](https://github.com/malkreide/swiss-public-data-mcp)

📦 Installazione: I pacchetti sono disponibili su PyPI; la documentazione completa è disponibile su GitHub.

💡 Suggerimento: Iniziate configurando un solo server corrispondente alle vostre esigenze (ad es. trasporti o sanità) e verificate sistematicamente i metadati della fonte forniti con ogni risposta.
