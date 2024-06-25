"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import TestimonialSlide from "./TestimonialSlide";

const Testimonials = () => {
  return (
    <section className="container mx-auto py-16">
      <h3 className="h2 text-center text-white">Testimonios</h3>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <TestimonialSlide />
      </motion.div>
    </section>
  );
};
export default Testimonials;
