import React from "react";
import ProjectItem from "./projectItem";

const projects = [
  {
    name: "OptiRunGen.com",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/optirungen.png",
    github: "https://github.com/ylevanon/OptiRunRender",
    link: "https://www.optirungen.com/landing",
  },
  {
    name: "Trivi.ai",
    description:
      "Trivi.ai is an iOS application that allows you to create the charades ideas you want to play. You can create and save your own ideas or select from over 150 tailored categories. The app uses AI to generate unique charades cards and accompanying images, ensuring fresh and exciting gameplay every time. More features coming out soon!",
    image: "/triviai.png",
    github: "https://github.com/ylevanon/Trivi.ai",
    link: "https://apps.apple.com/us/app/trivi-ai/id6520386318?platform=iphone",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return <ProjectItem project={project} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
