import { z } from "zod";

export const formSchema = z.object({
  Nombre: z.string().min(1, {
    message: "El primer nombre es requerido ",
  }),
  Apellido: z.string().min(1, {
    message: "El segundo nombre es requerido",
  }),
  Telefono: z.string().min(14, {
    message: "Es necesario el número de teléfono",
  }),
});

export type formSchema = z.infer<typeof formSchema>;
