# BU1 Design / UI Context
> Generated. Not canonical. Edit only `src/content/docs/` or `src/content/data/`.
Purpose: Používej tokeny jako jediný zdroj design hodnot a docs jen jako vysvětlení použití.
## Canonical sources
- src/content/docs/ai/context-map.mdx
- src/content/docs/design/colors.mdx
- src/content/docs/design/typography.mdx
- src/content/docs/design/components.mdx
- src/content/docs/design/spacing.mdx
- src/content/docs/ecommerce/ui-rules.mdx
- src/content/docs/ecommerce/cta-rules.mdx
- src/content/docs/ecommerce/product-card.mdx
- src/content/data/brand-tokens.json
## Compact context

### ai/context-map.mdx

Agent Context
  Nečti celý systém. Načti jen zdroje, které jsou nutné pro daný úkol.

## Princip

`src/content/docs/` zůstává canonical pro textová pravidla. JSON používej jen pro skutečně strukturovaná data, například design tokeny nebo slovník.

Pro běžné generování nejdřív použij nejmenší relevantní context pack z `generated/agent-context/`. Když pack nestačí nebo upravuješ pravidlo, vrať se ke canonical MDX/JSON.

## Task routing

| Úkol | Nejprve načti | Doplň jen když je potřeba |
|------|---------------|---------------------------|
| Produktový popis | `generated/agent-context/product-description.md` | live Shopify fakta, relevantní locale slice slovníku |
| Instagram post | `generated/agent-context/instagram-post.md` | konkrétní kanál z communication channels, produktová fakta |
| E-mail | `generated/agent-context/email.md` | segment/list z Klaviyo, nabídka, produktová fakta |
| Blog / SEO / interní linkování | `generated/agent-context/blog-article.md` | sitemap index, GSC/GA4 data, live Shopify fakta |
| Design / UI | `generated/agent-context/design-ui.md` | `src/content/data/brand-tokens.json`, konkrétní komponenta |

## Vstupy, které má mít každý produkční prompt

- cíl výstupu
- publikum nebo schválená persona
- trh a jazyk
- kanál
- ověřená fakta
- formát výstupu
- hlavní CTA, pokud jde o konverzní výstup

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

### design/colors.mdx

Color System
  Tři core barvy. Jasné role. Silný kontrast. Žádný chaos, žádné gradienty.

## Core palette

Tři barvy tvoří základ celého vizuálního systému. Každá má pevně danou roli — nezaměňuj ji.

  
  
  

:::note[Tisková reference]
Pantone hodnoty jsou aproximace — pro fyzický tisk vždy ověř na fyzickém vzorníku. Hot Rose ≈ Pantone 225 C. Onyx ≈ Pantone Black 6 C.
:::

## Neutral UI scale

Neutrály drží UI čitelné bez toho, aby soupeřily s Hot Rose. Používej je na pozadí, bordery a sekundární text.

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

### design/typography.mdx

Typography
  Dva fonty. Dvě role. Oswald pro sílu a akci. Nunito Sans pro čitelnost.

## Font pair

  
    Oswald
    BU1SPORT
    
      - Nadpisy, CTA, display, price v kampani

      - Vždy **uppercase**

      - Váhy: 400 · 600 · 700

      - Google Fonts — volně dostupný

    
  
  
    Nunito Sans
    Vybavení pro výkon. Každý detail má svůj důvod.
    
      - Body text, UI, popis, cena, badge

      - Sentence case

      - Váhy: 400 · 600 · 700 · 800

      - Google Fonts — volně dostupný

    
  

## Typografická škála

  
    `display-sm`40px · lh 1.0
    BU1SPORT
  
  
    `heading-lg`32px · lh 1.05
    Brankářské rukavice
  
  
    `heading-md`24px · lh 1.1
    Light HG Série
  
  
    `title-lg`20px · lh 1.2
    BU1 Light HG 2.0
  
  
    `price`22px · lh 1.1 · w800
    1 999 Kč
  
  
    `body`16px · lh 1.5 · w600
    Vylepšená HG pěna. Vyšší přilnavost na umělé trávě.
  
  
    `label`14px · lh 1.2 · w700
    Novinka
  

## Metriky škály

