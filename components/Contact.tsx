export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            CONNECT
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Contact
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Available for discussions regarding defensive security, SOC operations, systems engineering, and information assurance roles.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Email button */}
          <a
            href="mailto:karter.kws@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-xs sm:text-sm font-mono text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <svg
              className="h-4 w-4 stroke-emerald-400 fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>karter.kws@gmail.com</span>
          </a>

          {/* GitHub button */}
          <a
            href="https://github.com/karter-s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-xs sm:text-sm font-mono text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <svg
              className="h-4 w-4 fill-emerald-400"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>github.com/karter-s</span>
          </a>
        </div>
      </div>
    </section>
  );
}
