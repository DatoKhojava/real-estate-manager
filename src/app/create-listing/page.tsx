import ListingForm from "@/components/Forms/ListingForm";
import { LayoutComponent } from "@/components/Layout";

export default function CreateListing() {
  return (
    <LayoutComponent>
      <div className="mt-16">
        <h1 className="text-center text-black font-FiraGO text-4xl font-bold">
          ლისტინგის დამატება
        </h1>

        <div className="mt-16 flex justify-center">
          <ListingForm />
        </div>
      </div>
    </LayoutComponent>
  );
}
