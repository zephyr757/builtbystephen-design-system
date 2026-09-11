#!/usr/bin/env node
/** Stage only the canonical design-system site for Pages deployment. */
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const dist = join(root, 'dist');
const files = [
  '.thumbnail',
  'JADEITE-FIELD-NOTES.html',
  'README.html',
  'SKILL.html',
  'assets',
  'colors_and_type.css',
  'components',
  'fonts',
  'index.html',
  'preview',
  'project-jadeite.html',
  'styles.css',
  'thumbnail.html',
  'tokens',
  'ui-kit',
];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
for (const entry of files) {
  const source = join(root, entry);
  if (existsSync(source)) cpSync(source, join(dist, entry), { recursive: true });
}
console.log(`staged ${files.length} canonical entries in dist/`);
