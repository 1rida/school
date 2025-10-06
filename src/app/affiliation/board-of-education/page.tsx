"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Position from "@/components/Position";

const BOARDS = [
  {
    id: "bsek",
    name: "Board of Secondary School Education",
    logo: "/images/board1.jpg",
    desc: "The Board of Secondary Education oversees SSC exams and academic standards for secondary schools in Karachi. It ensures fair examination procedures and promotes educational growth at the secondary level.",
    path: "/secondary", // 🔹 unique path
  },
  {
    id: "biek",
    name: "Board of Intermediate Education",
    logo: "/images/board2.jpg",
    desc: "The Board of Intermediate Education manages HSC exams and curriculum for colleges and higher secondary schools. It plays a vital role in shaping the educational standards for pre-university students.",
    path: "/intermediate", // 🔹 unique path
  },
  {
    id: "zub",
    name: "Board of Ziauddin University Education",
    logo: "/images/board3.jpg",
    desc: "Ziauddin University Education Board focuses on modern education systems and affiliated schools/universities. It introduces innovative learning methods and ensures quality education at various levels.",
    path: "/ziauddin", // 🔹 unique path
  },
];

export default function BoardOfEducation() {
  return (
    <>
      <Header />

      <section className="min-h-screen bg-orange-200 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0b3c7a] mt-[120px] underline decoration-[#f97316]">
            Boards of Education
          </h1>
          <p className="mt-4 text-gray-700 text-sm sm:text-base font-extrabold max-w-2xl mx-auto underline">
            Explore details of different education boards affiliated with our
            institution.
          </p>
        </div>

        {/* Logos + Text Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {BOARDS.map((board, i) => (
            <motion.div
              key={board.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-72 h-72 mb-6"
              >
                <Image
                  src={board.logo}
                  alt={board.name}
                  fill
                  className="object-cover rounded-full border-4 border-[#0b3c7a]/40 shadow-xl"
                />
              </motion.div>

              {/* Name */}
              <h1 className="text-2xl font-bold text-[#0b3c7a] mb-3 underline decoration-[#f97316]">
                {board.name}
              </h1>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed max-w-sm mb-4">
                {board.desc}
              </p>

              {/* Orange Button - unique per board */}
              <Link
                href={board.path}
                className="mt-4 inline-block bg-orange-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-orange-600 transition"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Position />
      <Footer />
    </>
  );
}
