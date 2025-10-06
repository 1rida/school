"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import Courses from "@/components/Courses";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Podcast from "@/components/podcast";

export default function ItDepartmentPage() {
  const itImages = [
    { src: "/images/it1.jpg", title: "Web Development" },
    { src: "/images/it2.jpg", title: "Artificial Intelligence" },
    { src: "/images/it3.jpg", title: "Cyber Security" },
    { src: "/images/it4.jpg", title: "Cloud Computing" },
    { src: "/images/it5.jpg", title: "Data Science" },
    { src: "/images/it6.jpg", title: "Networking & Systems" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Header />

      <section className="bg-white text-gray-800 pt-28">
        {/* 🌟 Banner Section */}
        <div className="relative w-full h-[50vh] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/it7.jpg"
              alt="IT Department Banner"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold text-white underline decoration-[#f97316] text-center drop-shadow-lg"
            >
              IT Department & Courses
            </motion.h1>
          </div>
        </div>

        {/* 📖 Intro Section */}
       <div className="max-w-6xl mx-auto px-6 py-2">
  <motion.h2
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 underline decoration-[#f97316] text-center"
  >
    Welcome to Our IT Department
  </motion.h2>

  <motion.p
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto text-center"
  >
    Our IT Department is committed to providing top-quality education
    in computer science, web development, and programming. Students
    gain cutting-edge skills and hands-on experience to excel in the
    modern digital world.
  </motion.p>
</div>

        {/* 💼 Highlight Teacher Section */}
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden  shadow-xl"
            >
              <Image
                src="/images/it9.jpg"
                alt="Engr Sir Abdul Rehman Ansari"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold underline decoration-[#f97316] text-blue-900">
                ENGR SIR ABDUL REHMAN ANSARI
              </h2>
              <p className="text-orange-600 font-semibold underline decoration-blue-900 text-lg">
                The Leader of Agentic AI and Information Technology
              </p>
              <p className="text-gray-600 leading-relaxed">
                A visionary educator dedicated to empowering students with
                cutting-edge skills in AI, machine learning, and advanced
                information technology. His guidance inspires innovation and
                excellence in the IT field.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 🖥 IT Lab Section Heading */}
        <div className="max-w-6xl mx-auto px-6 pb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 underline decoration-[#f97316] mb-4"
          >
            Our Advanced IT Labs
          </motion.h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art computer labs equipped with the latest
            technology where students gain practical experience in multiple IT
            domains.
          </p>
        </div>

        {/* 🖼 Animated IT Gallery */}
        <div className="max-w-6xl mx-auto px-6 pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {itImages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(item.src)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="object-cover w-full h-60 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <p className="text-white text-lg font-semibold tracking-wide">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌌 Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-red-400 transition"
              >
                <X size={30} />
              </button>

              <motion.img
                src={selectedImage}
                alt="Full View"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Courses /> 
      <Podcast />

      <Footer />
    </>
  );
}
