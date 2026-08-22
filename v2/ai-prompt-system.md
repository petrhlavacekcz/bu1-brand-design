# BU1 v2 — AI & Prompt System

Status: **draft**

AI should help BU1 discover, adapt and produce strong creative. It must not become a source of visual hallucinations or product inaccuracy.

## 1. Role of inspiration sources

Inspia and similar libraries are treated as **art-direction references**, not as production dependencies.

Use them to extract:

- composition,
- scale,
- crop,
- lighting,
- camera angle,
- material treatment,
- negative space,
- typography placement,
- visual hook,
- shot sequencing,
- camera motion,
- editing rhythm,
- reveal mechanics.

Do not blindly copy:

- another brand,
- another product,
- exact layouts,
- slogans,
- logos,
- trademarked visual identity.

## 2. Standard workflow

```text
creative problem
    ↓
reference discovery
    ↓
visual mechanism extraction
    ↓
BU1 adaptation
    ↓
production-mode decision
    ↓
exact asset composition / generation
    ↓
brand QA
    ↓
channel QA
    ↓
measurement / learning
```

## 3. Mechanism extraction

A useful reference should be translated into a reusable mechanism.

Example:

```yaml
pattern: monumental-product
source: inspia
medium: photo
why_it_works:
  - extreme scale contrast
  - dominant product
  - asymmetrical composition
  - strong negative space
bu1_use:
  - homepage launch hero
  - Meta static
  - retail poster
production:
  preferred: exact-product composite
  ai_required: false
```

Store the principle, not a dependency on another brand’s prompt.

## 4. Production modes

Always choose the simplest reliable production method.

### A. Exact asset composition

Preferred when:

- product fidelity matters,
- logo fidelity matters,
- typography must be deterministic,
- commerce information must be exact.

Typical tools:

- HTML/CSS,
- design software,
- deterministic compositing,
- template engine.

### B. Real photo / video production

Preferred when:

- athlete authenticity matters,
- grip / fit / material behavior matters,
- product interaction is the story.

AI may still be used for pre-production, shot lists, storyboards or extensions.

### C. Exact product + generated environment

Allowed when:

- the background or environment is imaginative,
- product remains an exact composited asset,
- the generated scene does not imply false product properties.

### D. Full AI scene

Suitable mainly when:

- no exact product is visible,
- the creative is conceptual,
- the asset is a background, atmosphere or abstract story layer.

Do not use full AI generation for a real sellable product if fidelity cannot be guaranteed.

## 5. Prompt architecture

A BU1 production prompt should include:

### Objective

What is this asset expected to achieve?

### Channel and format

Examples:

- homepage hero 16:9,
- Instagram feed 4:5,
- Story 9:16,
- Meta ad 1:1,
- print poster A2.

### Exact asset rules

State explicitly:

- which image is the exact product reference,
- which asset is the exact logo,
- what may not be changed,
- whether typography will be generated or composed later.

### Visual mechanism

Describe the intended mechanism, for example:

- monumental product,
- ghost word behind product,
- macro detail,
- diagonal motion,
- technical annotation,
- dark product portrait.

### BU1 v2 constraints

Include:

- product-first hierarchy,
- monochrome foundation,
- product-led accent color,
- Hot Rose only as semantic accent,
- short condensed headline,
- minimal technical detail,
- no generic sports template effects.

### Copy

Provide exact approved copy. Do not ask the model to invent product claims where facts matter.

## 6. Static creative prompt skeleton

```text
Create a [CHANNEL / FORMAT] asset for BU1.

OBJECTIVE
[one sentence]

EXACT PRODUCT
Image A is the exact BU1 product. Preserve its real silhouette, colors, pattern, materials, markings and proportions. Do not redesign, recolor or invent product details.

EXACT BRAND
Use only official supplied BU1 logo assets. Never invent or redraw the logo.

VISUAL MECHANISM
[mechanism extracted from reference]

BU1 V2 ART DIRECTION
- premium editorial performance
- oversized product
- strong asymmetry
- bold condensed headline
- controlled negative space
- monochrome foundation
- product color as main accent
- Hot Rose only for a small semantic label if needed
- minimal technical proof
- no generic sports-template effects

COPY
[exact copy]

OUTPUT
[format / safe zones / text requirements]
```

## 7. Video prompt / brief skeleton

```text
Create a BU1 [duration] video concept for [channel].

PRODUCT
Use the exact real BU1 product in all identifiable product shots.

HOOK
Describe the first 1–2 seconds.

SHOT GRAMMAR
1. macro / detail
2. preparation / fit
3. action
4. proof moment
5. hero product
6. end frame

CAMERA
Specify movement, lens feel, framing and speed.

LIGHT
Specify the intended mood.

BRAND
Follow BU1 v2 typography, monochrome foundation and product-led color behavior.

COPY
Keep on-screen copy minimal and exact.
```

## 8. Reference library metadata

When a visual reference is worth keeping, record:

```yaml
id: VP-YYYYMM-XX
source: inspia | campaign | editorial | photography | other
medium: photo | static-ad | video | motion
reference_url: ...
mechanism: ...
why_it_works:
  - ...
bu1_applications:
  - ...
production_preference: real | composite | hybrid | ai
product_fidelity_required: true
notes: ...
```

Do not treat a reference URL as a permanent dependency. The extracted pattern is the durable asset.

## 9. QA gates

### Product QA

- exact model?
- exact colorway?
- correct marks?
- no invented features?

### Logo QA

- official asset?
- correct proportions?
- no generated approximation?

### Visual QA

- product clearly dominant?
- hierarchy intentional?
- enough negative space?
- typography appropriate?
- color restrained?
- no template noise?

### Copy QA

- approved facts only?
- concise enough?
- correct language / diacritics?
- price current and appropriate for the market?

### Channel QA

- correct format?
- mobile readability?
- safe zones?
- no critical copy that will be cropped?

## 10. Learning loop

Creative inspiration becomes more valuable when connected to performance.

Track:

- pattern / mechanism ID,
- concept ID,
- channel,
- product,
- audience,
- hypothesis,
- variant,
- result.

Over time BU1 should learn not only which finished ads win, but which **visual mechanisms** repeatedly work for specific products, audiences and placements.
