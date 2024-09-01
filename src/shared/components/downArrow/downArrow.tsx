import Link from "next/link";
import React from "react";
import { HiArrowDown } from "react-icons/hi2";

export default function DownArrow() {
  return (
    <div className="flex flex-row items-center text-center justify-center ">
      <Link href="about">
        <HiArrowDown size={35} className="animate-bounce" />
      </Link>
    </div>
  );
}
