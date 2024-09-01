import React from "react";
import Image from "next/image";

interface squareImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  style: { aspectRatio: string };
}

export default function SquareImage({
  src,
  alt,
  width,
  height,
  style,
}: squareImageProps) {
  return (
    <div className="flex flex-col items-center  m-4  bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg object-cover"
        style={{ aspectRatio: style.aspectRatio }}
      />
    </div>
  );
}
