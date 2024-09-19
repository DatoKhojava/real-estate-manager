"use client";

import { classed } from "@tw-classed/react";
import { ReactNode } from "react";

interface ButonProps {
  type: "primary" | "dark" | "outline" | "outlineDark";
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function Button({ type, label, icon, onClick }: ButonProps) {
  const Button = classed("button", {
    variants: {
      color: {
        primary:
          "bg-[#FF4136] hover:bg-[#ff554d] active:bg-[#E63A30] text-white",
        outline:
          "bg-white hover:bg-[#fa5238] hover:text-white text-[#FF4136] border-[#FF4136] border active:bg-[#F93B1D]",
        dark: "bg-[#808A93] hover:bg-[#919da6] active:bg-[#727b83] text-white",
        outlineDark:
          "bg-white text-[#808A93] border-[1px] border-[#808A93] hover:bg-[#909ba4] hover:text-white active:bg-[#717a82] active:text-white",
      },
    },
  });

  return (
    <Button
      className="font-medium py-2 px-4 rounded-lg flex items-center space-x-2"
      color={type}
      onClick={onClick}
    >
      {icon}
      <span className="font-FiraGO">{label}</span>
    </Button>
  );
}
