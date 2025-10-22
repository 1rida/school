"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const PODCASTS = [
  {
    id: 1,
    img: "/images/podcast1.jpg",
    title: "🎨 Creative Minds",
    desc: "Dive into the world of creativity with inspiring stories, design trends, and artistic journeys.",
    border: "border-blue-400 hover:shadow-blue-200",
  },
  {
    id: 2,
    img: "/images/podcast2.jpg",
    title: "💻 Tech Talks",
    desc: "Explore the latest in technology, AI, and web development with deep discussions and insights.",
    border: "border-green-400 hover:shadow-green-200",
  },
];

export default function PodcastPage() {
  return (
    <>
      <Header />
      <main className="relative bg-orange-200 text-gray-800 min-h-screen overflow-hidden">
        {/* --- Background Floating Circle --- */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-pink-300/40 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/40 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 relative z-10">
          {/* --- Page Title --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0b3c7a] tracking-tight">
              🎙️ Our Podcasts
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Listen to insightful discussions on creativity and technology.
            </p>
          </motion.div>

          {/* --- Smooth Slider --- */}
          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              {[...PODCASTS, ...PODCASTS].map((podcast, i) => (
                <div
                  key={i}
                  className={`min-w-[300px] sm:min-w-[400px] md:min-w-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-lg border-4 ${podcast.border} transition-all duration-500`}
                >
                  {/* --- Image --- */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={podcast.img}
                      alt={podcast.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* --- Content --- */}
                  <div className="p-6 flex flex-col gap-3 text-center">
                    <h2 className="text-xl font-bold text-[#0b3c7a]">
                      {podcast.title}
                    </h2>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {podcast.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}