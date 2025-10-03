# MasterBase Website

Codebase del sito ufficiale della MasterBase, sviluppato in NextJS e deployato su Vercel.

## Website
https://masterbase.team

## Features

- Fetching di media dinamici da bucket MinIO hostato autonomamente
- Fetching di dati dinamici da REST API hostata autonomamente (Daimon Backend)
- Alias personalizzati per link di download e pagine social
- (WIP) Pagina blog che consolida tutta l'attività sui social media delle nostre pagine
- Pagina Minecraft con layout a schede per ogni server, client e modpack
- Reverse proxy per la mappa live HTTP del server Minecraft
- Visualizzazione dinamica dell'ultima versione per il server Nightly
- Pagina del team che estrae dati dal nostro database interno

## Installazione

- Clonare la repository tramite `git clone <repository-url>`
- Installare le dipendenze tramite `npm install`
- Rinominare `.env.example` in `.env`
- Eseguire in modalità sviluppo tramite `npm run dev`