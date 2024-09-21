"use client";

import { ListingScheme } from "@/services/validators";
// import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { RadioButton } from "../Radio";
import TextInput from "./TextInput";
import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown";
import { useQuery } from "@tanstack/react-query";
import { AgentsService } from "@/services/agents";
import { RegionsService } from "@/services/regions";
import { useEffect, useState } from "react";
import { CitiesService } from "@/services/cities";
import { City } from "@/services/types";

type formFields = z.infer<typeof ListingScheme>;

export default function ListingForm() {
  const [regionId, setRegionId] = useState("");
  const [citiesByRegion, setCitiesByRegion] = useState(null);

  useEffect(() => {
    const selectedCities = citiesData?.filter(
      (items: City) => parseInt(regionId) === items.region_id
    );

    setCitiesByRegion(selectedCities);
  }, [regionId]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formFields>({
    // resolver: zodResolver(ListingScheme),
  });

  const { data: agentsData } = useQuery({
    queryKey: ["agents"],
    queryFn: AgentsService.getAll,
  });

  const { data: regionsData } = useQuery({
    queryKey: ["regions"],
    queryFn: RegionsService.getAll,
  });

  const { data: citiesData } = useQuery({
    queryKey: ["cities"],
    queryFn: CitiesService.getAll,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-FiraGO text-black font-bold text-base">
        გარიგების ტიპი
      </h3>
      <div className="mt-2 flex gap-2">
        <div>
          <Controller
            control={control}
            name="status"
            render={({ field: { onChange, onBlur, value } }) => (
              <RadioButton
                label="იყიდება"
                value="იყიდება"
                checked={value === "იყიდება"}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                selected={value}
                errors={errors?.status}
              />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="status"
            render={({ field: { onChange, onBlur, value } }) => (
              <RadioButton
                label="ქირავდება"
                value="ქირავდება"
                checked={value === "ქირავდება"}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                selected={value}
                errors={errors?.status}
              />
            )}
          />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="font-FiraGO text-black font-bold text-base">
          მდებარეობა
        </h3>
        <div className="mt-5">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Controller
                control={control}
                name="address"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="მისამართი*"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    errors={errors?.address}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="zip"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="საფოსტო ინდექსი*"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    errors={errors?.address}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="region"
                render={({ field: { value } }) => (
                  // <TextInput
                  //   label="რეგიონი"
                  //   onChange={onChange}
                  //   onBlur={onBlur}
                  //   selected={value}
                  //   errors={errors?.address}
                  // />
                  <Dropdown
                    onChange={(value) => setRegionId(value)}
                    label="აირჩიე რეგიონი*"
                    errors={errors?.region}
                    options={
                      regionsData?.map((r) => ({
                        label: r.name,
                        value: r.id,
                      })) ?? []
                    }
                    value={value}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="city"
                render={({ field: { onChange, value } }) => (
                  // <TextInput
                  //   label="ქალაქი"
                  //   onChange={onChange}
                  //   onBlur={onBlur}
                  //   selected={value}
                  //   errors={errors?.address}
                  // /> citiesByRegion

                  <Dropdown
                    onChange={onChange}
                    label="აირჩიე ქალაქი*"
                    errors={errors?.city}
                    disabled={citiesByRegion ? false : true}
                    options={
                      citiesByRegion?.map((r) => ({
                        label: r.name,
                        value: r.id,
                      })) ?? []
                    }
                    value={value}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="font-FiraGO text-black font-bold text-base">
          ბინის დეტალები
        </h3>

        <div className="mt-5">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Controller
                control={control}
                name="price"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="ფასი"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    errors={errors?.address}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="area"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="ფართობი"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    errors={errors?.address}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="bedrooms"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="საძინებლის რაოდენობა"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    errors={errors?.address}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Controller
          control={control}
          name="bedrooms"
          render={({ field: { onChange, onBlur } }) => (
            <textarea
              // label="საძინებლის რაოდენობა"
              onChange={onChange}
              className="outline-none w-full border"
              rows={6}
              onBlur={onBlur}
              // selected={value}
              // errors={errors?.address}
            />
          )}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="image-upload"
          className="font-FiraGO text-black font-bold text-base"
        >
          ატვირთეთ ფოტო*
        </label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center cursor-pointer relative"
          // onClick={() => fileInputRef.current?.click()}
          // onDrop={handleDrop}
          // onDragOver={handleDragOver}
        >
          {/* <ShowPrew preview={preview} handleDelete={handleDelete} /> */}
          <Controller
            name="listingAvatar"
            control={control}
            render={() => (
              <input
                type="file"
                // ref={fileInputRef}
                className="hidden"
                accept="image/jpeg, image/png"
                // onChange={(e: any) => {
                //   field.onChange(e.target.files);
                //   handlePreview(e.target.files);
                // }}
              />
            )}
          />
        </div>

        <div className="mt-20">
          <h3 className="font-FiraGO text-black font-bold text-base">აგენტი</h3>
          <div className="mt-2 w-96">
            <Controller
              name="agent"
              control={control}
              render={({ field }) => (
                <Dropdown
                  label="აირჩიე"
                  onChange={field.onChange}
                  errors={errors?.address}
                  options={
                    agentsData?.map((a) => ({
                      label: `${a.name} ${a.surname}`,
                      value: a.id,
                    })) ?? []
                  }
                  value={field.value}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3.5">
        <Link
          href="/"
          className="bg-white hover:bg-[#fa5238] hover:text-white text-[#FF4136] border-[#FF4136] border active:bg-[#F93B1D] font-medium py-2 px-4 rounded-lg flex items-center space-x-2"
        >
          გაუქმება
        </Link>
        <input
          type="submit"
          value="დაამატე აგენტი"
          className="bg-[#FF4136] hover:bg-[#ff554d] active:bg-[#E63A30] text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2"
        />
      </div>
    </form>
  );
}
