"use server";

import { formSchema } from "@/app/zodSchema";

export type FormState = {
  message: string;
};

export async function onSubmitAction(data: FormData): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Formulario invalido",
    };
  }

  return { message: "Usuario Registrado" };
}
