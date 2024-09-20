import { z } from "zod";

const AgentScheme = z.object({
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
    .string({ message: "ტელეფონის ნომერი სავალდებულოა" })
    .min(1, { message: "ტელეფონის ნომერი სავალდებულოა" })
    .regex(/^5\d{8}$/, {
      message: "იყოს ფორმატის 5XXXXXXXX",
    }),
  agentAvatar: z
    .custom<FileList>(
      (files) => files instanceof FileList && files.length > 0,
      {
        message: "აგენტის ფოტო სავალდებულოა",
      }
    )
    .refine((files) => files[0].size <= 1 * 1024 * 1024, {
      message: "ფოტოს ზომა არ უნდა აღემატებოდეს 1MB-ს",
    })
    .refine(
      (files) => ["image/jpeg", "image/png"].includes(files[0].type), // Allow only JPEG and PNG
      { message: "ფაილის ფორმატი უნდა იყოს მხოლოდ ფოტო" }
    ),
});

export default AgentScheme;
