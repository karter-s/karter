export default function RatingScopeCaseStudy() {
  return (
    <section id="case-study" className="py-16 sm:py-24 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
              FEATURED PRODUCTION CASE STUDY
            </span>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5 text-xs font-mono text-zinc-300">
                Next.js / TypeScript
              </span>
              <span className="inline-flex items-center rounded border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5 text-xs font-mono text-zinc-300">
                Vercel Production
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-100">
            RatingScope — Production Application Security &amp; Privacy Engineering
          </h2>

          <p className="text-base text-zinc-400 max-w-3xl leading-relaxed">
            RatingScope is a live, deterministic educational platform that translates published Title 38 Code of Federal Regulations (38 CFR) criteria into explainable medical rating logic for veterans. The codebase was architected around privacy-by-design, defensive HTTP response headers, automated security regression tests, and resilient AI guardrails.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://ratingscope.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/40 bg-emerald-950/20 px-3.5 py-1.5 text-xs font-mono font-medium text-emerald-300 hover:bg-emerald-950/40 hover:border-emerald-500/60 transition-colors"
            >
              <span>Live Application: ratingscope.app</span>
              <span aria-hidden="true">↗</span>
            </a>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800/80 bg-zinc-900/40 px-3 py-1.5 text-xs font-mono text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
              <span>Private Repository (Production Codebase)</span>
            </span>
          </div>
        </div>

        {/* Technical Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1: Browser Runtime Hardening */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-emerald-400">
                MODULE 01
              </span>
              <span className="text-xs font-mono text-zinc-500">
                next.config.ts
              </span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-100">
              Runtime Hardening &amp; Defensive Headers
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Enforced defensive HTTP headers across all application routes, establishing strict browser execution boundaries and reducing cross-origin leakage.
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Strict CSP:</strong> Explicit <code className="text-emerald-300 bg-zinc-950 px-1 py-0.5 rounded">default-src &apos;self&apos;</code>, <code className="text-emerald-300 bg-zinc-950 px-1 py-0.5 rounded">frame-ancestors &apos;none&apos;</code>, <code className="text-emerald-300 bg-zinc-950 px-1 py-0.5 rounded">object-src &apos;none&apos;</code>, and disallowing inline script attribute execution.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Strict Transport Security:</strong> 2-year HSTS preload directive (<code className="text-emerald-300 bg-zinc-950 px-1 py-0.5 rounded">max-age=63072000; includeSubDomains; preload</code>).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">API Isolation:</strong> Explicitly disabled unneeded browser capabilities via <code className="text-emerald-300 bg-zinc-950 px-1 py-0.5 rounded">Permissions-Policy</code> (camera, microphone, geolocation, USB, payments).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Regression Verification:</strong> Dedicated scripts (<code className="text-zinc-200 bg-zinc-950 px-1 py-0.5 rounded">scripts/verifySecurityHeaders.js</code>) assert header configurations during CI and prior to release.
                </span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Privacy by Design & Data Minimization */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-emerald-400">
                MODULE 02
              </span>
              <span className="text-xs font-mono text-zinc-500">
                Data Minimization
              </span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-100">
              Privacy-by-Design &amp; Application State
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Handling medical finding workflows requires architecting the application to avoid storing sensitive user data on the application server.
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Cookieless Model:</strong> Zero first-party tracking cookies or application session accounts; telemetry is restricted to cookieless event pings.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Client-Side State Storage:</strong> Assessment answers remain in client browser storage; the application codebase implements no persistent database storage layer for user inputs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Transient In-Memory Lookups:</strong> Ephemeral lookup tables use 122-bit <code className="text-emerald-300 bg-zinc-950 px-1 py-0.5 rounded">crypto.randomUUID()</code> keys in non-durable server memory maps that clear on process restart.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Cache Restriction:</strong> Sensitive and dynamic endpoints return <code className="text-emerald-300 bg-zinc-950 px-1 py-0.5 rounded">Cache-Control: private, no-store</code> to instruct browsers and shared caches not to retain responses.
                </span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: AI Guardrails & Abuse Defense */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-emerald-400">
                MODULE 03
              </span>
              <span className="text-xs font-mono text-zinc-500">
                lib/ai/
              </span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-100">
              AI Guardrails &amp; Abuse Controls
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Implemented strict boundary controls, deterministic intent routing, and input sanitization on generative AI interfaces.
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">PII Input Sanitization:</strong> Pre-transit regex filter (<code className="text-zinc-200 bg-zinc-950 px-1 py-0.5 rounded">sanitizer.ts</code>) redacts Social Security Numbers and VA File Numbers before prompts reach external model providers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Deterministic Intent Routing:</strong> Calculations and statutory benefit criteria bypass LLMs entirely, routing to client-side deterministic engines to prevent hallucinated results.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Prompt Injection Detection:</strong> Multi-pattern regex and whitespace-collapsed normalization filters block roleplay escapes and system prompt extraction attacks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Fail-Closed Rate Limiting:</strong> Redis/KV atomic Lua scripts enforce 10-minute, 24-hour, and global ceilings; backend outages fail closed to protect system availability.
                </span>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Threat Modeling & Security Audits */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-emerald-400">
                MODULE 04
              </span>
              <span className="text-xs font-mono text-zinc-500">
                Audits &amp; Verification
              </span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-100">
              Threat Modeling &amp; Codebase Audits
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Conducted structured codebase security reviews to verify risk reduction against common web application vulnerabilities.
            </p>
            <ul className="space-y-2 text-xs font-mono text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Directory Traversal Audit:</strong> Verified that dynamic routes resolve parameters exclusively against in-memory models and static JSON imports, eliminating user-supplied input to filesystem path operations (<code className="text-zinc-200 bg-zinc-950 px-1 py-0.5 rounded">fs</code>).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">IDOR Assessment:</strong> Verified that assessment lookup identifiers use 122-bit random UUIDs and that server-side in-memory maps store derived calculation outputs rather than raw submitted user facts.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Emergency Kill Switch:</strong> Global environment toggle (<code className="text-emerald-300 bg-zinc-950 px-1 py-0.5 rounded">AI_KILL_SWITCH_ACTIVE</code>) enables immediate shutdown of generative components during anomalous behavior.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>
                  <strong className="text-zinc-200">Release Discipline:</strong> Production changes gate on automated linting, type validation, and security baseline scripts.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Defense-in-Depth Summary Table */}
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 overflow-hidden">
          <div className="border-b border-zinc-800 px-6 py-4">
            <h3 className="text-sm font-mono font-semibold text-zinc-200">
              DEFENSE-IN-DEPTH CONTROLS MATRIX (VERIFIED REPOSITORY BASELINE)
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="border-b border-zinc-800 bg-zinc-950/60 text-zinc-400">
                <tr>
                  <th className="px-6 py-3">Control Domain</th>
                  <th className="px-6 py-3">Implementation Mechanism</th>
                  <th className="px-6 py-3">Threat / Risk Reduced</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="px-6 py-3.5 font-medium text-emerald-400">Browser Execution Boundary</td>
                  <td className="px-6 py-3.5">Content-Security-Policy with strict directives</td>
                  <td className="px-6 py-3.5 text-zinc-400">XSS, unauthorized external resource loading, frame hijacking</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-emerald-400">Information Disclosure</td>
                  <td className="px-6 py-3.5">Strict Referrer-Policy &amp; Permissions-Policy</td>
                  <td className="px-6 py-3.5 text-zinc-400">Referrer URL parameter leakage and unneeded hardware API access</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-emerald-400">Data Minimization</td>
                  <td className="px-6 py-3.5">Cookieless client-side architecture + regex PII filter</td>
                  <td className="px-6 py-3.5 text-zinc-400">Server-side PII exposure, model prompt data contamination</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-emerald-400">Logic Integrity</td>
                  <td className="px-6 py-3.5">Deterministic intent routing vs. LLM isolation</td>
                  <td className="px-6 py-3.5 text-zinc-400">Hallucinated statutory calculations and benefit inaccuracies</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-emerald-400">Abuse Resistance</td>
                  <td className="px-6 py-3.5">Atomic Redis/KV Lua rate limiting + kill switch</td>
                  <td className="px-6 py-3.5 text-zinc-400">Denial-of-service, automated scraping, unconstrained API cost</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-emerald-400">Path Handling</td>
                  <td className="px-6 py-3.5">In-memory static JSON lookup (no runtime fs)</td>
                  <td className="px-6 py-3.5 text-zinc-400">Path manipulation and unauthorized local file disclosure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
