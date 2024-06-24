"use server";

import { formSchema } from "@/app/zodSchema";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export type FormState = {
  message?: string;
  issues?: string[];
};

export async function onSubmitAction(prevState: FormState, data: FormData) {
  const Nombre = data.get("Nombre")?.toString();
  const Apellido = data.get("Apellido")?.toString();
  const Telefono = data.get("Telefono")?.toString();

  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);
  console.log(parsed);

  if (!parsed.success) {
    return {
      message: "Formulario invalido",
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  } else if (!Nombre || !Apellido || !Telefono) {
    throw Error("Debes llenar todo el formulario");
  } else {
    await prisma.user.create({
      data: { Nombre, Apellido, Telefono },
    });

    redirect("/");
  }
}
