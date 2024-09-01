import Image from "next/image";
import React from "react";

interface SkillsItemProps {
  item: {
    skill: string;
    image: string;
  };
}

export default function SkillsItem({ item }: SkillsItemProps) {
  return (
    <div className="flex flex-col items-center w-36 h-36 m-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
      <div className="w-20 h-20 mb-4 relative">
        <Image
          src={item.image}
          alt={item.skill}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-lg font-semibold text-gray-800">{item.skill}</p>
    </div>
  );
}
