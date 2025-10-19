"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const heading = "Welcome to GEHSS";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* 🔹 Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/main.jpg"
          alt="School Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-10 ">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl flex justify-center gap-3 flex-wrap mt-[120px]"
        >
          {heading.split(" ").map((word, wi) => (
            <span key={wi} className="inline-block">
              {word.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={char === "G" ? "text-[#f97316]" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          className="text-xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed"
        >
          Empowering students to become confident, creative, and compassionate
          leaders — nurturing their minds, inspiring their dreams, and shaping
          a brighter future through excellence in education 🎓
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <Link
            href="/admission"
            className="bg-[#f97316] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 hover:bg-[#fb923c] transition"
          >
            Admission Open
          </Link>
          <Link
            href="/about"
            className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#0b3c7a] transition hover:scale-105"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
