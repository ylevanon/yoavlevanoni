import React from "react";
import AboutSectionImage from "./aboutSectionImage";
import AboutSectionContent from "./aboutSectionContent";

interface AboutItemProps {
  header: string;
  text: string;
  imageSrc: string;
  alt: string;
  leftImage: boolean;
}

export default function AboutItem({
  header,
  text,
  imageSrc,
  alt,
  leftImage,
}: AboutItemProps) {
  return (
    <div className="mt-8">
      <div className="flex flex-col space-y-10 items-center justify-center align-top md:space-x-10 md:space-y-2 md:p-4 md:flex-row md:text-left">
        {leftImage ? (
          <h1 className="justify-start text-3xl font-bold mb-6 md:text-left">
            {header}
          </h1>
        ) : (
          <h1 className="text-3xl font-bold mb-6">{header}</h1>
        )}
      </div>
      <div className="flex flex-col space-y-10 items-center justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        {leftImage ? (
          <>
            <AboutSectionImage src={imageSrc} alt={alt} />
            <AboutSectionContent header={header} text={text} />
          </>
        ) : (
          <>
            <AboutSectionContent header={header} text={text} />
            <AboutSectionImage src={imageSrc} alt={alt} />
          </>
        )}
      </div>
    </div>
  );
}
