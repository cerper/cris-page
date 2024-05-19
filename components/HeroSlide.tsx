"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlide = () => {
  return (
    <div className="h-full animate-appear">
      <div className="flex h-full justify-end ">
        <div className="flex h-[550px] w-[250px] md:w-[600px]  lg:h-[900px] lg:w-[800px]  ">
          <div className="flex h-full w-full flex-col items-end justify-center md:items-center md:justify-center lg:mt-0 lg:items-center lg:justify-center">
            <motion.h2
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="h2 mt-10 text-end text-4xl text-white lg:text-center lg:text-6xl"
            >
              Consigue la <span className="text-purple-400">Sonrisa</span>{" "}
              Sonada
            </motion.h2>
            <Link href="/blog/test" className="">
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Button
                  variant={"ghost"}
                  className="mt-2 h-[45px] w-[120px] rounded-full bg-purple-700 text-center font-roboto text-xl font-bold hover:bg-white hover:text-black lg:mt-10 lg:w-[140px]"
                >
                  hola
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSlide;
