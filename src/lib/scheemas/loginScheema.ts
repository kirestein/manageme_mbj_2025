import { z } from "zod";

export const loginScheema = z.object({
  email: z.string().email({
    message: "Email inválido",
  }),
  password: z.string().min(8, {
    message: "Senha deve ter no mínimo 8 caracteres",
  }),
});

export type LoginScheema = z.infer<typeof loginScheema>;
