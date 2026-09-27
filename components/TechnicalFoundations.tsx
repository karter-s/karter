export default function TechnicalFoundations() {
  return (
    <section id="foundations" className="py-16 sm:py-20 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            FOUNDATIONS &amp; COMPETENCIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Technical Foundations
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Core systems knowledge, operational discipline, and security standards applied across technical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
          {/* Card 1: Operating Systems */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
            <span className="text-emerald-400 font-semibold block">SYSTEMS &amp; SHELL</span>
            <ul className="space-y-1.5 text-zinc-300">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>Linux (Debian / Ubuntu)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>Bash / Shell scripting</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>CLI administration</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>Git / GitHub workflow</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Networking & Web */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
            <span className="text-emerald-400 font-semibold block">NETWORKING &amp; WEB</span>
            <ul className="space-y-1.5 text-zinc-300">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>TCP/IP &amp; DNS protocols</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>HTTP/HTTPS architecture</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>Content Security Policy (CSP)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>HSTS &amp; TLS configuration</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Governance & Assurance */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
            <span className="text-emerald-400 font-semibold block">SECURITY &amp; RMF</span>
            <ul className="space-y-1.5 text-zinc-300">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>NIST SP 800-53 controls</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>Risk Management Framework</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>Principle of Least Privilege</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>Continuous monitoring</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Operations & Leadership */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
            <span className="text-emerald-400 font-semibold block">OPERATIONS &amp; OPSEC</span>
            <ul className="space-y-1.5 text-zinc-300">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>U.S. Army Sergeant (E-5)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>Standard Operating Procedures</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>OPSEC &amp; physical security</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-500">▹</span>
                <span>Technical maintenance checks</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
