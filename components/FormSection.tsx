"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
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

const FormSection = () => {
  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nombre: "",
      Apellido: "",
      Telefono: "+58",
    },
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(data: z.output<typeof formSchema>) {
    const formData = new FormData();
    formData.append("Nombre", data.Nombre);
    formData.append("Apellido", data.Apellido);
    formData.append("Telefono", data.Telefono);
    console.log(await onSubmitAction(formData));
    router.push("/");
  }

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="my-40 h-[80vh]">
          <h2 className="text-4xl text-purple-600">
            {loading ? "Procesando" : "Agenda tu citá"}
          </h2>
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
                    <Input placeholder="+" {...field} />
                  </FormControl>
                  <FormDescription>Tu numero de teléfono</FormDescription>
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
