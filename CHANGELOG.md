# CHANGELOG

## [2026-05-02] (housekeeping)

### Changed
- `astro.config.mjs` - znovu nastaveno `disable404Route: true`. Starlight injektoval vlastní `/404` route, která kolidovala s `[...slug]` rendrováním `src/content/docs/404.md`; vypnutím injekce zmizí build warning a custom česká 404 stránka se renderuje dál přes content collection.
- `.gitignore` - přidáno `output/` pro lokální Playwright artefakty, aby se neocitly v gitu.

## [2026-05-02]

### Added
- `src/content/docs/brand/personas.mdx` - doplněny schválené BU1 persony jako jediný canonical MDX zdroj pro lidi i agenty.
- `src/content/docs/ai/context-map.mdx` - přidána tokenově úsporná mapa, která agentům říká, které minimální zdroje načíst pro konkrétní typ úkolu.
- `scripts/generate-agent-context.mjs` a `generated/agent-context/` - přidány malé task-specific context packy pro produktové popisy, Instagram, e-mail, blog/SEO a design/UI.
- `scripts/check-generated.mjs` a npm script `check:generated` - přidána kontrola driftu generovaných brand a agentních výstupů.

### Changed
- `AGENTS.md`, `README.md`, `src/content/docs/governance/source-of-truth.mdx`, `src/content/docs/governance/change-process.mdx`, `src/content/docs/ai/prompting-principles.mdx` a `src/content/docs/index.mdx` - zpřesněn obecný princip single source of truth: textová pravidla patří primárně do MDX, JSON jen pro tokeny nebo skutečně strukturovaná data s jasným strojovým účelem.
- `AGENTS.md`, `README.md` a `src/content/docs/governance/source-of-truth.mdx` - doplněno používání `generated/agent-context/` jako odvozené, ne-canonical vrstvy pro tokenově efektivní agentní čtení.
- `package.json` - generování sjednoceno přes `generate:all`, aby build obnovil brand exporty i agentní context packy.
- `src/content/docs/design/colors.mdx`, `src/content/docs/design/components.mdx`, `src/styles/starlight.css`, `src/content/data/brand-tokens.json` a `scripts/generate-brand-exports.mjs` - sjednocen primary CTA hover na tmavý Onyx stav, ne růžový shade.
- `src/content/data/brand-tokens.json` a `src/content/docs/design/colors.mdx` - sjednocena reference pro fluorescent Hot Pink jako Pantone 812 C plus RAL 4003 approx.
- `src/content/docs/brand/personas.mdx` a `src/content/docs/ai/prompting-principles.mdx` - zjednodušeny formulace tak, aby vycházely z obecného MDX-first pravidla místo popisu konkrétní neexistující paralelní vrstvy.

### Removed
- `src/content/data/personas.json` - odstraněn zbytečný pending JSON soubor, který by vytvářel paralelní vrstvu k `src/content/docs/brand/personas.mdx`.
- `src/content/data/prompt-meta.json` - odstraněn textově duplicitní prompt metadata JSON; vstupy, guardrails a task routing jsou nyní v canonical MDX a odvozených context packách.

## [2026-04-30]

### Added
- `src/content/docs/brand/communication-channels.mdx` a `src/content/docs/ai/prompting-principles.mdx` - doplněny sitemap indexy pro CZ/SK a globální jazykové mutace včetně pravidla, že sitemap slouží pro URL strukturu, ne pro produktová fakta.
- `src/content/data/goalkeeper-glossary.json` - přidán canonical brankářský slovník do repozitáře, aby dokumentace neodkazovala na lokální soubory mimo content layer.
- `src/content/docs/brand/language.mdx` - doplněna brankářská terminologie, pravidla údržby slovníku ve všech jazycích a reálné příklady na modelech BU1 Light HG 2.0, Junior BU1 Light HG 2.0 a BU1 FloW.

### Changed
- `src/content/docs/design/icons.mdx` - primární icon set změněn z Phosphor Icons na Tabler Icons včetně pravidel pro vlastní ikony, stroke-width 2px a doporučených názvů ikon.
- `src/content/docs/ai/product-description.mdx`, `src/content/docs/ai/prompting-principles.mdx`, `src/content/docs/ai/instagram-post.mdx`, `src/content/docs/templates/product-description-template.mdx`, `src/content/docs/templates/ad-template.mdx`, `src/content/docs/templates/email-template.mdx`, `src/content/docs/ecommerce/product-card.mdx`, `src/content/docs/design/components.mdx` a `src/content/docs/design/typography.mdx` - nahrazeny hypotetické produktové příklady reálnými modely a ověřitelnými produktovými fakty.
- `src/content/docs/brand/communication-channels.mdx` - zpřesněno, že Facebook BU1 CZ/SK komunikuje česky i u společných CZ/SK postů.
- `src/content/docs/brand/photo-style.mdx` - sjednocen technický výraz z `latex` na `pěna` podle schválené brankářské terminologie.
- `src/content/docs/brand/language.mdx`, `src/content/docs/ai/product-description.mdx`, `src/content/docs/ai/instagram-post.mdx`, `src/content/docs/templates/product-description-template.mdx`, `src/content/docs/templates/ad-template.mdx`, `src/content/docs/templates/email-template.mdx` a `src/content/data/goalkeeper-glossary.json` - nahrazeny aktuální reference na doprodávaný BU1 Gator novými modely BU1 FloW a Junior BU1 FloW; Gator už není používán jako budoucí/current referenční produkt.

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
