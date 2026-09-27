export default function Footer() {
  return (
    <footer className="w-full py-10 bg-zinc-950 text-xs font-mono text-zinc-500">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© {new Date().getFullYear()} Karter Steinle. Evidence-First Technical Portfolio.</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-600">
          <span>Next.js 16</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Tailwind CSS</span>
          <span>•</span>
          <span>Vercel</span>
        </div>
      </div>
    </footer>
  );
}
