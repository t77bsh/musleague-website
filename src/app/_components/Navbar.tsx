import React from "react";
import { alegreya } from "../layout";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-24 items-center">
      {/* Logo */}
      <div className={alegreya.className + " text-xl sm:text-2xl md:text-3xl font-bold"}>
        Musleague
      </div>
    </nav>
  );
}
