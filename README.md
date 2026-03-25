# BU1SPORT Brand System

Tento repozitář obsahuje source of truth pro BU1SPORT design systém.

## Struktura

### /source
Hlavní pravda (ručně spravované):
- brand-rules.md
- ai-design-pack.md
- shopify-symmetry-rules.md
- brand-tokens.json

### /outputs
Odvozené výstupy:
- tailwind-preset.ts
- theme.css
- shopify-bridge.css
- figma mapping

## Pravidlo

Změny se dělají vždy nejdřív v `/source`.

Výstupy se aktualizují až následně.

## Workflow

1. uprav pravidla nebo tokeny
2. validuj změnu
3. použij Codex pro generování výstupů
4. commit
