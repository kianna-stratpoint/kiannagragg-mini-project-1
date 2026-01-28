import { cn } from "@components/lib/utils";
import { ProjectCard } from "@components/ProjectCard";
import { projectsData } from "@components/lib/data/projects";

export default function ProjectsPage() {
  const blueText = "text-sky-300";
  const grayText = "text-gray-400";

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-20">
      {/* Section Title */}
      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-semibold font-montserrat mb-4">
          self.<span className={blueText}>works</span>
        </h1>
        <p className={cn("text-xl", grayText)}>
          Projects highlighting my skills and collaboration.
        </p>
      </div>

      {/* Project Cards List */}
      <div className="space-y-4">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
