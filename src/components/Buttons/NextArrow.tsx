"use client";

import { LuArrowRight } from "react-icons/lu";

interface ButtonProps {
  onClick?: () => void;
}

export default function NextArrow(props: ButtonProps) {
  const { onClick } = props;
  return (
    <button
      className="absolute -right-9 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
      onClick={onClick}
    >
      <LuArrowRight className="w-6 h-6 text-gray-600" />
    </button>
  );
}
