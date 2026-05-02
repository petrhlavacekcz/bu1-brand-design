# BU1 Product Description Context
> Generated. Not canonical. Edit only `src/content/docs/` or `src/content/data/`.
Purpose: Piš produktové popisy z ověřených produktových faktů, bez claimů navíc.
## Canonical sources
- src/content/docs/ai/context-map.mdx
- src/content/docs/ai/product-description.mdx
- src/content/docs/templates/product-description-template.mdx
- src/content/docs/brand/tone-of-voice.mdx
- src/content/docs/brand/language.mdx
- src/content/docs/brand/personas.mdx
- src/content/docs/ecommerce/product-card.mdx
- src/content/docs/ecommerce/cta-rules.mdx
- src/content/data/goalkeeper-glossary.json
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

### ai/product-description.mdx

Product Copy
  Popis má pomoci nákupu. Ne zbytečně vyprávět.

## Cíl

Produktový popis vede k akci. Nezaplní místo.

## Povinné vstupy

  - název produktu

  - kategorie

  - 3 až 5 faktických benefitů

  - materiál nebo konstrukce

  - cílový uživatel

  - hlavní rozdíl proti běžné variantě

  - CTA nebo další krok

## Výstupní struktura

  - krátký úvodní odstavec

  - bullet list

  - detail produktu nebo použití

  - krátké uzavření s akcí

## Pravidla psaní

  - začni benefitem

  - piš konkrétně

  - nepřeháněj

  - neduplikuj stejný argument

  - drž text snadno skenovatelný

  - pokud se obracíš na zákazníka přímo, používej vykání

## Příklady

### Dobrá formulace

  - `BU1 Light HG 2.0 mají vylepšenou 4mm HG pěnu pro vyšší přilnavost a delší výdrž na umělé trávě.`

  - `Junior BU1 Light HG 2.0 pomáhají mladým brankářům držet jistotu v rukou na umělé trávě i v hale.`

  - `BU1 FloW komunikujte jako novinku a konkrétní benefity doplňte až podle ověřených produktových podkladů.`

### Špatná formulace

  - `Revoluční produkt nové generace.`

  - `Prémiový zážitek pro skutečné profesionály.`

  - `BU1 Gator uvádějte jako aktuální modelovou novinku.`

  - `Junior BU1 Light HG 2.0 garantují každý chycený míč.`

### templates/product-description-template.mdx

Template
  Pevný základ pro PDP, landing bloky i AI generování. Vždy začni fakty — ne stylem.

## Vstup (povinné před psaním)

  - Název produktu

  - Kategorie (rukavice, dres, tréninkové pomůcky…)

  - 3–5 faktických benefitů

  - Materiál nebo konstrukční detail

  - Cílový uživatel (odkaz na personu)

  - Klíčový rozdíl oproti jiné variantě nebo konkurenci

## Šablona

  
    Nadpis
    [Název produktu]
  

  
    Krátký úvod
    [1–2 věty. Co produkt dělá a komu pomáhá. Začni benefitem, ne popisem materiálu.]
    **Příklad:** Lehkost, přilnavost a výdrž pro umělou trávu. BU1 Light HG 2.0 jsou navržené pro tvrdší povrchy a halu.
  

  
    Hlavní benefity
    
      - `[Benefit 1 — konkrétní, bez vague slov]`

      - `[Benefit 2]`

      - `[Benefit 3]`

    
    **Příklad:** Vylepšená 4mm HG pěna · Extra ochrana nejvíce namáhané části dlaně · Dva odnímatelné pásky
  

  
    Detail
    [Krátký odstavec o materiálu, střihu nebo konkrétním konstrukčním řešení.]
    **Příklad:** Vylepšená HG pěna podporuje přilnavost na umělé trávě a tvrdších površích. Extra vrstva v namáhané části dlaně pomáhá prodloužit výdrž.
  

  
    Pro koho je
    [Jedna věta. Konkrétní — úroveň, kontext, způsob použití.]
    **Příklad:** Pro brankáře, kteří často chytají na umělé trávě, v hale nebo na tvrdším povrchu.
  

  
    CTA
    [Jedna jasná akce — 2–4 slova.]
    **Příklady:** Vybrat veliko

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

### brand/tone-of-voice.mdx

Voice
  Přátelský a profesionální tón. Krátké věty. Jasná pointa. Žádná prázdná omáčka.

