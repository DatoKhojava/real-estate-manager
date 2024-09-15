"use client";

import Slider from "react-slick";
import Image from "next/image";
import { NextArrow, PrevArrow } from "../Buttons";
import {
  BiSolidArea,
  BiSolidBed,
  BiSolidDirections,
  BiSolidMapPin,
} from "react-icons/bi";
import { Card } from "../Cards";
import { Badge } from "../Badges";

export default function ByRegion({ ...data }: any) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  console.log(data);

  return (
    <div>
      <Slider {...settings}>
        {data?.data?.map((property: any) => (
          <div key={property.id} className="p-4">
            <Card image={property.image} is_rental={property.is_rental}>
                <div className="p-5.5">
                  <span className="font-FiraGO font-bold text-3xl text-[#021526]">
                    {property.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                    ₾
                  </span>
                  <div className="mt-1.5 flex">
                    <span className="self-center">
                      <BiSolidMapPin size={20} color="#021526B2" />
                    </span>
                    <span className="ml-1 font-FiraGO text-base text-[#021526B2]">
                      {property.city.name}, {property.address}
                    </span>
                  </div>
                  <div className="flex gap-6 mt-5">
                    <span className="flex">
                      <BiSolidBed size={24} color="#021526B2" />
                      {property.bedrooms}
                    </span>
                    <span className="flex">
                      <BiSolidArea size={24} color="#021526B2" />
                      {property.area}
                    </span>
                    <span className="flex">
                      <BiSolidDirections size={24} color="#021526B2" />
                      {property.zip_code}
                    </span>
                  </div>
                </div>
              </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
