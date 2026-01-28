import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cn } from "@components/lib/utils";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { projectsData } from "@components/lib/data/projects";
import { ProjectTechStack } from "@components/ProjectTechStack";

// Types
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Static Params (SSG)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Metadata (SEO)
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Projects`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [
        {
          url: project.imageUrl,
        },
      ],
    },
  };
}

const RadialGradientAccent = () => (
  <div
    className="absolute top-90 -right-50 z-0 pointer-events-none"
    style={{
      width: "1032px",
      height: "1029px",
      borderRadius: "1032px",
      opacity: 0.3,
      background:
        "radial-gradient(50% 50% at 50% 50%, rgba(118, 209, 251, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)",
      transform: "translate(20%, -20%)",
    }}
  />
);

// Page Component
export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const statusClass =
    project.status === "Completed"
      ? "bg-green-700"
      : project.status === "In Progress"
        ? "bg-yellow-600"
        : "bg-gray-600";

  return (
    <div className="relative w-full">
      <RadialGradientAccent />
      <article className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-20">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT COLUMN: Image & Metadata Block */}
          <div className="flex flex-col space-y-4">
            <div className="relative h-96 bg-white/5 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* 2. Role & Status Block */}
            <div className="flex items-center justify-between py-3 border-b border-gray-700/50">
              <div className="flex items-center gap-3 text-gray-300 text-base">
                <FaUserCircle className="w-8 h-8 text-gray-500" />{" "}
                <div>
                  <p className="font-semibold text-white">
                    Role: {project.role}
                  </p>
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
              </div>

              {/* Status Badge */}
              <span
                className={cn(
                  "text-white text-sm px-3 py-1 rounded-full font-medium",
                  statusClass,
                )}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Section */}
          <div>
            <header className="mb-10 space-y-4">
              <h1 className="text-5xl font-medium text-white">
                {project.title}
              </h1>
            </header>
            {/* Project Description */}
            <p className="text-lg text-gray-300 whitespace-pre-wrap mb-10">
              {project.longDescription}
            </p>

            {/* Interactive Tech Stack and Description */}
            <ProjectTechStack
              techStack={project.techStack}
              repoUrl={project.repoUrl}
              longDescription={project.longDescription}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
