"use client";

import { useState } from "react";
import { Dropdown } from "../Dropdown";
import { Checkbox } from "../Checkbox";
import PricesFilter from "./PricesFilter";
import AreaFilter from "./AreaFilter";

const regions = [
  {
    id: 1,
    name: "გორი",
  },
  {
    id: 2,
    name: "თბილისი",
  },
  {
    id: 3,
    name: "გორი",
  },
  {
    id: 4,
    name: "სამეგრელო",
  },
  {
    id: 5,
    name: "კახეთი",
  },
  {
    id: 6,
    name: "გორი",
  },
  {
    id: 7,
    name: "აჭარა",
  },
  {
    id: 8,
    name: "აჭარა",
  },
  {
    id: 9,
    name: "აჭარა",
  },
  {
    id: 10,
    name: "აჭარა",
  },
  {
    id: 11,
    name: "აჭარა",
  },
  {
    id: 12,
    name: "აჭარა",
  },
];

export default function FilterMenu() {
  //global state
  const [selectedOption, setSelectedOption] = useState();
  //Local States
  const [regionList, setRegionsList] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<string>();
  const [areaRange, setAreaRange] = useState<string>();
  const [rooms, setRooms] = useState("");


  const regionsHandler = (region: { id: number; name: string }) => {
    if (regionList.includes(region.id)) {
      setRegionsList(regionList.filter((i) => i !== region.id));
    } else {
      setRegionsList((prev) => [...prev, region.id]);
    }
  };

  return (
    <div className="border border-slate-300 w-fit rounded-[10px] flex gap-6 p-1">
      <Dropdown
        selectedOption={regionList}
        label="რეგიონი"
        dropdownTitle="რეგიონის მიხედვით"
      >
        <div className="grid grid-cols-3 grid-rows-4 gap-4 w-[731px]">
          {regions.map((item) => (
            <div className="flex w-48" key={item.id}>
              <Checkbox
                isChecked={regionList.includes(item.id)}
                onChange={() => regionsHandler(item)}
                checkboxId={item.id.toString()}
              />
              <label
                htmlFor={item.id.toString()}
                className="ml-2 font-FiraGO text-[#021526] font-medium"
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </Dropdown>
      <Dropdown
        selectedOption={priceRange}
        label="საფასო კატეგორია"
        dropdownTitle="ფასის მიხედვით"
      >
        <PricesFilter setPriceRange={setPriceRange} />
      </Dropdown>
      <Dropdown
        selectedOption={areaRange}
        label="ფართობი"
        dropdownTitle="ფართობის მიხედვით"
      >
        <AreaFilter setAreaRange={setAreaRange} />
      </Dropdown>
      <Dropdown
        selectedOption={rooms}
        label="საძინებლების რაოდენობა"
        dropdownTitle="საძინებლის მიხედვით"
      >
        <div className="mt-6">
          <input
            className="w-11 h-10 border rounded-md text-center"
            name="rooms"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            type="number"
            placeholder="1"
          />
        </div>
      </Dropdown>
    </div>
  );
}
