# BU1 v2 — Prompt Library

Status: **draft / canonical within v2**

This library contains reusable prompt patterns for BU1 creative production. It is designed for agents and image / video tools working with real BU1 assets.

The library complements `ai-prompt-system.md`. Use the safest production mode first: exact assets and deterministic composition when fidelity matters.

---

## 0. Global prompt prefix

Use this block in any prompt involving a real BU1 product.

```text
BU1 V2 GLOBAL RULES

Image A is the exact BU1 product reference.
Preserve the exact sellable product:
- silhouette,
- proportions,
- colorway,
- pattern,
- material appearance,
- official marks and logos,
- construction details visible in the reference.

Do not redesign, recolor, simplify, mutate or invent the product.
Do not invent another BU1 logo, mascot or wordmark.
Use official supplied logo assets only; if exact logo fidelity cannot be maintained, omit the standalone logo rather than approximating it.

BU1 v2 art direction:
- premium editorial performance,
- product-first hierarchy,
- bold condensed display typography,
- strong negative space,
- intentional asymmetry,
- restrained monochrome foundation,
- product color as the primary visual accent,
- Hot Rose only as a small semantic signal when relevant,
- concise goalkeeper-specific technical proof,
- no generic stadium backgrounds,
- no gaming / neon aesthetic,
- no random gradients or lens flares,
- no generic sports-template clutter.
```

---

## 1. Web hero — Light Editorial

Use for homepage or campaign landing hero.

```text
Create a BU1 homepage hero for [PRODUCT] in [ASPECT RATIO].

OBJECTIVE
Introduce the product with premium editorial impact and clear commerce hierarchy.

PRODUCT
Use Image A as the exact product. Follow BU1 V2 GLOBAL RULES.

BRAND / UI
Use the official BU1 storefront header / menu reference if supplied.
Keep navigation visually quiet and monochrome.

VISUAL MECHANISM
Oversized exact product crop with strong scale contrast.
Place the product as the dominant hero on one side of the canvas and allow it to crop beyond the frame.
Use large condensed uppercase typography as the second hero.
Maintain generous white / warm-off-white negative space.
Use small technical information as an editorial annotation layer.

COPY
Label: [LABEL]
Headline: [HEADLINE]
Support: [SUPPORT]
Proof: [PROOF]
Price: [PRICE]
CTA: [CTA]

COLOR
Use the real product color as the primary accent.
Use Hot Rose only for [LABEL] if semantically appropriate.

AVOID
No busy background, no fake stadium, no generic ecommerce card mosaic, no invented product detail.
```

### MiKos example

```text
Label: NOVINKA
Headline: MIKOS.
Support: LEHKOST. CIT. JISTOTA.
Proof: Contact Grip · NC střih · 2 odnímatelné pásky
Price: 2 099 Kč
CTA: PROHLÉDNOUT MIKOS
```

---

## 2. Web hero — Ghost Typography

```text
Create a BU1 web hero using the Ghost Typography visual mechanism.

Use the exact supplied BU1 product as the hero.
Place a giant low-contrast product name or campaign word behind the product as a structural graphic layer.
The ghost text must not reduce readability of the actual headline.
Keep the foreground copy short and black on a light neutral foundation.
Allow the product to overlap the ghost typography and crop beyond the viewport.
Use product-led color and one small semantic Hot Rose label only if needed.

Hierarchy:
1. exact product,
2. hero product name,
3. short support line,
4. price / CTA,
5. micro proof.
```

---

## 3. Instagram / Facebook feed — 4:5 launch poster

```text
Create a BU1 social-feed launch creative in 4:5.

OBJECTIVE
Stop scroll in under one second and introduce [PRODUCT] as a premium BU1 launch.

Use the exact supplied product.

VISUAL MECHANISM
Oversized editorial product poster.
- product fills roughly 45–70% of the frame,
- confident crop beyond one or more edges,
- short high-impact headline,
- clean negative space,
- optional small technical annotation,
- no website navigation.

COPY
[LABEL]
[HEADLINE]
[SUPPORT]
[OPTIONAL PRICE OR ONE PROOF]

Keep embedded text to the minimum required.
Do not include every product fact.
The caption / ad copy can carry secondary information.
```

### MiKos default

```text
NOVINKA
MIKOS.
LEHKOST. CIT. JISTOTA.
2 099 Kč
```

---

## 4. Social feed — Technical Proof

Use when one product technology is the message.

```text
Create a BU1 4:5 technical-proof social creative.

Use the exact product.
Make the product or a real macro detail the visual hero.
Use a very short headline focused on one proven feature.

Preferred composition:
- large product / macro detail,
- headline on opposite side,
- thin line / dot annotation,
- one secondary factual line,
- price optional.

COPY
Product: [PRODUCT]
Primary proof: [PROOF]
Secondary: [SECONDARY]
Price: [OPTIONAL]

Example:
MIKOS.
CONTACT GRIP.
NC střih · 2 pásky
2 099 Kč
```

