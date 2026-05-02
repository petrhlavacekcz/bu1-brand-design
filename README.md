# BU1 Brand & Content System

Centrální zdroj pravdy pro brand, design, AI, obsah a odvozené design token exporty BU1SPORT.

## Source of truth

Canonical vrstva je pouze:
- `src/content/docs/` pro textová pravidla, procesy, šablony a persony
- `src/content/data/brand-tokens.json` pro design tokeny
- další JSON soubory v `src/content/data/` pouze tehdy, když drží skutečně strukturovaná doprovodná data, která by v MDX vytvářela složitost

Všechno ostatní je odvozené. Textová pravidla neduplikuj do JSON jen kvůli tomu, aby je mohl číst agent.

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

1. JSON přidávej jen pro strukturovaná data, která mají jasný strojový účel.
2. Nepoužívej JSON jako paralelní kopii textového pravidla z MDX.
3. Používej stabilní klíče.
4. Když jde o design tokeny, preferuj rozšíření `brand-tokens.json`.
5. Po změně tokenů spusť generátor exportů.
6. Po změně brand/AI/template pravidel regeneruj agentní context packy.

## Generování exportů

```bash
npm run generate:brand
```

Vygeneruje brand exporty:
- `generated/brand/tokens.css`
- `generated/brand/theme.css`
- `generated/brand/tailwind-preset.ts`
- `generated/brand/shopify-tokens.liquid`
- `generated/brand/figma-variables.json`

Agentní context packy generuj přes:

```bash
npm run generate:agent
```

Vygeneruje malé task-specific Markdown soubory v `generated/agent-context/`. Nejsou canonical; slouží jen pro tokenově úsporné čtení.

Kontrola driftu generovaných souborů:

```bash
npm run check:generated
```

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
