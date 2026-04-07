import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const tokensPath = path.join(root, 'src/content/data/brand-tokens.json');
const outDir = path.join(root, 'generated/brand');
fs.mkdirSync(outDir, { recursive: true });

const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
const core = tokens.colors;
const semantic = core.semantic;
const states = tokens.states;
const typo = tokens.typography;
const spacing = tokens.spacing;
const radius = tokens.radius;
const shadow = tokens.shadow;
const scale = typo.scale;

const cssVars = [
  `--bu1-color-primary: ${core.primary.value};`,
  `--bu1-color-black: ${core.black.value};`,
  `--bu1-color-white: ${core.white.value};`,
  `--bu1-color-neutral-800: ${core.neutral['800']};`,
  `--bu1-color-neutral-700: ${core.neutral['700']};`,
  `--bu1-color-neutral-600: ${core.neutral['600']};`,
  `--bu1-color-neutral-300: ${core.neutral['300']};`,
  `--bu1-color-neutral-200: ${core.neutral['200']};`,
  `--bu1-color-neutral-100: ${core.neutral['100']};`,
  `--bu1-color-fluo-yellow: ${core.fluorescent.safetyYellow.value};`,
  `--bu1-color-fluo-orange: ${core.fluorescent.neonOrange.value};`,
  `--bu1-color-fluo-pink: ${core.fluorescent.hotPink.value};`,
  `--bu1-color-fluo-green: ${core.fluorescent.neonGreen.value};`,
  `--bu1-color-fluo-blue: ${core.fluorescent.acidBlue.value};`,
  `--bu1-color-fluo-purple: ${core.fluorescent.electricPurple.value};`,
  `--bu1-bg-page: ${core.white.value};`,
  `--bu1-bg-inverse: ${core.black.value};`,
  `--bu1-bg-accent: ${core.primary.value};`,
  `--bu1-text-base: ${core.black.value};`,
  `--bu1-text-inverse: ${core.white.value};`,
  `--bu1-text-accent: ${core.primary.value};`,
  `--bu1-border-base: ${core.black.value};`,
  `--bu1-border-accent: ${core.primary.value};`,
  `--bu1-font-heading: "${typo.heading.family}", "${typo.heading.fallback[0]}", ${typo.heading.fallback[1]};`,
  `--bu1-font-body: "${typo.body.family}", "${typo.body.fallback[0]}", ${typo.body.fallback[1]};`,
  ...Object.entries(spacing).map(([key, value]) => `--bu1-space-${key}: ${value};`),
  `--bu1-radius-sm: ${radius.sm};`,
  `--bu1-radius-md: ${radius.md};`,
  `--bu1-shadow-card: ${shadow.card};`,
  `--bu1-shadow-cta: ${shadow.cta};`,
  // Semantic colors (UI states only — not brand)
  `--bu1-semantic-error-text: ${semantic.error.text};`,
  `--bu1-semantic-error-bg: ${semantic.error.bg};`,
  `--bu1-semantic-error-border: ${semantic.error.border};`,
  `--bu1-semantic-error-icon: ${semantic.error.icon};`,
  `--bu1-semantic-success-text: ${semantic.success.text};`,
  `--bu1-semantic-success-bg: ${semantic.success.bg};`,
  `--bu1-semantic-success-border: ${semantic.success.border};`,
  `--bu1-semantic-success-icon: ${semantic.success.icon};`,
  `--bu1-semantic-warning-text: ${semantic.warning.text};`,
  `--bu1-semantic-warning-bg: ${semantic.warning.bg};`,
  `--bu1-semantic-warning-border: ${semantic.warning.border};`,
  `--bu1-semantic-warning-icon: ${semantic.warning.icon};`,
  `--bu1-semantic-info-text: ${semantic.info.text};`,
  `--bu1-semantic-info-bg: ${semantic.info.bg};`,
  `--bu1-semantic-info-border: ${semantic.info.border};`,
  `--bu1-semantic-info-icon: ${semantic.info.icon};`,
  // Component state tokens
  `--bu1-state-primary-hover-bg: ${states.button.primary.hover.bg};`,
  `--bu1-state-primary-active-bg: ${states.button.primary.active.bg};`,
  `--bu1-state-primary-disabled-bg: ${states.button.primary.disabled.bg};`,
  `--bu1-state-secondary-hover-bg: ${states.button.secondary.hover.bg};`,
  `--bu1-state-secondary-active-bg: ${states.button.secondary.active.bg};`,
  `--bu1-state-secondary-disabled-border: ${states.button.secondary.disabled.border};`,
  `--bu1-state-secondary-disabled-text: ${states.button.secondary.disabled.text};`,
  `--bu1-focus-ring-width: ${states.focusRing.width};`,
  `--bu1-focus-ring-offset: ${states.focusRing.offset};`,
  `--bu1-focus-ring-color-primary: ${states.focusRing.colorPrimary};`,
  `--bu1-focus-ring-color-default: ${states.focusRing.colorDefault};`,
  `--bu1-focus-ring-color-inverse: ${states.focusRing.colorInverse};`
];

