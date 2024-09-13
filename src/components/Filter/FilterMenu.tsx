"use client";

import { useState } from "react";
import { Dropdown } from "../Dropdown";

export default function FilterMenu() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["რაღაცა", "რუღაცა", "რაღაცა 1"];

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className="border border-slate-300 w-fit rounded-[10px] flex gap-6 p-1">
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        label="რეგიონი"
        dropdownTitle="რეგიონის მიხედვით"
      />
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        label="საფასო კატეგორია"
        dropdownTitle="რეგიონის მიხედვით"
      />
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        label="ფართობი"
        dropdownTitle="რეგიონის მიხედვით"
      />
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        label="საძინებლების რაოდენობა"
        dropdownTitle="რეგიონის მიხედვით"
      />
    </div>
  );
}
