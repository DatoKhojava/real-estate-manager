"use client";

import { AiOutlinePlus } from "react-icons/ai";

export default function ButtonOutline({ label }: { label: string }) {
  return (
    <button className="bg-white hover:bg-[#fa5238] hover:text-white text-[#FF4136] font-medium py-2 border-[#FF4136] border-[1px] px-4 rounded-lg flex items-center space-x-2 active:bg-[#F93B1D]">
      <AiOutlinePlus />
      <span className="font-FiraGO">{label}</span>
    </button>
  );
}
