export default function Footer() {
  return (
    <footer className="w-full bg-canvas py-10 text-sm text-tertiary">
      <div className="kps-container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Karter Steinle</span>
        <span>Built with Next.js, TypeScript, Tailwind CSS, and Vercel.</span>
      </div>
    </footer>
  );
}
