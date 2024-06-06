"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlide = () => {
  return (
    <div className="h-full ">
      <div className="flex h-full justify-end ">
        <div className="flex h-[630px] w-[180px] md:h-[900px] md:w-[400px]  lg:h-[800px] lg:w-[800px]  ">
          <div className="flex h-full w-full flex-col items-end justify-center md:items-center md:justify-center lg:mt-0 lg:items-center lg:justify-center">
            <motion.h2
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="h2  gap-2 text-end text-2xl text-white lg:text-center lg:text-6xl"
            >
              ¡Recupera tu sonrisa con la
              <br />
              <span className=" mt-4 py-2 text-purple-400">
                Dra.Crisariana Gamez
              </span>
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSlide;
