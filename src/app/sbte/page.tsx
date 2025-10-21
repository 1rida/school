"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function AllamaPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Background Image */}
      <Image
        src="/images/main.jpg"
        alt="Allama Iqbal Open University"
        fill
        className="object-cover"
        priority
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center text-white text-6xl md:text-8xl font-extrabold tracking-widest text-center drop-shadow-2xl"
      >
        COMING SOON
      </motion.h1>
    </div>
  );
}
