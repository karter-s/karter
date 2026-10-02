import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RatingScope Case Study: Application Security and Privacy Engineering | Karter Steinle",
  description:
    "Production application security and privacy engineering case study for RatingScope, an educational veteran claims web platform.",
};

export default function RatingScopePage() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas font-sans text-primary">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <article className="kps-container space-y-12 sm:space-y-16">
          {/* Back Navigation */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-action"
            >
              <span aria-hidden="true">←</span>
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* Header */}
          <header className="space-y-6 border-b border-border pb-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-border bg-surface-raised px-3 py-1 text-xs font-semibold text-secondary">
                Production Case Study
              </span>
              <span className="rounded-lg border border-border bg-surface-raised px-3 py-1 text-xs font-semibold text-secondary">
                Next.js · TypeScript
              </span>
              <span className="rounded-lg border border-border bg-surface-raised px-3 py-1 text-xs font-semibold text-secondary">
                Private Production Repository
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-normal text-primary sm:text-4xl lg:text-5xl">
              RatingScope: Production Application Security and Privacy Engineering
            </h1>

            <p className="kps-body max-w-3xl text-secondary">
              A technical case study documenting defensive architecture, runtime browser hardening, client-side data minimization, and multi-layered AI guardrails implemented in a live veteran claims educational web platform.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://ratingscope.app"
                target="_blank"
                rel="noopener noreferrer"
                className="kps-button kps-button-primary"
              >
                <span>Visit Live Application: ratingscope.app</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </header>

          {/* Project Preview Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
            <Image
              src="/projects/ratingscope-preview.png"
              alt="RatingScope production overview"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </div>

          {/* Section 1: Architecture & Scope */}
          <section className="space-y-4">
            <div className="space-y-1">
              <span className="kps-eyebrow">01 · Threat Model</span>
              <h2 className="text-2xl font-semibold tracking-normal text-primary sm:text-3xl">
                Operational Context and Threat Model
              </h2>
            </div>

            <div className="space-y-6 rounded-xl border border-border bg-surface p-6 sm:p-8">
              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Problem</h3>
                <p className="kps-body">
                  Veterans navigating disability criteria handle sensitive medical symptoms and service-connected condition details. Centralizing personal health data in web application databases creates high-value targets for data exposure and unauthorized access.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Design Decision</h3>
                <p className="kps-body">
                  Adopt a strict privacy-by-design architecture: user evaluation inputs are processed ephemerally within the client session rather than collected or stored in application databases.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Security Control</h3>
                <p className="kps-body">
                  Assessment logic executes client-side; backend state is restricted to transient in-memory lookups keyed by high-entropy non-sequential references without retaining user medical records.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Verification</h3>
                <p className="kps-body">
                  Codebase inspections and architecture reviews confirmed the absence of user registration systems, database connection pooling, or persistent storage models for submitted user medical facts.
                </p>
              </div>

              <div className="space-y-1.5 rounded-lg border border-border bg-surface-quiet p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">Outcome</h3>
                <p className="kps-body text-primary">
                  Reduces systemic data risk: an application-tier issue yields no centralized repository of veteran medical records to exfiltrate.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Browser Runtime Hardening */}
          <section className="space-y-4">
            <div className="space-y-1">
              <span className="kps-eyebrow">02 · Runtime Hardening</span>
              <h2 className="text-2xl font-semibold tracking-normal text-primary sm:text-3xl">
                Browser Runtime Hardening and Defensive Headers
              </h2>
            </div>

            <div className="space-y-6 rounded-xl border border-border bg-surface p-6 sm:p-8">
              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Problem</h3>
                <p className="kps-body">
                  Client-side applications face browser-level execution risks including cross-site scripting (XSS), clickjacking, MIME-type sniffing, cross-origin resource leakage, and unauthorized browser feature access.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Design Decision</h3>
                <p className="kps-body">
                  Enforce centralized, defense-in-depth HTTP security headers that constrain browser execution boundaries and isolate origin context.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Security Control</h3>
                <p className="kps-body">
                  Deployed restrictive browser security policies that constrain execution to verified origins and restrict frame embedding; enforced HTTP Strict Transport Security (HSTS) with preload readiness; locked down unused hardware capabilities via Permissions-Policy; and enforced strict MIME and cross-origin isolation policies.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Verification</h3>
                <p className="kps-body">
                  Automated regression checks execute during continuous integration to validate that all required security headers and browser containment policies are present on every route before release.
                </p>
              </div>

              <div className="space-y-1.5 rounded-lg border border-border bg-surface-quiet p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">Outcome</h3>
                <p className="kps-body text-primary">
                  Establishes verified browser-level containment against framing attacks, script attribute injections, and unauthorized peripheral access.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Privacy by Design */}
          <section className="space-y-4">
            <div className="space-y-1">
              <span className="kps-eyebrow">03 · Data Minimization</span>
              <h2 className="text-2xl font-semibold tracking-normal text-primary sm:text-3xl">
                Privacy by Design and Data Minimization
              </h2>
            </div>

            <div className="space-y-6 rounded-xl border border-border bg-surface p-6 sm:p-8">
              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Problem</h3>
                <p className="kps-body">
                  Persistent session cookies, tracking identifiers, or shared downstream caching can expose user workflows or enable cross-session user tracking.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Design Decision</h3>
                <p className="kps-body">
                  Avoid first-party tracking cookies and instruct intermediate proxies and shared caches never to store sensitive dynamic responses.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Security Control</h3>
                <p className="kps-body">
                  The application operates without first-party cookies; telemetry relies on cookieless event metrics; assessment state remains in browser memory; and dynamic endpoints return explicit anti-caching directives.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Verification</h3>
                <p className="kps-body">
                  Response header auditing and source inspection confirmed zero cookie construction across application routes and verified private caching classifications across dynamic endpoints.
                </p>
              </div>

              <div className="space-y-1.5 rounded-lg border border-border bg-surface-quiet p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">Outcome</h3>
                <p className="kps-body text-primary">
                  Reduces exposure to downstream proxy cache retention and limits cross-session user tracking.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: AI Guardrails */}
          <section className="space-y-4">
            <div className="space-y-1">
              <span className="kps-eyebrow">04 · AI Guardrails</span>
              <h2 className="text-2xl font-semibold tracking-normal text-primary sm:text-3xl">
                AI Guardrails and Abuse Resistance
              </h2>
            </div>

            <div className="space-y-6 rounded-xl border border-border bg-surface p-6 sm:p-8">
              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Problem</h3>
                <p className="kps-body">
                  Integrating generative AI interfaces introduces risks of prompt injection, exposure of sensitive personal identifiers, hallucinated statutory evaluations, and automated abuse.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Design Decision</h3>
                <p className="kps-body">
                  Decouple statutory calculations from generative models and implement a multi-stage defensive security gateway preceding external AI model providers.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Security Control</h3>
                <p className="kps-body">
                  The gateway enforces input sanitization and AI guardrails to detect and redact sensitive identifiers prior to transit; routes statutory and mathematical criteria directly to deterministic client logic; applies input normalization to reduce adversarial prompt risks; enforces layered abuse controls and rate limiting; and maintains an operational disable capability.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Verification</h3>
                <p className="kps-body">
                  Automated regression checks and multi-vector test suites validated identifier sanitization prior to outbound requests, confirmed deterministic bypass of calculation queries, and verified availability protections and bounded lookup behavior.
                </p>
              </div>

              <div className="space-y-1.5 rounded-lg border border-border bg-surface-quiet p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">Outcome</h3>
                <p className="kps-body text-primary">
                  Designed to limit prompt manipulation risks, avoids algorithmic hallucination on legal criteria by using deterministic evaluation, and provides availability protections.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Threat Modeling & Bounded Lookups */}
          <section className="space-y-4">
            <div className="space-y-1">
              <span className="kps-eyebrow">05 · Application Architecture</span>
              <h2 className="text-2xl font-semibold tracking-normal text-primary sm:text-3xl">
                Threat Modeling and Bounded Application Lookups
              </h2>
            </div>

            <div className="space-y-6 rounded-xl border border-border bg-surface p-6 sm:p-8">
              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Problem</h3>
                <p className="kps-body">
                  Dynamic routing and resource-lookup endpoints risk directory traversal if user inputs reach filesystem calls, or insecure direct object references (IDOR) if identifiers are predictable or expose raw records.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Design Decision</h3>
                <p className="kps-body">
                  Use static data encapsulation and decoupled references rather than dynamic filesystem operations or predictable sequential keys.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Security Control</h3>
                <p className="kps-body">
                  Dynamic condition routes resolve parameters through bounded application lookups against precompiled static data without dynamic filesystem traversal, while transient session references utilize high-entropy non-sequential references storing only derived calculation state.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-action">Verification</h3>
                <p className="kps-body">
                  Structured codebase audits reviewed parameter-handling routes and identifier lookups to verify the absence of dynamic path construction routines and sequential identifiers.
                </p>
              </div>

              <div className="space-y-1.5 rounded-lg border border-border bg-surface-quiet p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">Outcome</h3>
                <p className="kps-body text-primary">
                  Validated application resistance to path manipulation and identifier enumeration through structured security reviews.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Controls Matrix (Collapsible) */}
          <section className="space-y-4">
            <div className="space-y-1">
              <span className="kps-eyebrow">06 · Controls Summary</span>
              <h2 className="text-2xl font-semibold tracking-normal text-primary sm:text-3xl">
                Defense-in-Depth Controls Matrix
              </h2>
            </div>

            <details className="group overflow-hidden rounded-xl border border-border bg-surface transition-all">
              <summary className="flex cursor-pointer select-none items-center justify-between bg-surface-raised px-6 py-4 text-sm font-medium text-secondary transition-colors hover:text-primary">
                <span className="flex items-center gap-2">
                  <span className="inline-block text-action font-bold transition-transform group-open:rotate-90" aria-hidden="true">
                    ▸
                  </span>
                  <span>View Full Defense-in-Depth Controls Matrix (6 Controls)</span>
                </span>
                <span className="text-xs text-tertiary group-open:hidden">Expand Matrix ↓</span>
                <span className="text-xs text-tertiary hidden group-open:inline">Collapse Matrix ↑</span>
              </summary>
              <div className="overflow-x-auto border-t border-border">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-surface-quiet text-xs font-semibold uppercase tracking-wider text-secondary">
                    <tr>
                      <th className="px-6 py-3.5">Control Domain</th>
                      <th className="px-6 py-3.5">Implementation Approach</th>
                      <th className="px-6 py-3.5">Threat / Risk Reduced</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-secondary">
                    <tr>
                      <td className="px-6 py-4 font-medium text-primary">Browser Execution Boundary</td>
                      <td className="px-6 py-4">Restrictive browser security policies and anti-framing directives</td>
                      <td className="px-6 py-4 text-tertiary">XSS, unauthorized external resource loading, frame hijacking</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-primary">Information Disclosure</td>
                      <td className="px-6 py-4">Strict Referrer-Policy and Permissions-Policy</td>
                      <td className="px-6 py-4 text-tertiary">Referrer parameter leakage and unneeded hardware API access</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-primary">Data Minimization</td>
                      <td className="px-6 py-4">Cookieless client-side architecture and input sanitization</td>
                      <td className="px-6 py-4 text-tertiary">Server-side data exposure, model prompt data contamination</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-primary">Logic Integrity</td>
                      <td className="px-6 py-4">Deterministic intent routing and model isolation</td>
                      <td className="px-6 py-4 text-tertiary">Hallucinated statutory calculations and benefit inaccuracies</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-primary">Abuse Resistance</td>
                      <td className="px-6 py-4">Layered rate limiting and operational disable capability</td>
                      <td className="px-6 py-4 text-tertiary">Automated scraping, denial-of-service, unconstrained resource usage</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-primary">Path Handling</td>
                      <td className="px-6 py-4">Bounded application lookups against static datasets</td>
                      <td className="px-6 py-4 text-tertiary">Path manipulation and unauthorized file disclosure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </details>
          </section>

          {/* Section 7: Verification Evidence */}
          <section className="space-y-6 border-t border-border pt-12">
            <div className="space-y-1">
              <span className="kps-eyebrow">07 · Evidence</span>
              <h2 className="text-2xl font-semibold tracking-normal text-primary sm:text-3xl">
                Verification Evidence
              </h2>
              <p className="kps-body text-secondary">
                Defensive controls in this case study are grounded in active production enforcement, automated verification test suites, and architectural governance records.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2 rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-primary">Production Runtime Enforcement</h3>
                <p className="text-sm leading-6 text-secondary">
                  Strict origin isolation, restrictive Content Security Policy, and encrypted transport active on live production endpoints.
                </p>
              </div>

              <div className="space-y-2 rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-primary">Pre-Transit Privacy Sanitization</h3>
                <p className="text-sm leading-6 text-secondary">
                  Automated redaction pipeline designed to sanitize personal identifiers and records before external model boundary transit.
                </p>
              </div>

              <div className="space-y-2 rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-primary">Deterministic Evaluation Engines</h3>
                <p className="text-sm leading-6 text-secondary">
                  Statutory criteria and calculations routed exclusively to deterministic logic, avoiding model hallucination on benefits criteria.
                </p>
              </div>

              <div className="space-y-2 rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-primary">Abuse Resistance and Availability</h3>
                <p className="text-sm leading-6 text-secondary">
                  Distributed request rate limiting with availability safeguards and operational disable capabilities.
                </p>
              </div>

              <div className="space-y-2 rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-primary">Automated Regression Checks</h3>
                <p className="text-sm leading-6 text-secondary">
                  Continuous integration test gates automatically validating security header compliance and blocking release if protections degrade.
                </p>
              </div>

              <div className="space-y-2 rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-primary">Architecture Security Audits</h3>
                <p className="text-sm leading-6 text-secondary">
                  Documented security reviews verifying structural resistance against path manipulation, object enumeration, and unauthorized tracking.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-action"
            >
              <span aria-hidden="true">←</span>
              <span>Back to Overview</span>
            </Link>

            <a
              href="https://ratingscope.app"
              target="_blank"
              rel="noopener noreferrer"
              className="kps-button kps-button-secondary"
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
