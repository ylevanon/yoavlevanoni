import React from "react";
import Link from "next/link";
import RoundedImage from "../../shared/components/roundedImage";
import DownArrow from "../../shared/components/downArrow";

interface heroSectionProps {
  heading: string;
}

export default function heroSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 mt-10 pt-16 sm:py-32 md:pt-48 md:pb-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-1/2 md:w-3/5">
          <RoundedImage
            src="/YL_2024.png"
            alt=""
            width={325}
            height={325}
            style={{ aspectRatio: "1 / 1" }}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Yoav!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-3xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Costa Mesa, CA. I&apos;m passionate about technology and
            love to find solutions to real world problems!
          </p>
          <Link
            href="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
