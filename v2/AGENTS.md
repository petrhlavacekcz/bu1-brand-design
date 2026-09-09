# AGENTS — BU1 Brand & Design v2

This directory is a **draft next-generation design system**. It does not replace v1 until explicitly approved.

## Source priority inside v2

When a task explicitly targets BU1 v2, read in this order:

1. `v2/brand-direction.md`
2. `v2/visual-system.md`
3. `v2/creative-playbook.md`
4. `v2/prompt-library.md`
5. `v2/negative-prompt.md`
6. `v2/ai-prompt-system.md`
7. relevant exact product and logo assets from the repository / product source

## Non-negotiable rules

- Never invent or redraw a real BU1 product when exact product imagery exists.
- Treat an exact sellable product asset as an immutable product layer: no non-uniform stretch, perspective warp, synthetic redraw or material/color change.
- Never generate or approximate the BU1 logo. Use exact official assets.
- Product color is normally the primary accent.
- Hot Rose is semantic, not mandatory decoration.
- Prefer short copy and strong hierarchy.
- Product and display typography should be the dominant visual masses.
- Use asymmetry, crop and scale deliberately.
- Avoid generic sports-ad templates, fake stadiums, random neon, decorative gradients and visual clutter unless a reviewed concept explicitly requires them.
- Never invent prices, product features, athlete claims or commerce facts. Validate them against the current canonical source before production use.

## Mandatory negative prompt / failure registry

For every AI task involving a real sellable BU1 product, read and apply `v2/negative-prompt.md`.

The mandatory sequence is:

1. identify exact product and canonical facts,
2. choose production mode,
3. attach the immutable-product positive constraint,
4. attach the BU1 v2 negative prompt,
5. generate / compose,
6. run truth QA,
7. only then run subjective design QA.

Any output with a deformed or synthetic lookalike product, wrong logo, wrong product/colorway, wrong price or unsupported claim is an automatic reject. Do not attempt to justify or polish it.

## AI / reference rule

Inspia and other creative references are sources of **visual mechanisms and art direction** only.

Extract things such as:

- scale,
- crop,
- composition,
- lighting,
- negative space,
- camera movement,
- shot order,
- reveal mechanics.

Then adapt the mechanism into BU1 v2. Do not copy another brand or treat a foreign prompt as canonical BU1 design.

## Production decision

Do not generate with AI by default.

Choose among:

1. exact deterministic composition,
2. real photography / video,
3. exact product + generated environment,
4. full AI conceptual scene.

Use the simplest method that preserves product truth and visual quality.

For final commerce / paid-media creative, prefer deterministic product and logo composition whenever an image model cannot guarantee exact fidelity.

## Learning from failures

Do not repeat known failures. If a generated output is rejected for a new systematic reason, add it to `v2/negative-prompt.md` as a new failure ID with prevention and rejection rules.

## Draft status

Changes under `/v2` may evolve quickly. Do not propagate them into the current root brand system automatically. Promotion of v2 into the main brand system requires explicit approval.
