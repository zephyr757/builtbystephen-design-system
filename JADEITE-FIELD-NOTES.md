# The Jadeite Field Notes

*This is Built by Stephen's constitution. Every design decision in this system should pass through it.*

---

## 1 — What this brand actually is

Built by Stephen is a neurodivergent-first system. Not a studio, not an agency, not a portfolio. It's a set of tools built by someone who learned late what his own brain was doing, and is now making the things he wishes he'd had.

The brand metaphor is **glass and mineral**. Jadeite is the anchor: green, quiet, load-bearing, a little magical. Everything else is the light moving through it.

The voice is **tender, precise, and late-night honest**. We don't do corporate polish. We don't do chest-thumping swagger. We sound like someone who has been through it and is trying to tell you the truth without making it weird.

---

## 2 — The three operating principles

### Mint-bright
Jadeite is the constant. Not a logo decoration — the *anchor*. Every page has it somewhere, even if it's just the heart in the footer. If a design can't make room for the heart, the design is wrong.

### Glass-clear
We don't hide the machinery. The tokens are named. The weights are labeled. The reasoning is written down. A reader should be able to look at any component and see how it was made — that's the neurodivergent-first part. Opacity is cruelty.

### Finally true
Nothing on the page fights the reader. No dark patterns, no fake urgency, no attention hijacks. The design's job is to let the person arrive at what they came for and feel a little more seen on the way.

---

## 3 — The named palette

Colors have names because they carry meaning, and meaning carries further than hex codes. The names come from the mineral world — the same glass-and-mineral the brand is built on. A few of the descriptions still carry lines that were playing during the late-night aha-moment hours; they're kept as examples of the voice, not as the names.

### The anchor (sacred — do not rename)

| Token | Hex | What it is |
|---|---|---|
| `--bbs-jadeite` | `#3bc3a6` | Jadeite. Logo hearts, static brand marks, opalite accent. |
| `--bbs-electric-jadeite` | `#04ffb2` | The neon version. Labradorite glow, hover energy, the states where it clicks. |

Jadeite has two forms because the brand has two moods. Same mineral, different light.

### Labradorite — the late-night brain

For dark surfaces. High contrast. The brain when it's running.

| Token | Hex | Use it when... |
|---|---|---|
| `--obsidian` | `#120227` (bg anchor) | You need the deep-indigo backdrop. "It would've been fun, if you would've been the one." |
| `--fluorite` | `rgba(224, 224, 255, 0.85)` | Secondary text and the hazy mid-tones. The color of thinking at 2am. |
| `--neon-kiss` | `#ff0080` | Primary CTA. Hot pink, no apology. |
| `--spinel` | `#ff00a0` / magenta | State changes, "shimmer back to life" moments, the feedback for the moment it lands. |
| `--amethyst` | `#8000ff` (purple) | Softer violet support. Reach for it when neon kiss is too loud. |
| `--apatite` | `#00ffff` | Electric cyan accent. Sparingly. |
| `--dioptase` | `#0d5c6b` | Deep blue-green. The calm accent and the deep-panel tint — where neon kiss would be too loud. On dark grounds use `--dioptase-bright` (`#2f9fb3`); the deep value only clears 2.2:1 there. **Labradorite and opalite only** — the jadeite theme stays one hue, so `--bbs-accent-calm` resolves to soft jadeite there instead. |

### Opalite — the glass-clear, soft-morning brain

For light surfaces. Lower contrast. The brain when it's at peace.

| Token | Hex | Use it when... |
|---|---|---|
| `--rose-quartz` | `#ffe2ee` / pale blush | Background warmth. Cream-pink. Quiet, tender, unprecedented. |
| `--celestite` | `#9ac1ff` (powder blue) | The self-aware morning color. "It's me, hi, I'm the problem it's me." |
| `--lepidolite` | `#d4a5ff` (lavender) | Muted violet ground. "Uh oh, I'm falling in love again." The slow-reveal color. |
| `--sunwash` | `#ffb5a5` (peach) | Warm highlight. Morning light on a kitchen counter. |
| `--moonstone` | reserved | Tender emphasis. Earnest, unpretentious. Use sparingly for "I'd marry you" moments in copy — small joyful highlights. |

### Neutrals and text

| Token | Hex | What it is |
|---|---|---|
| `--glass-clear` | `#ffffff` | Labradorite primary text. Near-white, slightly warmed. |
| `--console-whisper` | `rgba(224, 224, 255, 0.60)` | Muted UI text on dark. The monitor glow of an idle terminal. |
| `--ink-well` | `#2d1b3d` | Opalite primary text. Deep plum-ink. Never flat black — the ink itself is already branded. |
| `--mint-bright` | `#eafff7` | Jadeite-tinted off-white. Used for display lockup names so they sit in the brand even when they're "light." |

