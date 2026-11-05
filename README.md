# Maros Menu

[Magyar dokumentáció](#magyar-dokumentacio) · [English documentation](#english-documentation)

**Élő oldal / Live website:** [marosétterem.hu](https://marosétterem.hu)  
*A domain már működik, de jelenleg még a korábbi verzió fut rajta. A refaktorált változat a következő deploy után lesz elérhető.*

------------------------------------------------------------------------

<a id="magyar-dokumentacio"></a>
# Magyar dokumentáció

## Tartalomjegyzék

1. [A projektről](#a-projektről)
2. [Fő funkciók](#hu-fo-funkciok)
3. [Használt technológiák](#hu-technologiai-stack)
4. [Nyelvek és lokalizáció](#hu-nyelvek-es-lokalizacio)
5. [Adatstruktúra](#hu-adatstruktura)
6. [Alkalmazásfelépítés](#hu-alkalmazasarchitektura)
7. [CSS-struktúra és reszponzivitás](#hu-css-struktura)
8. [Fejlesztési környezet](#hu-fejlesztoi-kornyezet)
9. [Segédscriptek](#hu-segedscriptek)
10. [Refaktorálási alapelvek](#hu-refaktor-alapelvek)
11. [Technikai megjegyzések](#hu-technikai-megjegyzesek)


## 1. A projektről

A **Maros Menu** egy reszponzív, többnyelvű éttermi étlapalkalmazás a
Maros Étterem számára.

Az alkalmazás célja, hogy a vendégek egyszerűen megtekinthessék az
étterem aktuális kínálatát, kiválaszthassák a kívánt nyelvet, valamint
elérjék az étterem alapvető információit, például a telefonszámot és a
nyitvatartást.

A projekt egy korábbi, egyszerűbb adatszerkezetű megoldásból fejlődött
tovább. A refaktorálás egyik fontos célja az volt, hogy a komponensek,
az adatforrások és a stílusok átláthatóbb, következetesebb struktúrába
kerüljenek.

<a id="hu-fo-funkciok"></a>
## 2. Fő funkciók

-   Többnyelvű étlapmegjelenítés.
-   Nyelvválasztás magyar, angol és német nyelv között.
-   Az ételkategóriák és az ételek nevének megjelenítése a kiválasztott
    nyelven.
-   Az ételek árának és a nyelvhez tartozó pénznemnek a megjelenítése.
-   Éttermi telefonszám és nyitvatartás megjelenítése.
-   Facebook-oldalra mutató hivatkozás.
-   Vissza az oldal tetejére funkció.
-   Reszponzív megjelenés különböző képernyőméreteken.

<a id="hu-technologiai-stack"></a>
## 3. Használt technológiák

  -----------------------------------------------------------------------
  Technológia                         Szerepe
  ----------------------------------- -----------------------------------
  React 18                            Felhasználói felület és
                                      komponensalapú felépítés

  JavaScript                          Alkalmazáslogika

  Create React App (`react-scripts`   Fejlesztői szerver, build és
  5)                                  tesztfuttatás

  CSS                                 Megjelenés és reszponzív stílusok

  JSON                                Éttermi adatok, nyelvi konfiguráció
                                      és étlapadatok

  Jest                                Tesztfuttató, a Create React App
                                      részeként

  React Testing Library               React-komponensek tesztelése

  `@testing-library/user-event`       Felhasználói interakciók
                                      szimulálása tesztekben

  `@testing-library/jest-dom`         Kiegészítő DOM-ellenőrzések a
                                      tesztekhez
  -----------------------------------------------------------------------

A projekt jelenlegi konfigurációja React 18.2.0 és `react-scripts` 5.0.1
verziókat használ.

<a id="hu-nyelvek-es-lokalizacio"></a>
## 4. Nyelvek és lokalizáció

Az alkalmazás jelenleg három nyelvet támogat:

  Nyelvkód   Nyelv    Nyelvválasztó felirata
  ---------- -------- ------------------------
  `hu`       Magyar   Étlap
  `en`       Angol    Menu
  `de`       Német    Menü

A nyelvi választó beállításait a `src/data/languages.json` fájl
tartalmazza. A rekordok egyedi `uid` értéket, nyelvkódot, feliratot,
évet és zászlóképhez tartozó adatokat tartalmaznak.

A nyelvkódok kulcsként szolgálnak az étlapadatokban is. A kiválasztott
nyelv alapján az alkalmazás a kategóriák és az ételek megfelelő
fordítását jeleníti meg.

<a id="hu-json-adatstruktura"></a>
## 5. JSON-adatstruktúrák és archiválás

Az alkalmazás adatainak egy része JSON-fájlokban található. Ez lehetővé
teszi, hogy az étlap és az éttermi információk a React-komponensek
logikájától elkülönítve legyenek karbantarthatók.

### 5.1. Aktuális étlap

Fájl: `src/data/menu/current/menu.json`

Az aktuális étlap legfelső szintjén a pénznemek és a kategóriák
találhatók:

-   `currency`: a támogatott nyelvekhez tartozó pénznemjelölések.
-   `categories`: az ételkategóriák listája.

Egy kategória fő mezői:

-   `uid`: egyedi azonosító.
-   `title`: a kategória fordításai nyelvkód szerint.
-   `dishes`: a kategóriához tartozó ételek listája.

Egy étel fő mezői:

-   `uid`: egyedi azonosító.
-   `hu`, `en`, `de`: az étel neve a támogatott nyelveken.
-   `price`: az étel ára.

A feltöltött projektállapotban az aktuális étlap 5 kategóriát és
összesen 42 ételt tartalmazott. Ez az adat idővel változhat, ezért nem
tekintendő állandó alkalmazásszabálynak.

### 5.2. Nyelvi konfiguráció

Fájl: `src/data/languages.json`

A nyelvválasztó elemei innen származnak. A konfiguráció tartalmazza
többek között a nyelvkódot, a gomb feliratát, az évet és a zászló
képének URL-jét.

### 5.3. Éttermi adatok

Fájl: `src/data/restaurant.json`

A fájl az étteremhez kapcsolódó adatokat tartalmazza, többek között:

-   étterem neve;
-   telefonszám;
-   cím;
-   Facebook-hivatkozás;
-   nyitvatartás.

A nyitvatartási adatok napokra bontva tartalmazzák a nap nevét, a
kezdési és zárási időt, valamint azt, hogy az adott napon zárva tart-e
az étterem.

### 5.4. Archivált adatok

A korábbi étlapverziók és migrációs források megőrzése fontos a projekt
fejlődésének követhetősége miatt.

Az archivált adatok nem az alkalmazás aktuális adatforrásai. A korábbi
struktúrák történeti és későbbi referencia céljából maradnak meg.

A jelenlegi adatszervezésben az étlaparchívum a `src/data/menu/archive/`
könyvtár alatt található. A korábbi, már nem használt gyökérszintű
JSON-fájlok a projektgazda döntése alapján a `src/data/archive/`
könyvtárba kerülnek.

<a id="hu-alkalmazasarchitektura"></a>
## 6. Komponens- és alkalmazásarchitektúra

Az alkalmazás komponensekre és kompozíciókra bontva épül fel.

-   **Komponensek (`components`)**: kisebb, jól körülhatárolt felületi
    elemek, például fejléc, nyelvválasztó, étlap, telefonszám,
    nyitvatartás és vissza a tetejére gomb.
-   **Kompozíciók (`compositions`)**: több kisebb komponensből felépülő,
    összetettebb felületi egységek, például a telefonszámot és
    nyitvatartást együtt megjelenítő rész, illetve a lábléc.
-   **Segédfüggvények (`utils`)**: az alkalmazás adatainak előkészítését
    segítő, a megjelenítéstől elkülönített logika.

### Főbb komponensek

  -----------------------------------------------------------------------
  Elem                                Feladat
  ----------------------------------- -----------------------------------
  `App`                               Az alkalmazás fő komponense;
                                      összefogja az adatokat, az
                                      állapotot és a fő felületi
                                      egységeket

  `Header`                            Az étterem logójának megjelenítése

  `LanguageSelector`                  A rendelkezésre álló nyelvek
                                      megjelenítése és a kiválasztás
                                      kezelése

  `Menu`                              A kiválasztott nyelvű kategóriák és
                                      ételek megjelenítése

  `Phone`                             Telefonszám megjelenítése

  `OpeningTimes`                      Nyitvatartás megjelenítése

  `StickyUpButton`                    Visszagörgetés az oldal tetejére

  `PhoneAndOpeningTime`               A telefonszám és nyitvatartás közös
                                      felületi egysége

  `Footer`                            Lábléc, Facebook-hivatkozás és
                                      telefonszám
  -----------------------------------------------------------------------

### Nyelvváltás adatfolyamának áttekintése

1.  Az alkalmazás betölti a nyelvi konfigurációt és az aktuális
    étlapadatokat.
2.  A felhasználó kiválaszt egy nyelvet.
3.  A kiválasztott nyelvkód az alkalmazás állapotába kerül.
4.  A `getLanguageMenu` segédfüggvény előállítja a megjelenítendő,
    kiválasztott nyelvű étlapstruktúrát.
5.  A `Menu` komponens megjeleníti a kategóriákat, az ételeket, az
    árakat és a pénznemet.

<a id="hu-css-struktura"></a>
## 7. CSS-struktúra és reszponzivitás

A stílusok több, felelősség szerint elkülönített CSS-fájlban találhatók.

-   `src/css/variables.css`: közös CSS-változók, például színek,
    térközök, betűméretek és betűvastagságok.
-   `src/css/App.css`: az alkalmazás fő elrendezéséhez kapcsolódó
    stílusok.
-   `src/css/responsive.css`: reszponzív szabályok.
-   A komponensekhez és kompozíciókhoz saját CSS-fájlok tartoznak.

A CSS-refaktor célja a meglévő vizuális megjelenés megőrzése mellett a
stílusok következetesebbé és karbantarthatóbbá tétele volt. A refaktor
nem jelentett teljes UI/UX-újratervezést.

A közös változók többek között az alábbi területeket fedik le:

-   háttérfelületek és kiemelőszínek;
-   szegélyek és lekerekítések;
-   térközök;
-   betűméretek és betűvastagságok.

A projektben a gyökér betűméret 16px maradt, így az `rem` mértékegység
ehhez viszonyul. A nagyobb vizuális és tipográfiai változtatások külön,
későbbi UI/UX-feladatnak számítanak.

A reszponzív ellenőrzés több mobil-, tablet- és asztali nézetet is
érintett. A cél az volt, hogy a tartalom különböző képernyőméreteken is
használható maradjon, és ne jelenjen meg nem kívánt vízszintes görgetés.

<a id="hu-fejlesztoi-kornyezet"></a>
## 8. Telepítés, fejlesztői szerver és build

### Előfeltételek

-   Node.js
-   npm

### Telepítés

A projekt gyökérkönyvtárában:

``` bash
npm install
```

### Fejlesztői szerver

``` bash
npm start
```

A Create React App elindítja a fejlesztői szervert. Alapértelmezés
szerint az alkalmazás a `http://localhost:3000` címen érhető el.

### Production build

``` bash
npm run build
```

A parancs optimalizált, éles környezetben kiszolgálható buildet készít a
`build/` könyvtárba.

### Tesztek

``` bash
npm test
```

A teszteket a Create React App által biztosított Jest környezet
futtatja. A projektben React Testing Library és `user-event` is
rendelkezésre áll a komponensek és felhasználói interakciók
tesztelésére.

### Build előnézete helyi környezetben

A production build helyi megtekintéséhez például használható a `serve`
csomag, ha telepítve van:

``` bash
npx serve -s build
```

<a id="hu-segedscriptek"></a>
## 9. Segédscriptek

A projekt `scripts/` könyvtárában adat-előkészítést segítő Node.js
scriptek találhatók.

-   `scripts/uidGenerator.js`: egyedi azonosítók előállítását segítő
    függvényeket tartalmaz.
-   `scripts/migration.js`: korábbi étlapadatok új struktúrába történő
    átalakítására készült migrációs script.

Ezek nem a böngészőben futó alkalmazás részei, hanem
fejlesztési/adatmigrációs segédeszközök.

<a id="hu-refaktor-alapelvek"></a>
## 10. Refaktorálási alapelvek

A közös refaktorálás során az alábbi szempontok voltak fontosak:

-   A komponensek felelősségi köre legyen egyértelmű.
-   A komponensek csak a működésükhöz szükséges adatokat kapják meg.
-   Az adatkezelés és a megjelenítés logikája legyen elkülönítve.
-   A JSON-adatok következetes, egyedi azonosítókat használjanak.
-   A CSS legyen átlátható, következetes és újrafelhasználható.
-   A meglévő dizájn a refaktor során maradjon változatlan.
-   A régi adatszerkezetek archiválva maradjanak, ha történeti értékük
    van.
-   A módosításokat kis, ellenőrizhető lépésekben kell elvégezni.

<a id="hu-technikai-megjegyzesek"></a>
## 11. Ismert technikai megjegyzések

A projekt Create React App alapokon működik. A Create React App már nem
aktívan karbantartott eszköz, ezért a build- és függőségfrissítési
kérdések későbbi technikai karbantartási feladatot jelenthetnek.

A fejlesztés során korábban megjelentek elavult Browserslist-adatbázisra
és a CRA Babel-függőségeire vonatkozó figyelmeztetések. Ezek nem az
alkalmazás CSS-refaktorának hibái.

Egy korábbi `npm audit` futtatás 170 sérülékenységet jelzett (21 low,
113 moderate, 32 high, 4 critical). Ez a jelentés a futtatás időpontjára
és az akkori telepített függőségekre vonatkozott; az aktuális állapotot
új `npm audit` futtatással kell ellenőrizni. A függőségek frissítése
előtt célszerű a változtatásokat külön megtervezni és tesztelni.

------------------------------------------------------------------------

<a id="english-documentation"></a>
<a id="english-documentation"></a>
# English Documentation

**Live website:** [marosétterem.hu](https://marosétterem.hu)  
*The domain is already live, but it currently serves the previous version. The refactored version will be available after the next deployment.*

## Table of Contents

1. [About the project](#about-the-project)
2. [Main features](#en-main-features)
3. [Technology stack](#en-technology-stack)
4. [Languages and localization](#en-languages-and-localization)
5. [Data structure](#en-data-structure)
6. [Application architecture](#en-application-architecture)
7. [CSS structure and responsiveness](#en-css-structure)
8. [Development setup](#en-development-setup)
9. [Utility scripts](#en-utility-scripts)
10. [Refactoring principles](#en-refactoring-principles)
11. [Technical notes](#en-technical-notes)


## Table of Contents

1. [About the project](#en-about-the-project)
2. [Main features](#en-main-features)
3. [Technology stack](#en-technology-stack)
4. [Languages and localization](#en-languages-and-localization)
5. [JSON data structure and archives](#en-json-data-structure)
6. [Component and application architecture](#en-application-architecture)
7. [CSS structure and responsiveness](#en-css-structure)
8. [Installation, development server, and build](#en-development-setup)
9. [Utility scripts](#en-utility-scripts)
10. [Refactoring principles](#en-refactoring-principles)
11. [Known technical notes](#en-technical-notes)

---

<a id="en-about-the-project"></a>
## 1. About the project

**Maros Menu** is a responsive, multilingual restaurant menu application
for Maros Étterem.

The application allows visitors to browse the restaurant's current menu,
choose a language, and view essential restaurant information such as the
phone number and opening hours.

The project evolved from an earlier implementation with a simpler data
structure. One of the main goals of the refactoring work was to make the
components, data sources, and styles more consistent, structured, and
maintainable.

<a id="en-main-features"></a>
## 2. Main features

-   Multilingual menu display.
-   Language selection in Hungarian, English, and German.
-   Localized category and dish names.
-   Dish prices and the currency associated with the selected language.
-   Restaurant phone number and opening hours.
-   Link to the restaurant's Facebook page.
-   Back-to-top functionality.
-   Responsive layout for different screen sizes.

<a id="en-technology-stack"></a>
## 3. Technology stack

  -----------------------------------------------------------------------
  Technology                          Purpose
  ----------------------------------- -----------------------------------
  React 18                            User interface and component-based
                                      architecture

  JavaScript                          Application logic

  Create React App (`react-scripts`   Development server, production
  5)                                  build, and test runner

  CSS                                 Styling and responsive layout

  JSON                                Restaurant data, language
                                      configuration, and menu data

  Jest                                Test runner, provided through
                                      Create React App

  React Testing Library               React component testing

  `@testing-library/user-event`       Simulating user interactions in
                                      tests

  `@testing-library/jest-dom`         Additional DOM assertions for tests
  -----------------------------------------------------------------------

The project configuration uses React 18.2.0 and `react-scripts` 5.0.1.

<a id="en-languages-and-localization"></a>
## 4. Languages and localization

The application currently supports three languages:

  Language code   Language    Language selector label
  --------------- ----------- -------------------------
  `hu`            Hungarian   Étlap
  `en`            English     Menu
  `de`            German      Menü

The language selector configuration is stored in
`src/data/languages.json`. Each record contains a unique `uid`, language
code, label, year, and flag image information.

The language codes are also used as keys in the menu data. When a
visitor selects a language, the application displays the corresponding
translations for categories and dishes.

<a id="en-json-data-structure"></a>
## 5. JSON data structure and archives

Some application data is stored in JSON files. This keeps menu content
and restaurant information separate from the React component logic.

### 5.1. Current menu

File: `src/data/menu/current/menu.json`

The top-level menu structure contains currency definitions and
categories:

-   `currency`: currency labels associated with supported languages.
-   `categories`: the list of menu categories.

Main category fields:

-   `uid`: unique identifier.
-   `title`: localized category titles keyed by language code.
-   `dishes`: the dishes belonging to the category.

Main dish fields:

-   `uid`: unique identifier.
-   `hu`, `en`, `de`: localized dish names.
-   `price`: dish price.

In the uploaded project snapshot, the current menu contained 5
categories and 42 dishes in total. This content may change over time and
should not be treated as a fixed application rule.

### 5.2. Language configuration

File: `src/data/languages.json`

This file provides the language selector entries, including language
codes, button labels, year, and flag image URLs.

### 5.3. Restaurant information

File: `src/data/restaurant.json`

This file contains restaurant-related information, including:

-   restaurant name;
-   phone number;
-   address;
-   Facebook URL;
-   opening hours.

Opening hours are stored by day and include the day label, opening and
closing times, and a flag indicating whether the restaurant is closed on
that day.

### 5.4. Archived data

Preserving previous menu versions and migration sources is useful for
tracking the evolution of the project.

Archived data is not used as the application's current data source. It
is retained for historical reference and as a record of earlier data
structures.

The menu archive is organized under `src/data/menu/archive/`. At the
project owner's request, older root-level JSON files that are no longer
used are being moved to `src/data/archive/`.

<a id="en-application-architecture"></a>
## 6. Component and application architecture

The application is organized into components and compositions.

-   **Components (`components`)**: smaller, focused UI elements such as
    the header, language selector, menu, phone number, opening hours,
    and back-to-top button.
-   **Compositions (`compositions`)**: larger UI sections built from
    smaller components, such as the combined phone-and-opening-hours
    section and the footer.
-   **Utilities (`utils`)**: logic that prepares application data
    separately from the presentation layer.

### Main UI elements

  -----------------------------------------------------------------------
  Element                             Responsibility
  ----------------------------------- -----------------------------------
  `App`                               Main application component;
                                      coordinates data, state, and the
                                      main UI sections

  `Header`                            Displays the restaurant logo

  `LanguageSelector`                  Displays available languages and
                                      handles language selection

  `Menu`                              Displays categories and dishes in
                                      the selected language

  `Phone`                             Displays the restaurant phone
                                      number

  `OpeningTimes`                      Displays opening hours

  `StickyUpButton`                    Scrolls back to the top of the page

  `PhoneAndOpeningTime`               Combines the phone number and
                                      opening hours into one UI section

  `Footer`                            Displays the footer, Facebook link,
                                      and phone number
  -----------------------------------------------------------------------

### Language selection data flow

1.  The application loads the language configuration and current menu
    data.
2.  The visitor selects a language.
3.  The selected language code is stored in application state.
4.  The `getLanguageMenu` utility prepares the menu structure for the
    selected language.
5.  The `Menu` component renders the categories, dishes, prices, and
    currency.

<a id="en-css-structure"></a>
## 7. CSS structure and responsiveness

Styles are separated into CSS files according to responsibility.

-   `src/css/variables.css`: shared CSS variables, including colors,
    spacing, font sizes, and font weights.
-   `src/css/App.css`: styles for the main application layout.
-   `src/css/responsive.css`: responsive rules.
-   Components and compositions have their own CSS files.

The goal of the CSS refactoring was to make styles more consistent and
maintainable while preserving the existing visual design. The
refactoring was not a complete UI/UX redesign.

Shared variables cover areas such as:

-   background surfaces and accent colors;
-   borders and border radii;
-   spacing;
-   font sizes and font weights.

The root font size remains 16px, so `rem` values are relative to that
base. Larger visual and typography changes are considered a separate
future UI/UX task.

Responsive checks covered mobile, tablet, and desktop viewport sizes.
The goal was to keep the content usable across screen sizes and avoid
unwanted horizontal scrolling.

<a id="en-development-setup"></a>
## 8. Installation, development server, and build

### Prerequisites

-   Node.js
-   npm

### Install dependencies

From the project root:

``` bash
npm install
```

### Start the development server

``` bash
npm start
```

Create React App starts the development server. By default, the
application is available at `http://localhost:3000`.

### Create a production build

``` bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### Run tests

``` bash
npm test
```

Tests run in the Jest environment provided by Create React App. React
Testing Library and `user-event` are also available for testing
components and user interactions.

### Preview the production build locally

For example, the production build can be served locally with the `serve`
package, if available:

``` bash
npx serve -s build
```

<a id="en-utility-scripts"></a>
## 9. Utility scripts

The `scripts/` directory contains Node.js utilities for data
preparation.

-   `scripts/uidGenerator.js`: helper functions for generating unique
    identifiers.
-   `scripts/migration.js`: a migration script created to transform
    older menu data into the newer structure.

These scripts are development and data-migration tools; they are not
part of the browser application runtime.

<a id="en-refactoring-principles"></a>
## 10. Refactoring principles

The shared refactoring work followed these principles:

-   Keep component responsibilities clear.
-   Pass components only the data they need.
-   Separate data preparation from presentation logic.
-   Use consistent unique identifiers in JSON data.
-   Keep CSS clear, consistent, and reusable.
-   Preserve the existing design during refactoring.
-   Keep older data structures archived when they have historical value.
-   Make changes in small, verifiable steps.

<a id="en-technical-notes"></a>
## 11. Known technical notes

The project is built with Create React App. Create React App is no
longer actively maintained, so build tooling and dependency maintenance
may need attention in a future maintenance phase.

Earlier development runs produced warnings about an outdated
Browserslist database and CRA Babel dependencies. These warnings were
not CSS refactoring errors.

A previous `npm audit` run reported 170 vulnerabilities (21 low, 113
moderate, 32 high, and 4 critical). This report reflected the installed
dependencies at the time it was run; the current state should be checked
by running `npm audit` again. Dependency upgrades should be planned and
tested separately before applying them.
