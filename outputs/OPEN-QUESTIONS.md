# Open Questions

## Rozhodnuti potvrzena

1. PDP poradi
- jde o vizualni prioritu, ne povinne DOM poradi
- pro uzivatele ma hierarchie pusobit: title -> price -> CTA -> variants
- DOM muze zustat podle technickych potreb Shopify Symmetry

2. Barvy a rgba derivace
- brand barvy zustavaji jen tri: black, white, pink
- je v poradku pouzivat rgba a opacity derivace pro shadow, border a jemne separace

3. Tailwind preset
- preset ma zustat obecny
- nema se optimalizovat pro konkretni Tailwind verzi

## Zbyvajici rizika

- overeni `tailwind-preset.ts` se odklada az do implementace; ted to neni blokator
- `theme.css` a `component-specs.md` jsou foundation vrstva; pri nasazeni do konkretni Symmetry sablony bude potreba namapovat tridy a selektory na existujici markup
- zmeny jsou zatim pouze v pracovni vetvi a nejsou commitnute
