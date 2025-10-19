"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import PlantationDay from "@/components/PlantationDay";
import Cancer from "@/components/Cancer";
import Bahria from "@/components/Bahria";
import ZShape from "@/components/Zshape";

// 🔹 Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fateha from "@/components/Fateha";

export default function EventPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 🔹 49 Images ka Array with custom override
  const images = Array.from({ length: 49 }, (_, i) => {
    const index = i + 1;

    // 🔹 Agar index 28 se 35 hai to 47–55 waali images use hogi
    if (index >= 28 && index <= 35) {
      const customNumber = 47 + (index - 28); // 28 -> 47, 29 -> 48 ... 35 -> 54
      return `/images/IMG-20250922-WA00${customNumber}.jpg`;
    }

    // 🔹 Normal numbering
    return `/images/IMG-20250922-WA00${index.toString().padStart(2, "0")}.jpg`;
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

  // 🔹 Auto Scroll Effect
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
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-orange-200 pt-[170px] pb-16 px-6 text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-4 text-black underline decoration-orange-500"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Science and Technofest Exhibition
        </motion.h2>

        <motion.p
          className="text-lg text-black max-w-2xl mx-auto underline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Relive the highlights from our special day! Scroll through the gallery
          and experience the excitement, laughter, and joy all over again.
        </motion.p>
      </section>

      {/* Event Gallery */}
      <section className="bg-white py-10 px-4">
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slider */}
          <motion.div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                className="min-w-[200px] max-w-[200px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 ease-in-out"
                whileHover={{ scale: 1.08 }}
              >
                <Image
                  src={src}
                  alt={`Event ${idx + 1}`}
                  width={200}
                  height={250}
                  className="object-cover w-full h-[250px] rounded-xl"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* 🔹 Marquee Line (Orange Color) */}
        <div className="overflow-hidden whitespace-nowrap mt-8 bg-orange-100 py-3 border-t border-b border-orange-300">
          <motion.div
            className="inline-block text-2xl font-bold text-orange-700"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            🌟 Global School Annual Event 2025 — Celebrating Talent, Unity &
            Memories 🌟 Global School Annual Event 2025 — Celebrating Talent,
            Unity & Memories 🌟
          </motion.div>
        </div>

        

        
      </section>
      <PlantationDay /> 
      <Cancer />
      <Bahria />
      <Fateha />
      <ZShape />

      <Footer />
    </>
  );
}
