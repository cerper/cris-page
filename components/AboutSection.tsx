"use client";

import { Diente, Chair, BrokenTeeth, Smile, BrokenTeeth2 } from "@/lib/icons";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const aboutData = [
  {
    name: "Lo mejor para tus dientes",
    text: "El bienestar de nuestro paciente es lo primero.",
    icon: <Diente />,
  },
  {
    name: "La mejor atención de la Doctora",
    text: "Con mas de 15 años en el mercado laboral.",
    icon: <Chair />,
  },
  {
    name: "Expertos en restauración dental",
    text: " Odontología de vanguardia para resultados duraderos. ",
    icon: <BrokenTeeth />,
  },
];

const secondAbout = [
  {
    name: "Sonrisas que enamoran",
    text: "Restauramos tu sonrisa natural para que vuelvas a sonreír con seguridad.  ",
    icon: <Smile />,
  },
  {
    name: "Lo mejor para tus dientes",
    text: "Especialista es disenar la sonrisa ideal, apartar cualquier dolor o incomididad  ",
    icon: <BrokenTeeth2 />,
  },
];

const AboutSection = () => {
  return (
    <div className="mt-16 ">
      <motion.h3
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="h2 text-center  text-purple-600"
      >
        About
      </motion.h3>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-16 grid grid-cols-1 place-content-center place-items-center gap-8 lg:grid-cols-3"
      >
        {aboutData.map((item, index) => {
          return (
            <div
              key={index}
              className="mx-4 flex flex-col items-center justify-center gap-4 lg:gap-4"
            >
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="text-6xl"
              >
                {item.icon}
              </motion.div>
              <motion.h4
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="h4 text-center text-purple-600"
              >
                {item.name}
              </motion.h4>
              <motion.p
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="w-[250px] text-center font-roboto text-lg md:w-[340px]"
              >
                {item.text}
              </motion.p>
            </div>
          );
        })}
      </motion.div>
      <div className="flex flex-col items-center justify-center  lg:flex-row ">
        <div className="gap-8 py-16 md:flex md:justify-between lg:w-[900px] ">
          {secondAbout.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4"
              >
                <motion.div
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-6xl lg:text-4xl"
                >
                  {item.icon}
                </motion.div>
                <motion.p
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="mb-8 w-[400px] text-center font-roboto text-lg md:w-[300px] lg:w-[400px]"
                >
                  {item.text}
                </motion.p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