### Gotchas — tokens that aren't what they look like

Two tokens will silently break a rule if you use them where a plain color belongs. CSS drops an invalid declaration without a word, so nothing errors — it just doesn't paint.

| Token | It's actually | What breaks |
|---|---|---|
| `--bbs-bg` | a **gradient**, not a color | Any property that wants a color: `border`, `outline`, `box-shadow`, `color`, `fill`. The whole declaration dies. Works fine in `background`. |
| `--bbs-bg-overlay` | a gradient too | Same deal. It's a `background` layer, nothing else. |

The trap: `var(--bbs-bg, #000)` looks safe, but the fallback **never fires** — the variable *is* defined, it's just the wrong type. Silent failure either way.

When you need a solid color that matches the theme's ground, use `--bbs-primary-ink`. It's a real color in all three themes.

```css
/* wrong — declaration is dropped, no warning */
border: 2px solid var(--bbs-bg);

/* right */
border: 2px solid var(--bbs-primary-ink);
```

### Floats — not colors, but words that carry color

Some things aren't a hex code; they're a posture. These live in the voice, not the tokens.

- **Milk Opal** — the tender, protective register. Used in copy about family, mom's line, the "I'd do anything for you" moments. Never put this in a swatch. Let it float.
- **The Aha Moment** — the feeling the whole system is built to produce: something lands for a brain that doesn't usually get that feeling. It conjugates, so use the form the sentence needs: *it clicks* / *it computes* (verb), *the aha moment* (noun), *the moment it lands* (modifier). Don't hyphenate it into an adjective. Headers and product copy, never a color name.
- **Hummingbird** — the gradient/glow emblem reserved for Project Jadeite's most precious moments. Small, fast, almost-missed. If you're tempted to use it for decoration, don't.

---

## 4 — Voice rules

1. **Down-to-earth, bestie energy.** Friendly, Gen-Z-meets-millennial, no corporate filler. Write copy as if you're explaining something to a friend at a kitchen table. Lowercase is fine when it suits the vibe — the lockup itself is built by 💚 stephen, all lowercase.
2. **Lowercase-first.** Headings, labels, lockups. Capital letters feel corporate-loud. Save caps for the eyebrow ALL-CAPS treatment where the letterspacing does the work.
3. **Specific over general.** "It clicks" over "intuitive." "Late-night" over "dark mode." The specificity *is* the voice.
4. **Name colors for the mineral, not the look.** Obsidian, fluorite, celestite — the material the color behaves like, not a description of it. "Deep indigo" is what the hex already says. If you can't name the mineral, you don't need the color.
5. **No em-dashes-as-drama.** Em dashes are for breath, not for punchlines.
6. **Never "simply," "effortlessly," "seamlessly."** Those are the filler words of a brand that hasn't decided what it actually thinks.
7. **When in doubt, ask: would this make someone newly-diagnosed feel less alone, or more alone?** That's the test.

---

## 5 — When Claude (or anyone) is working in this system

- Read this file first. Every time.
- Use the named tokens, not the hex codes. If you reach for a hex, stop and ask which token you meant.
- If you invent a new color, give it a named reason. If you can't name it, you don't need it.
- The jadeite heart goes in the lockup. Always. If the design can't hold it, redesign the container, not the lockup.
- **The heart is jadeite. Not "usually" jadeite.** It can change *weight* — solid or outline, big or 16px — but not hue. A red heart is someone else's brand, a white heart is a placeholder, a purple heart is a mood. The one exception is true single-ink print, where there's physically only one colour available.
- **On screen, control the ground instead of recolouring the heart.** A scrimmed photo puts jadeite at roughly 6.8:1, well past the 3:1 WCAG asks of a meaningful graphic. So: controlled ground → jadeite, untreated. Uncontrolled ground at 20px and up → white heart with a 1.5px hard keyline in `--bbs-primary-ink`. Uncontrolled and under 20px → put it on a plate (a **solid** `--bbs-primary-ink` disc — never glass, since translucency hands the ratio back to a ground you do not control) and keep the heart jadeite. Never a soft grey shadow — a blur adds haze without adding an edge, which is exactly the low-vision failure case. Working shown in `preview/mono-heart-study.html`.
- `preview/` pages are the review surface. `tokens/bbs-tokens.css` is the source of truth. Everything else is downstream.

---

*Built for the aha moment.*
