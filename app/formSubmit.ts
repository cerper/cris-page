"use server";

import { formSchema } from "@/app/zodSchema";

export type FormState = {
  message?: string;
};

export async function onSubmitAction(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);
  console.log(parsed);

  if (!parsed.success) {
    return {
      message: "Formulario invalido",
    };
  }

  return { message: "formulario valido" };
}
