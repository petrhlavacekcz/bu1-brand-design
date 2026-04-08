import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const tokensPath = path.join(root, 'src/content/data/brand-tokens.json');
const outDir = path.join(root, 'generated/brand');
fs.mkdirSync(outDir, { recursive: true });

const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
const core = tokens.colors;
const sem = tokens.semantic;
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
  // Semantic UI-state colors (not brand colors — error/success/warning/info only)
  `--bu1-color-error: ${sem.error.value};`,
  `--bu1-color-error-light: ${sem.error.light};`,
  `--bu1-color-error-dark: ${sem.error.dark};`,
  `--bu1-color-success: ${sem.success.value};`,
  `--bu1-color-success-light: ${sem.success.light};`,
  `--bu1-color-success-dark: ${sem.success.dark};`,
  `--bu1-color-warning: ${sem.warning.value};`,
  `--bu1-color-warning-light: ${sem.warning.light};`,
  `--bu1-color-warning-dark: ${sem.warning.dark};`,
  `--bu1-color-info: ${sem.info.value};`,
  `--bu1-color-info-light: ${sem.info.light};`,
  `--bu1-color-info-dark: ${sem.info.dark};`
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
      error: { $value: sem.error.value, $type: 'color' },
      'error-light': { $value: sem.error.light, $type: 'color' },
      success: { $value: sem.success.value, $type: 'color' },
      'success-light': { $value: sem.success.light, $type: 'color' },
      warning: { $value: sem.warning.value, $type: 'color' },
      'warning-light': { $value: sem.warning.light, $type: 'color' },
      info: { $value: sem.info.value, $type: 'color' },
      'info-light': { $value: sem.info.light, $type: 'color' }
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
