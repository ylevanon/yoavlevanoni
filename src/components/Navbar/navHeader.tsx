import Link from "next/link";
import React from "react";

const NavHeader = () => {
  return (
    <Link href="/">
      <div className="container flex items-center space-x-2">
        <h2 className="text-2xl font-bold">Yoav Levanoni</h2>
      </div>
    </Link>
  );
};

export default NavHeader;
