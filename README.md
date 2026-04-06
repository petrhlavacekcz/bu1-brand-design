# BU1 Brand & Content System

Centrální zdroj pravdy pro brand, design, AI, obsah a odvozené design token exporty BU1SPORT.

## Source of truth

Canonical vrstva je pouze:
- `src/content/docs/`
- `src/content/data/brand-tokens.json`
- další JSON soubory v `src/content/data/`, pokud drží strukturovaná doprovodná data

Všechno ostatní je odvozené.

## Jak přidávat nové `.md` nebo `.mdx` soubory

1. Vyber správnou sekci v `src/content/docs/`.
2. Každý soubor založ s frontmatterem:

   ```md
   ---
   title: ...
   description: ...
   ---
   ```

3. Piš stručně.
4. Neduplicuj pravidla.

## Jak přidávat JSON data

1. Ulož soubor do `src/content/data/`.
2. Používej stabilní klíče.
3. Když jde o design tokeny, preferuj rozšíření `brand-tokens.json`.
4. Po změně tokenů spusť generátor exportů.

## Generování exportů

```bash
npm run generate:brand
```

Vygeneruje:
- `generated/brand/tokens.css`
- `generated/brand/theme.css`
- `generated/brand/tailwind-preset.ts`
- `generated/brand/shopify-tokens.liquid`
- `generated/brand/figma-variables.json`

## Logo assety

Veřejné SVG varianty jsou uložené v `public/brand/logos/`.

## Spuštění projektu

```bash
npm run dev
```

## Build projektu

```bash
npm run build
```
