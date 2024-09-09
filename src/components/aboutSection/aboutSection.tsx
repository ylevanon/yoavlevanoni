import React from "react";
import Image from "next/image";
import AboutItem from "./aboutItem";

const AboutSection = () => {
  return (
    <section id="about" className="md:w-4/5 mx-auto">
      <div className="pb-12 pt-16 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded m-b-19"></hr>
        </h1>
        <AboutItem
          leftImage={false}
          header="Learn by Doing @ Cal Poly SLO"
          text="I graduated from Cal Poly SLO, in 2023 with a BS in Industrial
              Engineering and a minor in Computer Science. As a
              multidisciplinary student, I had the opportunity to combine my
              systems design and optimization skills with my passion for
              technology, which led me to pursue a career in software
              engineering."
          src="slo.jpg"
          alt="Morro Bay view from Perfumo Canyon"
        />

        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
        <AboutItem
          leftImage={true}
          header="Real-World Solutions @ Capital Group"
          text="In my current role, I've led significant projects such as
              migrating orchestration services to EKS and rearchitecting legacy
              SWIFT messaging services for the cloud. I'm particularly proud of
              my work in designing lift-and-shift solutions that have been
              adopted by multiple teams, showcasing my ability to create
              scalable and reusable solutions."
          src="cg.png"
          alt="Capital Group Companies Logo"
        />
        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
        <AboutItem
          leftImage={false}
          header="Indie Developer"
          text=" Beyond my professional work, I'm an avid problem-solver and
              innovator. I've developed personal projects like Trivi.ai, an iOS
              trivia app, and OptiRunGen.com, a unique application using linear
              programming to generate optimal running routes. These projects not
              only demonstrate my technical skills but also my ability to apply
              computer science concepts to real-world challenges."
          src="indie.jpeg"
          alt="Yoav Levanoni presenting at IEEE conference in Montreal"
        />
        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      </div>
    </section>
  );
};

export default AboutSection;
