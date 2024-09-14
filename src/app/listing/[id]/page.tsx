"use client";

import { Flat } from "@/components/Flat";
import { LayoutComponent } from "@/components/Layout";
import Link from "next/link";

const listing = {
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
};

export default function page() {
  return (
    <LayoutComponent>
      <div className="mt-14">
        <Link href="/" className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 hover:text-slate-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>

        <div>
          <Flat {...listing} />
        </div>

        <h2 className="mt-12 font-FiraGO font-medium text-2xl">
          ბინები მსგავს ლოკაკიაზე
        </h2>
        <div className="mt-14">
          <h2>Carousel</h2>
        </div>
      </div>
    </LayoutComponent>
  );
}
