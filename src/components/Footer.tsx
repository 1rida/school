"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-orange-400 text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 🏫 Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/images/logo.png"
            alt="GEHSS Logo"
            width={80}
            height={80}
            className="mb-3"
          />
          <span className="text-2xl font-bold mb-2">GEHSS</span>
          <p className="text-black text-sm max-w-xs">
            Providing quality education and nurturing young minds for a brighter
            future.
          </p>
        </div>

        {/* 📍 Contact Info + Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg mb-3 underline">Contact Us</h3>
          <div className="flex flex-col gap-2 text-black underline text-sm mb-4">
            <div className="flex items-center gap-2">
              <Phone size={16} /> 0340 1201788 <br /> 03233298913
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> global.e.h.s.school@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <Link
                href="https://www.google.com/maps/place/Global+Educational+Higher+Secondary+School/@24.9986823,67.050301,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb341089d1535ab:0x69b32e57095ba519!8m2!3d24.9986823!4d67.050301!16s%2Fg%2F11hbg8ymjb?entry=ttu"
                target="_blank"
                className="hover:underline"
              >
                 A-76,77,78 sector 1-A/2 NORTH KARACHI SHAHNAWAZ BHUTTO COLONY NEAR TO 4J BUS STOP
              </Link>
            </div>
          </div>

          {/* 🌐 Social Media Icons (Moved here) */}
          <div className="flex gap-4 mt-6 justify-center items-center animate-bounce">
            <Link
              href="https://www.facebook.com/globaleucationalsecondaryschool"
              target="_blank"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition transform hover:scale-110"
            >
              <Facebook size={20} className="text-white" />
            </Link>

            <Link
              href="https://www.tiktok.com/@globaledusecondaryschool?_t=ZS-907o0kbsTua&_r=1"
              target="_blank"
              className="p-3 bg-black rounded-full hover:bg-gray-800 transition transform hover:scale-110"
            >
              <FaTiktok size={20} className="text-white" />
            </Link>

            <Link
              href="https://www.youtube.com/@globalehsschool"
              target="_blank"
              className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition transform hover:scale-110"
            >
              <Youtube size={20} className="text-white" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/global-educational-higher-secondary-school-41b1b2384/"
              target="_blank"
              className="p-3 bg-blue-700 rounded-full hover:bg-blue-800 transition transform hover:scale-110"
            >
              <Linkedin size={20} className="text-white" />
            </Link>

            <Link
              href="https://wa.me/923401201788"
              target="_blank"
              className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition transform hover:scale-110"
            >
              <FaWhatsapp size={20} className="text-white" />
            </Link>
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold underline text-lg mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 mb-4 text-center">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/events" className="hover:text-white transition-colors">
              Events
            </Link>
            <Link
              href="/feestructure"
              className="hover:text-white transition-colors"
            >
              Fee Structure
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* ⬇ Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-black text-xs">
        © {new Date().getFullYear()} GEHSS — All Rights Reserved.
      </div>
    </footer>
  );
}
