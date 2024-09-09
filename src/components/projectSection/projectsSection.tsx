import React from "react";
import ProjectItem from "./projectItem";
import { SanityClient } from "@/app/lib/sanity";
import { ProjectCard } from "@/app/lib/interface";

export const revalidate = 30;

async function getPosts() {
  const query = `*[_type == 'project'] | order(_createdAt desc){
  title, 
  smallDescription,
  titleImage,
  github_link,
  project_link
} `;
  const posts = await SanityClient.fetch(query);
  return posts;
}

const ProjectsSection = async () => {
  const projects = await getPosts();
  return (
    <section
      id="projects"
      className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl"
    >
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project: ProjectCard, idx: number) => {
          return <ProjectItem project={project} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
