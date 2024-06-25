"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { startTransition, useRef } from "react";
import { Button } from "./ui/button";
import { useFormState } from "react-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { formSchema } from "@/app/zodSchema";
import { z } from "zod";
import { onSubmitAction } from "@/app/formSubmit";
import { addUser } from "@/app/cita/action";
import { X } from "lucide-react";

const FormSection = () => {
  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nombre: "",
      Apellido: "",
      Telefono: "",
    },
  });
  const [state, formAction] = useFormState(onSubmitAction, {
    message: "",
    issues: [],
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };
  return (
    <Form {...form}>
      <form
        ref={formRef}
        className="space-y-8"
        action={addUser}
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className=" h-[110vh] ">
          <h2 className=" text-4xl text-purple-600">Agenda tu citá</h2>
          {state?.message !== "" && !state?.issues && (
            <div className="mt-2 text-xl text-red-500">{state.message}</div>
          )}
          {state.issues && (
            <div className="text-red-500">
              <ul>
                {state.issues.map((issue) => (
                  <li key={issue}>
                    <X fill="red" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-8 flex flex-col gap-4 text-black">
            <FormField
              control={form.control}
              name="Nombre"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel> Nombre</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="border border-black"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Tu primer nombre</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="Apellido"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Apellido</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="border border-black"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Tu Apellido</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="Telefono"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="border border-black"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500">
                    Ej: 04142222222
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <div className="flex items-center justify-center">
              <Button
                variant={"default"}
                type="submit"
                className="w-[180px] rounded-xl bg-purple-700 font-roboto text-lg text-white hover:bg-black"
              >
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};
export default FormSection;

export const maxDuration = 60;
