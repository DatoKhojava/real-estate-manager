"use client";

import { Flat } from "@/components/Flat";
import ByRegion from "@/components/FlatList/ByRegion";
import { LayoutComponent } from "@/components/Layout";
import { estateService } from "@/services/estate";
import { Estate } from "@/services/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function page() {
  const { id } = useParams();

  const { data: estateData } = useQuery({
    queryKey: ["estateById", id],
    queryFn: () => estateService.getById(parseInt(id as string)),
  });

  const { data: estates } = useQuery({
    queryKey: ["estate"],
    queryFn: estateService.getAll,
  });

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
          <Flat {...estateData!} />
        </div>

        <h2 className="mt-12 font-FiraGO font-medium text-2xl">
          ბინები მსგავს ლოკაკიაზე
        </h2>
        <div className="mt-14 mb-20">
          <ByRegion
            data={estates?.filter(
              (item: Estate) =>
                item.city.region_id === estateData?.city.region_id
            )}
          />
        </div>
      </div>
    </LayoutComponent>
  );
}
