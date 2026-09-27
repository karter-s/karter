export default function Credentials() {
  return (
    <section id="credentials" className="py-16 sm:py-24 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            QUALIFICATIONS &amp; SYSTEMS KNOWLEDGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Background &amp; Technical Skills
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Verified military leadership, operational qualifications, and hands-on systems knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Military Leadership & Technical Ops */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-emerald-400">
                ACTIVE MILITARY SERVICE
              </span>
              <span className="text-xs font-mono text-zinc-500">
                Active Duty
              </span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-100">
              U.S. Army — Sergeant / Technical Operations
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Serving as a Noncommissioned Officer leading teams, maintaining technical equipment accountability, executing mission tasks, and enforcing operational standards.
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-300 pt-2 border-t border-zinc-800/80">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">▹</span>
                <span>Operational Security (OPSEC) and physical security compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">▹</span>
                <span>Preventive maintenance, technical inspections, and diagnostics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">▹</span>
                <span>Structured process documentation and standard operating procedures (SOPs)</span>
              </li>
            </ul>
          </div>

          {/* Practical Systems Competency */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-emerald-400">
                TECHNICAL COMPETENCY
              </span>
              <span className="text-xs font-mono text-zinc-500">
                Systems &amp; Defense
              </span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-100">
              Systems, Security &amp; Assurance Knowledge
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Demonstrated hands-on familiarity across operating systems, network protocols, defensive controls, and federal compliance baselines.
            </p>
            <div className="space-y-3 pt-2 border-t border-zinc-800/80 text-xs font-mono">
              <div>
                <span className="text-zinc-500 block">OPERATING SYSTEMS &amp; SHELL:</span>
                <span className="text-zinc-300">Linux (Debian/Ubuntu, CLI, Bash scripting), Git/GitHub version control</span>
              </div>
              <div>
                <span className="text-zinc-500 block">NETWORKING &amp; WEB DEFENSE:</span>
                <span className="text-zinc-300">TCP/IP, DNS, HTTP/HTTPS, Content Security Policy (CSP), HSTS, TLS</span>
              </div>
              <div>
                <span className="text-zinc-500 block">STANDARDS &amp; FRAMEWORKS:</span>
                <span className="text-zinc-300">NIST SP 800-53, Risk Management Framework (RMF), Principle of Least Privilege</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
