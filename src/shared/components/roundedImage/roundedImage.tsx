import React from "react";
import Image from "next/image";

interface roundedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  style: { aspectRatio: string };
}

export default function RoundedImage({
  src,
  alt,
  width,
  height,
  style,
}: roundedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-full object-cover items-center"
      style={{ aspectRatio: style.aspectRatio }}
    />
  );
}
