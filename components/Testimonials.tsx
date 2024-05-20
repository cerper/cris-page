"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import TestimonialSlide from "./TestimonialSlide";

const Testimonials = () => {
  return (
    <section className="container mx-auto py-8">
      <h3 className="h2 text-center">Testimonios</h3>
      <TestimonialSlide />
    </section>
  );
};
export default Testimonials;
