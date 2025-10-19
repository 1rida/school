"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import { Play, X } from "lucide-react";

const PODCASTS = [
  {
    id: 1,
    img: "/images/podcast1.jpg",
    video: "/podcast1.mp4",
    title: " Podcast 1: Creative Minds",
    desc: "Dive into the world of creativity with inspiring stories, design trends, and artistic journeys.",
    border: "border-blue-400 hover:shadow-blue-200",
  },
  {
    id: 2,
    img: "/images/podcast2.jpg",
    video: "/podcast2.mp4",
    title: " Podcast 2: Tech Talks",
    desc: "Explore the latest in technology, AI, and web development with deep discussions and insights.",
    border: "border-green-400 hover:shadow-green-200",
  },
];

export default function PodcastPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="relative bg-orange-200 text-gray-800 min-h-screen overflow-hidden">
        {/* Floating Background Circles */}
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
          {/* Page Title */}
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
              Watch or listen to inspiring discussions on creativity and technology.
            </p>
          </motion.div>

          {/* --- Smooth Auto Slider --- */}
          <div className="overflow-hidden relative mb-12">
            <motion.div
              className="flex gap-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              {[...PODCASTS, ...PODCASTS].map((podcast, i) => (
                <div
                  key={i}
                  className={`min-w-[300px] sm:min-w-[400px] md:min-w-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-lg border-4 ${podcast.border} transition-all duration-500`}
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={podcast.img}
                      alt={podcast.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h2 className="text-xl font-bold text-[#0b3c7a]">
                      {podcast.title}
                    </h2>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                      {podcast.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* --- Separate Play Buttons --- */}
          <div className="flex flex-wrap justify-center gap-6">
            {PODCASTS.map((podcast) => (
              <button
                key={podcast.id}
                onClick={() => setActiveVideo(podcast.video)}
                className="bg-orange-400 text-black font-extrabold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-800 transition animate-bounce"
              >
                <Play className="w-5 h-5" />
                Play {podcast.title}
              </button>
            ))}
          </div>
        </div>

        {/* --- Video Modal --- */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-[90%] max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
