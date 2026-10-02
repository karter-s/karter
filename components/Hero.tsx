import Image from "next/image";

export default function Hero() {
  return (
    <section className="kps-section">
      <div className="kps-container">
        <div className="flex flex-col-reverse items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-secondary">
              <span className="h-2 w-2 rounded-full bg-action" aria-hidden="true" />
              <span>U.S. Army Sergeant · Transitioning to Cybersecurity</span>
            </div>

            <div className="space-y-3">
              <h1 className="kps-h1">Karter Steinle</h1>
              <p className="text-lg font-medium text-primary sm:text-xl">
                Cybersecurity &amp; Technical Operations
              </p>
              <p className="kps-body max-w-xl">
                Building hands-on cybersecurity skills through practical projects and real production work.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-secondary">
              <span>CompTIA Security+</span>
              <span aria-hidden="true" className="text-tertiary">·</span>
              <span>Active DoD Secret Clearance</span>
              <span aria-hidden="true" className="text-tertiary">·</span>
              <span>B.S. Business Administration</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#featured-work" className="kps-button kps-button-primary">
                <span>View Featured Work</span>
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="https://github.com/karter-s"
                target="_blank"
                rel="noopener noreferrer"
                className="kps-button kps-button-secondary"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              <a href="mailto:karter.kws@gmail.com" className="kps-button kps-button-secondary">
                <svg
                  className="h-4 w-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="shrink-0 self-center sm:self-auto">
            <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-border bg-surface shadow-sm sm:h-36 sm:w-36">
              <Image
                src="/headshot.png"
                alt="Karter Steinle"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 112px, 144px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
