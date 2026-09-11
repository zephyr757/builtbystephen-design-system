#!/usr/bin/env node
/** Stage the Project Jadeite landing for the jadeite Pages project. */
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const dist = join(root, 'dist-jadeite');
const copy = (entry) => {
  const source = join(root, entry);
  if (existsSync(source)) cpSync(source, join(dist, entry), { recursive: true });
};

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const landing = readFileSync(join(root, 'project-jadeite.html'), 'utf8')
  .replace('href="index.html"', 'href="https://design.builtbystephen.me/"');
writeFileSync(join(dist, 'index.html'), landing);
copy('tokens');
copy('assets');
console.log('staged Project Jadeite landing in dist-jadeite/');
