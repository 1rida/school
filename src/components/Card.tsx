"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface TeamMember {
  img: string;
  name: string;
  role: string;
  aboutPath: string;
}

const team: TeamMember[] = [
 {
    img: "/images/administrator.jpg",
    name: "Mr Jahangir Alam",
    role: "Administrator",
    aboutPath: "/about",
  },
  
  {
    img: "/images/card1.jpg",
    name: "Mrs. Tahira Jahangir",
    role: "Principal",
    aboutPath: "/about",
  },
   {
    img: "/images/card7.jpg",
    name: "Mrs Maria Kanwal",
    role: "Vice Principal (Morning) and Writer (Books)",
    aboutPath: "/about",
  },
  {
    img: "/images/card2.jpg",
    name: "Mrs. Shafaq Nayyar",
    role: "Vice Principal (Afternoon Shift)",
    aboutPath: "/about",
  },
   {
    img: "/images/card11.jpg",
    name: "Mr Saad Alam",
    role: "IT Financial Advisor",
    aboutPath: "/about",
  },


  {
    img: "/images/card10.jpg",
    name: "Mr Uzair Alam",
    role: "IT expert",
    aboutPath: "/about",
  },
   {
    img: "/images/card9.jpg",
    name: "Miss Urooj Jahangir",
    role: "Lab Technician",
    aboutPath: "/about",
  },
 {
    img: "/images/card4.jpg",
    name: "Engineer Sir Abdul Rehman Ansari",
    role: "English, IT, Graphic Designer, Web Development & Agentic AI",
    aboutPath: "/about",
  },
  {
    img: "/images/card5.jpg",
    name: "Sir Afzal",
    role: "IT, Printing Machine Operator and Hardware Repairer",
    aboutPath: "/about",
  },
   {
    img: "/images/card8.jpg",
    name: "Mrs Saima Liaqat",
    role: "Rechecker, OT Operator and BSN",
    aboutPath: "/about",
  },
  

  
  {
    img: "/images/card3.jpg",
    name: "Mrs. Sadaf Zahra",
    role: "Accountant, Rechecker and Lab Technician",
    aboutPath: "/about",
  },
 
  
 
 
  {
    img: "/images/card6.jpg",
    name: "Miss Kainat",
    role: "Accountant (Morning)",
    aboutPath: "/about",
  },
 
   {
    img: "/images/card12.jpg",
    name: "Miss Alisha",
    role: "Accountant ",
    aboutPath: "/about",
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
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group [perspective:1000px] hover:cursor-pointer"
          >
            {/* Flip container */}
            <div className="relative w-full h-[340px] bg-transparent transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-lg">

              {/* 🔹 Front Side */}
              <div className="absolute inset-0 bg-gray-50 rounded-2xl flex flex-col items-center justify-center [backface-visibility:hidden]">
                <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#f97316] mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600 mt-1 px-3 text-center">
                  {member.role}
                </p>
              </div>

              {/* 🔹 Back Side (keeps text upright) */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl flex flex-col items-center justify-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white mb-3">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm opacity-90 mb-4 px-4 text-center">
                    Learn more about {member.name.split(" ")[0]}’s achievements and dedication.
                  </p>
                  <Link
                    href={member.aboutPath}
                    className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                  >
                    About
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Bottom Section */}
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