---

## 5. Social feed — Ghost Word

```text
Create a premium BU1 square or 4:5 social poster using giant ghost typography.

Use the exact supplied product.
Use one huge pale word such as [PRODUCT NAME] or BU1 as a low-contrast background structure.
Place the exact product over the word so the layers interact spatially.
Keep foreground copy extremely short.
Do not make the ghost word the strongest element; the real product remains the hero.

Foreground copy:
[LABEL]
[HEADLINE]
[OPTIONAL PRICE]
```

---

## 6. Social / paid — Dark Product Portrait

```text
Create a BU1 Dark Impact creative in [4:5 / 9:16 / 1:1].

Use the exact supplied product.
Foundation: deep black / charcoal.
Typography: large white condensed uppercase.
Product: large, dramatically lit, but still color-accurate and exact.
Use controlled vignette / subtle texture only if it adds depth.
Preserve clean negative space.
Use the product's real accent color as the only strong color event.
Hot Rose may appear only in one small semantic label.

COPY
[LABEL]
[HEADLINE]
[SUPPORT]
[PRICE OR PROOF]
[OPTIONAL CTA]

Avoid gaming aesthetics, excessive particles, glow effects and fake action environments.
```

---

## 7. Story / Reels cover — 9:16

```text
Create a native 9:16 BU1 Story creative.

Use the exact product.
Design for mobile safe zones from the start.
Keep essential copy away from platform UI.

Hierarchy:
1. small semantic label,
2. massive short headline,
3. oversized product,
4. one price / proof,
5. CTA above lower UI safe zone.

Visual mechanism:
product rises from or crops through the bottom / side edge, creating strong vertical momentum.

COPY
[LABEL]
[HEADLINE]
[SUPPORT]
[PRICE]
[CTA]

Do not add navigation or desktop-web UI.
```

---

## 8. Meta PPC — clean conversion static

```text
Create a BU1 Meta paid-social static for [PLACEMENT / FORMAT].

HYPOTHESIS
[one reason why this concept should improve attention / click / conversion]

PRODUCT
Use the exact supplied product.

MESSAGE
One primary proposition only: [PROPOSITION].

VISUAL
Use one dominant product crop and one short headline.
Use a clean BU1 v2 Light Editorial or Dark Impact foundation.
Show price / offer only if it is part of the hypothesis.
Use embedded CTA only if the creative concept benefits from it.

COPY
Headline: [HEADLINE]
Proof: [ONE PROOF]
Price / offer: [OPTIONAL]
CTA: [OPTIONAL]

Do not insert secondary claims that dilute the test.
```

---

## 9. PPC — benefit split test

```text
Create three BU1 paid-social variants for the same exact product.
Keep product, layout family and format constant.
Change only the primary proof message.

Variant A: [PROOF A]
Variant B: [PROOF B]
Variant C: [PROOF C]

Do not change unrelated visual variables.
Return three clearly comparable creatives.
```

Example MiKos:

```text
A: LEHKOST.
B: CONTACT GRIP.
C: PŘIROZENÝ POCIT.
```

---

## 10. Google Display / PMax — crop-safe

```text
Create a crop-safe BU1 display asset for [FORMAT].

Use the exact supplied product.
Keep important product detail inside the central crop-safe zone.
Use minimal text — ideally product name plus one short benefit only.
Leave generous neutral space so automated cropping does not destroy the composition.
Do not embed tiny technical text.
Do not rely on a CTA rendered inside the image.
```

---

## 11. Print poster

```text
Create a BU1 print poster for [A2 / A3 / retail size].

Use the exact supplied product at very high visual scale.
Exploit physical whitespace and distance readability.
Use one large display statement and one small technical annotation block.
Keep image resolution suitable for print.
Use Light Editorial or Dark Impact according to the campaign.
Avoid dense sales-leaflet information.

COPY
[HEADLINE]
[ONE PROOF OR PRODUCT NAME]
[OPTIONAL PRICE]
[OPTIONAL QR / CTA PLACEHOLDER]
```

---

## 12. Packaging concept

```text
Create a BU1 packaging concept for [PRODUCT / RANGE].

Do not reproduce the web PDP.
Use a restrained monochrome base and one product-led identifying accent.
The front should contain only:
- official BU1 brand,
- model / range name,
- one relevant visual signal or semantic label.

Reserve side / back surfaces for:
- technical details,
- materials,
- size,
- care,
- legal information,
- QR / support.

The packaging should feel premium, technical and editorial, not decorative.
```

---

## 13. Athlete × product social

```text
Create a BU1 athlete-collaboration creative.

Use the supplied real athlete image and exact BU1 product references.
Do not alter athlete identity or product design.

VISUAL MECHANISM
Editorial athlete portrait or action still + product relationship.
The athlete should not overpower product recognition when the asset is product-led.
Use restrained typography and one factual collaboration line.

COPY
[PRODUCT]
[SHORT CLAIM]
Vyvinuto s [ATHLETE]
[OPTIONAL PRICE / CTA]
```