[Tabulka pravidel je v canonical MDX; pro detail otevři zdrojový soubor.]

## Font váhy

  
    Oswald
    
      Regular 400
      SemiBold 600
      Bold 700
    
  
  
    Nunito Sans
    
      Regular 400 — delší body text
      SemiBold 600 — body, UI popis
      Bold 700 — badge, label, meta
      ExtraBold 800 — cena

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

### design/components.mdx

Components
  Tři typy tlačítek. Jeden styl chipů. Jeden styl badge. Ploché plochy. Žádné stíny. Žádné improvizace.

## Tlačítka (Buttons)

  
    Primary
    
      Přidat do košíku
    
    
      - Hot Rose bg · bílý text · 2px HR border

      - Použití: Add to Cart, hlavní konverzní akce

      - Na stránce max **1×**

    
  
  
    Secondary
    
      Více informací
    
    
      - Bílý bg · Onyx text · 2px Onyx border

      - Použití: vedlejší akce, doplněk k Primary

    
  
  
    Inverse
    
      Zobrazit kolekci
    
    
      - Průhledný bg · bílý text · 2px bílý border

      - Použití: hero, dark mode, CTA na tmavé fotce

    
  

### Metriky tlačítek

[Tabulka pravidel je v canonical MDX; pro detail otevři zdrojový soubor.]

### Stavy tlačítka (Primary)

  
    Default
    Přidat do košíku
  
  
    Hover
    Přidat do košíku
    #141414 — tmavý Onyx hover
  
  
    Focus
    Přidat do košíku
    3px Onyx outline · offset 2px
  
  
    Active / Pressed
    Přidat do košíku
    #282828 · translateY(1px)
  
  
    Disabled
    Přidat do košíku
    Neutral 300 bg · Neutral 600 text
  
  
    Loading
    Přidat do košíku
    Spinner · text skrytý · pointer-events none
  

[Tabulka pravidel je v canonical MDX; pro detail otevři zdrojový soubor.]

### Přístupnost tlačítek

- **Keyboard:** `Tab` fokusuje, `Enter` / `Space` aktivuje
- **ARIA:** Pokud není ``, přid

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

### design/spacing.mdx

Spacing
  Každá mezera má svou roli. Žádné arbitrární hodnoty.

## Vizuální škála

  
    Space 1
    
    4px · 0.25rem — micro, separátor, icon gap
  
  
    Space 2
    
    8px · 0.5rem — badge padding, compact gap
  
  
    Space 3
    
    12px · 0.75rem — tight UI gap
  
  
    Space 4
    
    16px · 1rem — **base** — card padding, line spacing
  
  
    Space 5
    
    20px · 1.25rem — gap mezi skupinami v buy boxu
  
  
    Space 6
    
    24px · 1.5rem — button padding X
  
  
    Space 8
    
    32px · 2rem — **loose** — gap mezi sekcemi
  
  
    Space 10
    
    40px · 2.5rem — velký blok gap, CTA grid
  
  
    Space 12
    
    48px · 3rem — maximální gap, oddělení sekcí
  

## Kdy použít co

[Tabulka pravidel je v canonical MDX; pro detail otevři zdrojový soubor.]

## CSS proměnné

```css
--bu1-space-1: 0.25rem;
--bu1-space-2: 0.5rem;
--bu1-space-3: 0.75rem;
--bu1-space-4: 1rem;
--bu1-space-5: 1.25rem;
--bu1-space-6: 1.5rem;
--bu1-space-8: 2rem;
--bu1-space-10: 2.5rem;
--bu1-space-12: 3rem;
```

### ecommerce/ui-rules.mdx

UI Rules
  Produkt je první. Commerce musí být čitelná. Kampaň může být výrazná, ale nesmí rozbít tok.

## Vizuální priorita

Toto pořadí je pevné — oko zákazníka musí zachytit elementy v tomto pořadí:

  - **Název produktu** — největší a nejsilnější text v buy boxu

  - **Cena** — viditelná okamžitě, bez hoveru nebo kliknutí

  - **Hlavní CTA** — Add to Cart, Hot Rose Primary button

  - **Varianty** — velikost, barva, provedení jako chips

