import React from "react";

interface aboutSectionContentProps {
  header: string;
  text: string;
}

export default function AboutSectionContent({
  header,
  text,
}: aboutSectionContentProps) {
  return (
    <div className={`md:mt-2 md:w-full text-center md:text-left`}>
      <p className="text-center text-lg md:text-2xl font-medium md:text-left">
        {text}
      </p>
      <br />
    </div>
  );
}
