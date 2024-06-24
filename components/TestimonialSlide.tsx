"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonialData = [
  {
    name: "Andrea",
    text: " Excelente atención y profesionalismo. Mi sonrisa nunca ha estado mejor.",
    image: "/blog/foto1.avif",
  },
  {
    name: "Daniel",
    text: " Desde la primera visita, me sentí en buenas manos. El equipo es profesional y amable,  los resultados hablan por sí mismos.",
    image: "/blog/foto2.avif",
  },
  {
    name: "Rebeca",
    text: " Atención excepcional y resultados impecables. Mi sonrisa refleja la calidad y dedicación de la Dra Gámez.",
    image: "/blog/foto3.avif",
  },
];

const TestimonialSlide = () => {
  return (
    <Swiper
      className="mb-8 min-h-[500px] py-8"
      id="testimonial"
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
    >
      {testimonialData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="mb-4 pb-0 pt-6 lg:mt-8 lg:pb-16">
              <h3 className="h3 mb-4 text-center text-black">{item.name}</h3>
              <div className=" container mt-10 flex h-[300px] w-[300px] flex-col items-center justify-center md:h-[450px] md:w-[350px] md:flex-col">
                {" "}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="mt-6 h-[250px] w-[300px] rounded-full md:h-[350px] md:w-[350px]"
                />
                <div className="mt-4  text-center md:mb-8 md:text-xl lg:text-lg">
                  &quot;{item.text}&quot;
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default TestimonialSlide;
