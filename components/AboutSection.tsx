"use client";

import { Diente } from "@/lib/icons";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const aboutData = [
  {
    name: "Lo mejor para tus dientes",
    text: "Especialista es disenar la sonrisa ideal, apartar cualquier dolor o incomididad  ",
    icon: <Diente />,
  },
  {
    name: "Lo mejor para tus dientes",
    text: "Especialista es disenar la sonrisa ideal, apartar cualquier dolor o incomididad  ",
    icon: <Diente />,
  },
  {
    name: "Lo mejor para tus dientes",
    text: "Especialista es disenar la sonrisa ideal, apartar cualquier dolor o incomididad  ",
    icon: <Diente />,
  },
];

const secondAbout = [
  {
    name: "Lo mejor para tus dientes",
    text: "Especialista es disenar la sonrisa ideal, apartar cualquier dolor o incomididad  ",
    icon: <Diente />,
  },
  {
    name: "Lo mejor para tus dientes",
    text: "Especialista es disenar la sonrisa ideal, apartar cualquier dolor o incomididad  ",
    icon: <Diente />,
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
        className="h2 text-center text-black"
      >
        About
      </motion.h3>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-16 grid grid-cols-1 place-content-center place-items-center gap-4 lg:grid-cols-3"
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
                className="text-6xl text-purple-600"
              >
                {item.icon}
              </motion.div>
              <motion.h4
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="h4 md:text-center"
              >
                {item.name}
              </motion.h4>
              <motion.p
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="w-[250px] text-center text-lg md:w-[300px]"
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
                  className="text-6xl text-purple-800 lg:text-4xl"
                >
                  {item.icon}
                </motion.div>
                <motion.p
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="mb-8 w-[400px] text-center md:w-[300px] lg:w-[400px]"
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
