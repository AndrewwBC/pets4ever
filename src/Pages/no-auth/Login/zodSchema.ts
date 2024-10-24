import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Email inválido." }),
  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%^&+=!]{8,64}$/, {
      message: "Senha inválida.",
    }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
