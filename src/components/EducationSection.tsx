import React from "react";
import Image from "next/image";
import { cn } from "@components/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"; // Shadcn Card
import { educationData, EducationEntry } from "@components/lib/data/education";

// Component for a single Education card
const TimelineCard: React.FC<{ entry: EducationEntry }> = ({ entry }) => {
  const blueText = "text-sky-300";
  const grayText = "text-gray-400";

  const cardClassName =
    "bg-white/10 backdrop-blur-sm border border-white/50 rounded-[20px] hover:border-sky-300 hover:scale-110 transition-colors duration-300";

  return (
    <Card
      className={cn(
        "shadow-lg w-full max-w-xs sm:max-w-sm mx-auto px-2 sm:px-0",
        cardClassName,
      )}
    >
      <CardHeader className="flex flex-row items-center gap-2 sm:gap-4 p-3 sm:p-4 pb-0">
        <Image
          src={entry.logoPath}
          alt={entry.institution + " Logo"}
          width={50}
          height={50}
          className="rounded-full shrink-0 h-16 w-auto object-contain"
        />
        <CardTitle className="text-sm sm:text-base font-semibold text-white line-clamp-2">
          {entry.institution}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4 pl-2 sm:pl-8 pt-0 text-xs sm:text-sm">
        <p className="italic font-bold text-white mb-1 line-clamp-1">
          {entry.title}
        </p>
        <p className={blueText + " font-medium line-clamp-2"}>
          {entry.description}
        </p>
        <p className={grayText}>{entry.dateRange}</p>
      </CardContent>
    </Card>
  );
};

export function EducationSection() {
  const blueText = "text-sky-300";

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-25 relative lg:overflow-hidden">
      {/* Gradient Background Effect */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(118, 209, 251, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)",
          width: "1032px",
          height: "1029px",
          borderRadius: "1032px",
          opacity: 0.3,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Section Title */}
      <h2
        className="
          relative left-1/4 -translate-x-1/4
          w-screen
          pl-6 lg:pl-43
          text-left text-4xl lg:text-5xl
          font-semibold font-montserrat 
          mb-16 -mt-25
          "
      >
        self.<span className={blueText}>education</span>
      </h2>

      {/* Timeline Grid Container */}
      <div className="grid grid-cols-[2px_1fr] lg:grid-cols-[1fr_2px_1fr] relative z-10">
        {/* Vertical Line */}
        <div className="col-start-1 lg:col-start-2 bg-white relative h-155">
          {educationData.map((entry) => (
            <React.Fragment key={entry.id}>
              {/* Timeline Dot */}
              <div
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white",
                  entry.id === 1 ? "top-0 mt-8" : "mt-8",
                )}
                style={{ top: `${(entry.id - 1) * 230 + 40}px` }}
              />
            </React.Fragment>
          ))}
        </div>

        {/* Card Entries (Left and Right Columns) */}
        {educationData.map((entry) => (
          <React.Fragment key={entry.id}>
            {/* Left Side */}
            {entry.isLeft && (
              <div
                className="hidden lg:block col-start-1 text-left pr-12 my-10"
                style={{ marginTop: `${(entry.id - 1) * -420}px` }}
              >
                <TimelineCard entry={entry} />
              </div>
            )}

            {/* Right Side */}
            {!entry.isLeft && (
              <div
                className="col-start-2 lg:col-start-3 text-left pl-4 lg:pl-12 my-10"
                style={{ marginTop: `${(entry.id - 1) * -125}px` }}
              >
                <TimelineCard entry={entry} />
              </div>
            )}

            {entry.isLeft && (
              <div
                className="lg:hidden col-start-2 text-left pl-4 my-73"
                style={{ marginTop: `${(entry.id - 1) * -380}px` }}
              >
                <TimelineCard entry={entry} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
