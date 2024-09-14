"use client";

import { Estate } from "@/services/types";
import FlatListItem from "./FlatListItem";
import Link from "next/link";

interface FlatListProps {
  data: Estate[];
}

export default function FlatList({ data }: FlatListProps) {
  return (
    <div className="grid grid-cols-4 gap-12">
      {data.map((item: any, index: number) => (
        <Link href={`listing/${item.id}`} key={index}>
          <FlatListItem {...item} />
        </Link>
      ))}
    </div>
  );
}
