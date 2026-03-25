# Review Summary

## Změněné soubory

- `README.md`
- `source/brand-rules.md`
- `source/ai-design-pack.md`
- `source/shopify-symmetry-rules.md`
- `source/brand-tokens.json`
- `outputs/tailwind-preset.ts`
- `outputs/theme.css`
- `outputs/component-specs.md`
- `outputs/README-implementation.md`

## Co bylo uděláno

- upraven root `README.md` na stručný popis repozitáře a workflow
- založena a naplněna složka `/source` jako source of truth
- vytvořen `tailwind-preset.ts` pro barvy, fonty, velikosti a spacing
- vytvořen `theme.css` s CSS variables a základními utility třídami
- vytvořen `component-specs.md` pro Button, Product card, PDP buy box a Variant selector
- vytvořen `README-implementation.md` s návodem pro Tailwind a Shopify Symmetry
- potvrzeno, že PDP pořadí je vizuální priorita, ne povinné DOM pořadí
- potvrzeno, že rgba a opacity derivace brand barev jsou povolené pro shadow a border
- potvrzeno, že Tailwind preset má zůstat obecný a přenositelný
- potvrzeno, že ověření Tailwind kompatibility se řeší až v implementaci
- potvrzeno, že změny mají zatím zůstat necommitnuté

## Diff Summary

### `README.md`

- přepsaný obsah na novou kratší verzi
- 14 insertions, 24 deletions proti předchozí verzi

### `source/brand-rules.md`

- nový source soubor s brand pravidly, CTA hierarchií a commerce pravidly

### `source/ai-design-pack.md`

- nový source soubor pro AI návrhy a generativní použití

### `source/shopify-symmetry-rules.md`

- nový source soubor pro implementaci v Shopify Symmetry

### `source/brand-tokens.json`

- nový token soubor s barvami a fonty

### `outputs/tailwind-preset.ts`

- nový Tailwind preset s foundation tokeny a utility škálami

### `outputs/theme.css`

- nové CSS variables a základní komponentové utility pro commerce UI

### `outputs/component-specs.md`

- nová implementační specifikace pro hlavní commerce komponenty

### `outputs/README-implementation.md`

- nový implementační návod pro použití outputs
