"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    "📞 PRINCIPAL MRS TAHIRA JAHANGIR 03233298913",
    "📞 0340 1201788",
    "📧 global.e.h.s.school@gmail.com",
    "📍 A-76,77,78 sector 1-A/2 NORTH KARACHI SHAHNAWAZ BHUTTO COLONY NEAR TO 4J BUS STOP",
  ];

  const normalLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Fee Structure", href: "/feestructure" },
    { name: "Contact", href: "/contact" },
  ];

  const styledLinks = [
    { name: "Admission", href: "/admission" },
    { name: "Download Challan", href: "/download-challan" },
  ];

  const portalLink = {
    name: "Portal Login",
    href: "/portal-login",
    bg: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔹 Info Slider */}
      <div className="bg-orange-200 text-black overflow-hidden">
        <div className="relative h-8 sm:h-10 flex items-center">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((text, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 flex items-center justify-center text-xs sm:text-sm font-medium"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className="bg-orange-400 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="GEHSS Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-wide text-black">
                GLOBAL
              </span>
              <span className="text-xs font-bold text-white -mt-1">
                EDUCATIONAL HIGHER <br /> SECONDARY SCHOOL
              </span>
            </div>
          </Link>

          {/* 💻 Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 relative">
            {normalLinks.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative font-medium text-black group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* ⚡ Affiliation Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 font-medium text-black"
              >
                Affiliation <ChevronDown size={16} />
              </button>

              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-orange-200 rounded-md shadow-md overflow-hidden">
                  <Link
                    href="/affiliation/it"
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                  >
                    IT department & Courses
                  </Link>
                  <Link
                    href="/affiliation/board-of-education"
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                  >
                    Board of education
                  </Link>
                </div>
              )}
            </div>

            {normalLinks.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative font-medium text-black group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {styledLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative font-serif border-b-2 text-black group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link
              href={portalLink.href}
              className={`px-4 py-2 rounded-full font-semibold shadow-md ${portalLink.bg}`}
            >
              {portalLink.name}
            </Link>
          </nav>

          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-orange-200 shadow-lg transform transition-transform duration-300 z-40 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#0b3c7a]"
        >
          <X size={26} />
        </button>

        <div className="flex flex-col items-start px-6 py-12 gap-5 text-black font-medium">
          {/* Order same as Desktop */}
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>

          {/* 📱 Affiliation Dropdown in Mobile */}
          <div className="w-full">
            <button
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
              className="flex items-center justify-between w-full font-semibold"
            >
              <span>Affiliation</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  showMobileDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
            {showMobileDropdown && (
              <div className="pl-3 mt-2 flex flex-col gap-3">
                <Link
                  href="/affiliation/it"
                  onClick={() => setIsOpen(false)}
                  className="text-sm"
                >
                  IT department & Courses
                </Link>
                <Link
                  href="/affiliation/board-of-education"
                  onClick={() => setIsOpen(false)}
                  className="text-sm"
                >
                  Board of education
                </Link>
              </div>
            )}
          </div>

          <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="/feestructure" onClick={() => setIsOpen(false)}>Fee Structure</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/admission" onClick={() => setIsOpen(false)}>Admission</Link>
          <Link href="/download-challan" onClick={() => setIsOpen(false)}>Download Challan</Link>


          <Link
            href={portalLink.href}
            onClick={() => setIsOpen(false)}
            className={`px-4 py-2 rounded-full font-semibold text-center ${portalLink.bg}`}
          >
            {portalLink.name}
          </Link>
        </div>
      </div>
    </header>
  );
}
