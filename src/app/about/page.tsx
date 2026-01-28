import AboutSection from "@components/AboutSection";
import { EducationSection } from "@components/EducationSection";
import { HobbiesSection } from "@components/HobbiesSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col space-y-32 py-10 lg:py-20">
      <AboutSection />
      <EducationSection />
      <HobbiesSection />
    </div>
  );
}
