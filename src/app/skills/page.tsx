import { TechnicalSkillsSection } from "@components/TechSkillsSection";
import { SoftSkillsSection } from "@components/SoftSkillsSection";
import { FeedbackSection } from "@components/FeedbackSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col space-y-32 py-10 lg:py-20">
      <TechnicalSkillsSection />
      <SoftSkillsSection />
      <FeedbackSection />
    </div>
  );
}
