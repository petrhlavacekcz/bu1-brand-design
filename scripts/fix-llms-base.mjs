import fs from 'node:fs';
import path from 'node:path';

const llmsPath = path.resolve('dist/llms.txt');
const origin = 'https://petrhlavacekcz.github.io';
const docsBase = 'https://petrhlavacekcz.github.io/bu1-brand-design';

if (!fs.existsSync(llmsPath)) {
	process.exit(0);
}

const content = fs.readFileSync(llmsPath, 'utf8');
const normalized = content.replaceAll(`${origin}/`, `${docsBase}/`);

fs.writeFileSync(llmsPath, normalized);
