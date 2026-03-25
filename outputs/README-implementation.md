# BU1SPORT Outputs Implementation

Tato slozka obsahuje odvozene vystupy z `/source`.

## Co je v outputs

- `tailwind-preset.ts`
  - zakladni preset pro Tailwind
  - obsahuje barvy, fonty, velikosti a spacing
- `theme.css`
  - CSS variables a jednoduche utility tridy
  - vhodne pro Shopify Symmetry custom CSS nebo theme assets
- `component-specs.md`
  - pravidla pro implementaci commerce komponent

## Jak to pouzit

### 1. Tailwind

Importuj preset do projektu:

```ts
import bu1Preset from "./outputs/tailwind-preset";

export default {
  presets: [bu1Preset],
};
```

Pouzivej hlavne:
- `font-heading`
- `font-body`
- `text-price`
- `bg-brand-primary`
- `text-text-base`
- `border-border-strong`

### 2. Shopify Symmetry

Pouziti v Symmetry ma byt konzervativni:
- nemenit layout tematu
- nemenit grid system
- nemenit zakladni PDP strukturu
- zesilit CTA, cenu a hierarchii
- vizualni priorita je dulezitejsi nez preskladani DOM poradi

Doporuceny postup:
1. nahrat `theme.css` do assets
2. pripojit ho do theme layoutu
3. mapovat utility a komponentove tridy na existujici Symmetry bloky
4. upravit pouze commerce mista: product card, buy box, variant selector, CTA

### 3. CTA hierarchy

- `Add to cart` pouziva primary pravidla
- `Shop Pay` a dalsi express checkout pouzivaji secondary pravidla
- primary CTA musi zustat nejvyraznejsi akcni prvek

### 4. Co nedelat

- nepridavat dalsi barvy
- nedelat soft fashion styling
- nepouzivat ruzovou jako vseobecne pozadi
- neprestavovat Symmetry do nove aplikace

Poznamka:
- je v poradku pouzivat rgba a opacity derivace tri brand barev pro shadow, border a jemne oddeleni prvku

## Udrzba

Pokud se meni pravidla nebo tokeny:
1. uprav `/source`
2. regeneruj `/outputs`
3. az potom commitni zmeny
