import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { cn } from "@components/lib/utils";
import { softSkills } from "@components/lib/data/skills";

export function SoftSkillsSection() {
  const blueText = "text-sky-300";
  const grayText = "text-gray-400";

  const cardClassName =
    "bg-white/10 backdrop-blur-sm border border-white/50 hover:border-sky-300 transition-colors duration-300 h-full p-10 rounded-lg";
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-20 text-center">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(118, 209, 251, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)",
          width: "1032px",
          height: "1029px",
          borderRadius: "1032px",
          opacity: 0.3,
        }}
      />

      <div className="relative z-10">
        {/* Section Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-semibold font-outfit mb-2">
            <span className={blueText}>Soft</span> Skills
          </h2>
          <p className={cn("text-lg", grayText)}>
            Skills that shape how I create, collaborate, and grow.
          </p>
        </div>

        {/* Grid of Soft Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {softSkills.map((skill) => (
            <Card key={skill.title} className={cardClassName}>
              <CardHeader className="flex flex-row items-start space-x-4 p-0 pb-3">
                {/* Icon Container */}
                <div
                  className={cn(
                    "shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                    "bg-white/10 border border-sky-300/50",
                    blueText,
                  )}
                >
                  <skill.icon className="w-6 h-6 text-white" />
                </div>

                {/* Card Title */}
                <CardTitle className="text-2xl lg:text-3xl font-bold text-white text-left pt-0.5">
                  {skill.title}
                </CardTitle>
              </CardHeader>

              {/* Description Content */}
              <CardContent className="text-left text-gray-300 pt-0">
                {skill.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
