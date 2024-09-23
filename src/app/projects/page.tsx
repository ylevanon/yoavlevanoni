import ProjectsSection from "@/components/projectSection";
import React from "react";

export const revalidate = 30;

export default function Page() {
  return (
    <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 mt-10 pt-16 sm:py-32 md:pt-46 md:pb-48 md:flex-row md:space-x-4 md:text-left">
      <ProjectsSection />
    </div>
  );
}
