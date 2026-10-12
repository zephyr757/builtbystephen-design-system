/**
 * ProjectJadeitePage — About Project Jadeite philosophy and mission.
 *
 * Public page explaining the neurodivergent-first design philosophy
 * behind all projects under the Project Jadeite banner.
 *
 * Styling note: this component uses inline styles driven entirely by
 * Built by Stephen tokens. It deliberately does NOT depend on Tailwind
 * or on any external stylesheet beyond the token sheet, so it renders
 * correctly anywhere the design system is loaded. It themes with the
 * host — labradorite, opalite and jadeite all work.
 *
 * The heart is the real brand mark (.bbs-heart, masked from
 * heart-neon.svg) and the footer uses the real .bbs-signature.
 * Never substitute a hand-drawn or Unicode heart here.
 */

export interface ProjectJadeitePageProps {
  /** Href for the back link. Defaults to "/". */
  backHref?: string;
  /**
   * Src for the hero hummingbird, resolved by the CONSUMER.
   * There is no default: a root-absolute guess resolves against whatever
   * origin the page is served from, which is broken more often than not.
   * Omit it and the header renders title-only rather than a broken image.
   */
  heroSrc?: string;
}

const jadeitePageStyles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: 'clamp(32px, 6vw, 56px) clamp(16px, 4vw, 32px)',
    fontFamily: 'var(--bbs-font-body)',
    color: 'var(--bbs-text-secondary)',
    position: 'relative' as const,
    zIndex: 10,
  },
  shell: { width: '100%', maxWidth: '760px' },
  back: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: 'var(--bbs-fs-sm)',
    color: 'var(--bbs-text-muted)',
    textDecoration: 'none',
    marginBottom: '40px',
    transition: 'color var(--bbs-transition-fast)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(16px, 3vw, 28px)',
    marginBottom: '32px',
    flexWrap: 'wrap' as const,
  },
  hero: {
    width: 'clamp(104px, 18vw, 156px)',
    height: 'auto',
    flexShrink: 0,
    filter: 'drop-shadow(0 0 28px color-mix(in oklab, var(--bbs-heart) 34%, transparent))',
  },
  h1: {
    fontSize: 'var(--bbs-fs-2xl)',
    fontWeight: 'var(--bbs-weight-title)' as any,
    letterSpacing: 'var(--bbs-tracking-tight)',
    color: 'var(--bbs-jadeite)',
    margin: 0,
    lineHeight: 1.1,
  },
  tagline: {
    maxWidth: '62ch',
    fontSize: 'var(--bbs-fs-lg)',
    fontWeight: 'var(--bbs-weight-regular)' as any,
    fontStyle: 'italic' as const,
    color: 'var(--bbs-voice)',
    lineHeight: 'var(--bbs-lh-snug)',
    margin: '0 0 48px',
    textWrap: 'pretty' as any,
  },
  body: {
    display: 'grid',
    gap: '24px',
    maxWidth: '68ch',
    fontSize: 'var(--bbs-fs-base)',
    lineHeight: 'var(--bbs-lh-loose)',
    color: 'var(--bbs-text-secondary)',
  },
  p: { margin: 0, textWrap: 'pretty' as any },
  callout: {
    display: 'grid',
    gap: '8px',
    padding: 'var(--bbs-space-6)',
    margin: '8px 0',
    borderRadius: 'var(--bbs-radius-xl)',
    background: 'var(--bbs-surface)',
    border: '1px solid var(--bbs-border)',
    backdropFilter: 'blur(var(--bbs-blur-strong))',
    boxShadow: 'var(--bbs-shadow-card)',
  },
  calloutLead: {
    margin: 0,
    color: 'var(--bbs-jadeite)',
    fontWeight: 'var(--bbs-weight-subheading)' as any,
  },
  emphasis: { margin: 0, color: 'var(--bbs-text)', fontWeight: 'var(--bbs-weight-emphasis)' as any },
  aside: { margin: 0, fontStyle: 'italic' as const, color: 'var(--bbs-voice)', textWrap: 'pretty' as any },
  closing: { borderTop: '1px solid var(--bbs-border-soft)', paddingTop: '32px', marginTop: '24px', display: 'grid', gap: '16px' },
  closingLead: {
    margin: 0,
    fontSize: 'var(--bbs-fs-lg)',
    fontWeight: 'var(--bbs-weight-subheading)' as any,
    color: 'var(--bbs-jadeite)',
  },
  sig: {
    display: 'grid',
    justifyItems: 'center',
    gap: '12px',
    marginTop: '48px',
    paddingTop: '32px',
    borderTop: '1px solid var(--bbs-border-soft)',
    textAlign: 'center' as const,
  },
  sigLine: { margin: 0, fontSize: 'var(--bbs-fs-sm)', color: 'var(--bbs-jadeite)' },
  sigUrl: {
    fontSize: 'var(--bbs-fs-xs)',
    color: 'var(--bbs-text-muted)',
    textDecoration: 'none',
    transition: 'color var(--bbs-transition-fast)',
  },
};

function BackArrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

export default function ProjectJadeitePage({
  backHref = '/',
  heroSrc,
}: ProjectJadeitePageProps = {}) {
  const s = jadeitePageStyles;
  return (
    <div style={s.page}>
      <div style={s.shell}>
        <a href={backHref} style={s.back}><BackArrow /><span>back</span></a>

        <div style={s.header}>
          {heroSrc ? (
            <img src={heroSrc} alt="Glass hummingbird — Project Jadeite" style={s.hero} />
          ) : null}
          <h1 style={s.h1}>Project Jadeite</h1>
        </div>

        <p style={s.tagline}>
          my way of finally showing up in the world with the brain I actually have — not the one I spent decades trying (and failing) to pretend I had.
        </p>

        <div style={s.body}>
          <p style={s.p}>
            For most of my life, I didn't know I was Autistic with ADHD. All I knew was that things other people found simple felt impossible for me. Finishing tasks, staying organized, pushing through when something got overwhelming… it was all a mystery I blamed on myself.
          </p>

          <p style={s.p}>
            I thought I just wasn't disciplined enough. Focused enough. Strong enough.
          </p>

          <p style={s.p}>
            Then a few years ago, I finally got the words for what was happening in my brain — and everything clicked into place. The struggle wasn't a character flaw. It was a mismatch.
          </p>

          <p style={s.p}>Once I understood that, something in me shifted.</p>

          <p style={s.p}>
            Instead of fighting my brain, I started working with it. Instead of apologizing for how I think, I began recognizing the things I do uniquely well — noticing patterns other people miss, building systems from scratch, connecting ideas sideways, and solving problems no one else can quite articulate.
          </p>

          <div style={s.callout}>
            <p style={s.calloutLead}>Project Jadeite is built on that reframing.</p>
            <p style={s.p}>
              It's me treating Autism and ADHD not as deficits, but as superpowers — the reason I create, innovate, and help in the ways I do.
            </p>
          </div>

          <p style={s.p}>
            This isn't about fame, fortune, or intellectual property. I'm not chasing status or clout. That's never been the point.
          </p>

          <p style={s.emphasis}>
            Project Jadeite exists for one reason: to make my world, and the worlds of the people I care about, better. Kinder. Clearer. A little more magical around the edges.
          </p>

          <p style={s.p}>
            Every tool I build, every character I create, every mint-and-violet idea that lives under the Jadeite banner comes from that place — the part of me that wants to leave things better than I found them.
          </p>

          <p style={s.aside}>
            And yes… there's a part of me that knows my mom would be proud of this work. Of the way I'm learning to take who I really am and turn it into something that helps other people more fully than I ever could before.
          </p>

          <div style={s.closing}>
            <p style={s.closingLead}>That's Project Jadeite.</p>
            <p style={s.p}>
              Not a brand. Not a company. A mission. A shift. A home for every part of my brain that was told it was "too much" — and turned out to be exactly right.
            </p>
          </div>

          <div style={s.sig}>
            <p style={s.sigLine}>mint-bright. glass-clear. and finally, true.</p>
            <a
              href="https://builtbystephen.me"
              className="bbs-signature"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="built by stephen"
            >
              <span className="bbs-heart" />
            </a>
            <a href="https://builtbystephen.me" target="_blank" rel="noopener noreferrer" style={s.sigUrl}>
              builtbystephen.me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