---

## 14. Photography art-direction prompt — product studio

Use this for pre-production rather than synthetic replacement of the product.

```text
Design a photography shot list for a BU1 [PRODUCT] studio shoot.

Creative direction: BU1 v2 Light Editorial.

Required images:
- exact clean whole-product hero,
- front / back / palm / side where relevant,
- macro material detail,
- macro technology / grip detail,
- dramatic editorial crop,
- image with intentional negative space for headline,
- vertical crop,
- horizontal crop.

Lighting:
clean directional studio light, real color, strong texture readability, restrained shadow.

Composition:
premium editorial product photography, asymmetric framing, no generic sports props unless conceptually justified.
```

---

## 15. Photography art-direction prompt — athlete

```text
Design a BU1 athlete photography brief for [ATHLETE] using [PRODUCT].

Capture:
- preparation / putting glove on,
- strap / fit detail,
- ready stance,
- hand detail,
- ball contact,
- save action,
- post-save calm,
- editorial portrait with product clearly visible.

Creative direction:
real goalkeeper environment, restrained composition, authentic body language, product accuracy, BU1 v2 editorial performance.

Deliver both vertical and horizontal crops.
```

---

## 16. Video concept — 10–12 second launch

```text
Create a 10–12 second BU1 product-launch video concept for [CHANNEL].

Use the exact real product in all identifiable shots.

HOOK 0–1.5 s
Extreme macro or unexpected crop that reveals one distinctive product detail.

SHOT 2
Fit / strap / hand preparation.

SHOT 3
Ready position or movement into action.

SHOT 4
One real performance proof moment: save, catch, contact or grip.

SHOT 5
Exact product hero / freeze frame.

END FRAME
[PRODUCT].
[SHORT CLAIM]
[OPTIONAL CTA]

CAMERA
Define lens feel, movement and speed intentionally.

MOTION DESIGN
Use BU1 v2 typography, hard cuts, scale changes, controlled tracking and product-led color.
Avoid unnecessary generated effects.
```

---

## 17. Video — Inspia/reference mechanism extraction

```text
Analyze the supplied video / visual reference as an art-direction source.

Do not copy the brand, product, slogan or exact finished layout.

Extract only:
- first-2-second hook,
- shot sequence,
- framing,
- lens / perspective feel,
- camera movement,
- lighting,
- transition mechanics,
- reveal pattern,
- typography timing,
- final product hero behavior.

Then translate the mechanism into a BU1-native storyboard using the exact supplied BU1 product and BU1 v2 design system.
```

---

## 18. Concept generation prompt — creative exploration

Use before production when multiple ideas are desired.

```text
Generate 8 distinct BU1 v2 creative concepts for [PRODUCT] and [CHANNEL].

Use the exact known product facts only.
Do not generate finished copy longer than one short headline plus one support line.

For each concept provide:
- concept name,
- visual mechanism,
- why it may stop attention,
- preferred production mode: real / composite / hybrid / AI,
- headline direction,
- proof point,
- format recommendation,
- what variable it would test.

Ensure concepts are genuinely different rather than resizes of one layout.
Include a mix of Light Editorial and Dark Impact.
```

---

## 19. Reference-to-pattern prompt

```text
Review this visual reference and convert it into a reusable BU1 creative pattern.

Return:

pattern_id:
source_type:
medium:
visual_mechanism:
why_it_works:
composition:
scale_behavior:
crop_behavior:
lighting:
typography_behavior:
color_behavior:
motion_behavior_if_any:
bu1_applications:
preferred_production_mode:
risks:
do_not_copy:

Do not preserve another brand's identity. Preserve only transferable visual mechanics.
```

---

## 20. Final QA prompt

```text
Audit this BU1 creative against BU1 v2.

Score 0–2 for each:
- exact product fidelity,
- exact logo fidelity,
- one clear hero,
- product scale,
- typography hierarchy,
- negative space,
- authored asymmetry,
- product-led color,
- semantic use of Hot Rose,
- technical proof accuracy,
- copy brevity,
- channel safe zones,
- absence of generic template effects.

List every failure before suggesting improvements.
Any invented product or logo detail is an automatic fail for commerce / paid-media production use.
```

---

## 21. MiKos reference prompt pack

Known launch copy currently used in v2 exploration:

```yaml
product: BU1 MiKos
label: NOVINKA
headline: MIKOS.
support: LEHKOST. CIT. JISTOTA.
proof:
  - Contact Grip
  - NC střih
  - 2 odnímatelné pásky
collaboration: Vyvinuto s Mirkem Kosem
price_cz: 2 099 Kč
cta: PROHLÉDNOUT MIKOS
```

Product facts and prices must be revalidated against the canonical commerce source before production publication.
