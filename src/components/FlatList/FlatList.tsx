"use client"

import { Estate } from "@/services/types";
import FlatListItem from "./FlatListItem";

interface FlatListProps {
  data: Estate[];
}

export default function FlatList({ data }: FlatListProps) {
  return (
    <div className="grid grid-cols-4 gap-12">
      {data.map((item: any) => (
        <FlatListItem {...item} />
      ))}
    </div>
  );
}
