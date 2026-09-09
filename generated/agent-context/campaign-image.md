# BU1 Campaign / Image Generation Context

> Generated. Not canonical. Edit only `src/content/docs/` or `src/content/data/`.

Purpose: Generuj campaign photography layer bez driftu produktu a finální brand prvky skládej deterministicky.

## Canonical sources

- src/content/docs/ai/image-generation.mdx
- src/content/docs/design/campaign-art-direction.mdx

## Compact context

### ai/image-generation.mdx

AI Image
  Generuj scénu. Ne redesign produktu. Produktová identita, logo a finální typografie musí zůstat pod kontrolou.

## Povinné vstupy

Před generováním musí být jasné:

  - cíl assetu

  - kanál a poměr stran

  - ověřená produktová fakta

  - autoritativní produktová reference

  - schválená vizuální reference, pokud existuje

  - požadovaná photography layer a co se doplní až ve finální sazbě

## Product Fidelity Lock

AI může produkt znovu nasvítit, zasadit do prostředí nebo re-renderovat. Nesmí ho redesignovat.

Zachovej všechny identifikační prvky viditelné v referenci:

  - siluetu a proporce

  - panely, švy a konstrukci

  - materiály a textury

  - barvy a vzory

  - fyzické logo, nápisy a jejich umístění

  - funkční prvky jako grip, silikon, manžeta nebo pásek

Pokud reference neukazuje stranu nebo detail nutný pro claim, **nevymýšlej ho**. Použij jinou kompozici nebo si vyžádej správnou referenci.

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

### design/campaign-art-direction.mdx

Campaign
  Editorial commerce, ne generický sports poster. Produkt první. Typografie druhá. Efekty jen když mají jasný důvod.

## Hlavní princip

**BU1 campaign = editorial commerce, not sports poster.**

Kampaň musí působit jako přirozené pokračování BU1 e-commerce systému. Nemá vypadat jako samostatný reklamní svět přilepený ke značce.

  - produkt je hlavní vizuální motiv

  - kompozice je čistá, plošná a snadno skenovatelná

  - typografie vytváří energii, ne efekty kolem produktu

  - whitespace je aktivní součást layoutu

  - Hot Rose označuje akci nebo důležitý stav, ne atmosféru

## Hierarchie referencí

Když jsou pro úkol dodané schválené vizuální reference, použij toto pořadí:

1. explicitní canonical zákazy, tokeny, logo a produktová fakta
2. schválené vizuální reference pro feel, kompozici, hustotu a práci s prostorem
3. task-specific zadání a formát
4. kreativní interpretace

Schválená reference může zpřesnit feel. Nikdy nesmí přepsat produktovou pravdu, logo pravidla nebo explicitní zákaz z canonical dokumentace.

[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]

## Design token summary

- Primary / Hot Rose: #D2147C
- Onyx / dark hover: #141414
- Primary CTA hover: #141414
- Primary CTA active: #282828
- Heading font: Oswald
- Body font: Nunito Sans
- Full canonical token source: `src/content/data/brand-tokens.json`
