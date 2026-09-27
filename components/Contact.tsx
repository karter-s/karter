export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            COMMUNICATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Contact &amp; Connect
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Available for discussions regarding defensive security, SOC operations, systems engineering, and information assurance roles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email card */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
            <div className="text-xs font-mono text-zinc-500">DIRECT EMAIL</div>
            <div className="text-base font-medium text-zinc-100">
              karter.kws@gmail.com
            </div>
            <p className="text-xs text-zinc-400">
              For professional inquiries, technical discussions, and opportunities.
            </p>
            <div className="pt-2">
              <a
                href="mailto:karter.kws@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Send Email</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* GitHub card */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
            <div className="text-xs font-mono text-zinc-500">CODE &amp; REPOSITORIES</div>
            <div className="text-base font-medium text-zinc-100 font-mono">
              github.com/kartertech
            </div>
            <p className="text-xs text-zinc-400">
              Explore public code repositories, architecture, and security implementations.
            </p>
            <div className="pt-2">
              <a
                href="https://github.com/kartertech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Visit GitHub Profile</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
