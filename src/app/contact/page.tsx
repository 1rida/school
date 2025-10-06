"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      {/* Header */}
      <Header />

      <section className="bg-white text-gray-800">
        {/* Banner Image Section */}
        <div className="relative h-[500px] w-full">
          <Image
            src="/images/main.jpg" // apni banner image ka path
            alt="Global School Banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-6xl mt-[150px] sm:text-6xl font-bold text-white">
              Contact Us
            </h1>
          </div>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto px-6 py-10 text-center">
  <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-900 underline decoration-[#f97316]">
    Get in Touch
  </h1>
  <p className="text-lg leading-relaxed">
    Welcome to <span className="font-semibold">Global School</span> your
    partner in quality education. We are excited to assist you with any
    inquiries, feedback, or guidance you may need.
  </p>
</div>


       {/* Contact Information */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 pb-10">
  {/* Address */}
  <a
    href="https://maps.google.com/?q=Global Educational Higher Secondary School, Karachi, Pakistan"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-lg transition cursor-pointer"
  >
    <MapPin className="w-10 h-10 text-blue-600 mb-3" />
    <h3 className="font-bold text-lg">Address</h3>
    <p className="text-center text-sm mt-2">
      Global Educational Higher Secondary School, Karachi, Pakistan
    </p>
  </a>

  {/* Phone */}
  <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-lg transition">
    <Phone className="w-10 h-10 text-green-600 mb-3" />
    <h3 className="font-bold text-lg">Call Us</h3>
    <div className="flex flex-col gap-2 mt-2">
      {/* Call */}
      <a
        href="tel:+92401201788"
        className="text-sm text-blue-700 hover:underline"
      >
        +92 40 1201788
      </a>
       <a
        href="tel: +923100273708"
        className="text-sm text-blue-700 hover:underline"
      >
        +92 3100273708
       
      </a>
       <a
        href="tel:+923233298913"
        className="text-sm text-blue-700 hover:underline"
      >
         +92 3233298913
       
      </a>

      
    </div>
  </div>

  {/* Email */}
  <a
    href="mailto:global.e.h.s.school@gmail.com"
    className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-lg transition cursor-pointer"
  >
    <Mail className="w-10 h-10 text-red-600 mb-3" />
    <h3 className="font-bold text-lg">Email Us</h3>
    <p className="text-sm mt-2">
      global.e.h.s.school@gmail.com
    </p>
  </a>
</div>


        {/* Map Embed */}
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28997.87148485143!2d67.035301!3d24.9986823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341089d1535ab%3A0x69b32e57095ba519!2sGlobal%20Educational%20Higher%20Secondary%20School!5e0!3m2!1sen!2sPK!4v1699999999999"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
