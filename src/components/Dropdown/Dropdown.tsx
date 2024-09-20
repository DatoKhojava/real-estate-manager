"use client";

import { FieldError } from "react-hook-form";

interface DropdownProps {
  onChange: (val: string) => void;
  value: string;
  label: string;
  errors: FieldError | undefined;
  disabled?: boolean;
  options: {
    value: number;
    label: string;
  }[];
}

export default function Dropdown({
  onChange,
  value,
  options,
  disabled,
  label,
}: DropdownProps) {
  return (
    <div className="flex flex-col mt-1">
      <label className="font-FiraGO text-black font-bold text-base">
        {label}
      </label>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        disabled={disabled}
        className="w-full outline-none border rounded-md border-[#808A93] h-11 pl-1"
      >
        {options?.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
