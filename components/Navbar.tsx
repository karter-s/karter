import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 sm:h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs sm:text-sm font-mono tracking-tight"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"></span>
          <span className="font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
            KARTER STEINLE
          </span>
          <span className="hidden sm:inline text-zinc-600">{"//"}</span>
          <span className="hidden sm:inline text-xs text-zinc-400">
            TECHNICAL OPERATIONS
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono">
          <Link
            href="/#featured-work"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#foundations"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Foundations
          </Link>
          <Link
            href="/#contact"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://github.com/karter-s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="ml-1 sm:ml-2 flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
          >
            <svg
              className="h-3.5 w-3.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
