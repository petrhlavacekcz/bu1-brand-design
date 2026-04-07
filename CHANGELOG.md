# CHANGELOG

## [2026-04-07]

### Added
- `starlight-codeblock-fullscreen` a `starlight-page-actions` pluginy do Starlight konfigurace včetně `llms.txt` generování, markdown copy akcí a fullscreen režimu pro code blocky.
- nové canonical stránky `src/content/docs/brand/language.mdx` a `src/content/docs/brand/communication-channels.mdx` pro brand language a správu komunikačních kanálů.

### Changed
- `src/content/docs/index.mdx` a `src/styles/starlight.css` - úvodní stránka přepracována na výraznější, strukturovanější landing s rychlými vstupy do systému.
- `src/content/docs/index.mdx` a `src/styles/starlight.css` - landing znovu přepracován do ploššího, modernějšího layoutu bez stínů; přidány jasnější vstupy, pracovní princip a kontrolní pravidla.
- `src/content/docs/index.mdx` a `src/styles/starlight.css` - homepage zjednodušena na jeden hlavní hero, vypnutý homepage TOC a kompaktnější spacing; CTA vrstva zúžena na jednu primární a jednu sekundární akci.
- `src/content/docs/brand/tone-of-voice.mdx`, `src/content/docs/brand/mission.mdx`, `src/content/docs/ai/prompting-principles.mdx`, `src/content/docs/ai/instagram-post.mdx`, `src/content/docs/ai/product-description.mdx`, `src/content/docs/templates/email-template.mdx` a `src/content/docs/templates/ad-template.mdx` - texty srovnány s novým zadáním pro pozitivní a podpůrný jazyk, vykání, emoji a konzistentní terminologii.
- `src/content/docs/brand/personas.mdx`, `src/content/data/personas.json`, `src/content/data/prompt-meta.json` a `src/content/data/brand-tokens.json` - persona vrstva vrácena do pending stavu, aby systém nepoužíval nevložené persony jako source of truth.
- `src/content/data/brand-tokens.json` - shadow tokeny změněny na `none`, aby canonical design systém nepoužíval stíny.

### Fixed
- `.github/workflows/deploy.yml` - GitHub Pages workflow srovnán s aktuální doporučenou konfigurací: přidáno `actions/configure-pages@v5`, update na `actions/checkout@v5`, `actions/upload-pages-artifact@v4` a `actions/deploy-pages@v5`, build sjednocen na `npm run build`, aby se před deployem vždy spustil i canonical export brand tokenů.
- `src/content/docs/brand/communication-channels.mdx`, `astro.config.mjs` a `src/content/data/personas.json` - doplněna správná čeština s diakritikou a opravené URL mapování pro SK (`bu1.cz/sk`) a mezinárodní locale prefixy na `bu1sport.com`.
- `src/content/docs/brand/communication-channels.mdx` - doplněny a ověřeny další živé jazykové mutace globálního webu: `/fr`, `/it`, `/ro`, `/bg`, `/hr`; potvrzeno, že `/at` neexistuje a AT sdílí `/de`.
- `src/styles/starlight.css` a `src/content/docs/design/components.mdx` - sjednoceny výšky boxů v gridových ukázkách napříč více stránkami, upraven aktivní stav v levém menu a odstraněny zbylé shadow/gradient efekty z prezentační vrstvy.
- `src/styles/starlight.css` - zpřísněno gridové srovnání přes `grid-auto-rows: 1fr` a `height: 100%` pro dokumentační karty; současně zmenšené paddingy a mezery na homepage hero a navazujících sekcích.
- `src/styles/starlight.css` - srovnáno card chování i obsahově: seznamy a doprovodné texty v dokumentačních boxech se teď chovají konzistentněji napříč `template` a `demo` kartami.

## [2026-04-06]

### Added
- canonical `brand-tokens.json` rozšířený o tiskové reference, kontrast, fluo paletu, gradienty, typografickou škálu a komponentové metriky
- generátor exportů `npm run generate:brand`
- odvozené exporty v `generated/brand/` pro CSS, Tailwind, Shopify a Figma
- veřejné SVG logo varianty v `public/brand/logos/`
- dočasný pending režim pro persony místo vymyšlených person

### Changed
- `AGENTS.md` - přidány 'Best Practices' sekce s explicitními instrukcemi pro AI agenty, aby automaticky udržovali `CHANGELOG.md` a repozitář.
- `astro.config.mjs` - odebráno `disable404Route: true`, aby mohl plnohodnotně fungovat custom `404.md` soubor; připraven TODO pro produkční doménu webu.
- source of truth zpřesněn na textovou docs vrstvu plus canonical token JSON
- design docs doplněny podle agenturních veřejných podkladů
- ecommerce pravidla zpřesněna o hierarchii, metriky a limity CTA/card vrstvy
- AI guardrails zpřesněny o práci bez person, dokud nebudou dodané

### Removed
- vymyšlené persony bez dodaných podkladů
- nejasnost, co je canonical token source a co je jen export
