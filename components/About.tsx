const facts = [
  { value: "6 Years", label: "U.S. Army" },
  { value: "Security+", label: "CompTIA Certified" },
  { value: "Secret", label: "Active DoD Clearance" },
];

export default function About() {
  return (
    <section id="about" className="kps-section">
      <div className="kps-container space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="kps-eyebrow">About</span>
          <h2 className="kps-h2">Technical transition, grounded in real work.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="space-y-4">
            <p className="kps-body">
              I’m a U.S. Army Sergeant transitioning into cybersecurity after six years of active-duty service supporting technical and mission-critical operations.
            </p>
            <p className="kps-body">
              I’m building my technical experience through hands-on projects and production work, with a focus on understanding how systems operate, how they fail, and how they can be secured.
            </p>
            <p className="kps-body">
              My Army background brings structured troubleshooting, documentation, accountability, team leadership, and experience working in high-reliability environments.
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
