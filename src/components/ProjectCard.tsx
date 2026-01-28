"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@components/lib/utils";
import { ProjectItem } from "@components/lib/data/projects";
import { Button } from "@components/ui/button";
import { FaGithub } from "react-icons/fa";
import { techIconMap } from "@components/lib/data/icon-map";

interface ProjectCardProps {
  project: ProjectItem;
}

// --- Icon Renderer ---
const IconRenderer: React.FC<{ iconKey: string }> = ({ iconKey }) => {
  const iconPath = techIconMap[iconKey.toLowerCase()];

  if (!iconPath) {
    return <span className="text-xs text-red-400">{iconKey}</span>;
  }

  return (
    <div className=" w-15 h-15 bg-white/10 rounded-lg flex items-center justify-center">
      <Image
        src={iconPath}
        alt={iconKey}
        width={32}
        height={32}
        priority
        className="object-contain"
      />
    </div>
  );
};

// --- Main Card ---
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  const grayText = "text-gray-400";

  return (
    <article
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="group cursor-pointer border-b border-gray-700/50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 items-center">
        {/* IMAGE */}
        <div
          className="
            relative h-64 lg:h-82
            rounded-xl overflow-hidden
            bg-white/5 shadow-xl
          "
        >
          <Image
            src={project.imageUrl}
            alt={`${project.title} preview`}
            fill
            priority
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-105 w-auto
            "
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-4">
          <h3 className="text-lg lg:text-3xl font-normal text-white items-start">
            {project.title}
          </h3>

          <p className={cn("text-sm lg:text-lg", grayText)}>
            {project.shortDescription}
          </p>

          <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
            {/* TECH STACK */}
            <div className="flex gap-2">
              {project.techStack.map((tech) => (
                <IconRenderer key={tech.key} iconKey={tech.key} />
              ))}
            </div>

            {/* SOURCE CODE */}
            <Button
              asChild
              className="bg-white/10 hover:bg-white/20 border border-white/20"
            >
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Source Code <FaGithub className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
