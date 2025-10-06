"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const POSITIONS = [
  {
    id: 1,
    img: "/images/position1.jpg",
    name: "SANYA",
    parent: "d/o NASEER KHAN",
    percent: "70%",
    desc: "An inspiring achiever with remarkable dedication and consistency.",
  },
  {
    id: 2,
    img: "/images/position2.jpg",
    name: "SAWAIRA ARSHAD",
    parent: "d/o MUHAMMAD ARSHAD",
    percent: "75%",
    desc: "Celebrated for her outstanding academic excellence and hard work.",
  },
  {
    id: 3,
    img: "/images/position3.jpg",
    name: "MUHAMMAD HAMZA",
    parent: "s/o MUHAMMAD KHALID",
    percent: "84%",
    desc: "A bright student who set new benchmarks of success this year.",
  },
];

export default function PositionHolders() {
  return (
    <section className="bg-gradient-to-b from-orange-200 to-orange-200 px-6 ">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12 ">
        <h1 className="text-3xl sm:text-6xl font-extrabold text-[#0b3c7a] underline decoration-[#f97316]">
          Position Holders
        </h1>
        <p className="mt-4 text-gray-700 text-sm sm:text-base font-extrabold max-w-2xl mx-auto underline">
          Congratulations to our brilliant students for their remarkable
          achievements and dedication throughout the year.
        </p>
      </div>

      {/* List */}
      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {POSITIONS.map((pos, index) => (
          <motion.div
            key={pos.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Left: Student Image */}
            <div className="relative w-full sm:w-1/3 h-[450px]">
              <Image
                src={pos.img}
                alt={pos.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right: Details with Watermark */}
            <div className="relative p-6 sm:p-10 flex-1 text-center sm:text-left">
              {/* 🔹 Watermark Logo */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[450px] h-[450px] opacity-25">
                  <Image
                    src="/images/logo.png"
                    alt="Watermark Logo"
                    width={450}
                    height={450}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Details */}
              <div className="relative z-10">
                <h1 className="text-5xl font-bold text-[#0b3c7a] mb-2">
                  {pos.name}
                </h1>
                <p className="text-gray-700 text-lg mb-2">{pos.parent}</p>
                <p className="text-[#0b3c7a] text-xl font-semibold mb-4">
                  {pos.percent}
                </p>
                <p className="text-gray-800 text-2xl font-semibold leading-snug">
                  {pos.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
