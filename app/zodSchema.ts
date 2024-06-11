"use client";

import { z } from "zod";

const formSchema = z.object({
  primerNombre: z.string().min(1, {
    message: "El primer nombre es requerido ",
  }),
  segundoNombre: z.string().min(1, {
    message: "El segundo nombre es requerido",
  }),
  telefono: z.number().min(11, {
    message: "Es necesario el número de teléfono",
  }),
});

export type Schema = z.infer<typeof formSchema>;
