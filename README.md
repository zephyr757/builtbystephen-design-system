# Built by Stephen — Design System

A four-theme glass-and-mineral design system. **Labradorite** (dark, neon, cyberpunk), **Opalite** (light, pastel, dreamy), **Jadeite** (dark, single-hue), and **Quartz** (light, high-contrast, evidence/print/e-reader), unified by the **jadeite** signature color — the non-negotiable thread that identifies Built by Stephen's work.

> **Brand DNA in one line**: Solid glass objects stacked with light distortion, always signed in jadeite.

> **Voice & color names**: See [`JADEITE-FIELD-NOTES.md`](./JADEITE-FIELD-NOTES.md). Read it before writing copy or naming a new token.

---

## Start here (for Claude)

When asked to design anything for Built by Stephen:

1. **Read this file, `SKILL.md`, and `JADEITE-FIELD-NOTES.md` first.** The design system is not optional — every artifact must conform. The field notes are the voice + color-name reference.
2. **Link `styles.css`** (it imports `tokens/bbs-tokens.css` and the Poppins faces, and adds the `.bbs-lockup` and Project Jadeite footer classes) and apply `class="bbs theme-labradorite"` (or `theme-opalite`, or `theme-jadeite`) to the body.
3. **Use semantic tokens** (`var(--bbs-text)`, `var(--bbs-surface)`, `var(--bbs-primary)`) rather than raw hex — they swap with the theme.
4. **Brand-sign it.** Every finished artifact ends with the built by [heart] stephen lockup — the heart is the neon jadeite mark rendered via the `.bbs-heart` utility, and the lockup MUST link to `https://builtbystephen.me`. Markup is under *Minimum viable setup* below.
5. **Preview your work** against the gallery in `preview/` to sanity-check colors, spacing, and glass levels.

If a request would break one of these rules (e.g. "use a red heart"), push back politely and recommend the on-brand alternative.

---

## Files

| Path | What it is |
| --- | --- |
| `README.md` | This file — overview, principles, how to use |
| `JADEITE-FIELD-NOTES.md` | **The voice + color-name reference.** Read before writing copy or naming tokens |
| `SKILL.md` | Short invocation pattern for Claude — quickest path to on-brand output |
| `tokens/bbs-tokens.css` | **Single source of truth.** All CSS variables — colors, type, spacing, radii, shadows, themes |
| `styles.css` | Single entry point for consumers — imports the tokens, adds lockup + Project Jadeite footer classes |
| `colors_and_type.css` | Poppins `@font-face` manifest (imported by the tokens) |
| `index.html` | Hub page linking every doc, preview and worked example. Every page links back here |
| `assets/` | Logo SVGs (stacked, horizontal, heart, mark, wordmarks), hummingbird mark, `lapis-lazuli.svg` and `fluorite-crystal.svg` texture sources |
| `preview/` | Visual gallery — cover, color, type, foundations, components, logo, patterns, mono-heart study |
| `ui-kit/` | Worked examples — `splash.html` is the reference implementation |

---

## Components

| Component | What it is |
| --- | --- |
| `ProjectJadeitePage` | Full-page about/philosophy route for Project Jadeite — back link (`backHref`), header, story copy, signature. Source: `components/ProjectJadeitePage/` |

---

## Core principles

### 1. Jadeite is non-negotiable

The jadeite heart is the signature. Think of it like a craftsman's stamp. It's what says "Stephen made this."

- **Jadeite `#3bc3a6`** — logo hearts, static brand marks, opalite accents. Timeless, coastal, trustworthy.
- **Electric Jadeite `#04ffb2`** — labradorite glows, active states, hover energy. Neon, tech-forward.

**Rule of thumb:** Logo = Jadeite. Glow = Electric Jadeite.

**Never** ship a BBS artifact without the jadeite heart in the signature. Never use a red, blue, or purple heart.

### 2. Glassmorphism, not flat

Surfaces are glass — translucent, blurred, layered over a rich background. Solid fills are rare and feel wrong in this system.

