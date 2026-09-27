import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "RatingScope Case Study — Karter Steinle",
  description:
    "Production application security and privacy engineering case study for RatingScope, a deterministic VA claim intelligence platform.",
};

export default function RatingScopePage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-100">
      <Navbar />

      <main className="flex-1 py-14 sm:py-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Back Navigation */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <span aria-hidden="true">←</span>
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* Header */}
          <header className="space-y-5 border-b border-zinc-800 pb-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-0.5 text-xs font-mono text-emerald-400">
                Production Case Study
              </span>
              <span className="inline-flex items-center rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-xs font-mono text-zinc-400">
                Next.js / TypeScript / Vercel
              </span>
              <span className="inline-flex items-center rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-xs font-mono text-zinc-400">
                Private Repository
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
              RatingScope — Production Application Security &amp; Privacy Engineering
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
              A public technical case study documenting the defensive architecture, runtime browser hardening, client-side data minimization, and multi-layered AI guardrails implemented in a live veteran claims educational web platform.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://ratingscope.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <span>Visit Live Application: ratingscope.app</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </header>

          {/* Project Preview Image */}
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-2xl relative aspect-[16/9] w-full">
            <Image
              src="/projects/ratingscope-preview.png"
              alt="RatingScope Production Overview"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Section 1: Architecture & Scope */}
          <section className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-base">01 /</span>
              <span>Operational Context &amp; Threat Model</span>
            </h2>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8 space-y-7">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  <span>Problem</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Veterans navigating disability criteria handle sensitive medical symptoms and service-connected condition details. Centralizing personal health data in web application databases creates high-value targets for data exposure and unauthorized access.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  <span>Design Decision</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Adopt a strict privacy-by-design architecture: user evaluation inputs are processed ephemerally within the client session rather than collected or stored in application databases.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  <span>Security Control</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Assessment logic executes client-side; backend state is restricted to transient in-memory lookups keyed by cryptographically random, high-entropy identifiers without retaining user medical records.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                  <span>Verification</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Codebase inspections confirmed the absence of user registration systems, database connection pooling, or persistent storage models for submitted user medical facts.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-emerald-500/40 bg-emerald-950/60 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Outcome</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                  Minimizes systemic data risk: an application-tier compromise yields no centralized repository of veteran medical data to exfiltrate.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Browser Runtime Hardening */}
          <section className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-base">02 /</span>
              <span>Browser Runtime Hardening &amp; Defensive Headers</span>
            </h2>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8 space-y-7">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  <span>Problem</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Client-side applications face browser-level execution risks including cross-site scripting (XSS), clickjacking, MIME-type sniffing, cross-origin resource leakage, and unauthorized browser feature access.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  <span>Design Decision</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Enforce centralized, defense-in-depth HTTP security headers that constrain browser execution boundaries and isolate origin context.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  <span>Security Control</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Deployed a strict Content Security Policy restricting execution to verified origins and blocking framing (<code className="text-emerald-300 font-mono text-xs bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">frame-ancestors &apos;none&apos;</code>); applied a 2-year HSTS preload directive; locked down unused hardware capabilities via Permissions-Policy; and enforced strict MIME and cross-origin isolation policies.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                  <span>Verification</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Automated regression test suites execute during continuous integration to validate that all required security headers and CSP directives are present on every route before release.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-emerald-500/40 bg-emerald-950/60 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Outcome</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                  Establishes verified browser-level containment against framing attacks, script attribute injections, and unauthorized peripheral access.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Privacy by Design */}
          <section className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-base">03 /</span>
              <span>Privacy-by-Design &amp; Data Minimization</span>
            </h2>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8 space-y-7">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  <span>Problem</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Persistent session cookies, tracking identifiers, or shared downstream caching can expose user workflows or enable cross-session user tracking.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  <span>Design Decision</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Eliminate first-party tracking cookies and instruct intermediate proxies and shared caches never to store sensitive dynamic responses.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  <span>Security Control</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  The application sets zero first-party cookies; telemetry relies on cookieless event metrics; assessment state remains in browser memory; and dynamic endpoints return explicit anti-caching directives (<code className="text-emerald-300 font-mono text-xs bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">Cache-Control: private, no-store</code>).
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                  <span>Verification</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Live response header auditing and source inspection confirmed zero cookie construction across application routes and verified private caching classifications across dynamic endpoints.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-emerald-500/40 bg-emerald-950/60 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Outcome</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                  Prevents downstream proxy cache leakage and eliminates longitudinal user tracking.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: AI Guardrails */}
          <section className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-base">04 /</span>
              <span>AI Guardrails &amp; Abuse Resistance</span>
            </h2>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8 space-y-7">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  <span>Problem</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Integrating generative AI interfaces introduces risks of prompt injection, data exfiltration of government identifiers, hallucinated statutory evaluations, and automated abuse or denial-of-service.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  <span>Design Decision</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Decouple statutory calculations from generative models and implement a multi-stage defensive security gateway preceding external AI model providers.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  <span>Security Control</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  The gateway enforces automated pre-transit redaction of government identification numbers and personal claim identifiers; routes statutory and mathematical criteria directly to deterministic client logic; applies input normalization to neutralize adversarial prompts; enforces multi-tiered atomic rate limits with fail-closed behavior; and maintains a centralized operational kill switch.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                  <span>Verification</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Multi-vector test suites validated identifier sanitization prior to outbound requests, confirmed deterministic bypass of calculation queries, and verified fail-closed enforcement when policy endpoints are unreachable.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-emerald-500/40 bg-emerald-950/60 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Outcome</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                  Protects model context from prompt manipulation, prevents algorithmic hallucination on legal criteria, and establishes availability and resource protections.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Threat Modeling & Audits */}
          <section className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-base">05 /</span>
              <span>Threat Modeling &amp; Codebase Security Audits</span>
            </h2>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8 space-y-7">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  <span>Problem</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Dynamic routing and resource-lookup endpoints risk directory traversal if user inputs reach filesystem calls, or insecure direct object references (IDOR) if identifiers are predictable or expose raw records.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  <span>Design Decision</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Use static data encapsulation and decoupled references rather than dynamic filesystem operations or predictable sequential keys.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  <span>Security Control</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Dynamic condition routes resolve parameters exclusively against in-memory static bundles (eliminating runtime filesystem read calls), while transient session references utilize 122-bit non-sequential random identifiers storing only derived calculation state.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                  <span>Verification</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Structured codebase audits reviewed all parameter-handling routes and identifier lookups to verify the complete absence of path-construction routines and sequential identifiers.
                </p>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded border border-emerald-500/40 bg-emerald-950/60 px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Outcome</span>
                </span>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                  Confirmed application resilience against path manipulation and unauthorized identifier enumeration.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Controls Matrix (Collapsible) */}
          <section className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-base">06 /</span>
              <span>Defense-in-Depth Controls Matrix</span>
            </h2>

            <details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden transition-all">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-xs sm:text-sm font-mono font-medium text-zinc-300 hover:text-emerald-400 select-none bg-zinc-900/50">
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold group-open:rotate-90 transition-transform inline-block">▸</span>
                  <span>View Full Defense-in-Depth Controls Matrix (6 Controls)</span>
                </span>
                <span className="text-xs text-zinc-500 font-mono group-open:hidden">Expand Matrix ↓</span>
                <span className="text-xs text-zinc-500 font-mono hidden group-open:inline">Collapse Matrix ↑</span>
              </summary>
              <div className="border-t border-zinc-800/80 p-0 overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="border-b border-zinc-800 bg-zinc-950/80 text-zinc-400">
                    <tr>
                      <th className="px-6 py-3.5">Control Domain</th>
                      <th className="px-6 py-3.5">Implementation Approach</th>
                      <th className="px-6 py-3.5">Threat / Risk Reduced</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                    <tr>
                      <td className="px-6 py-3.5 font-medium text-emerald-400">Browser Execution Boundary</td>
                      <td className="px-6 py-3.5">Content Security Policy &amp; anti-framing directives</td>
                      <td className="px-6 py-3.5 text-zinc-400">XSS, unauthorized external resource loading, frame hijacking</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium text-emerald-400">Information Disclosure</td>
                      <td className="px-6 py-3.5">Strict Referrer-Policy &amp; Permissions-Policy</td>
                      <td className="px-6 py-3.5 text-zinc-400">Referrer URL parameter leakage and unneeded hardware API access</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium text-emerald-400">Data Minimization</td>
                      <td className="px-6 py-3.5">Cookieless client-side architecture + identifier sanitization</td>
                      <td className="px-6 py-3.5 text-zinc-400">Server-side PII exposure, model prompt data contamination</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium text-emerald-400">Logic Integrity</td>
                      <td className="px-6 py-3.5">Deterministic intent routing vs. LLM isolation</td>
                      <td className="px-6 py-3.5 text-zinc-400">Hallucinated statutory calculations and benefit inaccuracies</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium text-emerald-400">Abuse Resistance</td>
                      <td className="px-6 py-3.5">Atomic multi-tiered rate limiting + operational kill switch</td>
                      <td className="px-6 py-3.5 text-zinc-400">Denial-of-service, automated scraping, unconstrained API cost</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-medium text-emerald-400">Path Handling</td>
                      <td className="px-6 py-3.5">In-memory static data lookup (no runtime filesystem calls)</td>
                      <td className="px-6 py-3.5 text-zinc-400">Path manipulation and unauthorized local file disclosure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </details>
          </section>

          {/* Section 7: Verification Evidence */}
          <section className="space-y-5 border-t border-zinc-800 pt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-base">07 /</span>
              <span>Verification Evidence</span>
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Every defensive control documented in this case study is grounded in active production enforcement, automated verification test suites, and architectural governance records:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
                <span className="text-emerald-400 font-semibold block">PRODUCTION RUNTIME ENFORCEMENT</span>
                <p className="text-zinc-400 leading-relaxed">
                  Strict origin isolation, restrictive Content Security Policy, and long-lived encrypted transport active on live production endpoints.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
                <span className="text-emerald-400 font-semibold block">PRE-TRANSIT PRIVACY SANITIZATION</span>
                <p className="text-zinc-400 leading-relaxed">
                  Automated redaction pipeline actively sanitizing government identifiers and personal records before external model boundary transit.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
                <span className="text-emerald-400 font-semibold block">DETERMINISTIC EVALUATION ENGINES</span>
                <p className="text-zinc-400 leading-relaxed">
                  Statutory criteria and calculations routed exclusively to deterministic logic, eliminating hallucination risks on benefits criteria.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
                <span className="text-emerald-400 font-semibold block">ABUSE RESISTANCE &amp; AVAILABILITY</span>
                <p className="text-zinc-400 leading-relaxed">
                  Distributed request rate limiting with fail-closed availability safeguards and operational emergency isolation capabilities.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
                <span className="text-emerald-400 font-semibold block">AUTOMATED CI REGRESSION SUITE</span>
                <p className="text-zinc-400 leading-relaxed">
                  Continuous integration test gates automatically validating security header compliance and blocking release if protections degrade.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
                <span className="text-emerald-400 font-semibold block">ARCHITECTURE SECURITY AUDITS</span>
                <p className="text-zinc-400 leading-relaxed">
                  Documented security reviews verifying structural resistance against path manipulation, object enumeration, and unauthorized tracking.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="pt-8 border-t border-zinc-800 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <span>← Back to Overview</span>
            </Link>

            <a
              href="https://ratingscope.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Launch Live App</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
