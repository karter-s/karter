export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            ABOUT &amp; APPROACH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Operational Rigor &amp; Defensive Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Transition */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-3">
            <span className="text-xs font-mono text-emerald-400">01 / BACKGROUND</span>
            <h3 className="text-base font-semibold text-zinc-200">
              Military Discipline to Systems Security
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              As an active-duty U.S. Army Sergeant, my baseline is grounded in standard operating procedures, accountability, and calm troubleshooting under pressure. I apply that same structured operational discipline to defensive cybersecurity.
            </p>
          </div>

          {/* Card 2: Core Focus */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-3">
            <span className="text-xs font-mono text-emerald-400">02 / CORE FOCUS</span>
            <h3 className="text-base font-semibold text-zinc-200">
              Defensive Operations &amp; Assurance
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Actively developing practical competency in security operations (SOC), telemetry analysis, boundary defense, and federal governance frameworks such as NIST SP 800-53 and the Risk Management Framework (RMF).
            </p>
          </div>

          {/* Card 3: Philosophy */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-3">
            <span className="text-xs font-mono text-emerald-400">03 / PHILOSOPHY</span>
            <h3 className="text-base font-semibold text-zinc-200">
              Evidence-First Technical Work
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              I focus on work that can be defended with tangible evidence: verified configuration baselines, measurable risk reduction, and concrete architecture decisions rather than superficial checkboxes or assumed expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