- **Labradorite glass**: `0.03` soft layers, `0.82` card surface, neon border.
- **Opalite glass**: `0.40` soft layers, `0.78` card surface, pastel border.
- **Jadeite glass**: `0.05` soft layers, `0.82` card surface, jadeite border.
- **Blur**: `--bbs-blur-strong` (32px) for cards and panels, `--bbs-blur-soft` (16px) for chips, pills and toggles — same in every theme.
- **Stone textures** are the one exception to translucent glass: `.bbs-lapis` and `.bbs-fluorite` are opaque stone for a hero, feature card or deep panel. One stone per view. See `preview/04-foundations.html`.

### 3. 8pt grid, soft radii

Spacing: `2 · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`. Radii: `6 · 10 · 14 · 20 · 28 · 36` plus pill (`999px`). Nothing should have a razor-sharp corner.

### 4. Poppins 300–600 only

**Do not use weight 100, 200, or 700+.** Ultra-thin floats away on glass; ultra-bold fights the aesthetic. The approved range (300 Light → 600 Semibold) is what keeps things readable AND on-brand.

**Use semantic weight tokens, not numeric ones.** The system ships a prescribed weight ladder that leans light for display and firms up for UI chrome:

| Token | Use | Weight |
| --- | --- | --- |
| `--bbs-weight-display` | hero, 3xl — airy authored feel | 300 |
| `--bbs-weight-title` | 2xl page headings | 400 |
| `--bbs-weight-heading` | xl section headings | 500 |
| `--bbs-weight-subheading` | lg, card titles, strong labels | 500 |
| `--bbs-weight-body` | default reading weight | 300 |
| `--bbs-weight-emphasis` | buttons, chips, badges, UI labels | 500 |
| `--bbs-weight-strong` | reserved: rare CTAs, numeric callouts | 600 |

Reach for the numeric aliases (`--bbs-weight-light` etc.) only when you're writing the ladder itself, or when the semantic tokens genuinely don't fit (rare).

### 5. Motion has easing

Every transition uses `cubic-bezier(0.23, 1, 0.32, 1)` (easeOutQuint). Fast interactions: `0.35s`. Theme changes and big moves: `0.6s`. Standard hover lift: `translateY(-4px) scale(1.02)`.

### 6. Voice: down-to-earth, bestie energy

Friendly, Gen-Z-meets-millennial, no corporate filler. Write copy as if you're explaining something to a friend at a kitchen table. Lowercase is fine when it suits the vibe — the lockup itself is built by [jadeite heart] stephen, all lowercase.

---

## Using the system

### Minimum viable setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your page · Built by Stephen</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="bbs theme-labradorite">
  <!-- your content, using var(--bbs-*) tokens -->
  <footer>
    <!-- Wordmark lockup: .bbs-signature draws "built by" and "stephen"
         itself, so the only child is the heart. -->
    <a href="https://builtbystephen.me" class="bbs-signature" aria-label="built by stephen">
      <span class="bbs-heart"></span>
    </a>
    <!-- Plain-text alternative (small footers): live text + heart, no .bbs-signature class -->
    <!-- <a href="https://builtbystephen.me">built by <span class="bbs-heart"></span> stephen</a> -->
  </footer>
</body>
</html>
```

### Theme switching

Cycle the four themes by swapping the `theme-labradorite` / `theme-opalite` / `theme-jadeite` / `theme-quartz` class on `<body>`. Persist to `localStorage` under `bbs-theme`. Keyboard shortcut: `Cmd/Ctrl + Shift + T`. Copy-paste snippet in `SKILL.md` §4; `ui-kit/splash.html` shows it in a real page.

### Picking a theme

- **Labradorite** → dev tools, code interfaces, evening/night apps, tech-forward products.
- **Opalite** → marketing, client presentations, daytime tools, creative/approachable products.
- **Jadeite** → monochrome single-hue moments — focus modes, brand-forward splash/hero surfaces, anywhere the system turns all the way up.
- **Quartz** → on-the-record / evidence-grade tools, legal/team documentation, screen-reader, e-reader, and print-first surfaces. Opaque paper ground, WCAG AAA primary ink, Poppins `400` body, zero backdrop blur, tabular numerals, and built-in `@media print`.
- **All four** → general products should support the cycle and let the user choose; evidence/print-first tools should default to `theme-quartz`.

---

## Token cheatsheet

All tokens live on `:root` as raw values, then get bound to semantic names inside `.theme-labradorite` / `.theme-opalite` / `.theme-jadeite`. Use the **semantic** names in your designs.

```css
/* Backgrounds & surfaces */
--bbs-bg              /* page background (layered gradients) */
--bbs-surface         /* card / panel surface */
--bbs-surface-soft    /* subtle glass — chips, inset fields */
--bbs-surface-hover   /* hover-state tint */
--bbs-border          /* primary border */
--bbs-border-soft     /* secondary border */

