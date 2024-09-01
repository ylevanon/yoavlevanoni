import React from "react";
import SkillsItem from "./skillsItem";

const skills = [
  { skill: "HTML", image: "/YL_2024.png" },
  { skill: "CSS", image: "/YL_2024.png" },
  { skill: "JavaScript", image: "/YL_2024.png" },
  { skill: "TypeScript", image: "/YL_2024.png" },
  { skill: "Python", image: "/YL_2024.png" },
  { skill: "React", image: "/YL_2024.png" },
  { skill: "Next.js", image: "/YL_2024.png" },
  { skill: "Tailwind CSS", image: "/YL_2024.png" },
  { skill: "Git", image: "/YL_2024.png" },
  { skill: "GitHub", image: "/YL_2024.png" },
  { skill: "Jupyter Notebooks", image: "/YL_2024.png" },
];

export default function skillsList() {
  return (
    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
      {skills.map((item, idx) => {
        return <SkillsItem key={idx} item={item}></SkillsItem>;
      })}
    </div>
  );
}
