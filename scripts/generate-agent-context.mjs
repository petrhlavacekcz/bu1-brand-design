import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docsRoot = path.join(root, 'src/content/docs');
const dataRoot = path.join(root, 'src/content/data');
const outDir = path.join(root, 'generated/agent-context');

const packs = [
  {
    file: 'product-description.md',
    title: 'BU1 Product Description Context',
    purpose: 'Piš produktové popisy z ověřených produktových faktů, bez claimů navíc.',
    docs: [
      'ai/context-map.mdx',
      'ai/product-description.mdx',
      'templates/product-description-template.mdx',
      'brand/tone-of-voice.mdx',
      'brand/language.mdx',
      'brand/personas.mdx',
      'ecommerce/product-card.mdx',
      'ecommerce/cta-rules.mdx'
    ],
    glossaryLocales: ['cs']
  },
  {
    file: 'instagram-post.md',
    title: 'BU1 Instagram Post Context',
    purpose: 'Piš krátké social výstupy podle kanálu, trhu, publika a ověřených faktů.',
    docs: [
      'ai/context-map.mdx',
      'ai/instagram-post.mdx',
      'brand/tone-of-voice.mdx',
      'brand/language.mdx',
      'brand/personas.mdx',
      'brand/communication-channels.mdx'
    ],
    glossaryLocales: ['cs', 'en']
  },
  {
    file: 'email.md',
    title: 'BU1 Email Context',
    purpose: 'Piš e-maily s jednou hlavní myšlenkou, jasným CTA a bez neověřených nabídek.',
    docs: [
      'ai/context-map.mdx',
      'templates/email-template.mdx',
      'brand/tone-of-voice.mdx',
      'brand/language.mdx',
      'brand/personas.mdx',
      'brand/communication-channels.mdx',
      'ecommerce/cta-rules.mdx'
    ],
    glossaryLocales: ['cs']
  },
  {
    file: 'blog-article.md',
    title: 'BU1 Blog / SEO Context',
    purpose: 'Piš blogové a SEO výstupy s ověřenými URL, produktovými fakty a lokalizační disciplínou.',
    docs: [
      'ai/context-map.mdx',
      'ai/prompting-principles.mdx',
      'brand/tone-of-voice.mdx',
      'brand/language.mdx',
      'brand/personas.mdx',
      'brand/communication-channels.mdx',
      'brand/photo-style.mdx'
    ],
    glossaryLocales: ['cs', 'en']
  },
  {
    file: 'design-ui.md',
    title: 'BU1 Design / UI Context',
    purpose: 'Používej tokeny jako jediný zdroj design hodnot a docs jen jako vysvětlení použití.',
    docs: [
      'ai/context-map.mdx',
      'design/colors.mdx',
      'design/typography.mdx',
      'design/components.mdx',
      'design/spacing.mdx',
      'ecommerce/ui-rules.mdx',
      'ecommerce/cta-rules.mdx',
      'ecommerce/product-card.mdx'
    ],
    includeTokenSummary: true
  }
];

function stripFrontmatter(text) {
  return text.replace(/^---[\s\S]*?---\n/, '');
}

function cleanMdx(text) {
  let r = stripFrontmatter(text);
  r = r.replace(/^import .*$/gm, '');
  const codeBlocks = [];
  r = r.replace(/(```[\s\S]*?```)/g, (_, block) => {
    codeBlocks.push(block);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });
  r = r.replace(/<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/gs, '[$2]($1)');
  r = r.replace(/<strong>(.*?)<\/strong>/gs, '**$1**');
  r = r.replace(/<em>(.*?)<\/em>/gs, '*$1*');
  r = r.replace(/<code>(.*?)<\/code>/gs, '`$1`');
  r = r.replace(/<li[^>]*>([\s\S]*?)<\/li>/gs, (_, inner) => `- ${inner.replace(/<[^>]+>/g, '').trim()}\n`);
  r = r.replace(/<table[\s\S]*?<\/table>/gs, '[Tabulka pravidel je v canonical MDX; pro detail otevři zdrojový soubor.]\n');
  r = r.replace(/<[^>]+>/g, '');
  r = r.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
  r = r.replace(/__CODE_BLOCK_(\d+)__/g, (_, i) => codeBlocks[Number(i)]);
  r = r.replace(/\n{3,}/g, '\n\n');
  return r.trim();
}

