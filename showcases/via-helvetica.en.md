---
active: true
title: Via Helvetica
images:
  - image: https://raw.githubusercontent.com/egofree71/via-helvetica/main/docs/images/via-helvetica-overview.png
url: https://viahelvetica.ch
themes:
  - http://publications.europa.eu/resource/authority/data-theme/REGI
  - http://publications.europa.eu/resource/authority/data-theme/ENVI
  - http://publications.europa.eu/resource/authority/data-theme/TRAN
  - http://publications.europa.eu/resource/authority/data-theme/TECH
type: https://opendata.swiss/vocabulary/showcase-type/application
datasets:
  - id: https://opendata.swiss/set/data/71849248-b1ba-421d-afc2-8f7afcb2ada1
    label: swissTLM3D Strassen und Wege
  - id: https://opendata.swiss/set/data/a05a3bdd-5f74-4e66-b5a2-85516ac25053
    label: swissTLM3D Wanderwege
keywords:
  - gpx
  - hiking
  - open-source
  - swisstopo
  - switzerland
relationships:
  - type: person
    name: Philippe De Pol
    role: author
---
### **Via Helvetica : Planifiez vos randonnées en Suisse gratuitement sur l'ordinateur**

  
**Via Helvetica** est un outil web open source conçu pour simplifier la préparation des itinéraires de randonnée en Suisse. Contrairement aux solutions existantes qui exigent souvent une inscription, un abonnement ou une utilisation sur mobile, ce projet offre une interface libre, légère et centrée sur la carte. Il permet à chacun de tracer un parcours le long du réseau officiel de sentiers, d'analyser son profil d'altitude et de dénivelé, puis d'exporter le trajet au format GPX pour une navigation facile sur smartphone. 

**Données et défis techniques**  

Le défi technique réside dans une architecture 100% « côté client » : aucun serveur de calcul n'est nécessaire. L'application interroge directement les services de données **swisstopo** (swissTLM3D) pour construire dynamiquement un graphe routable dans le navigateur. Cela a nécessité le développement d'algorithmes capables d'assembler des fragments de données, de gérer les limites de requêtes API et d'interpréter correctement les attributs complexes (ponts, tunnels, sentiers privés) pour garantir un calcul d'itinéraire fiable et précis, le tout sans collecte de données utilisateurs. 

**Cas d’usages concrets** 

*   **Randonneurs individuels :** Préparation rapide d'une sortie le week-end avec visualisation claire du dénivelé et de la distance. 
*   **Groupes et associations :** Création de fichiers GPX standards pour partager des itinéraires sécurisés basés sur le réseau officiel. 
*   **Analyse préalable :** Vérification visuelle des fermetures de chemins, zones de danger ou avis de tir avant le départ. 
*   **Accès et conditions d’utilisation**  

L’outil est gratuit, sans inscription, sans publicité et respectueux de la vie privée.  

🗺️ **Accéder à l'outil :** [https://viahelvetica.ch](https://viahelvetica.ch/)  

