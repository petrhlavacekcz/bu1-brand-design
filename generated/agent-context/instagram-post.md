# BU1 Instagram Post Context
> Generated. Not canonical. Edit only `src/content/docs/` or `src/content/data/`.
Purpose: Piš krátké social výstupy podle kanálu, trhu, publika a ověřených faktů.
## Canonical sources
- src/content/docs/ai/context-map.mdx
- src/content/docs/ai/instagram-post.mdx
- src/content/docs/brand/tone-of-voice.mdx
- src/content/docs/brand/language.mdx
- src/content/docs/brand/personas.mdx
- src/content/docs/brand/communication-channels.mdx
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

### ai/instagram-post.mdx

Social
  Instagram může být živější, ale pořád musí být jasný, podpůrný a obchodně použitelný.

## Povinné vstupy

  - co přesně se komunikuje

  - komu je post určený

  - na jakém účtu post vychází

  - v jakém jazyce post vychází

  - hlavní benefit

  - cílová akce

  - jestli jde o novinku, edukaci, reference nebo termín

## Struktura captionu

  - tvrdý první řádek

  - 1 až 3 krátké věty s pointou

  - konkrétní CTA

## Pravidla

  - první řádek musí fungovat samostatně

  - používej krátké odstavce

  - nepiš dlouhé storytelling intro

  - emoji drž účelně, obvykle 1 až 3

  - hashtagy drž střídmě

  - produkt nebo akce musí být jasné do pár sekund

## Směry

  - novinka nebo drop

  - připomenutí benefitu

  - jasný drop nebo termín

  - krátká reference nebo důkaz z praxe

## Reálné příklady

  
    Produktový post
    **Příklad:** BU1 Light HG 2.0 pro umělou trávu. Vylepšená HG pěna, vyšší přilnavost a extra ochrana dlaně pro tvrdší povrchy. **Vyberte velikost.**
  
  
    Edukace
    **Příklad:** BU1 FloW je novinka. Před publikací doplňte konkrétní benefity z ověřeného produktového zadání a nepřebírejte staré claimy z doprodávaného BU1 Gator.
  

## Čemu se vyhnout

  - generický motivační text

  - emoji bez funkce

  - nejasná pointa bez CTA

  - stylizovaný text bez vazby na produkt nebo informaci

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

## Relevantní glossary slice

- goalkeeper_gloves: cs: brankářské rukavice | en: goalkeeper gloves
- goalkeeper: cs: brankář | en: goalkeeper
- foam_latex: cs: pěna | en: latex foam
- palm: cs: dlaň | en: palm
- grip: cs: grip / přilnavost | en: grip
- safe_grip_feel: cs: jistota v rukou | en: secure feel in the hands
- ball_control: cs: kontrola míče | en: ball control
- ball_feel: cs: cit pro míč | en: feel for the ball
- fit: cs: fit / padnutí | en: fit
- negative_cut: cs: negativní střih | en: negative cut
- hybrid_cut: cs: hybridní střih | en: hybrid cut
- wrist: cs: zápěstí | en: wrist
- strap: cs: pásek | en: strap
- without_strap: cs: bez pásku | en: strapless
- removable_straps: cs: odnímatelné pásky | en: removable straps
