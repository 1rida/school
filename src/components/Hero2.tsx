"use client";

import Image from "next/image";

export default function Hero2() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* 🔹 Image Side */}
      <div className="order-2 md:order-1 flex justify-center">
        <Image
          src="/images/team2.jpg"
          alt="Our Team"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* 🔹 Text Side */}
      <div className="order-1 md:order-2 relative">
        {/* Watermark Logo Behind Text */}
       <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 blur-[1px]">
  <Image
    src="/images/logo.png"
    alt="Logo Watermark"
    width={400}
    height={400}
    className="object-contain"
  />
</div>


        {/* Text Content */}
        <div className="space-y-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 underline decoration-[#f97316] decoration-4">
            Meet Our Dedicated Team
          </h2>

          <p className="text-gray-700 leading-relaxed">
            At GEHSS, our team of passionate educators is committed to nurturing
            the minds of future leaders. With years of experience, they ensure
            a supportive and inspiring environment for every student.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Together, we strive to build a brighter future through quality
            education and holistic development.
          </p>
        </div>
      </div>
    </section>
  );
}
