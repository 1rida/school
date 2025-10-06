"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PlantationDay() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Plantation images array (1–34)
  const plantationImages = Array.from({ length: 34 }, (_, i) => {
    const index = i + 1;
    return `/images/IMG-20251003-WA00${index.toString().padStart(2, "2")}.jpg`;
  });

  type ScrollDirection = "left" | "right";

  const scroll = (dir: ScrollDirection) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 400,
          behavior: "smooth",
        });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-orange-200  px-6">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-6 text-center text-black underline decoration-green-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         Plantation Day by Global School
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-lg text-center text-gray-800 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Global School proudly organized a <b>Plantation Day</b> to spread
        awareness about the importance of trees and a greener environment. Our
        students and staff actively participated by planting saplings,
        contributing to a cleaner, healthier, and more sustainable future.
      </motion.p>

      {/* Slider */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow z-10 hover:bg-green-800"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scrollable Images */}
        <motion.div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {plantationImages.map((src, idx) => (
            <motion.div
              key={idx}
              className="min-w-[250px] max-w-[250px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={src}
                alt={`Plantation Day ${idx + 1}`}
                width={250}
                height={300}
                className="object-cover w-full h-[300px] rounded-xl"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow z-10 hover:bg-green-800"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
    </section>
  );
}
