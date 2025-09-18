import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <Link className="text-sub text-sm" href={`/projects/${p.slug}`}>→</Link>
      </div>
      <p className="mt-2 text-sub text-sm">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
    </article>
  );
}