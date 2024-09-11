import { z } from "zod";

export const registerFormSchema = z.object({
  fullname: z
    .string()
    .min(1, { message: "Insira ao menos 1 caractér" })
    .max(64, { message: "Permitido apenas 64 caractéres" }),
  username: z
    .string()
    .toLowerCase()
    .min(1, { message: "Insira ao menos 1 caractéres" })
    .max(64, { message: "Permitido apenas 64 caractéres" }),
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
