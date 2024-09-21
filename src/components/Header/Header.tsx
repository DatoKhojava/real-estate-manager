"use client";

import Link from "next/link";
import Image from "next/image";

import rb from "@/public/rb.png";

export default function Header() {
  return (
    <nav className="flex w-full h-28 self-center px-4 py-2 mx-auto shadow-md rounded-none lg:px-8 lg:py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <Link
          href="/"
          className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          <Image src={rb} width={150} height={25} alt="RedBerry" />
        </Link>
      </div>
    </nav>
  );
}
