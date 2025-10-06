"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function AdmissionPopup() {
  const [showPopup, setShowPopup] = useState(true);

  Optional:
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 10000); // 10 sec
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 mt-[140px] flex items-center justify-center z-50">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl w-[90%]">
        
        {/* ❌ Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
        >
          <X size={20} />
        </button>

        {/* 📌 Image */}
        <Image
          src="/images/admission.jpg" // yahan aap apni image ka path dalen
          alt="Admission Open"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
