import React from "react";
import { alegreya } from "../layout";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-24 items-center">
      {/* Logo */}
      <div className={alegreya.className + " text-4xl font-bold"}>
        Musleague
      </div>

      {/* Links */}
      <div className="flex gap-x-1">
        <Link
          href="/access"
          className="hidden md:block  bg-gold px-7 py-2 font-bold rounded-full"
        >
          Get Early Access 🎁
        </Link>
      </div>
    </nav>
  );
}
