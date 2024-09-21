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
import { useMutation } from "@tanstack/react-query";
import { estateService } from "@/services/estate";
import { useRouter, useParams } from "next/navigation";

export default function Flat({
  price,
  image,
  address,
  area,
  bedrooms,
  city,
  city_id,
  id,
  created_at,
  description,
  is_rental,
  zip_code,
  agent,
}: Estate) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const params = useParams();
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ["deleteEstate"],
    mutationFn: () => estateService.deleteById(parseInt(params.id as string)),
  });

  const handleDeleteClick = () => {
    mutation.mutate();
    router.push("/");
  };

  const date = new Date(created_at);

  return (
    <div className="mx-auto">
      <div className="relative flex">
        <div className="flex-shrink-0">
          <Image
            src={image}
            width={740}
            height={350}
            alt="flat"
            className="object-fill"
          />
          <span className="float-right font-FiraGO text-[#808A93] font-normal text-base">
            გამოქვეყნების თარიღი {date.toLocaleDateString("en-US")}
          </span>
          <Badge label={is_rental} className="absolute top-11 left-3" />
        </div>
        <div className="px-16 py-8 flex-grow max-w-[503px]">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-5xl font-bold text-gray-900 font-FiraGO">
              {price} ₾
            </h2>
          </div>
          <div className="space-y-3 mt-6">
            <div className="flex items-center text-2xl text-[#808A93] font-FiraGO">
              <LuMapPin size={18} />
              <span className="ml-1">
                {city?.name}, {address}
              </span>
            </div>
            <div className="flex items-center text-2xl text-[#808A93] font-FiraGO">
              <LuExpand size={18} />
              <span className="ml-1">ფართი {area} მ²</span>
            </div>
            <div className="flex items-center text-2xl text-[#808A93] font-FiraGO">
              <LuBedDouble size={18} />
              <span className="ml-1">საძინებელი {bedrooms}</span>
            </div>
            <div className="flex items-center text-2xl text-[#808A93] font-FiraGO">
              <LuRuler size={18} />
              <span className="ml-1">საფოსტო ინდექსი {zip_code}</span>
            </div>
          </div>
          <p className="text-base text-[#808A93] font-FiraGO font-normal my-10">
            {description}
          </p>
          <div className="border rounded-lg py-6 px-5 mb-5">
            <div className="flex items-center mb-4">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image
                    src={agent?.avatar}
                    alt="Agent iamge"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-base font-normal text-black font-FiraGO">
                  {agent?.name} {agent?.surname}
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
                  {agent?.email}
                </span>
              </div>
              <div className="flex items-center">
                <LuPhone color="#808A93" />
                <span className="ml-3 mt-1 text-sm font-normal text-[#808A93] font-FiraGO">
                  {agent?.phone}
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
            <div className="flex flex-col items-center justify-center my-14">
              <h2 className="font-FiraGO font-normal text-black text-xl">
                გსურთ წაშალოთ ლისტინგი?
              </h2>
              <div className="flex gap-3.5 mt-9">
                <Button label="გაუქმება" type="outline" onClick={closeModal} />
                <Button
                  label="დადასტურება"
                  type="primary"
                  onClick={handleDeleteClick}
                />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
