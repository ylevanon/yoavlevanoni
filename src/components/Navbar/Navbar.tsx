import ThemeToggler from "@/shared/components/themeToggler";
import React from "react";

interface NavItem {
  label: string;
  page: string;
}

const navItems: NavItem[] = [
  { label: "Home", page: "/" },
  { label: "About", page: "/about" },
  { label: "Contact", page: "/contact" },
  { label: "Projects", page: "/projects" },
];

export default function Navbar() {
  return (
    <div>
      Navbar
      <div>
        <ThemeToggler></ThemeToggler>
      </div>
    </div>
  );
}
