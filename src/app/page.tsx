"use client";

import { FilterBadge } from "@/components/Badges";
import { Button } from "@/components/Buttons";
import { FilterMenu } from "@/components/Filter";
import FlatList from "@/components/FlatList/FlatList";
import { AgentForm } from "@/components/Forms";
import { LayoutComponent } from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { estateService } from "@/services/estate";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const removeTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const { data: estates } = useQuery({
    queryKey: ["estate"],
    queryFn: estateService.getAll,
  });

  return (
    <LayoutComponent>
      <div className="mt-20">
        <div className="flex justify-between ">
          <FilterMenu />
          <div className="flex gap-2">
            <Link
              className="bg-[#FF4136] hover:bg-[#ff554d] active:bg-[#E63A30] text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2"
              href="/create-listing"
            >
              <CgMathPlus />
              <span className="font-FiraGO">ლისტინგის დამატება</span>
            </Link>
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
        <FlatList data={estates} />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col my-20">
          <h2 className="font-FiraGO font-bold text-center text-black text-3xl">
            აგენტის დამატება
          </h2>
          <div className="mt-10 mb-2">
            <AgentForm handlecloseModal={closeModal} />
          </div>
        </div>
      </Modal>
    </LayoutComponent>
  );
}
