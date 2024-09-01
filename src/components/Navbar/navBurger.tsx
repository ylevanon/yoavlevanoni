"use client";
import React from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
interface navBurgerProps {
  navbar: boolean;
  setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function navBurger({ navbar, setNavbar }: navBurgerProps) {
  return (
    <div className="md:hidden">
      <button
        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
        onClick={() => setNavbar(!navbar)}
      >
        {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
      </button>
    </div>
  );
}
