"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { LuArrowLeft, LuArrowRight, LuBed, LuPiSquare, LuSquare } from "react-icons/lu";

interface Property {
  id: number;
  image: string;
  price: number;
  bedrooms: number;
  area: number;
  location: string;
}

const properties: Property[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=600",
    price: 80000,
    bedrooms: 2,
    area: 55,
    location: "თბილისი, ი. ჭავჭავაძის 53",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=600",
    price: 80000,
    bedrooms: 2,
    area: 55,
    location: "თბილისი, ი. ჭავჭავაძის 53",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=600",
    price: 80000,
    bedrooms: 2,
    area: 55,
    location: "თბილისი, ი. ჭავჭავაძის 53",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=600",
    price: 80000,
    bedrooms: 2,
    area: 55,
    location: "თბილისი, ი. ჭავჭავაძის 53",
  },
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
      onClick={onClick}
    >
      <LuArrowRight className="w-6 h-6 text-gray-600" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
      onClick={onClick}
    >
      <LuArrowLeft className="w-6 h-6 text-gray-600" />
    </button>
  );
};

export default function CarouselC() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className=" mx-auto">
      <Slider {...settings}>
        {properties.map((property) => (
          <div key={property.id} className="p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={property.image}
                alt={`Property ${property.id}`}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="text-2xl font-bold mb-2">
                  {property.price.toLocaleString()} ₾
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <LuBed className="w-5 h-5 mr-2" />
                  <span>{property.bedrooms}</span>
                  <LuSquare className="w-5 h-5 ml-4 mr-2" />
                  <span>{property.area} მ²</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <LuPiSquare className="w-5 h-5 mr-2" />
                  <span>{property.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
