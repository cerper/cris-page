"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlide = () => {
  return (
    <div className="h-full">
      <div className="flex h-full justify-end ">
        <div className="flex h-[650px] w-[250px]  lg:h-[900px] lg:w-[800px]  ">
          <div className="flex h-full w-full flex-col items-end justify-center lg:mt-0 lg:items-center lg:justify-center">
            <h2 className="h2 mt-10  text-end text-white lg:text-center lg:text-6xl">
              Consigue la <span className="text-purple-400">Sonrisa</span>{" "}
              Sonada
            </h2>
            <Link href="/blog/test">
              <Button
                variant={"ghost"}
                className="mt-2 h-[45px] w-[130px] bg-purple-700 font-roboto text-xl font-bold hover:bg-white hover:text-black lg:mt-10"
              >
                hola
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSlide;
