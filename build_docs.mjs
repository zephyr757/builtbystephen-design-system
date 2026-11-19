#!/usr/bin/env node
/** Render the standalone Markdown documentation as themed HTML pages. */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const root = dirname(fileURLToPath(import.meta.url));
const docs = {
  'README.md': 'README.html',
  'SKILL.md': 'SKILL.html',
  'JADEITE-FIELD-NOTES.md': 'JADEITE-FIELD-NOTES.html',
};
const style = `
html,body{margin:0}body{display:grid;grid-template-rows:auto 1fr auto;min-height:100vh}body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:-1;background:var(--bbs-bg-overlay);mix-blend-mode:screen;opacity:.4}.page-nav{display:flex;justify-content:space-between;align-items:center;padding:20px clamp(20px,5vw,56px);border-bottom:1px solid var(--bbs-border-soft);backdrop-filter:blur(var(--bbs-blur-soft))}.page-nav a,.theme-toggle{min-height:44px;display:inline-flex;align-items:center;padding:8px 14px;border:1px solid var(--bbs-border);border-radius:var(--bbs-radius-pill);background:var(--bbs-surface);color:var(--bbs-text-secondary);font:inherit;text-decoration:none;cursor:pointer}article{width:min(70ch,calc(100% - 40px));margin:64px auto 96px;color:var(--bbs-text);font-size:var(--bbs-fs-md);line-height:var(--bbs-lh-body)}article h1{color:var(--bbs-lockup-name);font-size:clamp(2.4rem,5vw,3.6rem);font-weight:var(--bbs-weight-display);line-height:1.05}article h2{margin-top:56px;color:var(--bbs-text);font-size:var(--bbs-fs-xl);font-weight:var(--bbs-weight-heading)}article h3{margin-top:36px;color:var(--bbs-heart);font-size:var(--bbs-fs-lg);font-weight:var(--bbs-weight-subheading)}article a{color:var(--bbs-primary)}article code,article pre{font-family:var(--bbs-font-mono)}article code{padding:2px 6px;border:1px solid var(--bbs-border-soft);border-radius:var(--bbs-radius-xs);color:var(--bbs-heart);background:var(--bbs-surface-soft)}article pre{overflow-x:auto;padding:20px;border:1px solid var(--bbs-border-soft);border-radius:var(--bbs-radius-lg);background:var(--bbs-surface)}article table{width:100%;border-collapse:collapse;font-size:var(--bbs-fs-sm)}article th,article td{padding:10px 12px;border-bottom:1px solid var(--bbs-border-soft);text-align:left;vertical-align:top}.glass-footer{padding:24px;border-top:1px solid var(--bbs-border-soft);background:var(--bbs-surface-soft);text-align:center}.glass-footer a{color:var(--bbs-text-secondary);text-decoration:none}
`;
const script = `(() => { const themes=['theme-labradorite','theme-opalite','theme-jadeite','theme-quartz']; const body=document.body; const apply=t=>{body.classList.remove(...themes);body.classList.add(t);try{localStorage.setItem('bbs-theme',t)}catch{}};let saved=null;try{saved=localStorage.getItem('bbs-theme')}catch{};apply(themes.includes(saved)?saved:'theme-labradorite');document.getElementById('theme-toggle')?.addEventListener('click',()=>{const i=themes.findIndex(t=>body.classList.contains(t));apply(themes[(i+1)%themes.length])}) })();`;

for (const [source, output] of Object.entries(docs)) {
  const title = source === 'JADEITE-FIELD-NOTES.md' ? 'Jadeite Field Notes' : source.replace('.md', '');
  const body = marked.parse(readFileSync(join(root, source), 'utf8'));
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} · Built by Stephen</title><link rel="stylesheet" href="tokens/bbs-tokens.css"><style>${style}</style></head><body class="bbs theme-labradorite"><nav class="page-nav"><a href="index.html">← design system</a><button class="theme-toggle" id="theme-toggle" type="button">◐ switch theme</button></nav><article>${body}</article><footer class="glass-footer"><a href="https://builtbystephen.me">built by <span class="bbs-heart"></span> stephen</a></footer><script>${script}</script></body></html>`;
  writeFileSync(join(root, output), html);
  console.log(`generated ${output}`);
}
