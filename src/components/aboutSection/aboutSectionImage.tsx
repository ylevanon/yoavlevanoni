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
    <div className={`flex md:mt-2 w-full justify-center`}>
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
