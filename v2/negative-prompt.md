# BU1 v2 — Negative Prompt & Failure Registry

Status: **draft / mandatory within v2 AI creative workflows**

This document records failure modes already observed during BU1 v2 exploration. It is not generic advice. These are known ways BU1 creative becomes inaccurate, generic or visually off-brand.

Use this document as:

- a negative-prompt suffix for image / video generation,
- a preflight checklist before generation,
- a rejection checklist during QA,
- a learning registry when a new failure appears.

---

## 1. Immutable product rule

When an exact BU1 product asset is supplied, treat it as **immutable source truth**.

Allowed operations on the exact product layer:

- uniform scaling,
- translation / positioning,
- cropping by the canvas edge,
- masking without changing the visible product,
- subtle external shadow added behind the product,
- deterministic compositing.

Not allowed:

- non-uniform stretching,
- perspective warp,
- finger / panel reshaping,
- changing silhouette,
- regenerating missing areas,
- repainting materials,
- changing colorway,
- moving logos or marks,
- adding or removing construction details,
- changing cuff / strap geometry,
- changing palm / backhand design,
- AI relighting that materially changes product appearance,
- replacing the exact product with a synthetic lookalike.

If the model cannot keep the product exact, generate only the environment / composition reference and composite the exact product deterministically afterwards.

---

## 2. Mandatory negative prompt — exact product creative

Append this block to any AI generation involving a real sellable BU1 product.

```text
BU1 V2 — NEGATIVE / DO NOT

Do not redraw, reinterpret, restyle or regenerate the supplied BU1 product.
Do not replace it with a visually similar synthetic product.
Do not change the product silhouette, proportions, finger geometry, cuff, strap, seams, pattern, texture, material, colorway, logo placement or visible construction.
Do not stretch or perspective-warp the product.
Do not invent missing product areas.
Do not recolor the product to match the composition.
Do not invent, redraw or approximate BU1 logos, wordmarks, mascots or symbols.
Do not alter an official logo asset.
Do not invent product features, technologies, specifications, prices, athlete claims or performance claims.
Do not use outdated or guessed commerce data.
Do not use substitute condensed fonts and present them as the approved BU1 display typeface.
Do not create generic sports-ad aesthetics: fake stadiums, crowds, floodlights, lens flares, excessive particles, speed streaks, smoke, neon glows, gaming effects or dramatic grass pitches unless the brief explicitly requires that mechanism.
Do not add decorative cyan / product-color UI lines merely to make the layout feel branded.
Do not make Hot Rose a large decorative field; use it only as a small semantic signal when relevant.
Do not overload the layout with badges, icons, feature pills, cards or competing messages.
Do not turn every channel into the same resized layout.
Do not imitate another brand's logo, slogan or distinctive finished composition.
Do not prioritize visual spectacle over exact product fidelity, typography hierarchy and negative space.
Do not embed long copy where a short headline and one proof point are sufficient.
```

---

## 3. Hard positive constraint — product placement

Negative prompting alone is not enough. Pair it with this explicit positive instruction:

```text
PRODUCT LAYER MUST REMAIN EXACT
Treat Image A as an immutable cutout layer, not as a generative reference.
The visible pixels of the product should remain unchanged.
Compose the campaign around the product rather than transforming the product to fit the campaign.
If exact preservation is not possible, leave product generation out of the task and return only the background / layout / art-direction layer for later deterministic compositing.
```

---

## 4. Known failure modes from v2 exploration

### F01 — Synthetic lookalike instead of exact product

**Observed:** AI generated a glove inspired by the reference but changed the real product.

**Why it fails:** Commerce truth is broken even if the result looks polished.

**Prevention:** immutable product rule + deterministic composite.

**Automatic rejection:** yes.

### F02 — Product deformation

**Observed:** glove proportions / fingers / product geometry changed during generation or aggressive transformation.

**Why it fails:** The advertised item no longer matches the sellable product.

**Prevention:** no perspective warp, no non-uniform scaling, no generative redraw.

**Automatic rejection:** yes.

### F03 — Wrong product / wrong colorway

**Observed:** generated campaign boards drifted to a generic blue BU1 glove instead of the supplied MiKos asset.

**Why it fails:** Product identity is lost.

**Prevention:** product ID / exact source must be restated in the prompt and checked after generation.

**Automatic rejection:** yes.

### F04 — Wrong price or invented commerce data

**Observed:** generated layouts introduced a price different from the canonical PDP price.

**Why it fails:** Paid / commerce creative becomes factually wrong.

