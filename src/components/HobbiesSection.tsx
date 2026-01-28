"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@components/lib/utils";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import { hobbiesData, HobbyEntry } from "@components/lib/data/hobbies";
import { motion } from "framer-motion";

// Component for  hobby card
const HobbyCard: React.FC<{ hobby: HobbyEntry }> = ({ hobby }) => {
  const cardClassName =
    "bg-white/5 backdrop-blur-sm border border-white/50 rounded-[20px] hover:border-sky-300 hover:scale-110 transition-colors duration-300";

  const sizeMap = {
    sm: "h-[305px]",
    md: "h-[457px]",
    lg: "h-[558px]",
  };

  const heightClass = sizeMap[hobby.size ?? "md"];

  return (
    <Card className={cn("w-full lg:max-w-xs", heightClass, cardClassName)}>
      <CardHeader>
        {/* Hobby Title */}
        <h3 className="text-lg font-semibold text-white">{hobby.title}</h3>
      </CardHeader>

      <CardContent className="p-0 flex flex-col h-full">
        <div className="relative w-full flex-1 overflow-hidden">
          <Image
            src={hobby.imagePath}
            alt={hobby.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-3 text-sm text-gray-300">{hobby.description}</div>
      </CardContent>
    </Card>
  );
};

export function HobbiesSection() {
  const blueText = "text-sky-300";
  const grayText = "text-gray-400";

  const columns = [[], [], []] as HobbyEntry[][];

  hobbiesData.forEach((hobby, index) => {
    columns[index % 3].push(hobby);
  });

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-20">
      {/* Section Title and Subtitle */}
      <div className="text-center mb-16 -mt-12">
        <h2 className="text-4xl lg:text-5xl font-semibold font-montserrat mb-4">
          <span className={blueText}>hobbies</span>.forEach
        </h2>
        <p className={cn("text-lg", grayText)}>
          My fascination with building ideas through code mirrors the things I
          love outside of it.
        </p>
      </div>

      {/* HOBBIES GRID CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {columns.map((column, colIndex) => (
          <motion.div
            key={colIndex}
            className="flex flex-col gap-8"
            animate={{
              y: colIndex === 1 ? [0, 20, 0] : [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {column.map((hobby) => (
              <div key={hobby.id} className="group">
                <HobbyCard hobby={hobby} />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