/* Text */
--bbs-text            /* body copy */
--bbs-text-secondary  /* muted body */
--bbs-text-muted      /* captions, meta */

/* Brand + accent */
--bbs-primary         /* CTA fill */
--bbs-primary-ink     /* text ON the primary fill */
--bbs-accent          /* secondary accent */
--bbs-glow            /* glow / active / wildcard — always a jadeite variant */
--bbs-heart           /* the one and only color for the signature heart */
--bbs-accent-calm     /* quiet accent — lapis lazuli (labradorite: --lapis-bright, opalite: full depth), soft jadeite in jadeite */
--bbs-surface-deep    /* deep panels — lapis- (or jadeite-) tinted surface */
--bbs-voice           /* italic / personal copy */
--bbs-jadeite-text    /* jadeite that's legible as type on this ground */
--bbs-lockup-byline   /* lockup: quiet half */
--bbs-lockup-name     /* lockup: authored half */

/* Stone textures (background only, not colors) — labradorite + opalite, one per view */
--lapis-flecked       /* lapis lazuli with pyrite flecks — raw = no type; class .bbs-lapis adds a scrim for type */
--fluorite-crystal    /* fluorite crystal (+ --fluorite-glow) — or class .bbs-fluorite; type on a glass panel only */

/* Status — same in all three themes */
--bbs-status-warning  --bbs-status-danger  --bbs-status-info

/* Shape & motion */
--bbs-radius-{xs,sm,md,lg,xl,2xl,pill}
--bbs-space-{1..10}
--bbs-shadow-card     /* card elevation (glow in dark, soft shadow in light) */
--bbs-elev-{flat,raised,floating,glow}
--bbs-shadow-cta      /* CTA elevation */
--bbs-transition-fast /* 0.35s easeOutQuint */
--bbs-transition-base /* 0.6s easeOutQuint */
```

---

## Accessibility

- **WCAG 2.2 AA minimum** on all text. The approved palettes have been contrast-checked.
- **Focus rings are visible** — use `var(--bbs-focus-ring)` on interactive elements. Don't remove outlines without replacing them.
- **`prefers-reduced-motion` is respected** — `bbs-tokens.css` already kills transitions for users who ask for it.
- **44px minimum** touch targets on mobile.
- **Keyboard nav** always works. Tab order matches visual order.
- **Lapis**: type and borders use flat `--lapis-lazuli` on light, `--lapis-bright` on dark. Type over the stone goes in a `.bbs-lapis` element (bottom scrim + text-shadow, copy kept low), never on raw `--lapis-flecked`. Never set type in `--pyrite`.

---

## The heart hierarchy

When picking which heart to use:

1. **`bbs-heart--hero`** — 0.9em box with a heavy double glow — for hero lockups like "built by \[heart\] stephen" in page titles
2. **`bbs-heart`** — 1em inline neon jadeite for footers, signatures ← **default**. `--lg` (0.95em) and `--xl` (1.05em) step the glow up.
3. **`bbs-heart--display`** — 3em standalone specimen (use alone, not next to running text)
4. **Black or white heart** — only for true single-ink print. On screen over an uncontrolled ground, follow the plate / keyline rule in `JADEITE-FIELD-NOTES.md` §5 and `preview/mono-heart-study.html`.

Never red. Never blue/purple. Never a generic icon-font heart without the jadeite color treatment.

---

## Version

v2025.10 — canonical triple-theme system. Lapis lazuli replaces dioptase as the calm accent. Jadeite core. Based on production implementations at `builtbystephen.me` and `ghostwriter.ozdust.me`.