**Prevention:** inject exact price from the current commerce source; do not let the image model invent numeric copy.

**Automatic rejection:** yes.

### F05 — Unsupported product claims

**Observed:** creative copy introduced feature language that was not explicitly validated against the PDP / product source.

**Why it fails:** Visual design starts inventing product truth.

**Prevention:** claims must come from canonical product facts; creative generation may shorten approved facts but not invent new ones.

**Automatic rejection:** yes for commerce / paid media.

### F06 — Fake or approximate logo

**Observed:** image models generated distorted or invented BU1 marks.

**Why it fails:** Brand identity is visibly wrong.

**Prevention:** official logo is a deterministic overlay. If unavailable, omit standalone logo.

**Automatic rejection:** yes.

### F07 — Wrong typography disguised as BU1 typography

**Observed:** generic condensed substitute fonts were used instead of the approved v2 display direction.

**Why it fails:** A major part of the editorial character disappears.

**Prevention:** typography should be rendered deterministically with the approved font stack where final fidelity matters.

**Automatic rejection:** final production yes; moodboard no if clearly labeled.

### F08 — Generic sports-poster drift

**Observed:** stadium, floodlights, grass, smoke, particles, light trails and action effects started doing more visual work than the product and typography.

**Why it fails:** BU1 becomes indistinguishable from generic goalkeeper / football advertising.

**Prevention:** Light Editorial first; Dark Impact remains editorial and restrained.

**Automatic rejection:** when not explicitly justified by the concept.

### F09 — Decorative product-color UI

**Observed:** cyan / lime from the product was copied into arbitrary lines, boxes and interface decoration.

**Why it fails:** Product-led color becomes decorative theming rather than product emphasis.

**Prevention:** let the product carry most of its own color. Additional accent use must have a function.

### F10 — Hot Rose everywhere

**Observed:** the brand accent risked becoming a mandatory fill even where it conflicted with the product.

**Why it fails:** Different product personalities collapse into one palette.

**Prevention:** Hot Rose remains semantic: NOVINKA / DROP / SALE / active state.

### F11 — Too much copy / too many proof points

**Observed:** layouts became mini PDPs with headline, long paragraph, feature chips, price, collaboration, badges and CTA all competing.

**Why it fails:** Editorial hierarchy disappears.

**Prevention:** one headline + one support / proof + optional price / CTA.

### F12 — Template repetition across channels

**Observed:** social, Story and PPC became simple resizes of one layout.

**Why it fails:** Channel-native behavior is lost.

**Prevention:** preserve system DNA but change crop, density, hierarchy and mechanism by placement.

### F13 — Inspiration source becomes identity

**Observed risk:** Inspia / external references can pull the output toward another brand's aesthetic instead of BU1.

**Why it fails:** Research replaces authorship.

**Prevention:** extract mechanism only: crop, scale, lighting, shot order, motion, negative space.

---

## 5. Pre-generation gate

Before generating, verify:

- exact product asset identified?
- exact product model / colorway named?
- current price verified if shown?
- product claims sourced?
- exact logo asset available if logo is required?
- final typography method defined?
- production mode chosen: composite / photo / hybrid / AI?
- visual mechanism named?
- channel and aspect ratio explicit?
- negative prompt attached?

If any product-truth field is unknown, omit it rather than inventing it.

---

## 6. Post-generation automatic rejection gate

Reject the creative immediately if any of these are true:

- product shape changed,
- product colorway changed,
- product details were invented,
- wrong model shown,
- logo incorrect,
- price incorrect,
- claim unsupported,
- final typography is an unapproved approximation presented as canonical,
- the visual reads primarily as a generic sports template,
- a channel-specific safe zone is broken,
- another brand's identity is recognizably copied.

Only creatives passing this gate proceed to subjective design review.

---

## 7. Design review after truth QA

After factual / fidelity QA passes, evaluate:

- Is the product the hero?
- Does typography have the right visual weight?
- Is there enough negative space?
- Does the composition have authored tension rather than template balance?
- Does product color remain special?
- Is Hot Rose semantic?
- Is copy short enough?
- Is technical proof meaningful rather than decorative?
- Does this placement feel native to the channel?
- Does it look unmistakably BU1 v2?

Truth QA comes before taste QA.

---

## 8. Learning rule

Whenever a generated output is rejected for a **new repeatable reason**, add it to this registry with:

- failure ID,
- observed behavior,
- why it fails,
- prevention rule,
- whether it is an automatic rejection.

The goal is for the v2 creative system to improve from failed outputs instead of repeatedly rediscovering the same mistakes.
