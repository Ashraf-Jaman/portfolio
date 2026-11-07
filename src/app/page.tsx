import HomeHero from "@/components/home-hero";
import RecentProjects from "@/components/recent-projects";
import SkillsSection from "@/components/skills-section";
import ToolsSection from "@/components/tools-section";
import ScrollReveal from "@/components/scroll-reveal";

export default function Home() {
  return <><ScrollReveal priority><HomeHero /></ScrollReveal><ScrollReveal><RecentProjects /></ScrollReveal><ScrollReveal><SkillsSection /></ScrollReveal><ScrollReveal><ToolsSection /></ScrollReveal></>;
}
