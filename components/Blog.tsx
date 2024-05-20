import foto1 from "@/public/dentista-examinando-dientes.jpg";
import foto2 from "@/public/portada-cris.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { link } from "fs";

const blogData = [
  {
    name: "Protodoncista",
    foto: "/portada-cris.jpg",
    link: "/blog/test",
  },
  {
    name: "Protodoncista",
    foto: "/dentista-examinando-dientes.jpg",
    link: "/blog/odontologia",
  },
  {
    name: "Protodoncista",
    foto: "/dentista-examinando-dientes.jpg",
    link: "/blog/odontologia",
  },
  {
    name: "Protodoncista",
    foto: "/portada-cris.jpg",
    link: "/blog/odontologia",
  },
];

const Blog = () => {
  return (
    <div className=" w-full" id="blog">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
        {blogData.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex h-[300px] w-full flex-col items-center justify-center gap-4 lg:h-[430px]"
            >
              <div className="absolute top-0 z-10 h-full w-full bg-black/50" />
              <Image
                src={item.foto}
                alt="foto del blog de odontologia"
                fill
                priority
                className="object-fill"
              />
              <h5 className="lg:h2 z-20 text-purple-300">{item.name}</h5>
              <Link href={item.link} className="z-20">
                <Button
                  variant={"default"}
                  className="rounded-xl bg-purple-400 text-black hover:bg-white hover:text-black"
                >
                  Ver mas
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blog;
