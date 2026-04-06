# CHANGELOG

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
