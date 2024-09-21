"use client";

import { LuArrowLeft } from "react-icons/lu";

interface ButtonProps {
  onClick: () => void;
}

export default function PrevArrow(props: ButtonProps) {
  const { onClick } = props;
  return (
    <button
      className="absolute -left-9 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
      onClick={onClick}
    >
      <LuArrowLeft className="w-6 h-6 text-gray-600" />
    </button>
  );
}
