"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AwarenessAboutCervicalCancer() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 🔹 Specific 5 images
  const awarenessImages = [
    "/images/IMG-20251003-WA0036.jpg",
    "/images/IMG-20251003-WA0038.jpg",
    "/images/IMG-20251003-WA0040.jpg",
    "/images/IMG-20251003-WA0041.jpg",
    "/images/IMG-20251003-WA0043.jpg",
  ];

  type ScrollDirection = "left" | "right";

  const scroll = (dir: ScrollDirection) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  // 🔹 Auto scroll effect
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
    <section className="bg-orange-200 px-6 py-16">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-6 text-center text-black underline "
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Awareness About Cervical Cancer
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-lg text-center text-gray-800 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        This session was organized to raise <b>awareness about cervical cancer</b>.
        The event emphasized the importance of regular checkups, early diagnosis,
        and preventive measures to ensure women,s health and well-being.
      </motion.p>

      {/* Slider */}
      <div className="relative">
        

        {/* Scrollable Images */}
        <motion.div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {awarenessImages.map((src, idx) => (
            <motion.div
              key={idx}
              className="min-w-[250px] max-w-[250px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={src}
                alt={`Awareness Cervical Cancer ${idx + 1}`}
                width={250}
                height={300}
                className="object-cover w-full h-[300px] rounded-xl"
              />
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
}
