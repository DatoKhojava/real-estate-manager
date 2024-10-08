"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../Buttons";

interface PopupProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: () => void;
  label: string;
  PopupTitle: string;
  children: React.ReactNode;
}

export default function Popup({
  selectedOption,
  label,
  PopupTitle,
  children,
}: PopupProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const PopupRef = useRef<HTMLInputElement>(null);

  const togglePopup = () => setIsOpen(!isOpen);

  // const handleOptionSelect = (option: string) => {
  //   onOptionSelect(option);
  //   console.log(option);
  //   setIsOpen(false);
  // };

  const handleClickOutside = (event) => {
    if (PopupRef.current && !PopupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const onSelecthandle = () => {
    setIsOpen(!isOpen);
    console.log(selectedOption);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={PopupRef}>
      <div>
        <button
          type="button"
          onClick={togglePopup}
          className="font-FiraGO inline-flex justify-between w-full rounded-md border-0 border-gray-300 px-4 py-2 bg-white text-base font-bold text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          {label}
          <svg
            className={`ml-2 h-5 w-5 transition-transform duration-200 transform ${
              isOpen ? "rotate-0 mt-1" : "rotate-180"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707A1 1 0 014.293 8.293l5-5A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="p-6">
            <h2 className="font-FiraGO text-black font-bold text-lg">
              {PopupTitle}
            </h2>
            <div className="mt-6 mb-8">{children}</div>
            <div className="float-end pb-6">
              <Button label="არჩევა" type="primary" onClick={onSelecthandle} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
