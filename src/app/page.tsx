"use client";

import { LayoutComponent } from "@/components/Layout";
import { RadioButton } from "@/components/Radio";
import { useState } from "react";

export default function Home() {
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
      <h1>UI Components</h1>
    </LayoutComponent>
  );
}
