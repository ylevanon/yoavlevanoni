"use client";
import Link from "next/link";
import React from "react";

interface NavItemProps {
  navbar: boolean;
  setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  item: { label: string; page: string };
}

export default function NavItem({ navbar, setNavbar, item }: NavItemProps) {
  return (
    <Link
      key={item.label}
      href={`/${item.page}`}
      className={
        "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
      }
      // activeClass="active"
      // spy={true}
      // smooth={true}
      // offset={-100}
      // duration={500}
      onClick={() => setNavbar(!navbar)}
    >
      {item.label}
    </Link>
  );
}
