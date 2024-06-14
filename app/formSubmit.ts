"use server";

import { formSchema } from "@/app/zodSchema";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export type FormState = {
  message?: string;
};

connect();

export async function onSubmitAction(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);
  console.log(parsed);

  const { Nombre, Apellido, Telefono, Cuidad } = formData;

  if (!parsed.success) {
    return {
      message: "Formulario invalido",
    };
  }

  const newUser = new User({
    Nombre: Nombre,
    Apellido: Apellido,
    Telefono: Telefono,
    Cuidad: Cuidad,
  });

  const savedUser = await newUser.save();

  console.log(savedUser);
  redirect("/");
}
