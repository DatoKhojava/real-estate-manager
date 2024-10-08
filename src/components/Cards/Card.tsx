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
    <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-2xl">
      <div className="relative h-[350px] overflow-hidden text-white rounded-md">
        <Image
          fill
          className="object-cover"
          src={image}
          alt="image"
        />
      </div>
      <Badge label={is_rental} className="absolute top-3 left-3" />
      <div className="py-[22px] px-[25px]">{children}</div>
    </div>
  );
}
