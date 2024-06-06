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
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
    </div>
  );
}
