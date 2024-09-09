import React from "react";
import Image from "next/image";
import AboutItem from "./aboutItem";
import { SanityClient } from "@/app/lib/sanity";
import { AboutCard } from "@/app/lib/interface";

export const revalidate = 30;

async function getAboutItems() {
  const query = `*[_type == 'about'] | order(_createdAt desc){
  title, 
  smallDescription,
  titleImage,
  leftImage,
} `;
  const aboutItems = await SanityClient.fetch(query);
  return aboutItems;
}

const AboutSection = async () => {
  const aboutItems = await getAboutItems();

  return (
    <section id="about" className="md:w-9/12 mx-auto">
      <div className="pb-12 pt-16 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded m-b-19"></hr>
        </h1>
        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
        {aboutItems.map((aboutItem: AboutCard, idx: number) => {
          return (
            <>
              <AboutItem
                header={aboutItem.title}
                text={aboutItem.smallDescription}
                leftImage={aboutItem.leftImage}
                imageSrc={aboutItem.titleImage}
                alt={aboutItem.smallDescription}
                key={idx}
              />
              <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
