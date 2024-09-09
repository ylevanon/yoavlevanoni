import SquareImage from "@/shared/components/squareImage";
import React from "react";

interface missionItemProps {
  header: string;
  text: string;
  src: string;
  alt: string;
}

export default function missionItem({
  header,
  text,
  src,
  alt,
}: missionItemProps) {
  return (
    <div className="flex flex-col space-y-10  items-center justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
      <div className="md:mt-2 md:w-3/5 text-center md:text-left">
        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
          {header}
        </h1>
        <p className="text-xl">{text}</p>
        <br />
      </div>
      <div className="md:mt-2 justify-center md:w-1/2">
        <SquareImage
          src={`/${src}`}
          alt={alt}
          width={285}
          height={285}
          style={{ aspectRatio: "1 / 1" }}
        />
      </div>
    </div>
  );
}
