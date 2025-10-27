"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MedicalCampCarousel() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  // 🔹 Medical camp images (16 → 50)
  const medicalImages = Array.from(
    { length: 35 },
    (_, i) => `/images/IMG-20250928-WA00${i + 16}.jpg`
  );

  // 🔹 Visionary Award images
  const visionImages = Array.from(
    { length: 5 },
    (_, i) => `/images/vision${i + 1}.jpg`
  );

  // 🔹 Scroll function
  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -600 : 600,
        behavior: "smooth",
      });
    }
  };

  // 🔹 Auto slide for Medical Camp
  useEffect(() => {
    const interval = setInterval(() => {
      scroll(scrollRef1, "right");
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Auto slide for Visionary Award
  useEffect(() => {
    const interval = setInterval(() => {
      scroll(scrollRef2, "right");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* ✅ Medical Camp Section */}
      <section className="bg-orange-100 py-16 px-6">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-8 text-black underline"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Free Medical Camp by Global School
        </motion.h2>

        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed mb-12">
         A Free Dental Camp was organized at Global Educational Higher Secondary School, where more than 60 doctors from Hamdard University, Karachi, participated. The camp aimed to provide free dental checkups and awareness about oral health to the residents of Shahnawaz Bhutto Colony. It was a great community initiative promoting health and well being. The efforts of the medical team were highly appreciated by students, parents, and locals alike.
        </p>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll(scrollRef1, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg z-10 hover:bg-orange-600"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Images Row */}
          <div
            ref={scrollRef1}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-12"
          >
            {medicalImages.map((src, idx) => (
              <motion.div
                key={idx}
                className="min-w-[300px] h-[220px] flex-shrink-0 bg-gray-200 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={src}
                  alt={`Medical Camp ${idx + 1}`}
                  width={300}
                  height={220}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll(scrollRef1, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg z-10 hover:bg-orange-600"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* ✅ Visionary Award Section */}
      <section className="bg-orange-200 py-16 px-6">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-8 text-black underline"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Visionary Award 2025
        </motion.h2>

        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed mb-12">
          The Visionary Award 2025 celebrated outstanding achievements,
          innovation, and leadership. Global School honored dedicated
          individuals and teams who have made remarkable contributions in
          education, social impact, and community development.
        </p>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll(scrollRef2, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-500 text-white p-3 rounded-full shadow-lg z-10 hover:bg-blue-600"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Images Row */}
          <div
            ref={scrollRef2}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-12"
          >
            {visionImages.map((src, idx) => (
              <motion.div
                key={idx}
                className="min-w-[300px] h-[220px] flex-shrink-0 bg-gray-200 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={src}
                  alt={`Visionary Award ${idx + 1}`}
                  width={300}
                  height={220}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll(scrollRef2, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-500 text-white p-3 rounded-full shadow-lg z-10 hover:bg-blue-600"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* ✅ Picnic at Waterworld Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 px-6">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-8 text-black underline decoration-orange-500"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Picnic at Waterworld
        </motion.h2>

        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed mb-12">
          Global School arranged a fun-filled picnic at Waterworld where
          students enjoyed water rides, wave pools, and exciting games.
          Teachers and parents joined to make it a memorable day filled with
          laughter, learning, and joy.
        </p>

       <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
  <motion.div
    className="rounded-2xl overflow-hidden shadow-lg"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Image
      src="/images/picnic1.jpg"
      alt="Picnic Fun"
      width={600}
      height={400}
      className="object-contain w-full h-auto"
    />
  </motion.div>

  <motion.div
    className="rounded-2xl overflow-hidden shadow-lg"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Image
      src="/images/picnic2.jpg"
      alt="Students Enjoying"
      width={600}
      height={400}
      className="object-contain w-full h-auto"
    />
  </motion.div>
</div>

      </section>
    </div>
  );
}
