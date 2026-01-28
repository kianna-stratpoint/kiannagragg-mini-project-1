"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@components/lib/utils";
import { Card, CardContent } from "@components/ui/card";
import { ProjectTechIcon } from "@components/lib/data/projects";
import { techIconMap } from "@components/lib/data/icon-map";
import { FaGithub } from "react-icons/fa";
import { Button } from "@components/ui/button";

// Helper for single icon rendering (adapted from ProjectCard)
const IconRenderer: React.FC<{
  tech: ProjectTechIcon;
  isSelected: boolean;
}> = ({ tech, isSelected }) => {
  const iconPath = techIconMap[tech.key.toLowerCase()];

  return (
    <div
      className={cn(
        "w-15 h-15 rounded-xl flex items-center justify-center p-3 cursor-pointer transition-all duration-200",
        isSelected
          ? "border-2 border-sky-300 bg-sky-300/10 scale-105"
          : "bg-white/10 hover:bg-white/20",
      )}
    >
      <Image
        src={iconPath || "/icons/fallback.svg"}
        alt={tech.key}
        width={32}
        height={32}
        priority
        className="object-contain"
      />
    </div>
  );
};

interface ProjectTechStackProps {
  techStack: ProjectTechIcon[];
  repoUrl: string;
  longDescription: string;
}

export const ProjectTechStack: React.FC<ProjectTechStackProps> = ({
  techStack,
  repoUrl,
}) => {
  const [selectedTech, setSelectedTech] = useState<ProjectTechIcon | null>(
    null,
  );
  const blueText = "text-sky-300";

  const handleIconClick = (tech: ProjectTechIcon) => {
    setSelectedTech((prev) => (prev?.key === tech.key ? null : tech));
  };

  return (
    <div className="space-y-8">
      {/* --- 1. Main Content and Tech Stack --- */}
      <div className="flex flex-col lg:flex-row items-end justify-between gap-6">
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <button
              key={tech.key}
              onClick={() => handleIconClick(tech)}
              aria-pressed={selectedTech?.key === tech.key}
            >
              <IconRenderer
                tech={tech}
                isSelected={selectedTech?.key === tech.key}
              />
            </button>
          ))}
        </div>

        {/* Source Code Button */}
        <Button
          asChild
          className="bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors duration-200"
        >
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            Source Code <FaGithub className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* --- 2. Description Card --- */}
      {selectedTech && (
        <Card
          className={cn(
            "bg-white/5 backdrop-blur-sm border border-white/50 p-6 lg:p-8 rounded-xl transition-all duration-300 h-auto",
            "border-sky-300/50",
          )}
        >
          <CardContent className="p-0 flex items-start gap-4">
            {/* Icon/Avatar for the Card */}
            <IconRenderer tech={selectedTech} isSelected={true} />

            {/* Text Content */}
            <div className="text-gray-300">
              <p className="text-lg font-medium">
                <span className={blueText}>{selectedTech.key}: </span>
                {selectedTech.usage}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