const tokensCss = `:root {\n  ${cssVars.join('\n  ')}\n}\n`;

const themeCss = `${tokensCss}
body {
  background: var(--bu1-bg-page);
  color: var(--bu1-text-base);
  font-family: var(--bu1-font-body);
}

.bu1-heading {
  font-family: var(--bu1-font-heading);
  text-transform: uppercase;
}

.bu1-price {
  color: var(--bu1-text-base);
  font-family: var(--bu1-font-body);
  font-size: ${scale.price.size};
  font-weight: ${scale.price.weight};
  line-height: 1.1;
}

.bu1-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${tokens.metrics.primaryButton.minHeight};
  padding: 0.875rem ${tokens.metrics.primaryButton.paddingX};
  border-radius: ${tokens.metrics.primaryButton.radius};
  border: 2px solid var(--bu1-border-base);
  font-family: var(--bu1-font-heading);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

.bu1-button--primary {
  background: var(--bu1-bg-accent);
  color: var(--bu1-text-inverse);
  border-color: var(--bu1-border-accent);
  box-shadow: var(--bu1-shadow-cta);
}

.bu1-button--secondary {
  background: var(--bu1-bg-page);
  color: var(--bu1-text-base);
  border-color: var(--bu1-border-base);
}

.bu1-card {
  padding: ${tokens.metrics.productCard.padding};
  border: 1px solid rgba(20, 20, 20, 0.14);
  border-radius: ${tokens.metrics.productCard.radius};
  background: var(--bu1-bg-page);
  box-shadow: var(--bu1-shadow-card);
}

.bu1-variant-option {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${tokens.metrics.variantChip.minHeight};
  padding-inline: ${tokens.metrics.variantChip.paddingX};
  border: 2px solid var(--bu1-border-base);
  border-radius: ${tokens.metrics.variantChip.radius};
  background: var(--bu1-bg-page);
  color: var(--bu1-text-base);
  font-family: var(--bu1-font-heading);
  text-transform: uppercase;
}
`;

const tailwindPreset = `const preset = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '${core.primary.value}',
          black: '${core.black.value}',
          white: '${core.white.value}'
        },
        neutral: ${JSON.stringify(core.neutral, null, 10)},
        fluorescent: {
          yellow: '${core.fluorescent.safetyYellow.value}',
          orange: '${core.fluorescent.neonOrange.value}',
          pink: '${core.fluorescent.hotPink.value}',
          green: '${core.fluorescent.neonGreen.value}',
          blue: '${core.fluorescent.acidBlue.value}',
          purple: '${core.fluorescent.electricPurple.value}'
        },
        action: {
          primary: '${core.primary.value}',
          primaryHover: '${core.black.value}',
          secondary: '${core.black.value}',
          secondaryHover: '${core.primary.value}'
        }
      },
      fontFamily: {
        heading: ['${typo.heading.family}', '${typo.heading.fallback[0]}', '${typo.heading.fallback[1]}'],
        body: ['${typo.body.family}', '${typo.body.fallback[0]}', '${typo.body.fallback[1]}']
      },
      fontSize: {
        'display-sm': ['${scale['display-sm'].size}', { lineHeight: '1', fontWeight: '${scale['display-sm'].weight}' }],
        'heading-lg': ['${scale['heading-lg'].size}', { lineHeight: '1.05', fontWeight: '${scale['heading-lg'].weight}' }],
        'heading-md': ['${scale['heading-md'].size}', { lineHeight: '1.1', fontWeight: '${scale['heading-md'].weight}' }],
        'title-lg': ['${scale['title-lg'].size}', { lineHeight: '1.2', fontWeight: '${scale['title-lg'].weight}' }],
        price: ['${scale.price.size}', { lineHeight: '1.1', fontWeight: '${scale.price.weight}' }],
        body: ['${scale.body.size}', { lineHeight: '1.5', fontWeight: '${scale.body.weight}' }],
        label: ['${scale.label.size}', { lineHeight: '1.2', fontWeight: '${scale.label.weight}' }]
      },
      spacing: ${JSON.stringify(spacing, null, 8)},
      borderRadius: { sm: '${radius.sm}', md: '${radius.md}' },
      boxShadow: { card: '${shadow.card}', cta: '${shadow.cta}' }
    }
  }
};

export default preset;
`;

