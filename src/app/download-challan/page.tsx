"use client";

import { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";
import { ChevronDown, IdCard, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ChallanPage() {
  const challanRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // 📄 Download as PDF
  const downloadPDF = async () => {
    const input = challanRef.current;
    if (!input) return;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png", 0.6); // compressed
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("challan.pdf");
    setOpen(false);
  };

  // 🖼️ Download as JPEG
  const downloadJPEG = async () => {
    const input = challanRef.current;
    if (!input) return;

    const canvas = await html2canvas(input, { scale: 2 });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg", 0.6); // compressed
    link.download = "challan.jpg";
    link.click();
    setOpen(false);
  };

  // 📷 Upload Screenshot
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;
        const MAX_WIDTH = 600;
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setUploadedImage(canvas.toDataURL("image/jpeg", 0.6)); // compressed image
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Header />
      <main
        className="relative min-h-screen bg-cover bg-center py-10 mt-[100px] px-4"
        style={{
          backgroundImage: "url('/images/main.jpg')",
        }}
      >
        {/* 🔹 Challan Form */}
        <motion.div
          ref={challanRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-lg max-w-4xl mx-auto p-6 border relative"
        >
          {/* Header */}
          <div className="flex flex-col items-center mb-4 text-center">
            <h1 className="text-2xl font-bold text-[#0b3c7a]">
              GLOBAL EDUCATIONAL HIGHER SECONDARY SCHOOL
            </h1>
            <p className="text-sm text-gray-600">
              Plot # A-76,77,78 Sector 1-A/2 Shahnawaz Bhutto Colony
            </p>
            <p className="font-semibold mt-2 self-end">CHALLAN No: 001</p>
          </div>

          {/* Uploaded Image with ❌ Cut Option */}
          {uploadedImage && (
            <div className="mb-4 flex justify-center relative w-full">
              <img
                src={uploadedImage}
                alt="Uploaded Screenshot"
                className="max-h-48 object-contain border rounded shadow mx-auto"
              />
              <button
                onClick={() => setUploadedImage(null)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow hover:bg-red-600 transition"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {/* Paid By / To */}
          <div className="grid grid-cols-2 gap-4 border p-4 mb-4 rounded">
            <p>
              <strong>Paid by:</strong> __________
            </p>
            <p>
              <strong>Paid to:</strong> __________
            </p>
          </div>

          {/* Table */}
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-[#0b3c7a] text-white text-left">
                <th className="p-2">DESCRIPTION</th>
                <th className="p-2 w-40">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="p-2">Monthly Fees</td>
                <td className="p-2">Rs. _____</td>
              </tr>
              <tr className="border">
                <td className="p-2">Enrollment Fee</td>
                <td className="p-2">Rs. _____</td>
              </tr>
              <tr className="border">
                <td className="p-2">Examination Fee</td>
                <td className="p-2">Rs. _____</td>
              </tr>
              <tr className="border">
                <td className="p-2">Annual Fee</td>
                <td className="p-2">Rs. _____</td>
              </tr>
              <tr className="border">
                <td className="p-2">Security Deposit Fee</td>
                <td className="p-2">Rs. _____</td>
              </tr>
            </tbody>
          </table>

          {/* Totals */}
          <div className="grid grid-cols-2 gap-2 text-sm mb-4">
            <p>Subtotal: __________</p>
            <p>Discount(s): __________</p>
            <p>Other: __________</p>
            <p className="font-bold">TOTAL: __________</p>
          </div>

          {/* Footer */}
          <div className="flex justify-between text-sm">
            <p>Date: __________</p>
            <p>Received by: __________</p>
          </div>
        </motion.div>

        {/* 🔹 Upload & Download Options */}
        <div className="flex flex-col items-center mt-6 relative gap-4">
          {/* Upload */}
          <label className="bg-gray-200 px-4 py-2 rounded cursor-pointer shadow hover:bg-gray-300">
            📤 Upload Screenshot
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>

          {/* Download Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-[#0b3c7a] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-[#092d5c] transition"
            >
              Download <ChevronDown size={18} />
            </button>

            {open && (
              <div className="absolute mt-2 bg-white shadow-lg rounded w-44 text-left z-10">
                <button
                  onClick={downloadPDF}
                  className="block w-full px-4 py-2 hover:bg-gray-100"
                >
                  📄 Download PDF
                </button>
                <button
                  onClick={downloadJPEG}
                  className="block w-full px-4 py-2 hover:bg-gray-100"
                >
                  🖼️ Download JPEG
                </button>
              </div>
            )}
          </div>
        </div>

        
      </main>
      <IdCard />
      <Footer />
    </>
  );
}
