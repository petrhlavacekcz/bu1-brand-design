# Shopify Mapping Guide

Tento soubor popisuje, jak pouzit `shopify-bridge.css` v Shopify tematu Symmetry bez zmen HTML struktury.

## Co soubor dela

`shopify-bridge.css` je adaptacni vrstva mezi BU1SPORT brand systemem a beznou strukturou Shopify/Symmetry.

Predevsim upravuje:
- hlavni CTA a jeho dominanci v buy boxu
- express checkout oddeleni a oslabeni
- zesileni ceny a title na produktove karte
- buy box spacing a hierarchii na PDP
- variant selector selected state a kontrast
- typografii: headings = Oswald, UI = Nunito Sans

Soubor nevklada nove HTML a neprestavuje layout tematu.

## Jak ho pouzit v Shopify

1. nahraj `outputs/theme.css` do `Assets`
2. nahraj `outputs/shopify-bridge.css` do `Assets`
3. pripoj oba soubory do layoutu tematu
4. `theme.css` musi byt nacteny driv nez `shopify-bridge.css`

Priklad vlozeni do `layout/theme.liquid`:

```liquid
{{ 'theme.css' | asset_url | stylesheet_tag }}
{{ 'shopify-bridge.css' | asset_url | stylesheet_tag }}
```

## Kam to vlozit

Doporucene misto:
- `layout/theme.liquid`

Alternativa:
- pokud tema pouziva centralni asset bundle nebo custom stylesheet include, vloz bridge tam, ale vzdy az po `theme.css`

## Co bridge prepisuje

### 1. CTA

Cili na bezne Shopify/Symmetry selektory jako:
- `.product-form__cart-submit`
- `.shopify-payment-button`
- `.shopify-payment-button__button`
- `.button`
- `.btn`

Efekt:
- `Add to cart` dostane dominantni styl
- express checkout je odsazeny, oddeleny a slabsi
- zachova se technicka funkcnost Shopify payment buttonu

### 2. Product card

Cili na bezne card selektory jako:
- `.card-wrapper`
- `.product-card`
- `.grid-product`
- `.card__heading`
- `.price`

Efekt:
- title dostane silnejsi typografii
- cena dostane vyssi vizualni vahu
- karta bude vice commerce a mene fashion

### 3. PDP buy box

Cili na:
- `.product__info-container`
- `.product-form`
- `.product-meta`
- `.product-form__buttons`

Efekt:
- jasnejsi spacing mezi bloky
- lepsi hierarchy title -> price -> CTA
- oddeleni hlavni akce od dalsich bloku

### 4. Variant selector

Cili na:
- `.variant-input-wrap`
- `.swatch-element`
- `.product-form__input`
- `.selector-wrapper`

Efekt:
- selected state je citelnejsi
- kontrast variant je silnejsi
- focus state je lepe rozpoznatelny

## Co je potreba rucne doladit

- realne selektory se mohou mezi verzemi Symmetry lehce lisit
- je potreba zkontrolovat, jak se jmenuji card a PDP bloky v konkretni sablone
- branded express checkout tlacitka si cast vizualu drzi podle platformy; bridge je umi oddelit a oslabit hlavne spacingem a okolnim kontextem
- pokud tema pouziva jine naming patterns pro quick buy nebo variant swatches, bude potreba dopsat 2-3 konkretni selektory
- fonty Oswald a Nunito Sans musi byt v tematu realne nahrane nebo pripojene

## Co nedelat

- neprepisovat HTML jen kvuli tomuto bridge
- nepridavat dalsi barvy mimo schvaleny system
- nezoslabovat Add to cart kvuli express checkout
- nepretvaret Symmetry na novy komponentovy framework
