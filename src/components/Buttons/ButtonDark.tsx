"use client";

export default function ButtonDark({ label }: { label: string }) {
  return (
    <button className="bg-[#808A93] hover:bg-[#919da6] active:bg-[#727b83] text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2">
      <span className="font-FiraGO">{label}</span>
    </button>
  );
}
