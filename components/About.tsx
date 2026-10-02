const facts = [
  { value: "6 Years", label: "U.S. Army Veteran" },
  { value: "Security+", label: "CompTIA Certified" },
  { value: "Secret", label: "Active DoD Clearance" },
];

export default function About() {
  return (
    <section id="about" className="kps-section">
      <div className="kps-container space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="kps-eyebrow">About</span>
          <h2 className="kps-h2">Disciplined execution, grounded in real systems.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="space-y-4">
            <p className="kps-body">
              I’m a U.S. Army veteran with six years of active-duty experience supporting technical and mission-critical operations in DoD environments. My background combines technical troubleshooting, structured operations, documentation, team leadership, and high-reliability execution.
            </p>
            <p className="kps-body">
              My current work focuses on cybersecurity, secure application design, and practical technical projects. I’m particularly interested in how systems operate, how they fail, and how engineering and security controls can make them more resilient.
            </p>
            <p className="kps-body">
              Alongside my military background, I hold CompTIA Security+, an active DoD Secret clearance, a B.S. in Business Administration from Kansas State University, and the Google Cybersecurity Professional Certificate.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {facts.map((fact) => (
              <div key={fact.value} className="kps-card p-4 sm:p-5">
                <div className="text-lg font-semibold text-primary">{fact.value}</div>
                <div className="mt-1 text-xs leading-5 text-tertiary sm:text-sm">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
