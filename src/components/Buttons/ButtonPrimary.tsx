"use client";

import { AiOutlinePlus } from "react-icons/ai";

export default function ButtonPrimary({ label }: { label: string }) {
  return (
    <button className="bg-[#FF4136] hover:bg-[#ff554d] active:bg-[#E63A30] text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2">
      <AiOutlinePlus />
      <span className="font-FiraGO">{label}</span>
    </button>
  );
}
