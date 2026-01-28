"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@components/lib/utils";
import { technicalSkills, SkillItem } from "@components/lib/data/skills";

// --- Icon Grid Component ---
interface SkillGridProps {
  skills: SkillItem[];
  onSkillSelect: (skill: SkillItem) => void;
  selectedSkill: SkillItem | null;
  blueText: string;
}

const SkillGrid: React.FC<SkillGridProps> = ({
  skills,
  onSkillSelect,
  selectedSkill,
}) => (
  <div className="grid grid-cols-3 gap-8">
    {skills.map((skill) => {
      const isSelected = selectedSkill?.name === skill.name;
      return (
        <button
          key={skill.name}
          onClick={() => onSkillSelect(skill)}
          className={cn(
            "w-30 h-30 sm:w-35 sm:h-35 lg:w-40 lg:h-40",
            "bg-white/5 rounded-xl flex items-center justify-center p-3 cursor-pointer",
            "transition-all duration-300 hover:scale-105",
            isSelected
              ? `border border-sky-300 bg-sky-300/10 scale-105`
              : `hover:bg-sky-300/10`,
          )}
        >
          <Image
            src={skill.iconPath}
            alt={skill.name}
            width={120}
            height={120}
            className="w-auto h-auto object-contain"
          />
        </button>
      );
    })}
  </div>
);

const TitleAccent = ({ isRightAligned }: { isRightAligned: boolean }) => (
  <div
    className={cn(
      "absolute z-0 w-[40vw] h-[50vh] pointer-events-none opacity-30",
      "bg-[radial-gradient(50%_50%_at_50%_50%,rgba(118,209,251,0.6)_0%,rgba(0,0,0,0.6)_100%)]",
      "rounded-full transform",
      isRightAligned
        ? "right-0 translate-x-1/2 -translate-y-1/4"
        : "left-0 -translate-x-1/2 -translate-y-1/4",
    )}
  />
);

// --- Main Component ---
export function TechnicalSkillsSection() {
  const blueText = "text-sky-300";
  const grayText = "text-gray-400";

  const [selectedLanguage, setSelectedLanguage] = useState<SkillItem | null>(
    null,
  );
  const [selectedFramework, setSelectedFramework] = useState<SkillItem | null>(
    null,
  );

  const handleLanguageSelect = (skill: SkillItem) => {
    setSelectedLanguage((prev) => (prev?.name === skill.name ? null : skill));
    setSelectedFramework(null);
  };

  const handleFrameworkSelect = (skill: SkillItem) => {
    setSelectedFramework((prev) => (prev?.name === skill.name ? null : skill));
    setSelectedLanguage(null);
  };

  // Component to render the dynamic title or the selected skill description
  const renderTitleContent = (
    skill: SkillItem | null,
    isRightAligned: boolean,
    initialText: React.ReactNode,
  ) => {
    if (skill) {
      return (
        <div
          className={cn(
            "space-y-4 transition-opacity duration-300",
            isRightAligned && "text-right",
          )}
        >
          <h3
            className={cn(
              "text-4xl lg:text-6xl font-semibold font-outfit",
              blueText,
            )}
          >
            {skill.name}
          </h3>
          <p className={cn("text-lg font-montserrat", grayText)}>
            {skill.description}
          </p>
        </div>
      );
    }

    // Otherwise, show the default section title
    return (
      <h2 className="text-4xl lg:text-6xl font-semibold font-montserrat">
        {initialText}
      </h2>
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-20 space-y-40 lg:space-y-90">
      {/* 1. Languages Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Title/Description Area (Left Side) */}
        <div className="relative h-full flex items-start">
          <TitleAccent isRightAligned={false} />
          <div className="relative z-10">
            {renderTitleContent(
              selectedLanguage,
              false,
              <>
                Programming & Markup <br />
                <span className={blueText}>Languages</span>
              </>,
            )}
          </div>
        </div>

        {/* Icons Grid */}
        <div className="flex justify-start lg:justify-end">
          <SkillGrid
            skills={technicalSkills.languages}
            onSkillSelect={handleLanguageSelect}
            selectedSkill={selectedLanguage}
            blueText={blueText}
          />
        </div>
      </div>

      {/* 2. Frameworks/Databases Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Icons Grid */}
        <div className="flex justify-start">
          <SkillGrid
            skills={technicalSkills.frameworks}
            onSkillSelect={handleFrameworkSelect}
            selectedSkill={selectedFramework}
            blueText={blueText}
          />
        </div>

        {/* Title/Description Area (Right side for Frameworks section) */}
        <div className="relative h-full flex items-start justify-end text-right ">
          <TitleAccent isRightAligned={true} />
          <div className="relative z-10">
            {" "}
            {/* z-10 for text to be on top */}
            {renderTitleContent(
              selectedFramework,
              true,
              <>
                Frameworks, <br />
                Libraries & <span className={blueText}>Databases</span>
              </>,
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
