import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import HeroSection from "@/components/heroSection";
import ProjectsSection from "@/components/projectSection";
import AboutSection from "@/components/aboutSection";
import MissionSection from "@/components/missionSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MissionSection />
    </div>
  );
}
