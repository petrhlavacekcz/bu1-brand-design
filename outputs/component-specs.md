# BU1SPORT Component Specs

Tyto specs jsou odvozeny ze `/source` a jsou urcene pro upravu Shopify Symmetry, ne pro stavbu noveho design systemu od nuly.

## 1. Button

### Primary button

Pouziti:
- Add to cart
- hlavni CTA v commerce blocich

Vzhled:
- background: `#d2147c`
- text: `#FFFFFF`
- border: `#d2147c`
- font: Oswald
- uppercase
- vyska min. `52px`
- horizontalni padding min. `24px`

Pravidla:
- musi byt nejvyraznejsi akce v buy boxu
- muze mit shadow, ale jen u primary CTA
- preferovany hover je tmavsi Hot Rose nebo vyssi kontrast
- prechod do Onyx je povoleny jen pokud v danem kontextu funguje lepe

### Secondary button

Pouziti:
- sekundarni akce mimo hlavni rozhodnuti
- podpurne commerce akce, ktere nejsou hlavnim nakupnim krokem

Vzhled:
- background: `#FFFFFF`
- text: `#141414`
- border: `#141414`
- stejna typografie jako primary

Pravidla:
- musi byt slabsi nez Add to cart
- nesmi mit silnejsi kontrast, vetsi plochu ani vyraznejsi shadow nez primary
- pokud je v buy boxu, ma byt odsazen od primary CTA

### Express checkout action

Pouziti:
- Shop Pay
- Apple Pay
- dalsi platformni express checkout akce

Charakter:
- nejde o standardni secondary button pattern
- jde o platformni sekundarni akce, ktere mohou mit vlastni vizualni pravidla platformy

Pravidla:
- nesmi vizualne konkurovat Add to cart
- musi byt oddelene od hlavniho CTA spacingem nebo samostatnou skupinou
- nesmi prevzit hlavni fokus v buy boxu

## 2. Product Card

Ucel:
- rychle scanovatelna
- prodejni
- ne fashion editorial

Vizualni priority:
1. obrazek produktu
2. title
3. price
4. sekundarni commerce signaly (badge, rating, quick buy)

Pravidla layoutu:
- karta ma mit cisty bily podklad
- title a price musi byt ihned viditelne bez hoveru
- cena ma byt silna, tmava a kontrastni
- cena musi mit vyssi vizualni vahu nez doprovodne texty
- card musi byt dobre scanovatelna i bez hoveru
- badge je doplnkovy, ne hlavni fokus
- quick buy je volitelny a nesmi prebit title ani price
- nepouzivat jemne pastelove akcenty, dekorativni overlaye ani slaby text

Doporucene chovani v Symmetry:
- zachovat existujici grid
- zesilit title a price uvnitr stavajici card struktury
- nepreskladavat kartu do editorial layoutu

## 3. PDP Buy Box

Ucel:
- podporit nakup bez chaosu
- drzet jasnou hierarchii

Vizuální priorita:
1. nazev produktu
2. cena
3. Add to cart
4. varianty

Pravidla:
- Add to cart je prvni vizualne dominantni akce
- cena musi byt okamzite citelna a blizko CTA
- variant selector nesmi rozbit hierarchii
- varianty mohou byt technicky a interakcne pred CTA
- nesmi vsak vizualne rozbit dominanci hlavniho nakupniho kroku
- Shop Pay nebo express checkout musi byt az za hlavnim CTA nebo vizualne oddelene
- nepouzivat vice stejne silnych CTA v jednom buy boxu
- DOM poradi muze zustat podle technickych potreb Shopify Symmetry

Symmetry implementace:
- zachovat zakladni PDP strukturu tematu
- pracovat hlavne s typografii, spacingem, borderem a poradi vizualni vahy

## 4. Variant Selector

Ucel:
- rychly vyber varianty
- citelnost pri scanovani

Vzhled:
- bile pozadi
- cerna hranice
- cerna typografie
- selected stav musi byt okamzite rozpoznatelny
- preferovane reseni je silny kontrast (Onyx fill / White text nebo silny border)
- Hot Rose muze byt pouzita jako akcent, ale nema byt povinna

Pravidla:
- velikost targetu min. `48px`
- nepouzivat soft chip styl ani jemne sede stavy jako hlavni volbu
- pokud je varianta nedostupna, ma byt stale citelna, ale oslabena

## 5. Global Commerce Rules

- product je vzdy hlavni
- ruzova slouzi pro akci, ne pro dekoraci ploch
- commerce ma byt citelna a prodavat
- campaign muze byt silna jen mimo primarni nakupni tok
- UI muze pouzivat rgba a opacity derivace brand barev pro border, shadow a jemne separace
- mezi hlavnim CTA a express checkout musi byt jasne oddeleni spacingem nebo skupinou
- badge max 1 az 2 na produkt
- badge je doplnkovy signal, ne hlavni fokus
- button label ma byt kratky, silny a snadno scanovatelny
- cena musi byt okamzite scanovatelna napric e-shopem
- cena musi mit vyssi vizualni vahu nez doprovodne texty
- cena nesmi splývat s title ani meta informacemi
- prvky nesmi mit stejnou vizualni vahu, pokud nemaji stejnou prioritu
- UI musi vzdy jasne rikat, co je hlavni a co je vedlejsi
- spacing se pouziva pro tvorbu hierarchie, ne jen pro estetiku
- dulezite prvky musi mit vice prostoru kolem sebe
- hlavni CTA musi byt oddeleno od ostatnich prvku
