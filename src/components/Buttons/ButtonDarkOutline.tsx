export default function ButtonDarkOutline({ label }: { label: string }) {
  return (
    <button className="bg-white text-[#808A93] border-[1px] border-[#808A93] hover:bg-[#909ba4] hover:text-white active:bg-[#717a82] active:text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2">
      <span className="font-FiraGO">{label}</span>
    </button>
  );
}
