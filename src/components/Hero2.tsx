"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero2() {
  return (
    <section className="w-full bg-white relative z-0 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* 🔹 Image Side */}
      <motion.div
      className="order-2 md:order-1 flex justify-center"
      initial={{ rotateY: 180, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Image
        src="/images/team2.jpg"
        alt="Our Team"
        width={500}
        height={500}
        className="rounded-2xl shadow-lg object-cover"
      />
    </motion.div>

      {/* 🔹 Text Side */}
      <div className="relative w-full py-10 px-6 overflow-hidden">
  {/* Watermark Background */}
  <div className="absolute inset-0 flex items-center justify-center -z-12">
    <Image
      src="/images/logo.png"
      alt="Logo Watermark"
      width={400}
      height={400}
      className="object-contain opacity-30"
    />
  </div>

  {/* Text Content */}
  <div className="relative space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 underline decoration-[#f97316] decoration-4">
      Meet Our Dedicated Team
    </h2>

    <p className="text-gray-800 leading-relaxed">
      At GEHSS, our team of passionate educators is committed to nurturing
      the minds of future leaders. With years of experience, they ensure a
      supportive and inspiring environment for every student.
    </p>

    <p className="text-gray-800 leading-relaxed">
      Together, we strive to build a brighter future through quality
      education and holistic development.
    </p>
  </div>
</div>

    </section>
  );
}
