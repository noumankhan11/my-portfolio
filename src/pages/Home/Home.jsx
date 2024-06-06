import React from "react";
import {
  Navbar,
  HeroSection,
  SkillSection,
  Footer,
  ProjectsSection,
} from "../../components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
