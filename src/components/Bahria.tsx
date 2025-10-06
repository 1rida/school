"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Bahria() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "/images/guest1.jpg",
    "/images/guest3.jpg",
    "/images/guest4.jpg",
    "/images/guest5.jpg",
    "/images/guest6.jpg",
    "/images/guest7.jpg",
    "/images/guest8.jpg",
    "/images/guest9.jpg",
    "/images/guest10.jpg",
    "/images/guest11.jpg",
    "/images/guest12.jpg",
    "/images/guest13.jpg",
    "/images/guest14.jpg",
    "/images/guest15.jpg",
    "/images/guest16.jpg",
    "/images/guest17.jpg",
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
  className="text-4xl md:text-4xl font-extrabold text-center mb-4 text-black underline"
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Honourable Guest Invitation <br /> to BAHRIA UNIVERSITY KARACHI CAMPUS
</motion.h2>

<motion.p
  className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  A special invitation ceremony was held at Bahria University Karachi Campus to welcome our honourable guests. 
  The event celebrated collaboration, knowledge sharing, and inspiration for future academic excellence.
</motion.p>

      {/* Slider */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full shadow z-10 hover:bg-blue-900"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Images */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-10"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="min-w-[280px] max-w-[280px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={src}
                alt={`Bahria Guest ${idx + 1}`}
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
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full shadow z-10 hover:bg-blue-900"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
