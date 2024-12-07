import { z } from "zod";

export const registerScheema = z.object({
  name: z.string().min(3, {
    message: "Nome precisa ter no mínimo 3 caracteres",
  }),
  email: z.string().email({
    message: "Email inválido",
  }),
  password: z.string().min(8, {
    message: "Senha deve ter no mínimo 8 caracteres",
  }),
});

export type RegisterScheema = z.infer<typeof registerScheema>;
