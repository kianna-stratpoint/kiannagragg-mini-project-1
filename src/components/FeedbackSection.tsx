"use client";

import React from "react";
import { cn } from "@components/lib/utils";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import { collaborationLog, LogEntry } from "@components/lib/data/skills";
import { motion } from "framer-motion";

// Component for  hobby card
const HobbyCard: React.FC<{ log: LogEntry }> = ({ log }) => {
  const cardClassName =
    "bg-white/5 backdrop-blur-sm border border-white/50 rounded-[20px] hover:border-sky-300 hover:scale-110 transition-colors duration-300";

  const sizeMap = {
    sm: "h-[305px]",
    md: "h-[457px]",
    lg: "h-[558px]",
  };

  const heightClass = sizeMap[log.size ?? "md"];

  return (
    <Card className={cn("w-full lg:max-w-xs", heightClass, cardClassName)}>
      <CardHeader>
        {/* Feedback Title */}
        <h3 className="text-sm font-semibold text-white">{log.title}</h3>
      </CardHeader>
      <CardContent className="p-0 flex flex-col h-full">
        <div className="p-3 text-base text-gray-300 font-normal">
          {log.content}
        </div>
        <div className="pr-6 text-sm text-white font-semibold italic text-right">
          - {log.role}
        </div>
      </CardContent>
    </Card>
  );
};

export function FeedbackSection() {
  const blueText = "text-sky-300";
  const grayText = "text-gray-400";

  const columns = [[], [], []] as LogEntry[][];

  collaborationLog.forEach((log, index) => {
    columns[index % 3].push(log);
  });

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-20">
      {/* Section Title and Subtitle */}
      <div className="text-center mb-16 -mt-12">
        <h2 className="text-4xl lg:text-5xl font-semibold font-montserrat mb-4">
          <span className={blueText}>collaboration</span>.log
        </h2>
        <p className={cn("text-lg", grayText)}>
          Perspective from teammates on my collaboration, communication, and
          technical work.
        </p>
      </div>

      {/* FEEDBACK GRID CONTAINER */}
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
            {column.map((log) => (
              <div key={log.id} className="group">
                <HobbyCard log={log} />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
