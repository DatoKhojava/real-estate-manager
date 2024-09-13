"use client";

import { Button } from "@/components/Buttons";
import { Checkbox } from "@/components/Checkbox";
import { FilterMenu } from "@/components/Filter";
import FlatList from "@/components/FlatList/FlatList";
import { Header } from "@/components/Header";
import { LayoutComponent } from "@/components/Layout";
import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const flatList = [
    {
      id: 1,
      address: "შარტავას 2ა",
      zip_code: "0101",
      price: 100000,
      area: 100.5,
      bedrooms: 3,
      is_rental: false,
      image:
        "https://api.real-estate-manager.redberryinternship.ge/storage/agent_avatars/KXhmcUIaDo7TTkgfCBraeUhx3Nd6eTKrmsXOWkPh.png",
      city_id: 1,
      city: {
        id: 1,
        name: "სოხუმი",
        region_id: 1,
        region: {
          id: 1,
          name: "აფხაზეთი",
        },
      },
    },
  ];

  return (
    <LayoutComponent>
      <div className="mt-20">
        <div className="flex justify-between container mx-auto">
          <FilterMenu />
          <div className="flex gap-2">
            <Button
              label="ლისტინგის დამატება"
              type={"primary"}
              icon={<CgMathPlus />}
            />
            <Button
              label="აგენტის დამატება"
              type={"outline"}
              icon={<CgMathPlus />}
            />
          </div>
        </div>
      </div>

      <Checkbox isChecked={isChecked} onChange={setIsChecked} />
    </LayoutComponent>
  );
}
