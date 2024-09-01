"use client";
import React from "react";
import { useState } from "react";
import ThemeToggler from "@/shared/components/themeToggler";
import Link from "next/link";
import NavBurger from "./navBurger";
import NavItem from "./NavItem";
import NavHeader from "./navHeader";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "",
  },
  {
    label: "Blog",
    page: "blog",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <NavHeader />
            <NavBurger navbar={navbar} setNavbar={setNavbar} />
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <NavItem
                    key={idx}
                    item={item}
                    navbar={navbar}
                    setNavbar={setNavbar}
                  />
                );
              })}
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
