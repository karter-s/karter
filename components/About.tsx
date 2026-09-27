export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            OPERATIONAL BACKGROUND &amp; TRANSITION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            About &amp; Technical Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-zinc-400">
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-200 font-mono">
              Operational Rigor
            </h3>
            <p>
              As an active-duty U.S. Army Sergeant, my baseline is built on procedural compliance, standard operating procedures (SOPs), systems accountability, and methodical troubleshooting under pressure. Managing technical operations in military environments requires eliminating ambiguity and maintaining strict documentation discipline.
            </p>
            <p>
              I apply this same operational structure to cybersecurity—treating defensive systems with the rigor and accountability demanded by mission-critical environments.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-200 font-mono">
              Defensive Focus
            </h3>
            <p>
              I am actively building hands-on competency in defensive security, security operations (SOC), and information assurance. I focus on technical problems that can be verified with evidence: establishing defensible trust boundaries, analyzing system telemetry, minimizing attack surfaces, and aligning architectures with federal frameworks like NIST SP 800-53 and the Risk Management Framework (RMF).
            </p>
            <p>
              My goal is defensible technical work: every control, configuration, and security boundary supported by clear rationale and demonstrable proof.
            </p>
          </div>
        </div>

        {/* Technical Focus Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
            <div className="text-xs font-mono text-emerald-400">01 / DEFENSIVE OPERATIONS</div>
            <h4 className="text-sm font-semibold text-zinc-200">SOC &amp; Telemetry Analysis</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Studying log analysis, event correlation, detection engineering concepts, alert triage, and structured incident response fundamentals.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
            <div className="text-xs font-mono text-emerald-400">02 / SYSTEMS HARDENING</div>
            <h4 className="text-sm font-semibold text-zinc-200">Linux &amp; Network Defense</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Hands-on administration in Linux environments, shell scripting, boundary defense, least-privilege access, and network protocol analysis.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
            <div className="text-xs font-mono text-emerald-400">03 / GOVERNANCE &amp; ASSURANCE</div>
            <h4 className="text-sm font-semibold text-zinc-200">Information Assurance &amp; RMF</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Familiarity with NIST SP 800-53 control families, DoD compliance lifecycles, continuous monitoring, and security assessment documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
