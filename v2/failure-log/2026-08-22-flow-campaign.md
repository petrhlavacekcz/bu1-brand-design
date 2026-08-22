# Failure log — BU1 FloW campaign exploration — 2026-08-22

Status: **rejected / learning input**

This file records a rejected v2 campaign exploration so the same mistakes are not repeated.

## Result

The generated FloW campaign set is **not an approved BU1 v2 reference**.

It fails truth QA and design QA.

## Truth failures

### Wrong price

The creative used `2 099 Kč`, incorrectly carried over from BU1 MiKos.

Current FloW PDP price at review time: `2 499 Kč`.

**Rule:** never reuse product price from previous creative context. Fetch or validate the canonical PDP / commerce source immediately before production if price is shown.

### Unsupported / weakly sourced copy

The creative introduced phrases such as:

- `RYCHLOST.`
- `pletená konstrukce`
- `3D grip prvky pro kontrolu`
- `moderní druhá kůže`

These were not validated as approved FloW product claims before rendering.

Validated PDP directions include:

- Contact Grip,
- Hyla cut,
- lightweight / flexible body,
- natural ball feel / control,
- silicone punching zone,
- strapless configuration,
- two removable straps,
- natural grass use,
- collaboration with Florian Wiegele.

**Rule:** creative copy may compress verified facts, but must not manufacture proof language.

## Design failures

### Product too small / passive

In the web hero and several placements, the exact product was present but behaved like a catalogue cutout rather than a dominant editorial hero.

**Rule:** exact product fidelity is necessary but not sufficient. v2 requires product-scale confidence and authored crop.

### Generic layout despite correct ingredients

The set used white space, condensed type and product-led color, but composition still felt like a generic template.

**Rule:** do not judge compliance by ingredient checklist. Judge the relationship of scale, hierarchy, asymmetry and tension.

### Weak typography fidelity

The execution used substitute system fonts instead of the approved v2 display typography.

**Rule:** final v2 typography must be deterministic with the approved typeface. A substitute font may be used only for a clearly labelled wireframe / structural mockup.

### Decorative lime graphics

Lime arcs and lines were added because the product contained lime.

**Rule:** product-led color means the product normally carries the color. Do not automatically propagate product color into decorative UI / motion graphics.

### One layout family resized across placements

Web, feed, PPC and Story shared too much of the same structural solution.

**Rule:** preserve brand DNA, not layout geometry. Each channel gets its own native composition mechanism.

## Production-process failure

The campaign was rendered before a mandatory factual preflight had been completed.

Correct sequence:

1. fetch current PDP / canonical facts,
2. identify exact product asset,
3. identify exact logo and typography assets,
4. choose visual mechanism,
5. choose production mode,
6. apply positive immutable-product constraint,
7. apply `negative-prompt.md`,
8. produce,
9. run truth QA,
10. run design QA.

## Additional product-layer warning

Do not destructively preprocess exact product photography if a clean cutout / alpha source exists.

Avoid automatic background-removal thresholds that may erase dark product pixels, alter edges or change visible materials. Product extraction is part of product fidelity.

## Automatic-reject criteria triggered by this attempt

- [x] wrong price
- [x] unsupported claims
- [x] unapproved typography approximation presented too close to final
- [x] generic/template-like composition
- [x] decorative product-color usage
- [x] insufficient channel differentiation

The creative must not be used as a v2 positive reference.
