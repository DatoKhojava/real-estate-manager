import { Button } from "@/components/Buttons";
import FlatList from "@/components/FlatList/FlatList";
import { Header } from "@/components/Header";
import { AiOutlinePlus } from "react-icons/ai";

export default function Home() {
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
  ];

  return (
    <div>
      <Header />
      <FlatList data={flatList} />
      <Button
        type="primary"
        label="ლისტინგის დამატება"
        icon={<AiOutlinePlus />}
      />
      <Button
        type="outline"
        label="ლისტინგის დამატება"
        icon={<AiOutlinePlus />}
      />
      <Button type="dark" label="წაშლა" />
      <Button type="outlineDark" label="წაშლა" />
    </div>
  );
}
