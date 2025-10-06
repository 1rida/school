"use client";

import { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Component to hold the card content that will be downloaded
// You must replace this with your actual ID Card design based on the PDF content
const IdCardContent = () => (
  <div
    style={{
      width: "3.5in", // Standard ID card size
      height: "2in",
      padding: "0.25in",
      border: "1px solid #0b3c7a",
      fontSize: "8pt",
      color: "#0b3c7a",
      boxSizing: "border-box",
      backgroundColor: "white",
    }}
  >
    <div style={{ textAlign: "center", fontWeight: "bold", marginBottom: "5px" }}>
      GLOBAL EDUCATIONAL HIGHER SECONDARY SCHOOL (GEHSS)
    </div>
    <div style={{ fontSize: "6pt", textAlign: "center", marginBottom: "8px" }}>
      PLOT A-76,77,78 SECTOR 1-A/1 SHAHNAWAZ BHUTTO COLONY NORTH KARACHI PAKISTAN
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <p>NAME: _________</p>
        <p>SURENAME: _________</p>
        <p>CLASS: _________</p>
        <p>ID: _________</p>
      </div>
      <div style={{ border: "1px solid #ccc", width: "40px", height: "40px", textAlign: "center", lineHeight: "40px" }}>
        Place Photo
      </div>
    </div>
    <div style={{ marginTop: "10px", borderTop: "1px dashed #ccc", paddingTop: "5px" }}>
      <p style={{ fontWeight: "bold" }}>VISION:</p>
      <p style={{ fontSize: "6pt" }}>
        GLOBAL EDUCATIONAL HIGHER SCHOOL provides you IT training for bright future by which you can earn above then $1500 per month owner MRS TAHIRA JAHANGIR is giving this achievement free for ORPHAN.
      </p>
      <p style={{ marginTop: "5px", textAlign: "right", fontWeight: "bold" }}>
        PRINCIPAL SIGNATURE
      </p>
    </div>
  </div>
);


export default function ChallanPage() {
  const challanRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null); // New ref for the ID Card
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

  // 💳 Download ID Card as PDF/JPEG
  const downloadCard = async (format: 'pdf' | 'jpeg') => {
    const input = cardRef.current;
    if (!input) return;

    // Use a high scale for better resolution on a small card
    const canvas = await html2canvas(input, { scale: 4, logging: false });
    const imgData = canvas.toDataURL(`image/${format}`, 0.9);

    if (format === 'pdf') {
      const pdf = new jsPDF('l', 'in', [3.5, 2]); // Landscape, 3.5in x 2in
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = 3.5;
      const pdfHeight = 2; // Fixed card dimensions
      
      // Calculate margins to center the image on the small PDF page
      const marginX = (pdfWidth - imgProps.width / imgProps.height * pdfHeight) / 2;
      
      // Ensure the image fits within the card dimensions
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("id_card.pdf");
    } else { // JPEG
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "id_card.jpg";
      link.click();
    }
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
        {/* ⚠️ Hidden ID Card Content (Used for download) */}
        {/* This div must be included so html2canvas can capture the card design */}
        <div ref={cardRef} style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
          <IdCardContent />
        </div>
        
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

          {/* Download Dropdown (Updated) */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-[#0b3c7a] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-[#092d5c] transition"
            >
              Download <ChevronDown size={18} />
            </button>

            {open && (
              <div className="absolute mt-2 bg-white shadow-lg rounded w-44 text-left z-10">
                {/* New Download Card Options */}
                <div className="border-b">
                  <button
                    onClick={() => downloadCard('pdf')}
                    className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    💳 Download ID Card (PDF)
                  </button>
                  <button
                    onClick={() => downloadCard('jpeg')}
                    className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    📸 Download ID Card (JPEG)
                  </button>
                </div>
                {/* Existing Download Challan Options */}
                <button
                  onClick={downloadPDF}
                  className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                >
                  📄 Download Challan (PDF)
                </button>
                <button
                  onClick={downloadJPEG}
                  className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                >
                  🖼️ Download Challan (JPEG)
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}