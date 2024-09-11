"use client";

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: boolean;
}
export default function Badge(props: Props) {
  const { label, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={twMerge(
        "bg-[#02152680] w-fit font-FiraGO flex justify-center rounded-2xl px-4 py-1.5",
        className
      )}
    >
      <span className="text-white font-medium t">
        {label ? "ქირავდება" : "იყიდება"}
      </span>
    </div>
  );
}
