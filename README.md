# AppDynamics Browser RUM Demo Pack (Multi‑page, Error‑rich)

This repository is a ready-to-use **GitHub Pages** site to generate **rich AppDynamics Browser RUM data** without any backend servers.

## What it generates
- Multiple pages and repeatable **user journeys**
- **AJAX latency** and **AJAX failures** (HTTP 4xx/5xx)
- Multiple **JavaScript error types**
- **Slow page loads** (main-thread blocking)
- **Resource timing** (large downloads)
- **SPA / Virtual pages**
- **Geo simulation labels** (virtual city-tagged pages for segmentation demos)

## 1) Update RUM settings (if required)
Edit: `assets/appd-rum.js`
- `config.appKey` = your Browser App key (AppDynamics → User Experience → Browser Apps → your app)
- `config.beaconUrlHttps` = your EUM collector

## 2) Publish via GitHub Pages
GitHub → Repo → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**
- Save

Your site will be live at:
`https://<user>.github.io/<repo>/`

## 3) Generate “complex” RUM data fast
- Open **Journey** and click **Run Journey (with failures)**
- Open **Search/AJAX** and click **Burst**
- Open **JS Errors** and trigger all buttons 2–3 times
- Open **Slow** and refresh 3–5 times
- Open **Resources** and load big resources
- Open **Geo‑Sim** for city-tagged virtual pages

## 4) Where to view in AppDynamics
AppDynamics → **User Experience → Browser Apps → rum-demo**
- Overview
- Experience Journey Map
- Sessions
- Pages & AJAX Requests
- JavaScript Errors
- Resource Performance

## 5) About “Multiple countries/cities”
Real Geo dashboards are based on the **client IP location**.
- To get REAL countries/cities: open the site via VPN exits in those regions (or ask colleagues in those regions to open it).
- For demo segmentation without VPN: use **Geo‑Sim** page which creates **city-tagged virtual page names** (e.g., `Checkout-Mumbai`, `Checkout-London`).

---
If you want, I can also provide a Splunk HEC sender to forward selected RUM errors/slow events into Splunk for iControl correlation.
