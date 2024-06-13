"use server";

import { formSchema } from "@/app/zodSchema";
import { connect } from "@/dbConfig/dbConfig";
import User from "./models/userModels";
import { redirect } from "next/navigation";

export type FormState = {
  message: string;
};

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

  redirect("/");
}
