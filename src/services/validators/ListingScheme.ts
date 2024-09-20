import { z } from "zod";

const ListingScheme = z.object({
  address: z
    .string({ message: "მისამართი სავალდებულოა" })
    .min(2, { message: "მინიმუმ 2 სიმბოლო სავალდებულოა" }),
  listingAvatar: z
    .custom<FileList>(
      (files) => files instanceof FileList && files.length > 0,
      {
        message: "ლისტინგის ფოტო სავალდებულოა",
      }
    )
    .refine((files) => files[0].size <= 1 * 1024 * 1024, {
      message: "ფოტოს ზომა არ უნდა აღემატებოდეს 1MB-ს",
    })
    .refine(
      (files) => ["image/jpeg", "image/png"].includes(files[0].type), // Allow only JPEG and PNG
      { message: "ფაილის ფორმატი უნდა იყოს მხოლოდ ფოტო" }
    ),
  region: z.string({ message: "რეგიონი სავალდებულოა" }),
  city: z.string({ message: "ქალაქი სავალდებულოა" }),
  zip: z.number({ message: "საფოსტო ინდექსი სავალდებულოა" }),
  price: z.number({ message: "ფასი სავალდებულოა" }),
  area: z.number({ message: "ფართობი სავალდებულოა" }),
  bedrooms: z.number().int({ message: "საძინებლის რაოდენობა სავალდებულოა" }),
  description: z
    .string()
    .refine((value) => value.trim().split(/\s+/).length >= 5, {
      message: "სავალდებულოა მინიმუმ 5 სიტყვა",
    }),
  status: z.enum(["იყიდება", "ქირავდება"], {
    errorMap: () => ({ message: "სტატუსის არჩევა სავალდებულოა" }),
  }),
  agent: z.string({ message: "აგენტი არჩევა სავალდებულოა" }),
});

export default ListingScheme;
