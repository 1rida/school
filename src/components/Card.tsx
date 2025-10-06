"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  img: string;
  name: string;
  role: string;
}

const team: TeamMember[] = [
  {
    img: "/images/card1.jpg",
    name: "Mrs. Tahira Jahangir",
    role: "Principal",
  },
  {
    img: "/images/card2.jpg",
    name: "Mrs. Shafaq Nayyar",
    role: "Vice Principal (Afternoon Shift)",
  },
  {
    img: "/images/card3.jpg",
    name: "Mrs. Sadaf Zahra",
    role: "Accountant",
  },
  {
    img: "/images/card4.jpg",
    name: "Sir Abdul Rehman Ansari",
    role: "English, IT, Graphic Designer, Web Development & Agentic AI",
  },
  {
    img: "/images/card5.jpg",
    name: "Sir Afzal",
    role: "IT & Printing Machine Operating",
  },
  {
    img: "/images/card8.jpg",
    name: "Mrs maria kanwal",
    role: " vice principal (morning)",
  },
   {
    img: "/images/card7.jpg",
    name: "Saima",
    role: "rechecker and Assisstant of director",
  },
   {
    img: "/images/card6.jpg",
    name: "Miss kainat",
    role: "accountant (morning)",
  },
];

export default function Card() {
  return (
    <section className="bg-white py-16">
      {/* 🔹 Section Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 underline decoration-[#f97316] decoration-4 inline-block">
          Our Professional Team
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Meet the passionate and skilled individuals who drive our mission forward.
          With their dedication and expertise, they inspire students to achieve their full potential.
        </p>
      </div>

      {/* 🔹 Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`bg-gray-50 rounded-2xl shadow-md overflow-hidden text-center group 
                        hover:shadow-2xl hover:scale-150 transition-transform duration-500
                        ${index === 4 ? "col-span-full md:col-span-1 md:col-start-2" : ""}`}
          >
            {/* Image */}
            <div className="relative mx-auto mt-6 w-32 h-32 rounded-full overflow-hidden 
                            ring-4 ring-[#f97316] group-hover:ring-orange-500 
                            transition-all duration-500">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className={`group-hover:scale-110 transition-transform duration-500 object-cover object-center`}
              />
            </div>

            {/* Text */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-500">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-800 transition-colors duration-500">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Extra Section Below Cards */}
      <div className="text-center mt-20 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0b3c7a] underline decoration-orange-400 decoration-2 inline-block">
          Building a Brighter Future Together
        </h3>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Our team,s combined passion and dedication help us create a nurturing and empowering
          learning environment. We are committed to innovation, creativity, and continuous
          growth — ensuring every student can reach their highest potential.
        </p>
      </div>
    </section>
  );
}
