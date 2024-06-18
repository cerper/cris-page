"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRef } from "react";
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
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { onSubmitAction } from "@/app/formSubmit";
import { addUser } from "@/app/cita/action";

const FormSection = () => {
  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nombre: "",
      Apellido: "",
      Telefono: "+58",
      Cuidad: "",
    },
  });
  const [state, formAction] = useFormState(onSubmitAction, {
    message: "",
  });

  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  // const onSubmit: SubmitHandler<formSchema> = async (form) => {
  //try {
  //console.log(form);
  //const resp = await axios.post("/api/cita", form);
  //console.log("Exitoso", resp.data);
  // } catch (error: any) {
  //return console.log("fallo", error.message);
  //}
  // };

  return (
    <Form {...form}>
      <form ref={formRef} className="space-y-8" action={addUser}>
        <div className="my-40 h-[80vh]">
          <h2 className="text-4xl text-purple-600">Agenda tu citá</h2>

          <div className="mt-8 flex flex-col gap-4">
            <FormField
              control={form.control}
              name="Nombre"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel> Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
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
                    <Input placeholder="" {...field} />
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
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>Tu numero de teléfono</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="Cuidad"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel> Cuidad/Municipio</FormLabel>
                  <FormControl>
                    <Input placeholder="caracas/sucre" {...field} />
                  </FormControl>
                  <FormDescription>Cuidad/Municipio</FormDescription>
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
