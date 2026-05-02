import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const targets = ['generated/brand', 'generated/agent-context'];

function listFiles(dir) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  const out = [];
  for (const entry of fs.readdirSync(full, { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(rel));
    else out.push(rel);
  }
  return out.sort();
}

function snapshot() {
  const map = new Map();
  for (const target of targets) {
    for (const file of listFiles(target)) {
      const hash = createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
      map.set(file, hash);
    }
  }
  return map;
}

function diffSnapshots(before, after) {
  const files = new Set([...before.keys(), ...after.keys()]);
  return [...files].filter((file) => before.get(file) !== after.get(file)).sort();
}

const before = snapshot();
const result = spawnSync('npm', ['run', 'generate:all', '--silent'], { stdio: 'inherit', shell: false });
if (result.status !== 0) process.exit(result.status ?? 1);
const after = snapshot();
const changed = diffSnapshots(before, after);

if (changed.length) {
  console.error('\nGenerated files were out of sync and were updated:');
  for (const file of changed) console.error(`- ${file}`);
  console.error('\nReview and commit the generated changes.');
  process.exit(1);
}

console.log('Generated files are in sync.');
