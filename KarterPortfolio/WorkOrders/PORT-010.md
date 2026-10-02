# PORT-010 — Adopt RatingScope UX/UI Grammar and LinkedIn Readiness

Status: In progress  
Priority: P0  
Branch: `port-010-kps-linkedin-readiness`

## Objective

Refactor the portfolio so it uses the same underlying UX/UI grammar as RatingScope without visually cloning the RatingScope brand. The result should feel like the same designer/system: Inter typography, semantic tokens, restrained spacing, cards, controls, focus states, and motion.

## Scope

- Adopt Inter as the primary font.
- Introduce semantic design tokens for the portfolio.
- Reduce mono/cyber-template styling.
- Ground copy in current verified experience.
- Surface Security+, active DoD Secret clearance, and degree in the hero.
- Simplify the RatingScope featured card.
- Replace the current jargon-heavy About section.
- Audit Technical Foundations for defensible claims.
- Improve mobile navigation and readability.
- Preserve the dark portfolio identity with a distinct palette.
- Keep RatingScope-specific brand colors, logos, veteran UI patterns, and imagery out of the shared system.

## Acceptance criteria

- Inter used consistently.
- Semantic tokens replace scattered literal color styling.
- Mobile navigation is not cramped.
- No professional cybersecurity experience is implied where it has not occurred.
- Featured project is concise and recruiter-readable.
- No future-project placeholders.
- No excessive neon/terminal/hacker aesthetics.
- Keyboard focus states are visible.
- Mobile body text remains readable without zoom.
- `npm run lint` passes.
- `npm run build` passes.
- Desktop and mobile QA completed before merge.
