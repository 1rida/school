"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" }, // ✅ safer for TypeScript
  },
};

export default function FeeStructure() {
  return (
    <>
      <Header />

      <main
        className="min-h-screen bg-cover bg-center mt-9 pt-28 pb-20 px-6"
        style={{
          backgroundImage: "url('/images/main.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-5xl font-extrabold text-center text-white mb-16 underline drop-shadow"
          >
            Fee Structure & Payment Options
          </motion.h1>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-3 mt-6 gap-10"
          >
            {/* Meezan Bank */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <Image
                src="/images/meezan.jpg"
                alt="Meezan Bank"
                width={120}
                height={120}
                className="mx-auto mb-6 object-contain"
              />
              <h2 className="text-2xl font-bold text-[#0b3c7a] mb-4">
                Meezan Bank
              </h2>
              <p><strong>Account Title:</strong> TAHIRA JAHANGIR</p>
              <p><strong>Account No:</strong> 99390106767909</p>
              <p><strong>IBAN:</strong> PK24MEZN0099390106767909</p>
              <p><strong>Branch:</strong> BARADARI NORTH KARACHI</p>
            </motion.div>

            {/* JazzCash */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <Image
                src="/images/jazzcash.jpg"
                alt="JazzCash"
                width={120}
                height={120}
                className="mx-auto mb-6 object-contain"
              />
              <h2 className="text-2xl font-bold text-[#0b3c7a] mb-4">
                JazzCash
              </h2>
              <p><strong>Account Title:</strong> TAHIRA JAHANGIR</p>
              <p><strong>Account No:</strong> 03233298913</p>
            </motion.div>

            {/* Easypaisa */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <Image
                src="/images/easypaisa.jpg"
                alt="Easypaisa"
                width={120}
                height={120}
                className="mx-auto mb-6 object-contain"
              />
              <h2 className="text-2xl font-bold text-[#0b3c7a] mb-4">
                Easypaisa
              </h2>
              <p><strong>Account Title:</strong> TAHIRA JAHANGIR</p>
              <p><strong>Account No:</strong> 03233298913</p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
