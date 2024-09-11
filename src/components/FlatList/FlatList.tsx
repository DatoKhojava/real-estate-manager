"use client"

import { Estate } from "@/services/types";
import FlatListItem from "./FlatListItem";

interface FlatListProps {
  data: Estate[];
}

export default function FlatList({ data }: FlatListProps) {
  return (
    <div className="flex flex-row gap-10">
      {data.map((item: any) => (
        <FlatListItem {...item} />
      ))}
    </div>
  );
}
