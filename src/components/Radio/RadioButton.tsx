"use client";

export default function RadioButton({
  label,
  name,
  value,
  checked,
  onChange,
}: any) {
  return (
    <div className="flex gap-10">
      <div className="inline-flex items-center">
        <label
          className="relative flex items-center cursor-pointer"
          htmlFor={value}
        >
          <input
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            type="radio"
            className="peer h-[17px] w-[17px] cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
            id={value}
          />
          <span className="absolute bg-slate-800 w-[7px] h-[7px] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label
          className="ml-2 text-slate-600 cursor-pointer text-sm"
          htmlFor={value}
        >
          {label}
        </label>
      </div>
    </div>
  );
}