const shopifyLiquid = `<style>
${tokensCss}
</style>
`;

const figmaVariables = {
  $description: 'BU1SPORT design tokens exported from brand-tokens.json',
  color: {
    brand: {
      primary: { $value: core.primary.value, $type: 'color' },
      black: { $value: core.black.value, $type: 'color' },
      white: { $value: core.white.value, $type: 'color' }
    },
    neutral: Object.fromEntries(Object.entries(core.neutral).map(([k, v]) => [k, { $value: v, $type: 'color' }])),
    fluorescent: {
      yellow: { $value: core.fluorescent.safetyYellow.value, $type: 'color' },
      orange: { $value: core.fluorescent.neonOrange.value, $type: 'color' },
      pink: { $value: core.fluorescent.hotPink.value, $type: 'color' },
      green: { $value: core.fluorescent.neonGreen.value, $type: 'color' },
      blue: { $value: core.fluorescent.acidBlue.value, $type: 'color' },
      purple: { $value: core.fluorescent.electricPurple.value, $type: 'color' }
    },
    semantic: {
      error: {
        text: { $value: semantic.error.text, $type: 'color' },
        bg: { $value: semantic.error.bg, $type: 'color' },
        border: { $value: semantic.error.border, $type: 'color' },
        icon: { $value: semantic.error.icon, $type: 'color' }
      },
      success: {
        text: { $value: semantic.success.text, $type: 'color' },
        bg: { $value: semantic.success.bg, $type: 'color' },
        border: { $value: semantic.success.border, $type: 'color' },
        icon: { $value: semantic.success.icon, $type: 'color' }
      },
      warning: {
        text: { $value: semantic.warning.text, $type: 'color' },
        bg: { $value: semantic.warning.bg, $type: 'color' },
        border: { $value: semantic.warning.border, $type: 'color' },
        icon: { $value: semantic.warning.icon, $type: 'color' }
      },
      info: {
        text: { $value: semantic.info.text, $type: 'color' },
        bg: { $value: semantic.info.bg, $type: 'color' },
        border: { $value: semantic.info.border, $type: 'color' },
        icon: { $value: semantic.info.icon, $type: 'color' }
      }
    }
  },
  spacing: Object.fromEntries(Object.entries(spacing).map(([k, v]) => [k, { $value: v, $type: 'dimension' }])),
  radius: Object.fromEntries(Object.entries(radius).map(([k, v]) => [k, { $value: v, $type: 'dimension' }])),
  shadow: Object.fromEntries(Object.entries(shadow).map(([k, v]) => [k, { $value: v, $type: 'shadow' }])),
  typography: {
    headingFont: { $value: typo.heading.family, $type: 'fontFamily' },
    bodyFont: { $value: typo.body.family, $type: 'fontFamily' }
  }
};

const files = {
  'tokens.css': tokensCss,
  'theme.css': themeCss,
  'tailwind-preset.ts': tailwindPreset,
  'shopify-tokens.liquid': shopifyLiquid,
  'figma-variables.json': JSON.stringify(figmaVariables, null, 2) + '\n'
};

for (const [fileName, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(outDir, fileName), content);
}

console.log(`Generated ${Object.keys(files).length} files in ${path.relative(root, outDir)}`);
