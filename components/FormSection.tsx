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

const FormSection = () => {
  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nombre: "",
      Apellido: "",
      Telefono: "+58",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-8">
        <div className="my-40 h-[80vh]">
          <h2 className="text-4xl text-purple-600">Agenda tu citá</h2>
          <div className="mt-8 flex flex-col gap-4">
            <FormField
              control={form.control}
              name="Nombre"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Primer Nombre</FormLabel>
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
            <Button variant={"default"} type="submit">
              Registrarse
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
export default FormSection;
