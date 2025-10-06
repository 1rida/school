"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// 🔹 Header & Footer import
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PortalLogin() {
  return (
    <>
      {/* 🔹 Header */}
      <Header />

      {/* 🔹 Main Section with Background Image */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center mt-8 bg-no-repeat p-6 pt-28"
        style={{ backgroundImage: "url('/images/main.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-orange-100/90 backdrop-blur-sm rounded-2xl shadow-2xl max-w-2xl w-full p-12 text-center"
        >
          {/* Portal Image */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/portal.jpg"
              alt="Portal Logo"
              width={260}
              height={160}
              className="rounded-full shadow-lg"
            />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-[#0b3c7a] mb-6">
            Welcome to GEHSS Portal
          </h2>
          <p className="text-black mb-10 text-lg">
            Please click below to access your dashboard
          </p>

          {/* Login Button */}
          <Link
            href="https://globaledu.easyschoolin.com/index.php?admin/dashboard"
            target="_blank"
            className="inline-block bg-[#0b3c7a] text-white font-semibold px-10 py-4 rounded-full shadow-md hover:bg-[#092d5c] transition duration-300 text-lg"
          >
            Login to Portal
          </Link>
        </motion.div>
      </div>

      {/* 🔹 Footer */}
      <Footer />
    </>
  );
}
