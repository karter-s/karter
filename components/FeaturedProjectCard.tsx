import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjectCard() {
  return (
    <section id="featured-work" className="py-16 sm:py-24 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
              FEATURED WORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Production Engineering
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">01 / 01 DEPLOYED</span>
        </div>

        {/* Large Image-Led Featured Project Card */}
        <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 hover:border-zinc-700/80 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80 relative aspect-[16/10] shadow-xl">
              <Link href="/projects/ratingscope" className="block relative w-full h-full">
                <Image
                  src="/projects/ratingscope-preview.png"
                  alt="RatingScope - Production VA Claim Intelligence Platform"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </Link>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-0.5 text-xs font-mono text-emerald-400">
                    Production Application
                  </span>
                  <span className="inline-flex items-center rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-xs font-mono text-zinc-400">
                    Next.js / TypeScript
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-emerald-300 transition-colors">
                  <Link href="/projects/ratingscope">
                    RatingScope — Production Security &amp; Privacy Engineering
                  </Link>
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Deterministic educational web application analyzing veteran service medical criteria under 38 CFR. Architected with strict client-side state isolation, hardened browser headers, automated regression checks, and resilient AI guardrails.
                </p>
              </div>

              {/* 4 Strongest Verified Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-mono">
                <div className="rounded border border-zinc-800/60 bg-zinc-950/60 p-3 space-y-1">
                  <span className="text-emerald-400 font-semibold block">01 / PRIVACY-BY-DESIGN</span>
                  <span className="text-zinc-400 leading-snug block">
                    Cookieless client-side architecture; no persistent database storage for user health inputs.
                  </span>
                </div>

                <div className="rounded border border-zinc-800/60 bg-zinc-950/60 p-3 space-y-1">
                  <span className="text-emerald-400 font-semibold block">02 / RUNTIME HARDENING</span>
                  <span className="text-zinc-400 leading-snug block">
                    Strict CSP (<code className="text-zinc-300">default-src &apos;self&apos;</code>), 2-year HSTS preload, Permissions-Policy, automated CI checks.
                  </span>
                </div>

                <div className="rounded border border-zinc-800/60 bg-zinc-950/60 p-3 space-y-1">
                  <span className="text-emerald-400 font-semibold block">03 / AI GUARDRAILS</span>
                  <span className="text-zinc-400 leading-snug block">
                    Pre-transit PII regex filter (redacting SSNs/VA files), deterministic tool routing, and fail-closed rate limits.
                  </span>
                </div>

                <div className="rounded border border-zinc-800/60 bg-zinc-950/60 p-3 space-y-1">
                  <span className="text-emerald-400 font-semibold block">04 / CODEBASE AUDITS</span>
                  <span className="text-zinc-400 leading-snug block">
                    In-memory static JSON routing eliminating filesystem traversal risks; IDOR assessment on 122-bit UUIDs.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/projects/ratingscope"
                  className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-950 hover:bg-emerald-400 hover:text-zinc-950 transition-colors"
                >
                  <span>View Case Study</span>
                  <span aria-hidden="true">→</span>
                </Link>

                <a
                  href="https://ratingscope.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition-colors"
                >
                  <span>Live Site: ratingscope.app</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <span className="text-xs font-mono text-zinc-500 ml-auto sm:ml-0">
                  Private Repository
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
