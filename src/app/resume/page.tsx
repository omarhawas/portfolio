export default function ResumePage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Omar Hawas</h1>
        <p className="text-sub">JavaScript/TypeScript • Next.js • React • Node • Prisma • Rails</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-sub">
          JS-first developer building clean, pragmatic web apps. Experience spans niche CRM workflows,
          PDF/process automation, and performance tuning. Product-minded with a bias to ship.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="text-sub list-disc list-inside space-y-1">
          <li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind</li>
          <li><strong>Backend:</strong> Node (API routes), Ruby on Rails</li>
          <li><strong>Data/Infra:</strong> Prisma, PostgreSQL, Vercel</li>
          <li><strong>Tools:</strong> Git/GitHub, Jest/Playwright (basic)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="card">
          <h3 className="font-semibold">Funeral Live — Founder/Developer</h3>
          <ul className="text-sub list-disc list-inside space-y-1 mt-2">
            <li>Building a specialized Funeral CRM (client stages, scheduling, roles) in Next.js.</li>
            <li>Own product direction, UX, and implementation; integrating with existing funeral workflows.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Projects</h2>
        <ul className="text-sub list-disc list-inside space-y-1">
          <li><strong>Funeral CRM:</strong> Niche SaaS targeting funeral homes; pizza-tracker style stages.</li>
          <li><strong>Soccer Prediction Game:</strong> Rails + JS app for accuracy-based match picks and private leagues.</li>
          <li><strong>YouTube Comments Extension (Planned):</strong> Hover to preview top comments without opening the video.</li>
        </ul>
      </section>
    </section>
  );
}
