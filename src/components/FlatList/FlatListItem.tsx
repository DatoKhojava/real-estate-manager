"use client";

import { Estate } from "@/services/types";
import {
  BiSolidArea,
  BiSolidBed,
  BiSolidDirections,
  BiSolidMapPin,
} from "react-icons/bi";

import { Card } from "../Cards";

export default function FlatListItem({
  price,
  image,
  address,
  area,
  bedrooms,
  city,
  is_rental,
  zip_code,
}: Estate) {
  return (
    <Card image={image} is_rental={is_rental}>
      <div className="p-5.5">
        <span className="font-FiraGO font-bold text-3xl text-[#021526]">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₾
        </span>
        <div className="mt-1.5 flex">
          <span className="self-center">
            <BiSolidMapPin size={20} color="#021526B2" />
          </span>
          <span className="ml-1 font-FiraGO text-base text-[#021526B2]">
            {city.name}, {address}
          </span>
        </div>
        <div className="flex gap-6 mt-5">
          <span className="flex">
            <BiSolidBed size={24} color="#021526B2" />
            {bedrooms}
          </span>
          <span className="flex">
            <BiSolidArea size={24} color="#021526B2" />
            {area}
          </span>
          <span className="flex">
            <BiSolidDirections size={24} color="#021526B2" />
            {zip_code}
          </span>
        </div>
      </div>
    </Card>
  );
}
