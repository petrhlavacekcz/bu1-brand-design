# BU1 Email Context
> Generated. Not canonical. Edit only `src/content/docs/` or `src/content/data/`.
Purpose: Piš e-maily s jednou hlavní myšlenkou, jasným CTA a bez neověřených nabídek.
## Canonical sources
- src/content/docs/ai/context-map.mdx
- src/content/docs/templates/email-template.mdx
- src/content/docs/brand/tone-of-voice.mdx
- src/content/docs/brand/language.mdx
- src/content/docs/brand/personas.mdx
- src/content/docs/brand/communication-channels.mdx
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

### templates/email-template.mdx

Template
  Jeden e-mail = jedna akce. Žádný dlouhý úvod. Produkt nebo nabídka jasné do pár sekund.

## Vstup (povinné před psaním)

  - Typ emailu: novinka / promo / drop / edukace / reaktivace

  - Publikum: hráč / rodič / trenér / klub / partner

  - Trh a jazyk

  - Hlavní produkt nebo akce

  - Klíčový benefit nebo důvod otevřít

  - Termín nebo dostupnost (pokud relevantní)

## Struktura

  
    Subject line
    [Hlavní benefit nebo akce. Max 50 znaků. Žádné lákadlo bez obsahu.]
    **Příklady:** Nové BU1 Light HG 2.0 jsou venku · Nové BU1 FloW jsou venku · Vyberte rukavice podle povrchu
  

  
    Preheader
    [Krátké upřesnění nebo teaser. Max 1 věta, max 80 znaků.]
    **Příklad:** HG pěna pro umělou trávu a tvrdší povrchy.
  

  
    Hero line
    [Tvrdý první řádek — funguje samostatně. Max 8 slov. Oswald, uppercase vizuál.]
    **Příklady:** Vyšší přilnavost. Delší výdrž. · Na umělou trávu a halu. · Slevu komunikujte jen po ověření.
  

  
    Body
    [2–4 krátké věty. Co je nové nebo co nabízíme. Pro koho. Proč to řešit teď.]
    **Příklad:** BU1 Light HG 2.0 jsou navržené pro umělou trávu, halu a tvrdší povrchy. Vylepšená 4mm HG pěna pomáhá s přilnavostí a extra vrstva v namáhané části dlaně prodlužuje výdrž.
  

  
    Bullet block
    
      - `[Benefit 1 — konkrétní]`

      - `[Benefit 2]`

      - `[Benefit 3]`

    
    **Příklad:** Vylepšená 4mm HG pěna ·

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

### brand/communication-channels.mdx

Channels
  Každý účet má svůj trh, jazyk a obsahový účel. Nemíchejte je bez důvodu.

## Facebook

| Účet | Odkaz | Trh | Jazyk | Co sem patří |
|------|-------|-----|-------|--------------|
| BU1 CZ/SK | [facebook.com/bu1.cz](https://www.facebook.com/bu1.cz) | Česko a Slovensko | čeština | Příspěvky s odkazy na `bu1.cz` pro CZ a `bu1.cz/sk` pro SK. Na Facebooku CZ/SK komunikujeme česky i pro společné CZ/SK posty. Primárně informace pro tyto trhy, doplněné o zajímavosti a úspěchy z celého světa. |
| BU1 sport | [facebook.com/Bu1gloves](https://www.facebook.com/Bu1gloves/) | zbytek světa | angličtina, případně další jazyk s vlajkou | Globální příspěvky a mezinárodní obsah. |

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
