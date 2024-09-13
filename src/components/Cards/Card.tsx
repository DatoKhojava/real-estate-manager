"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { Badge } from "../Badges";

export default function Card({
  children,
  image,
  is_rental,
}: {
  children: ReactNode;
  image: string;
  is_rental: boolean;
}) {
  return (
    <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-2xl w-96">
      <div className="relative h-56 overflow-hidden text-white rounded-md">
        <Image
          className="object-contain"
          src={image}
          fill={true}
          alt="Picture of the author"
        />
      </div>
      <Badge label={is_rental} className="absolute top-3 left-3" />
      <div className="py-[22px] px-[25px]">{children}</div>
    </div>
  );
}
