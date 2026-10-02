import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Privacy by Design",
    body: "Designed around minimal server-side handling of user-entered data and clear trust boundaries.",
  },
  {
    title: "Application Hardening",
    body: "Implemented browser security controls and regression checks around the production application.",
  },
  {
    title: "AI Safeguards",
    body: "Added input protections and guardrails around AI-assisted functionality without making AI the decision engine.",
  },
];

export default function FeaturedProjectCard() {
  return (
    <section id="featured-work" className="kps-section">
      <div className="kps-container space-y-8">
        <div className="space-y-2">
          <span className="kps-eyebrow">Featured Project</span>
          <h2 className="kps-h2">Production work with documented security decisions.</h2>
        </div>

        <article className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
          <Link
            href="/projects/ratingscope"
            className="group block relative aspect-[16/8] w-full overflow-hidden border-b border-border bg-surface-quiet"
            aria-label="View the RatingScope case study"
          >
            <Image
              src="/projects/ratingscope-preview.png"
              alt="RatingScope application preview"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </Link>

          <div className="space-y-7 p-5 sm:p-8">
            <div className="max-w-3xl space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg border border-border bg-surface-raised px-3 py-1 text-xs font-semibold text-secondary">
                  Production Application
                </span>
                <span className="rounded-lg border border-border bg-surface-raised px-3 py-1 text-xs font-semibold text-secondary">
                  Next.js · TypeScript
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-normal text-primary sm:text-3xl">
                <Link href="/projects/ratingscope" className="transition-colors hover:text-action">
                  RatingScope — Production Application Security Case Study
                </Link>
              </h3>

              <p className="kps-body">
                A deployed educational web application where I documented and strengthened security controls around browser hardening, privacy, AI safeguards, and application architecture.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-lg border border-border bg-surface-quiet p-4">
                  <h4 className="text-sm font-semibold text-primary">{highlight.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-secondary">{highlight.body}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/projects/ratingscope" className="kps-button kps-button-primary">
                <span>View Case Study</span>
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href="https://ratingscope.app"
                target="_blank"
                rel="noopener noreferrer"
                className="kps-button kps-button-secondary"
              >
                <span>Visit RatingScope</span>
                <span aria-hidden="true">↗</span>
              </a>

              <span className="text-xs text-tertiary sm:ml-auto">Private production repository</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
