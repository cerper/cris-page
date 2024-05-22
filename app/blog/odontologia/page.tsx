import Image from "next/image";
import foto from "@/public/portada-cris.jpg";
import blog from "@/public/dentista-examinando-dientes.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import crisFoto from "@/public/portada-cris.jpg";

export default function odontologiaTest() {
  return (
    <div className="mt-8 py-16">
      <div className="relative mt-8 flex  items-center justify-center">
        <div className="absolute  top-0 z-10 h-full w-full rounded-xl bg-black/30 md:w-[800px] lg:w-[800px]" />
        <Image
          src={blog}
          alt="foto del blog"
          width={800}
          height={400}
          className="h-[45svh] rounded-xl "
        />
      </div>
      <div className="mx-4 my-8 flex flex-col items-center justify-center gap-4">
        <h3 className="h2 text-center">Prostodoncia</h3>
        <p className="w-[400px] text-justify text-lg lg:w-[800px] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          assumenda voluptatum ullam corporis fugit laudantium, vero, repellat,
          illum quas eaque incidunt. Quas praesentium voluptatibus aspernatur
          fuga dolores odio quae veritatis.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ducimus assumenda voluptatum ullam
          corporis fugit laudantium, vero, repellat, illum quas eaque incidunt.
          Quas praesentium voluptatibus aspernatur fuga dolores odio quae
          veritatis.
        </p>
        <Carousel
          opts={{
            align: "start",
          }}
          className=" w-full max-w-[360px] lg:max-w-lg"
        >
          <CarouselContent className="mt-8">
            <CarouselItem className="md:basis-1/2 lg:basis-full">
              <Image
                src={blog}
                alt="foto"
                className="h-3/4 w-full"
                width={300}
                height={300}
              />
            </CarouselItem>{" "}
            <CarouselItem className="md:basis-1/2 lg:basis-full">
              <Image
                src={crisFoto}
                alt="foto"
                className="h-3/4 w-full"
                width={300}
                height={300}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={foto}
                alt="foto"
                width={300}
                height={300}
                className="h-3/4 w-full"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
