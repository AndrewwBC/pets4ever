import { z } from "zod";

export const registerFormSchema = z.object({
  fullname: z
    .string()
    .min(1, { message: "Insira ao menos 1 caractér" })
    .max(128, { message: "Permitido apenas 128 caractéres" }),
  username: z
    .string()
    .toLowerCase()
    .min(3, { message: "Insira ao menos 3 caractéres" })
    .max(32, { message: "Permitido apenas 32 caractéres" }),
  email: z.string().email({
    message: "Insira um email válido",
  }),
  password: z
    .string()
    .min(8)
    .max(64)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
