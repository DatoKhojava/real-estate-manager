"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../Buttons";
import TextInput from "./TextInput";
import ShowPrew from "./ShowPrew";

const schema = z.object({
  firstName: z
    .string({ message: "სახელის ველი სავალდებულოა" })
    .min(2, { message: "სახელის ველი ნაკლებია 2 სიმბოლოზე" }),
  lastName: z
    .string({ message: "გვარის ველი სავალდებულოა" })
    .min(2, { message: "გვარის ველი ნაკლებია 2 სიმბოლოზე" }),
  email: z
    .string({ message: "ელ-ფოსტა სავალდებულოა" })
    .email({ message: "ელ-ფოსტის ფორმატი არასწორია" })
    .refine(
      (e) => {
        return e.endsWith("@redberry.ge");
      },
      { message: "ელ-ფოსტა უნდა მთავრდებოდეს @redberry.ge" }
    ),
  phoneNumber: z
    .string()
    .min(1, { message: "ტელეფონის ნომერი სავალდებულოა" })
    .regex(/^5\d{8}$/, {
      message: "იყოს ფორმატის 5XXXXXXXX",
    }),
  agentAvatar: z
    .custom<FileList>(
      (files) => files instanceof FileList && files.length > 0,
      {
        message: "Image is required",
      }
    )
    .refine(
      (files) => files[0].size <= 5 * 1024 * 1024, // Max 5MB size limit
      { message: "Image size must be less than 5MB" }
    )
    .refine(
      (files) => ["image/jpeg", "image/png"].includes(files[0].type), // Allow only JPEG and PNG
      { message: "Only JPEG or PNG images are allowed" }
    ),
});

type formFields = z.infer<typeof schema>;

export default function AgentForm({ handlecloseModal }: any) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formFields>({
    resolver: zodResolver(schema),
  });

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<formFields> = (data) => {
    const file = data.agentAvatar[0];
    console.log(data);
  };

  const handlePreview = (fileList: FileList | null) => {
    const file = fileList?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="სახელი"
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                errors={errors?.firstName}
              />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="გვარი"
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                errors={errors?.lastName}
              />
            )}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="ელ-ფოსტა"
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                errors={errors?.email}
              />
            )}
          />
        </div>

        <div>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="ტელეფონის ნომერი"
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                errors={errors?.phoneNumber}
              />
            )}
          />
        </div>
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
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <ShowPrew preview={preview} handleDelete={handleDelete} />
          <Controller
            name="agentAvatar"
            control={control}
            render={({ field }) => (
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/jpeg, image/png"
                onChange={(e: any) => {
                  field.onChange(e.target.files);
                  handlePreview(e.target.files);
                }}
              />
            )}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3.5">
        <Button label="გაუქმება" type="outline" onClick={handlecloseModal} />
        <input
          type="submit"
          value="დაამატე აგენტი"
          className="bg-[#FF4136] hover:bg-[#ff554d] active:bg-[#E63A30] text-white font-medium py-2 px-4 rounded-lg flex items-center space-x-2"
        />
      </div>
    </form>
  );
}
