# AGENTS.md

## OVERVIEW

BU1 Brand & Content System je interní repozitář pro brand, design, AI a obsah.

Drží jednu provozní pravdu.
Web je pouze prezentační vrstva.

Účel:
- držet pravidla značky na jednom místě
- držet tokeny v jednom canonical souboru
- generovat odvozené exporty bez ručního driftu

## ROLE AGENTA & AUTOMATICKÁ ÚDRŽBA

Jako AI agent operující na tomto repozitáři MÁŠ NÁSLEDUJÍCÍ POVINNOSTI, které zaručují, že pro tebe (i ostatní agenty) bude aplikace lehce udržovatelná:
1. **Automated Changelog:** Při každé změně (obsahu, konfigurace, scriptů) **MUSÍŠ VŽDY ZAZNAMENAT** změnu do souboru `CHANGELOG.md`. Dodržuj format s aktuálním dnem a správnou kategorií (`Added`, `Changed`, `Fixed`, `Removed`). 
2. **Konzistence dat:** Před modifikací json/md souborů si vždy přečti `AGENTS.md` a udržuj čistý styl. Nepřepisuj věci, o kterých s jistotou nevíš, že je lze odstranit.
3. **Předvídatelnost:** Nemaž staré konfigurační či design tokeny bez domluvy.
4. **Validation:** Pokud něco automatizuješ či upravuješ kód, ujisti se, že kód stále odpovídá best practices a nenabourá build (Astro).

## SOURCE OF TRUTH

Autoritativní jsou pouze tyto vrstvy:
- `src/content/docs/`
- `src/content/data/brand-tokens.json`
- relevantní doprovodná JSON data v `src/content/data/`

Pravidla:
- Markdown v `src/content/docs/` je canonical pro textová pravidla, procesy a šablony
- `src/content/data/brand-tokens.json` je canonical pro design tokeny a metriky
- nic mimo content layer není zdroj pravdy

Neber jako source of truth:
- `archive/`
- `generated/brand/`
- `public/brand/logos/`
- build výstupy
- UI snapshoty
- implementace v jiných repozitářích

## HOW TO USE THIS REPO (FOR AI)

Postup:
1. najdi relevantní docs soubory
2. najdi související JSON data
3. ověř, zda jde o canonical pravidlo nebo jen odvozený export
4. vytvoř výstup nebo změnu jen z canonical zdrojů
5. ZAKONČENÍ: Vždy zapiš do `CHANGELOG.md`, co jsi přidal/upravil. Zkontroluj, že app lze spustit/buildnout.

Povinné čtení před generováním obsahu:
- `src/content/docs/brand/tone-of-voice.mdx`
- `src/content/data/brand-tokens.json`
- relevantní soubor v `brand/`, `design/`, `ecommerce/`, `ai/`, `governance/` nebo `templates/`

Poznámka k personám:
- `src/content/docs/brand/personas.mdx` je zatím pending
- persony nevymýšlej
- neopírej o ně nová pravidla, dokud nejsou dodané

Pravidla práce:
- nejdřív čti obsahovou vrstvu, až potom exporty
- kombinuj pravidla napříč soubory, ale nevytvářej nové pravidlo bez opory v systému
- při změně tokenů vždy regeneruj `generated/brand/`
- drž jednu informaci na jednom místě

## RULES FOR AI OUTPUT

Styl:
- krátké věty
- přímočarý jazyk
- konkrétní formulace
- žádný marketingový bullshit
- žádné prázdné superlativy

Povinný základ:
- vždy vycházej z `src/content/docs/brand/tone-of-voice.mdx`
- vždy vycházej z `src/content/data/brand-tokens.json`
- vždy načti relevantní pravidla pro konkrétní úkol

Při generování textu:
- produkt a akce mají přednost před dekorací
- jedna hlavní myšlenka na odstavec
- jedna hlavní akce na jeden výstup, pokud kontext neříká jinak
- nevymýšlej persony, pokud nejsou dodané

## PROMPTING PATTERNS

### Generování produktu

Vstup:
- název produktu
- kategorie
- 3 až 5 benefitů
- materiál nebo konstrukce
- cílový uživatel
- CTA

Postup:
  - načti `src/content/docs/ai/product-description.mdx`
  - načti `src/content/docs/brand/tone-of-voice.mdx`
  - načti relevantní ecommerce pravidla
- respektuj `src/content/data/brand-tokens.json`

Výstup:
- krátký úvod
- bullet benefity
- krátký detail
- jedna jasná akce

### Generování IG postu

Vstup:
- co se komunikuje
- komu je post určený
- hlavní benefit
- typ postu
- CTA

Postup:
  - načti `src/content/docs/ai/instagram-post.mdx`
  - načti `src/content/docs/brand/tone-of-voice.mdx`
- drž první řádek tvrdý a samostatný

Výstup:
- hook
- 1 až 3 krátké věty
- jedna jasná akce

### Generování emailu

Vstup:
- subject cíl
- nabídka nebo novinka
- audience
- benefity
- CTA

Postup:
  - načti `src/content/docs/templates/email-template.mdx`
  - načti tone of voice
- pokud jde o promo nebo produkt, načti i ecommerce pravidla

Výstup:
- subject
- preheader
- hero line
- krátké body
- jedna hlavní akce

## DO NOT

- nevymýšlej nová pravidla mimo systém
- neignoruj tone of voice
- neignoruj canonical tokeny
- nevymýšlej persony
- neduplikuj stejný obsah do více souborů
- nepřepisuj canonical pravidla bez zadání
- nepřesouvej source of truth mimo `src/content/docs/` a `src/content/data/`

## FUTURE EXTENSION

Systém se bude rozšiřovat.

Pravidla pro rozšíření:
- nové části zapojuj do existující struktury
- zachovej jednoduchost
- nevytvářej paralelní pravdu
- preferuj rozšíření stávajících souborů před zbytečným zakládáním nových
