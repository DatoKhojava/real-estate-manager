"use client";

import { Estate } from "@/services/types";
import Image from "next/image";
import {
  LuBedDouble,
  LuExpand,
  LuMapPin,
  LuMessageSquare,
  LuPhone,
  LuRuler,
} from "react-icons/lu";
import { Button } from "../Buttons";
import { Badge } from "../Badges";
import { useState } from "react";
import { Modal } from "../Modal";

export default function Flat({
  price,
  image,
  address,
  area,
  bedrooms,
  city,
  city_id,
  id,
  is_rental,
  zip_code,
}: Estate) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mx-auto">
      <div className="relative flex">
        <div className="flex-shrink-0">
          <Image
            src={image}
            width={740}
            height={470}
            alt="Picture of the author"
            className="object-fill"
          />
          <span className="float-right font-FiraGO text-[#808A93] font-normal text-base">
            გამოქვეყნების თარიღი 08/08/24
          </span>
          <Badge label={is_rental} className="absolute top-11 left-3" />
        </div>
        <div className="px-16 py-8 flex-grow max-w-[503px]">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-5xl font-bold text-gray-900 font-FiraGO">
              80,458 ₾
            </h2>
          </div>
          <div className="space-y-3 mt-6">
            <div className="flex items-center text-2xl text-[#808A93] font-FiraGO">
              <LuMapPin size={18} />
              <span className="ml-1">თბილისი, ი. ჭავჭავაძის 53</span>
            </div>
            <div className="flex items-center text-2xl text-[#808A93] font-FiraGO">
              <LuExpand size={18} />
              <span className="ml-1">ფართი 55 მ²</span>
            </div>
            <div className="flex items-center text-2xl text-[#808A93] font-FiraGO">
              <LuBedDouble size={18} />
              <span className="ml-1">საძინებელი 2</span>
            </div>
            <div className="flex items-center text-2xl text-[#808A93] font-FiraGO">
              <LuRuler size={18} />
              <span className="ml-1">საფასური თვეში 2525</span>
            </div>
          </div>
          <p className="text-base text-[#808A93] font-FiraGO font-normal my-10">
            იყიდება ბინა ჭავჭავაძის გამზირზე, ახალი რემონტით, ორი საძინებლით და
            ფართო მისაღებით. მოწყობილია ავეჯით და ტექნიკით.
          </p>
          <div className="border rounded-lg py-6 px-5 mb-5">
            <div className="flex items-center mb-4">
              <Image
                width={75}
                height={75}
                alt="agent"
                src={image}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="text-base font-normal text-black font-FiraGO">
                  სოფიო გელოვანი
                </p>
                <p className="text-sm font-normal text-[#808A93] font-FiraGO">
                  აგენტი
                </p>
              </div>
            </div>
            <div className="flex flex-col text-sm text-gray-600">
              <div className="flex items-center">
                <LuMessageSquare color="#808A93" />
                <span className="ml-3 text-sm font-normal text-[#808A93] font-FiraGO">
                  sophia.gelovani@redberry.ge
                </span>
              </div>
              <div className="flex items-center">
                <LuPhone color="#808A93" />
                <span className="ml-3 mt-1 text-sm font-normal text-[#808A93] font-FiraGO">
                  577 777 777
                </span>
              </div>
            </div>
          </div>
          <Button
            onClick={openModal}
            label="ლისტინგის წაშლა"
            type="outlineDark"
          />

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {/* <div className="my-14 mx-40"> */}
            <div className="flex flex-col items-center justify-center my-14">
              <h2 className="font-FiraGO font-normal text-black text-xl">გსურთ წაშალოთ ლისტინგი?</h2>
              <div className="flex gap-3.5 mt-9">
                <Button label="გაუქმება" type="outline" onClick={closeModal} />
                <Button label="დადასტურება" type="primary" />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
