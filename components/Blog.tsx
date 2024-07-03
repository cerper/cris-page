"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const blogData = [
  {
    name: "Antes y Después",
    foto: "/cris-nueva/cris.jpeg",
    link: "/blog/antes-y-despues",
  },
];

const Blog = () => {
  return (
    <section className=" w-full" id="blog">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center justify-center "
      >
        {blogData.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex h-[300px]  w-[600px] flex-col items-center justify-center gap-4 lg:h-[430px]"
            >
              <div className="absolute top-0 z-10 h-full w-full bg-black/50" />
              <Image
                src={item.foto}
                alt="foto del blog de odontologia"
                fill
                priority
                className="w-40 bg-center lg:w-[500px] "
              />
              <motion.h5
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="lg:h2 z-20 mt-12 text-3xl text-purple-50"
              >
                {item.name}
              </motion.h5>
              <Link href={item.link} className="z-20">
                <Button
                  variant={"default"}
                  className="w-[120px] rounded-xl bg-purple-800 text-lg text-white hover:bg-white hover:text-black"
                >
                  Ver más
                </Button>
              </Link>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};
export default Blog;
