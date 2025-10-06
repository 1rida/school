"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  // "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.jpg",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full mt-10 overflow-x-hidden">
      {/* --- Heading --- */}
      <div className="text-center mb-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-extrabold text-[#0b3c7a] underline decoration-orange-400 tracking-wide"
        >
          Life at Our School
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-base md:text-xl text-gray-600 mt-2"
        >
          Inspiring young minds through joyful learning and lasting memories
        </motion.p>
      </div>

      {/* --- Slider --- */}
      <div className="relative w-full overflow-hidden shadow-lg rounded-xl">
        <div
          className="flex transition-transform duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative h-[250px] sm:h-[350px] md:h-[600px]"
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover object-center rounded-xl"
                sizes="100vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                current === index ? "bg-orange-400 scale-125" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