function readDoc(rel) {
  const full = path.join(docsRoot, rel);
  const raw = fs.readFileSync(full, 'utf8');
  return cleanMdx(raw);
}

function compactDoc(text, maxChars = 1400) {
  if (text.length <= maxChars) return text;
  const cut = text.slice(0, maxChars);
  const lastHeading = cut.lastIndexOf('\n## ');
  const safe = lastHeading > 500 ? cut.slice(0, lastHeading) : cut;
  return `${safe.trim()}\n\n[Zkráceno pro tokenovou efektivitu. Pro detail otevři canonical zdroj.]`;
}

function glossarySlice(locales) {
  if (!locales?.length) return '';
  const file = path.join(dataRoot, 'goalkeeper-glossary.json');
  if (!fs.existsSync(file)) return '';
  const glossary = JSON.parse(fs.readFileSync(file, 'utf8'));
  const preferredTerms = [
    'goalkeeper_gloves', 'goalkeeper', 'foam_latex', 'palm', 'grip',
    'safe_grip_feel', 'ball_control', 'ball_feel', 'fit', 'negative_cut',
    'hybrid_cut', 'wrist', 'strap', 'without_strap', 'removable_straps'
  ];
  const lines = ['## Relevantní glossary slice', ''];
  for (const key of preferredTerms) {
    const term = glossary.terms?.[key];
    if (!term) continue;
    const vals = locales.map((locale) => `${locale}: ${term[locale]}`).filter((v) => !v.endsWith('undefined'));
    if (vals.length) lines.push(`- ${key}: ${vals.join(' | ')}`);
  }
  return lines.join('\n');
}

function tokenSummary() {
  const file = path.join(dataRoot, 'brand-tokens.json');
  const tokens = JSON.parse(fs.readFileSync(file, 'utf8'));
  const primary = tokens.colors.primary;
  const black = tokens.colors.black;
  const states = tokens.metrics.primaryButton.states;
  return [
    '## Design token summary',
    '',
    `- Primary / Hot Rose: ${primary.value}`,
    `- Onyx / dark hover: ${black.value}`,
    `- Primary CTA hover: ${states.hover.background}`,
    `- Primary CTA active: ${states.active.background}`,
    `- Heading font: ${tokens.typography.heading.family}`,
    `- Body font: ${tokens.typography.body.family}`,
    '- Full canonical token source: `src/content/data/brand-tokens.json`'
  ].join('\n');
}

fs.mkdirSync(outDir, { recursive: true });

for (const pack of packs) {
  const parts = [
    `# ${pack.title}`,
    '',
    '> Generated. Not canonical. Edit only `src/content/docs/` or `src/content/data/`.',
    '',
    `Purpose: ${pack.purpose}`,
    '',
    '## Canonical sources',
    '',
    ...pack.docs.map((doc) => `- src/content/docs/${doc}`),
    pack.includeTokenSummary ? '- src/content/data/brand-tokens.json' : '',
    pack.glossaryLocales?.length ? '- src/content/data/goalkeeper-glossary.json' : '',
    '',
    '## Compact context'
  ].filter(Boolean);

  for (const doc of pack.docs) {
    parts.push('', `### ${doc}`, '', compactDoc(readDoc(doc)));
  }
  if (pack.includeTokenSummary) parts.push('', tokenSummary());
  if (pack.glossaryLocales?.length) parts.push('', glossarySlice(pack.glossaryLocales));

  fs.writeFileSync(path.join(outDir, pack.file), parts.join('\n') + '\n');
}

console.log(`Generated ${packs.length} agent context packs in ${path.relative(root, outDir)}`);
