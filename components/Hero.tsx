import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-12 sm:py-16 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            {/* Operational Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-xs font-mono font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>U.S. Army Sergeant • Transitioning to Cybersecurity</span>
            </div>

            {/* Core Identity */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
                Karter Steinle
              </h1>
              <p className="text-lg sm:text-xl font-mono text-zinc-300">
                Cybersecurity &amp; Technical Operations
              </p>
              <p className="text-sm sm:text-base text-emerald-400 font-mono">
                Building practical experience in defensive security, systems security, and information assurance.
              </p>
            </div>

            {/* Direct Verified Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#featured-work"
                className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-3.5 py-2 text-xs sm:text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition-colors"
              >
                <span>View Featured Work</span>
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="https://github.com/karter-s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/90 px-3.5 py-2 text-xs sm:text-sm font-semibold text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="mailto:karter.kws@gmail.com"
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/90 px-3.5 py-2 text-xs sm:text-sm font-semibold text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <svg
                  className="h-4 w-4 stroke-current fill-none"
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

          {/* Compact Profile Image Container */}
          <div className="shrink-0 self-center sm:self-auto">
            <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-1 shadow-lg shadow-zinc-950/60">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-950">
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
      </div>
    </section>
  );
}
