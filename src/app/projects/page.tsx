import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    slug: "funeral-crm",
    title: "Funeral CRM",
    description:
      "Specialized CRM for funeral homes with pizza-tracker style client stages, event scheduling, and roles.",
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
      "Hover a thumbnail to preview top comments in an overlay — decide faster if a video’s worth watching.",
    tags: ["Chrome Extension", "JavaScript"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </section>
  );
}
