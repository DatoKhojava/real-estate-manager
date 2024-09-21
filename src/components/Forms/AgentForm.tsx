"use client";

import { AgentsService } from "@/services/agents";
import { Agent } from "@/services/types";
import { AgentScheme } from "@/services/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../Buttons";
import ShowPrew from "./ShowPrew";
import TextInput from "./TextInput";

type formFields = z.infer<typeof AgentScheme>;

interface FormProps {
  handlecloseModal: () => void;
}

export default function AgentForm({ handlecloseModal }: FormProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formFields>({
    resolver: zodResolver(AgentScheme),
  });

  const mutation = useMutation({
    mutationKey: ["addAgent"],
    mutationFn: (data: Agent) => AgentsService.postAgent(data),
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
    mutation.mutate({
      name: data.firstName,
      surname: data.lastName,
      email: data.email,
      phone: data.phoneNumber,
      avatar: file,
    });

    console.log(file);
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
                onChange={(e) => {
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
