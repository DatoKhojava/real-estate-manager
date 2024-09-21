"use client";

import { useEffect, useState } from "react";

interface FilterProps {
  setAreaRange: React.Dispatch<React.SetStateAction<string>>;
}

export default function AreaFilter({ setAreaRange }: FilterProps) {
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (parseInt(maxArea) < parseInt(minArea)) setErrorMessage(true);
    setAreaRange(`${minArea}მ² - ${maxArea}მ²`);
  }, [minArea, maxArea, setAreaRange]);

  return (
    <div className="w-96 font-FiraGO">
      <div className="flex gap-4">
        <div className="relative">
          <input
            type="number"
            name="minArea"
            placeholder="დან"
            value={minArea}
            onChange={(e) => setMinArea(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5">
            მ²
          </span>
        </div>
        <div className="relative ">
          <input
            type="number"
            name="maxArea"
            placeholder="დან"
            value={maxArea}
            onChange={(e) => setMaxArea(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5">
            მ²
          </span>
        </div>
      </div>
      {errorMessage ? (
        <div className="mt-6">
          <label className="text-black font-FiraGO text-lg font-bold">
            გთხოვთ შეიყვანოთ ვალიდური რიცხვები
          </label>
        </div>
      ) : (
        <div className="mt-6 flex w-[334px] gap-20">
          <div className="w-[155px]">
            <label className="font-bold text-lg">მინ. მ²</label>
            <div className="mt-4 text-base flex flex-col">
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMinArea("50000")}
              >
                50,000 მ²
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMinArea("100000")}
              >
                100,000 მ²
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMinArea("150000")}
              >
                150,000 მ²
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMinArea("200000")}
              >
                200,000 მ²
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMinArea("300000")}
              >
                300,000 მ²
              </label>
            </div>
          </div>
          <div className="w-[155px]">
            <label className="font-bold text-lg">მაქს. მ²</label>
            <div className="mt-4 text-base flex flex-col">
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMaxArea("50000")}
              >
                50,000 მ²
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMaxArea("100000")}
              >
                100,000 მ²
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMaxArea("150000")}
              >
                150,000 მ²
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMaxArea("200000")}
              >
                200,000 მ²
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMaxArea("300000")}
              >
                300,000 მ²
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
