"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Fateha() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "/images/IMG-20251003-WA0059.jpg",
    "/images/IMG-20251003-WA0060.jpg",
    "/images/IMG-20251003-WA0061.jpg",
    "/images/IMG-20251003-WA0063.jpg",
    "/images/IMG-20251003-WA0064.jpg",
    "/images/IMG-20251003-WA0065.jpg",
    "/images/IMG-20251003-WA0066.jpg",
    "/images/IMG-20251003-WA0067.jpg",
    "/images/IMG-20251003-WA0068.jpg",
    "/images/IMG-20251003-WA0069.jpg",
  ];

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-orange-100 py-10 px-6">
      {/* Heading */}
      <motion.h2
  className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-black underline"
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  FATEHA KHANI ON MAZAR E QUAID
</motion.h2>

<motion.p
  className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  A heartfelt gathering was held at Mazar-e-Quaid to offer Fateha and pay tribute to the founder of Pakistan. 
  The event brought together students, teachers, and guests to honor his vision and legacy with prayers and reflection.
</motion.p>


      {/* Slider */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-emerald-700 text-white p-2 rounded-full shadow z-10 hover:bg-emerald-900"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-10"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="min-w-[280px] max-w-[280px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={src}
                alt={`Fateha Event ${idx + 1}`}
                width={280}
                height={300}
                className="object-cover w-full h-[300px] rounded-xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-emerald-700 text-white p-2 rounded-full shadow z-10 hover:bg-emerald-900"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
