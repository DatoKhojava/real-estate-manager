"use client";

import { useEffect, useState } from "react";

export default function PricesFilter({ setPriceRange }: any) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (parseFloat(maxPrice) < parseFloat(minPrice)) setErrorMessage(true);
    setPriceRange(`${minPrice}₾ - ${maxPrice}₾`);
  }, [minPrice, maxPrice]);

  return (
    <div className="w-96 font-FiraGO">
      <div className="flex gap-4">
        <div className="relative">
          <input
            type="number"
            name="minPrice"
            placeholder="დან"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5">
            ₾
          </span>
        </div>
        <div className="relative ">
          <input
            type="number"
            name="maxPrice"
            placeholder="დან"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5">
            ₾
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
            <label className="font-bold text-lg">მინ. ფასი</label>
            <div className="mt-4 text-base flex flex-col">
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMinPrice("50000")}
              >
                50,000 ₾
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMinPrice("100000")}
              >
                100,000 ₾
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMinPrice("150000")}
              >
                150,000 ₾
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMinPrice("200000")}
              >
                200,000 ₾
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMinPrice("300000")}
              >
                300,000 ₾
              </label>
            </div>
          </div>
          <div className="w-[155px]">
            <label className="font-bold text-lg">მაქს. ფასი</label>
            <div className="mt-4 text-base flex flex-col">
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMaxPrice("50000")}
              >
                50,000 ₾
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMaxPrice("100000")}
              >
                100,000 ₾
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMaxPrice("150000")}
              >
                150,000 ₾
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMaxPrice("200000")}
              >
                200,000 ₾
              </label>
              <label
                className="cursor-pointer my-1 hover:text-slate-600"
                onClick={() => setMaxPrice("300000")}
              >
                300,000 ₾
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
