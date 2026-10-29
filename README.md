# 🌐 patientone.uk

> **EN:** Source code for **[patientone.uk](https://patientone.uk)** — personal website showcasing my open-source homelab, Linux, and browser projects.  
> **PL:** Kod źródłowy strony **[patientone.uk](https://patientone.uk)** — wizytówki z moimi projektami open-source do homelaba, Linuksa i przeglądarki.

[ 🇬🇧 English ](#-english) • [ 🇵🇱 Polski ](#-polski)

[![Website](https://img.shields.io/badge/Website-patientone.uk-blue)](https://patientone.uk)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🇬🇧 English

A fast, zero-dependency static website built with plain HTML, CSS, and a lightweight client-side language switcher (`PL` / `EN`).

### ✨ Highlights

- **Zero build step** — pure HTML, CSS, and vanilla JavaScript that can be served by any static web server (Caddy, Nginx, GitHub Pages, Cloudflare Pages).
- **100% self-hosted assets & zero tracking** — the Geist font is served locally from `assets/fonts/`; no external CDNs, analytics, or tracking cookies.
- **Instant bilingual switching** — both Polish and English content live side by side using `data-lang="pl"` and `data-lang="en"` attributes, switched via the root element and persisted in `localStorage` (falls back gracefully to Polish when JavaScript is disabled).

### 🚀 Local Preview

```bash
git clone https://github.com/patientone-io/patientone-website.git
cd patientone-website
python3 -m http.server 8080
```

Open **[http://localhost:8080](http://localhost:8080)** in your browser. Edit any HTML, CSS, or JS file and refresh the page to see your changes immediately.

### 📁 Project Structure

| File / Folder | Description |
| :--- | :--- |
| `index.html` | Main landing page (about, open-source projects showcase, contact) |
| `privacy.html` & `terms.html` | Privacy policy and terms of service (bilingual PL/EN) |
| `assets/site.css` | Shared stylesheet and responsive layout |
| `assets/language.js` | Lightweight PL/EN language switcher (`localStorage` persistence) |
| `assets/fonts/` | Self-hosted `Geist` web font (SIL Open Font License) |

---

## 🇵🇱 Polski

Szybka, lekka strona statyczna napisana w czystym HTML, CSS i JavaScripcie, z przełącznikiem wersji językowej (`PL` / `EN`).

### ✨ Główne cechy

- **Brak procesu budowania (zero-build)** — czysty HTML, CSS i vanilla JS; stronę można zaserwować z dowolnego serwera plików statycznych (Caddy, Nginx, GitHub Pages, Cloudflare Pages).
- **100% lokalnych zasobów i zero telemetrii** — font Geist jest serwowany bezpośrednio z katalogu `assets/fonts/`; brak zewnętrznych CDN-ów, skryptów analitycznych i ciasteczek śledzących.
- **Natychmiastowy przełącznik języka** — obie wersje językowe znajdują się w tych samych plikach HTML (`data-lang="pl"` oraz `data-lang="en"`), a wybrany język jest zapamiętywany w `localStorage` (bez włączonego JavaScriptu strona domyślnie wyświetla się po polsku).

### 🚀 Podgląd lokalny

```bash
git clone https://github.com/patientone-io/patientone-website.git
cd patientone-website
python3 -m http.server 8080
```

Otwórz **[http://localhost:8080](http://localhost:8080)** w przeglądarce. Po edycji plików HTML, CSS lub JS wystarczy odświeżyć kartę.

### 📁 Struktura plików

| Plik / Katalog | Opis |
| :--- | :--- |
| `index.html` | Strona główna (opis, lista projektów open-source, kontakt) |
| `privacy.html` i `terms.html` | Polityka prywatności oraz regulamin (w wersji PL i EN) |
| `assets/site.css` | Wspólne arkusze stylów i responsywny układ |
| `assets/language.js` | Skrypt przełączania języka PL/EN z zapisem w `localStorage` |
| `assets/fonts/` | Lokalnie hostowany font `Geist` (licencja SIL Open Font License) |

---

## 👤 Author & Contact / Autor i kontakt

[patientone](https://github.com/patientone-io) • [patientone.uk](https://patientone.uk) • [contact@patientone.uk](mailto:contact@patientone.uk)

## 📄 License / Licencja

- **EN:** Code released under the [MIT License](LICENSE). Bundled fonts use the SIL Open Font License (see `assets/fonts/`).
- **PL:** Kod udostępniany na [licencji MIT](LICENSE). Dołączone fonty są objęte licencją SIL Open Font License (szczegóły w `assets/fonts/`).
