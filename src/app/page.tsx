import Link from "next/link";

const projects = [
  {
    slug: "funeral-crm",
    title: "Funeral CRM",
    description:
      "Specialized CRM for funeral homes with pizza-tracker style stages, scheduling, and roles.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    slug: "soccer-game",
    title: "Soccer Prediction Game",
    description:
      "Predict match results, create private leagues, earn points by accuracy. Practice project.",
    tags: ["Ruby on Rails", "JavaScript"],
  },
  {
    slug: "yt-extension",
    title: "YouTube Comments Extension (Planned)",
    description:
      "Hover a thumbnail to preview top comments in an overlay.",
    tags: ["Chrome Extension", "JavaScript"],
  },
];

export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">Software Developer</h1>
        <p className="mt-4 text-sub max-w-xl mx-auto">
          I build clean, performant web apps with JavaScript, TypeScript, and Next.js.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/projects" className="btn btn-primary no-underline">View Projects</Link>
          <Link href="/resume" className="btn no-underline">Download Resume</Link>
        </div>
      </div>

      {/* Featured projects */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Featured Projects</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.slug} className="card">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <Link className="text-sub text-sm" href={`/projects/${p.slug}`}>→</Link>
              </div>
              <p className="mt-2 text-sub text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* About blurb */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-sub max-w-3xl">
          JS-first developer. Current focus: a niche Funeral CRM (from first contact → cremation),
          plus side projects that blend product thinking with clean implementation.
        </p>
      </div>
    </section>
  );
}
