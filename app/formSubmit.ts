"use server";

import { formSchema } from "@/app/zodSchema";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export type FormState = {
  message?: string;
};

export async function onSubmitAction(prevState: FormState, data: FormData) {
  const Nombre = data.get("Nombre")?.toString();
  const Apellido = data.get("Apellido")?.toString();
  const Telefono = data.get("Telefono")?.toString();
  const Cuidad = data.get("Cuidad")?.toString();

  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);
  console.log(parsed);

  if (!parsed.success) {
    return {
      message: "Formulario invalido",
    };
  }

  if (!Nombre || !Apellido || !Telefono || !Cuidad) {
    throw Error("Debes llenar todo el formulario");
  }

  await prisma.user.create({
    data: { Nombre, Apellido, Telefono, Cuidad },
  });

  redirect("/");
}