:::note[DOM pořadí vs vizuální pořadí]
Skutečné pořadí HTML elementů se může z technických důvodů (SEO, přístupnost) lišit. Vizuální priorita pomocí CSS je neměnná.
:::

## Product listing

  
    Standardní karta
    
      - Obrázek produktu

      - Badge (max 2, volitelný)

      - Název

      - Cena

      - Doplňkový signál (výprodej, dostupnost)

    
  
  
    PDP (Product Detail Page)
    
      - Hero detail fotky, často v tmavém kontextu

      - Název — Oswald Heading Lg

      - Cena — Nunito Sans 800, viditelná bez scrollu

      - Varianty — size chips pod názvem nebo cenou

      - Add to Cart — Primary button, dominantní

      - Badge maximálně 2, ne dominantní

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

### ecommerce/cta-rules.mdx

CTA Hierarchy
  Add to Cart je hlavní rozhodnutí. Všechno ostatní musí být slabší.

## Tři typy tlačítek

  
    Primary
    
      Přidat do košíku
    
    Hot Rose bg · Bílý text · Hlavní konverzní akce
  
  
    Secondary
    
      Více informací
    
    Bílý bg · Onyx border/text · Vedlejší akce
  
  
    Inverse
    
      Zobrazit kolekci
    
    Průhledný bg · Bílý border/text · Pouze na tmavém pozadí
  

## Hierarchie

  Správně — jasná hierarchie
  
    Přidat do košíku
    Více info
  
  Hlavní CTA dominuje. Vedlejší akce je jasně slabší.

## Metriky

| Vlastnost | Hodnota |
|-----------|---------|
| Min. výška | `52px` |
| Padding X | `24px` |
| Border | `2px solid` |
| Border radius | `2px` |
| Kontrast (White on Pink) | `5.08:1 — AA` |

## Pravidla

  - Add to Cart je největší a nejsilnější CTA v buy boxu — vždy Primary

  - Shop Pay a express checkout musí být oddělené a vizuálně slabší

  - Žádné dvě stejně silné akce vedle sebe

  - Inverse button patří výhradně na tmavé pozadí — nikdy na bílém

  - Na jedné akční ploše maximálně jedno Primary tlačítko

## Kontext inverse buttonu

  - Hero sekce s tmavým nebo Onyx pozadím

  - Dark mode kampaňový blok

  - CTA překrývající tmavý obrázek

### ecommerce/product-card.mdx

Product Card
  Karta má prodávat. Ne dělat editorial showreel.

## Preview

  
    🥅
    Novinka
    BU1 Light HG 2.0
    1 999 Kč
    
      8
      9
      10
    
    Přidat do košíku
  
  
    Pořadí elementů
    
      - Obrázek produktu

      - Badge (max 2, volitelný)

      - Název produktu

      - Cena

      - Varianty (size chips)

      - Add to Cart CTA

    
  

## Metriky

| Vlastnost | Hodnota |
|-----------|---------|
| Min. šířka karty | `200px` |
| Oblast obrázku | `160px` výška |
| Padding těla | `16px` |
| Border | `1px solid Neutral 300` |
| Border radius | `2px` |
| Title font | Oswald, uppercase |
| Title velikost | `0.9rem – 1.25rem` |
| Cena font | Nunito Sans 800 |
| Cena velikost | `1.1rem – 1.375rem` |

## Pravidla

  - Cena je vidět okamžitě — bez hoveru, bez kliknutí

  - Název a cena jsou první dvě věci, které oko zachytí

  - Max 2 badge na produkt — badge je signál, ne dekorace

  - Žádný dekorativní overlay nebo gradient přes obrázek produktu

  - Varianty zobrazuj jako chips, ne jako dropdown pokud je místo

## Nedělej

  - Fashion editorial styl — karta slouží prodeji, ne inspiraci

  - Slabá nebo malá cena (nesmí být menší než popis)

  - Dekorativní overlay přes produktovou fotografii

  - Více než 2 badge — působí chaoticky

  - Cena skrytá za hover nebo accordion

## Design token summary

- Primary / Hot Rose: #D2147C
- Onyx / dark hover: #141414
- Primary CTA hover: #141414
- Primary CTA active: #282828
- Heading font: Oswald
- Body font: Nunito Sans
- Full canonical token source: `src/content/data/brand-tokens.json`
