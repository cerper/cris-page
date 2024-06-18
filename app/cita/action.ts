"use server";

import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export async function addUser(form: FormData) {
  console.log(form);
  const Nombre = form.get("Nombre")?.toString();
  const Apellido = form.get("Apellido")?.toString();
  const Telefono = form.get("Telefono")?.toString();
  const Cuidad = form.get("Cuidad")?.toString();

  if (!Nombre || !Apellido || !Telefono || !Cuidad) {
    throw Error("Debes llenar todo el formulario");
  }

  await prisma.user.create({
    data: { Nombre, Apellido, Telefono, Cuidad },
  });
  redirect("/");
}
