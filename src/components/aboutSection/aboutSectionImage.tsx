import SquareImage from "@/shared/components/squareImage";
import React from "react";

interface AboutSectionImageProps {
  src: string;
  alt: string;
}
export default function AboutSectionImage({
  src,
  alt,
}: AboutSectionImageProps) {
  return (
    <div className={`md:mt-2 justify-center md:w-1/3`}>
      <SquareImage
        src={`/${src}`}
        alt={alt}
        width={500}
        height={400}
        style={{ aspectRatio: "5 / 4" }}
      />
    </div>
  );
}
