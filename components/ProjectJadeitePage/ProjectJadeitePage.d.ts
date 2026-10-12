/**
 * ProjectJadeitePage — About Project Jadeite philosophy and mission.
 *
 * Full-page public route explaining the neurodivergent-first design
 * philosophy behind all projects under the Project Jadeite banner.
 * Renders its own back link, hero, story copy, and brand signature.
 *
 * Styled entirely from Built by Stephen tokens via inline styles —
 * no Tailwind, no external stylesheet beyond the token sheet. Themes
 * with the host across labradorite, opalite and jadeite.
 */
export interface ProjectJadeitePageProps {
  /** Href for the back link. Defaults to "/". */
  backHref?: string;
  /**
   * Src for the hero hummingbird, resolved by the consumer. No default —
   * a root-absolute path resolves against the serving origin, not the
   * design system, so it breaks more often than it works. Omit it and the
   * header renders title-only instead of a broken image.
   * The packaged asset lives at `assets/jadeite-hummingbird.png`.
   */
  heroSrc?: string;
}
declare const ProjectJadeitePage: (props?: ProjectJadeitePageProps) => JSX.Element;
export default ProjectJadeitePage;
