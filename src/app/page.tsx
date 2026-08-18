import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { StackSection } from "@/components/sections/StackSection/StackSection";
import { AISection } from "@/components/sections/AISection/AISection";
import { ExperienceSection } from "@/components/sections/ExperienceSection/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <AISection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
