[ 🇬🇧 English ](#-english) • [ 🇵🇱 Polski ](#-polski)

# patientone.uk

> My tools, source code and contact details in one place.
>
> Moje narzędzia, kod źródłowy i kontakt w jednym miejscu.

## 🇬🇧 English

Source for [patientone.uk](https://patientone.uk), my personal website with selected homelab, Linux and browser projects.

Static HTML, shared CSS and a small language switcher. Geist and Geist Mono are served locally. It works without a build step. All page assets are local; there are no analytics or tracking cookies.

### Local preview

```bash
git clone https://github.com/patientone-io/patientone-website.git
cd patientone-website
python3 -m http.server 8080
```

Open [localhost:8080](http://localhost:8080). The site can be served by any static web server. Editing HTML, CSS or JavaScript and refreshing the page is enough to preview changes.

### Structure

- `index.html` - introduction, projects and contact.
- `privacy.html`, `terms.html` - privacy policy and terms in Polish and English.
- `assets/site.css` - shared styles and responsive layout.
- `assets/language.js` - PL/EN selection, saved in `localStorage` when available. Without JavaScript, the site displays Polish.
- `assets/fonts/` - Geist and Geist Mono with their SIL Open Font Licenses.

Keep both languages together in each HTML file using `data-lang="pl"` and `data-lang="en"`. Shared CSS displays the language selected on the root element. No dependencies to install.

## 🇵🇱 Polski

Kod [patientone.uk](https://patientone.uk), mojej strony z wybranymi projektami do homelaba, Linuksa i przeglądarki.

Statyczny HTML, wspólny CSS i niewielki przełącznik języka. Fonty Geist i Geist Mono są serwowane lokalnie. Działa bez procesu budowania. Wszystkie zasoby strony są lokalne; nie ma analityki ani ciasteczek śledzących.

### Podgląd lokalny

```bash
git clone https://github.com/patientone-io/patientone-website.git
cd patientone-website
python3 -m http.server 8080
```

Otwórz [localhost:8080](http://localhost:8080). Do hostowania wystarczy dowolny serwer plików statycznych. Po zmianie HTML, CSS lub JavaScriptu odśwież stronę, żeby zobaczyć efekt.

### Struktura

- `index.html` - wstęp, projekty i kontakt.
- `privacy.html`, `terms.html` - polityka prywatności i regulamin po polsku i angielsku.
- `assets/site.css` - wspólne style i układ responsywny.
- `assets/language.js` - wybór PL/EN, zapisywany w `localStorage`, gdy jest dostępny. Bez JavaScriptu strona wyświetla się po polsku.
- `assets/fonts/` - Geist i Geist Mono wraz z licencjami SIL Open Font License.

Obie wersje językowe są w tym samym pliku HTML, oznaczone przez `data-lang="pl"` i `data-lang="en"`. Wspólny CSS wyświetla język ustawiony na głównym elemencie dokumentu. Nie trzeba instalować zależności.

## 👤 Author & Contact / Autor i kontakt

[patientone](https://github.com/patientone-io) • [patientone.uk](https://patientone.uk) • [contact@patientone.uk](mailto:contact@patientone.uk)

## 📄 License / Licencja

- **EN:** Code released under the [MIT License](LICENSE). Bundled fonts use the SIL Open Font License; see `assets/fonts/`.
- **PL:** Kod na [licencji MIT](LICENSE). Dołączone fonty są objęte licencją SIL Open Font License; szczegóły w `assets/fonts/`.
