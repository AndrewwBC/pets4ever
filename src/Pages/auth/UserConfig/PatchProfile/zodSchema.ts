import { z } from "zod";

export const patchProfileSchema = z.object({
  fullname: z
    .string()
    .min(1, { message: "Insira ao menos 1 caractér" })
    .max(128, { message: "Permitido apenas 128 caractéres" }),
  username: z
    .string()
    .toLowerCase()
    .min(1, { message: "Insira ao menos 3 caractéres" })
    .max(32, { message: "Permitido apenas 32 caractéres" }),
});

export type PatchProfileSchema = z.infer<typeof patchProfileSchema>;
