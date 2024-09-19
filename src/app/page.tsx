"use client";

import { FilterBadge } from "@/components/Badges";
import { Button } from "@/components/Buttons";
import { FilterMenu } from "@/components/Filter";
import FlatList from "@/components/FlatList/FlatList";
import { AgentForm } from "@/components/Forms";
import { LayoutComponent } from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";

export default function Home() {
  const [tags, setTags] = useState([
    { id: 1, value: "ბათუმი" },
    { id: 2, value: "55 მ² - 90 მ²" },
    { id: 3, value: "20000₾ - 100000₾" },
    { id: 4, value: "1" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [agentForm, setAgentForm] = useState<FormInput>({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phoneNumber: "",
  //   file: "",
  // });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const removeTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

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

    {
      id: 2,
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

    {
      id: 23,
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

    {
      id: 5,
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

    {
      id: 565,
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

    {
      id: 51265,
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
        <div className="flex justify-between ">
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
              onClick={openModal}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 mb-8">
        {tags.map((tag) => (
          <FilterBadge
            key={tag.id}
            value={tag.value}
            onRemove={() => removeTag(tag.id)}
          />
        ))}
        <span
          className="ml-4 font-FiraGO text-sm font-semibold cursor-pointer text-black hover:text-zinc-800"
          onClick={() => alert("X")}
        >
          გასუფთავება
        </span>
      </div>
      <div>
        <FlatList data={flatList} />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col my-20">
          <h2 className="font-FiraGO font-bold text-center text-black text-3xl">
            აგენტის დამატება
          </h2>
          <div className="mt-10 mb-2">
            <AgentForm
              // setAgentForm={setAgentForm}
              handlecloseModal={closeModal}
            />
          </div>
        </div>
      </Modal>
    </LayoutComponent>
  );
}
