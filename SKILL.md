# BBS Skill — Quick Invocation for Claude

**When to use:** Any design, prototype, slide, doc, or HTML artifact tagged "Built by Stephen" or using this project's tokens.

## 1 — Always do this first

```html
<link rel="stylesheet" href="tokens/bbs-tokens.css">
<body class="bbs theme-labradorite">  <!-- or theme-opalite / theme-jadeite -->
```

## 2 — Three laws (don't break)

1. **Jadeite heart or don't ship.** `built by <span class="bbs-heart"></span> stephen` → `https://builtbystephen.me`. The `.bbs-heart` utility (from `tokens/bbs-tokens.css`) renders the neon jadeite mark, tinted via `--bbs-heart`: OG `#3bc3a6` on opalite, electric `#04ffb2` on labradorite and jadeite. Size variants: `--lg` (1.1em), `--xl` (1.3em), `--hero` (1.5em — for page-title lockups), `--display` (3em — for standalone specimens). Never a red/blue/purple/orange heart. Both are auto-bound via `--bbs-heart`.
2. **Poppins 300–600 only, via semantic weight tokens.** Never 100, 200, or 700+. Ultra-thin disappears on glass. Use `--bbs-weight-display` / `--bbs-weight-title` / `--bbs-weight-heading` / `--bbs-weight-subheading` / `--bbs-weight-body` / `--bbs-weight-emphasis` — the ladder leans light for display and firms up for UI. See README for the full table.
3. **Use semantic tokens.** `var(--bbs-text)`, `var(--bbs-surface)`, `var(--bbs-primary)` — never hardcode hex. If you do, the theme switch breaks.

## 3 — Component recipes

### Glass card
```css
.bbs-card {
  background: var(--bbs-surface);
  backdrop-filter: blur(var(--bbs-blur-strong));
  border: 1px solid var(--bbs-border);
  border-radius: var(--bbs-radius-xl);
  padding: var(--bbs-space-7);
  box-shadow: var(--bbs-shadow-card);
}
```

### Primary CTA
```css
.bbs-cta {
  background: var(--bbs-primary);
  color: var(--bbs-primary-ink);
  padding: var(--bbs-space-4) var(--bbs-space-6);
  border-radius: var(--bbs-radius-pill);
  font-weight: var(--bbs-weight-emphasis);
  box-shadow: var(--bbs-shadow-cta);
  transition: transform var(--bbs-transition-fast);
}
.bbs-cta:hover { transform: translateY(-4px) scale(1.02); }
```

### Chip / pill
```css
.bbs-chip {
  background: var(--bbs-surface-soft);
  border: 1px solid var(--bbs-border-soft);
  border-radius: var(--bbs-radius-pill);
  padding: var(--bbs-space-3) var(--bbs-space-5);
  font-size: var(--bbs-fs-xs);
}
```

### Signature lockup
```html
<a href="https://builtbystephen.me" class="bbs-signature">
  built by <span class="bbs-heart"></span> stephen
</a>
```
```css
.bbs-signature {
  color: var(--bbs-text-secondary);
  text-decoration: none;
  font-weight: var(--bbs-weight-light);
}
.bbs-signature .bbs-heart {
  color: var(--bbs-heart);
  filter: drop-shadow(0 0 8px var(--bbs-heart));
}
```

## 4 — Theme toggle (copy-paste)

```js
const KEY = 'bbs-theme';
const body = document.body;
// The three themes, in cycle order: Labradorite (dark) → Opalite (light) → Jadeite (monochrome).
const THEMES = ['theme-labradorite', 'theme-opalite', 'theme-jadeite'];
const apply = (t) => {
  // Strip ANY theme-* class so stale/renamed values can't stick around.
  [...body.classList].forEach((c) => c.startsWith('theme-') && body.classList.remove(c));
  body.classList.add(t);
  try { localStorage.setItem(KEY, t); } catch {}
};
let saved = null;
try { saved = localStorage.getItem('bbs-theme'); } catch {}
apply(THEMES.includes(saved)
  ? saved
  : (matchMedia('(prefers-color-scheme: dark)').matches ? 'theme-labradorite' : 'theme-opalite'));

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const cur = THEMES.find((c) => body.classList.contains(c)) || THEMES[0];
  apply(THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length]);
});
addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 't') {
    e.preventDefault();
    document.getElementById('theme-toggle')?.click();
  }
});
```

## 5 — Before ship, check

- [ ] Jadeite heart present in signature, links to `builtbystephen.me`
- [ ] Both themes work (flip the class and scan)
- [ ] No hardcoded hex in components — semantic tokens only
- [ ] Poppins weights all ≥ 300 and ≤ 600, via `--bbs-weight-*` semantic tokens (display/title/heading/subheading/body/emphasis)
- [ ] Focus rings visible on all interactive elements
- [ ] Touch targets ≥ 44px on mobile
- [ ] Reduced motion: transitions honor `prefers-reduced-motion`
- [ ] Voice: friendly, lowercase, no corporate filler

If any of these fail, fix before calling the work done.
