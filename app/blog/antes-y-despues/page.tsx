import Image from "next/image";
import Link from "next/link";
import antes from "@/public/cris-nueva/dientes-antes.jpeg";
import despues from "@/public/cris-nueva/dientes-despues.jpeg";
import reparacion from "@/public/cris-nueva/restauracion-mujer-antes.jpeg";
import reparacion2 from "@/public/cris-nueva/restauracion-mujer-despues.jpeg";
import { Button } from "@/components/ui/button";

export default function odontologiaTest() {
  return (
    <div className="mt-8 py-16">
      <div className="relative mx-4 my-8 flex flex-col items-center justify-center gap-4">
        <h3 className="h2 text-center text-white">Blanqueamiento</h3>
        <div className="gap-4">
          <div className="absolute mx-4 my-1  text-2xl">Antes</div>
          <Image
            src={antes}
            alt="Blanqueamiento dental "
            width={700}
            height={700}
          />
        </div>
        <div className="relative">
          <div className="absolute mx-4 my-1  text-2xl ">Despues</div>
          <Image
            src={despues}
            alt="Blanqueamiento dental "
            width={700}
            height={700}
          />
        </div>
        <h3 className="h2 mt-24 text-center text-white">
          Restauración con implantes
        </h3>
        <div className="gap-4">
          <div className="absolute mx-4 my-1  text-2xl">Antes</div>
          <Image
            src={reparacion}
            alt="Blanqueamiento dental "
            width={700}
            height={500}
          />
        </div>
        <div className="relative">
          <div className="absolute mx-4 my-1  text-2xl ">Despues</div>
          <Image
            src={reparacion2}
            alt="Blanqueamiento dental "
            width={700}
            height={500}
          />
          <Link
            href="https://wa.me/584129135240"
            className="mt-8 flex items-center justify-center"
          >
            <Button className="bg-purple-700 text-white " variant={"default"}>
              Agendá tu cita
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
