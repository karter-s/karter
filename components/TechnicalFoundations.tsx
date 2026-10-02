const groups = [
  {
    title: "Systems & Shell",
    items: ["Linux (Debian / Ubuntu)", "Bash / shell basics", "CLI administration", "Git / GitHub workflow"],
  },
  {
    title: "Networking & Web",
    items: ["TCP/IP & DNS", "HTTP/HTTPS", "Content Security Policy (CSP)", "HSTS & TLS configuration"],
  },
  {
    title: "Security",
    items: ["NIST CSF concepts", "Access-control concepts", "Principle of least privilege", "Security monitoring fundamentals"],
  },
  {
    title: "Operations",
    items: ["U.S. Army Veteran (E-5)", "Standard operating procedures", "OPSEC & physical security", "Technical troubleshooting"],
  },
];

export default function TechnicalFoundations() {
  return (
    <section id="foundations" className="kps-section">
      <div className="kps-container space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="kps-eyebrow">Technical Foundations</span>
          <h2 className="kps-h2">Skills I can explain and apply today.</h2>
          <p className="kps-body">
            Current foundations from Security+, hands-on technical work, production application work, and military operations.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="kps-card">
              <h3 className="text-sm font-semibold text-primary">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-secondary">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-action" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