💻 **Code source :** [https://github.com/egofree71/via-helvetica](https://github.com/egofree71/via-helvetica)  

💡 **Conseil :** Idéal pour la phase de préparation sur ordinateur. Une fois le GPX exporté, importez-le dans votre application mobile préférée (ex: swisstopo) pour le guidage sur le terrain. 

* * *

### **Via Helvetica: Planen Sie Ihre Wanderungen in der Schweiz kostenlos am Computer**

**Via Helvetica** ist ein Open-Source-Webtool, das entwickelt wurde, um die Planung von Wanderrouten in der Schweiz zu vereinfachen. Im Gegensatz zu bestehenden Lösungen, die oft eine Registrierung, ein Abonnement oder die Nutzung auf dem Handy erfordern, bietet dieses Projekt eine freie, schlanke und kartenorientierte Benutzeroberfläche. Es ermöglicht jedem, eine Route entlang des offiziellen Wanderwegenetzes zu planen, das Höhenprofil und den Höhenunterschied zu analysieren und die Route anschliessend im GPX-Format zu exportieren, um sie bequem auf dem Smartphone zu navigieren.

**Daten und technische Herausforderungen**

Die technische Herausforderung liegt in einer zu 100 % „clientseitigen“ Architektur: Es wird kein Rechenserver benötigt. Die Anwendung fragt direkt die Datendienste von **swisstopo** (swissTLM3D) ab, um im Browser dynamisch einen routbaren Graphen zu erstellen. Dies erforderte die Entwicklung von Algorithmen, die in der Lage sind, Datenfragmente zusammenzufügen, API-Abfragebeschränkungen zu handhaben und komplexe Attribute (Brücken, Tunnel, Privatwege) korrekt zu interpretieren, um eine zuverlässige und präzise Routenberechnung zu gewährleisten - und das alles ohne Erfassung von Nutzerdaten.

**Konkrete Anwendungsfälle**

*   **Einzelne Wanderer:** Schnelle Vorbereitung eines Wochenendausflugs mit übersichtlicher Darstellung von Höhenunterschied und Entfernung.
*   **Gruppen und Vereine:** Erstellung von Standard-GPX-Dateien zum Teilen sicherer Routen auf Basis des offiziellen Netzes.
*   **Vorabprüfung:** Visuelle Überprüfung auf Wegsperrungen, Gefahrenzonen oder Schiessübungen vor dem Aufbruch.
*   **Zugang und Nutzungsbedingungen**

Das Tool ist kostenlos, erfordert keine Registrierung, ist werbefrei und schützt die Privatsphäre.

🗺️ **Zum Tool:** [https://viahelvetica.ch](https://viahelvetica.ch/)

💻 **Quellcode:** [https://github.com/egofree71/via-helvetica](https://github.com/egofree71/via-helvetica)

💡 **Tipp:** Ideal für die Vorbereitungsphase am Computer. Sobald die GPX-Datei exportiert ist, importieren Sie sie in Ihre bevorzugte mobile App (z. B. swisstopo), um sich vor Ort leiten zu lassen.

* * *

### **Via Helvetica: pianificate gratuitamente le vostre escursioni in Svizzera dal computer**

  
**Via Helvetica** è uno strumento web open source progettato per semplificare la preparazione degli itinerari escursionistici in Svizzera. A differenza delle soluzioni esistenti, che spesso richiedono una registrazione, un abbonamento o l’utilizzo su dispositivi mobili, questo progetto offre un’interfaccia libera, leggera e incentrata sulla mappa. Consente a chiunque di tracciare un percorso lungo la rete ufficiale dei sentieri, analizzarne il profilo altimetrico e il dislivello, per poi esportare il percorso in formato GPX per una facile navigazione su smartphone.

**Dati e sfide tecniche**

La sfida tecnica risiede in un’architettura al 100% «lato client»: non è necessario alcun server di calcolo. L’applicazione interroga direttamente i servizi dati **swisstopo** (swissTLM3D) per costruire dinamicamente un grafo navigabile nel browser. Ciò ha richiesto lo sviluppo di algoritmi in grado di assemblare frammenti di dati, gestire i limiti delle richieste API e interpretare correttamente gli attributi complessi (ponti, gallerie, sentieri privati) per garantire un calcolo del percorso affidabile e preciso, il tutto senza raccogliere dati degli utenti.

**Casi d’uso concreti**

*   **Escursionisti individuali:** Preparazione rapida di un’escursione nel fine settimana con una chiara visualizzazione del dislivello e della distanza.
*   **Gruppi e associazioni:** Creazione di file GPX standard per condividere itinerari sicuri basati sulla rete ufficiale.
*   **Analisi preliminare:** Verifica visiva di chiusure di sentieri, zone di pericolo o avvisi di tiro prima della partenza.
*   **Accesso e condizioni d’uso**

Lo strumento è gratuito, non richiede registrazione, è privo di pubblicità e rispetta la privacy.

🗺️ **Accedi allo strumento:** [https://viahelvetica.ch](https://viahelvetica.ch/)

💻 **Codice sorgente:** [https://github.com/egofree71/via-helvetica](https://github.com/egofree71/via-helvetica)

💡 **Suggerimento:** Ideale per la fase di preparazione al computer. Una volta esportato il file GPX, importatelo nella vostra app mobile preferita (ad es. swisstopo) per la navigazione sul campo.

* * *

### **Via Helvetica: Plan your hikes in Switzerland for free on a computer**

  
**Via Helvetica** is an open-source web tool designed to simplify the planning of hiking routes in Switzerland. Unlike existing solutions, which often require registration, a subscription, or mobile use, this project offers a free, lightweight, map-centric interface. It allows anyone to plot a route along the official trail network, analyze its elevation profile and elevation gain, and then export the route in GPX format for easy navigation on a smartphone.

**Data and Technical Challenges**

The technical challenge lies in a 100% “client-side” architecture: no computing server is required. The application queries the **swisstopo** (swissTLM3D) data services directly to dynamically construct a routable graph within the browser. This required the development of algorithms capable of assembling data fragments, managing API request limits, and correctly interpreting complex attributes (bridges, tunnels, private trails) to ensure reliable and accurate route calculation - all without collecting user data.

**Real-world use cases**

*   **Individual hikers:** Quickly plan a weekend hike with a clear visualization of elevation gain and distance.
*   **Groups and organizations:** Create standard GPX files to share safe routes based on the official network.
*   **Pre-trip analysis:** Visually check for trail closures, hazard zones, or shooting notices before setting out.
*   **Access and Terms of Use**

The tool is free, requires no registration, is ad-free, and respects your privacy.

🗺️ **Access the tool:** [https://viahelvetica.ch](https://viahelvetica.ch/)

💻 **Source code:** [https://github.com/egofree71/via-helvetica](https://github.com/egofree71/via-helvetica)

💡 **Tip:** Ideal for planning on a computer. Once the GPX file is exported, import it into your favorite mobile app (e.g., swisstopo) for navigation in the field.
