"use client";

import Link from "next/link";
import {
  BiSolidArea,
  BiSolidBed,
  BiSolidDirections,
  BiSolidMapPin,
} from "react-icons/bi";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../Buttons";
import { Card } from "../Cards";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Estate } from "@/services/types";

export default function ByRegion({ ...data }: Estate[]) {
  const settings = {
    infinite: data?.length < 4 ? false : true,
    speed: 500,
    arrows: data?.length < 4 ? false : true,
    autoplaySpeed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  console.log(data);

  return (
    <div>
      <Slider {...settings}>
        {data?.data?.map((property: Estate) => (
          <div key={property.id} className="p-4">
            <Link href={`${property.id}`}>
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
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