## Základní nastavení

- piš krátké věty
- piš přímo
- piš tak, aby text šel rychle skenovat
- buď vstřícný a podpůrný, ne chladný
- používej druhou osobu: `vy`, `vám`, `vaše`

  
    Nedělej to takto
    Nebuď rozvláčný. Neschovávej důležitou informaci do třetí věty. Nepřidávej slova, která nic nevysvětlují.
  

## Hlavní vlastnosti

  - přátelský

  - profesionální

  - jasný

  - přímý

  - podpůrný

## Jak psát

  - začínej tím nejdůležitějším

  - používej konkrétní slovesa a konkrétní benefity

  - popisuj reálný přínos

  - preferuj konkrétní formulace před obecnými sliby

  - drž jednu hlavní myšlenku na odstavec

  - když pomáháš s výběrem, mluv klidně a s jistotou

## Brand language

  - zdůrazňuj kvalitu, spolehlivost a péči o zákazníka

  - drž jednotnou terminologii pro produkty, služby a procesy

  - negativní formulace přepisuj do jasné a užitečné podoby

  - emoji používej účelně, hlavně na sociálních sítích a v lehčích CRM formátech

  
    Emoji
    Používej střídmě. Jedno až tři emoji tam, kde zlepší čitelnost nebo rytmus sdělení.
  
  
    Oslovení
    Vždy vykáme. Píšeme lidsky, ale s respektem. Ne tykání. Ne zbytečný odstup.

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

### brand/language.mdx

Language
  Pozitivní a podporující jazyk. Jednotná terminologie. Vždy vykání a srozumitelná akce.

## Základ

  - používáme pozitivní a podporující jazyk

  - zdůrazňujeme kvalitu, spolehlivost a péči o zákazníky

  - mluvíme jasně a přímo, bez zbytečných oklik

  - držíme jednotnou terminologii pro produkty, služby a procesy

## Oslovování zákazníků

  
    Používejte
    
      - `vy`, `vám`, `vaše`

      - přátelský a profesionální tón

      - podpůrné formulace při výběru nebo servisu

    
  
  
    Nepoužívejte
    
      - tykání bez jasného důvodu

      - arogantní nebo přezíravý tón

      - prázdné superlativy bez obsahu

    
  

## Emoji

  - emoji jsou povolené a podporované

  - používejte je účelně, ne jako výplň

  - na sociálních sítích a v lehčích CRM formátech mohou pomoct rytmu sdělení

  - na webu, v pravidlech a v B2B komunikaci je držte střídmě

**Příklad:** Novinka je venku. Mrkněte na detaily. ⚽

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

### brand/personas.mdx

Brand
  Persony pomáhají rozhodnout, komu píšeme, co zdůraznit a čemu se vyhnout. Kanonickým zdrojem je tento dokument.

:::note[Single source of truth]
Persony jsou textová a rozhodovací pravidla. Patří do `src/content/docs/brand/personas.mdx`. Pokud agent nebo člověk potřebuje persony, načte tento dokument. `src/content/data/` nepoužívejte jako paralelní zdroj person.
:::

## Jak persony používat

  - Použijte personu, pokud odpovídá cíli, kanálu a publiku zadání.

  - Když persona nesedí, pracujte provozně: trh, jazyk, kanál, role, úroveň a cíl sdělení.

  - Persona upravuje důraz sdělení, ne produktová fakta.

  - Produkt, cenu, dostupnost, varianty a claimy vždy ověřte v Shopify nebo jiném schváleném live zdroji.

  - Výchozí oslovení je vykání. Tykání nepoužívejte bez výslovně schválené kanálové výjimky.

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

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

## Relevantní glossary slice

- goalkeeper_gloves: cs: brankářské rukavice
- goalkeeper: cs: brankář
- foam_latex: cs: pěna
- palm: cs: dlaň
- grip: cs: grip / přilnavost
- safe_grip_feel: cs: jistota v rukou
- ball_control: cs: kontrola míče
- ball_feel: cs: cit pro míč
- fit: cs: fit / padnutí
- negative_cut: cs: negativní střih
- hybrid_cut: cs: hybridní střih
- wrist: cs: zápěstí
- strap: cs: pásek
- without_strap: cs: bez pásku
- removable_straps: cs: odnímatelné pásky
