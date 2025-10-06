"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  whatsappText?: string; // optional prefilled message for WhatsApp
};

const WHATSAPP_NUMBER = "923233298913"; // +92 3233298913 -> international format without +
const EMAIL = "global.e.h.s.school@gmail.com";

export default function ContactIcons({ className = "", whatsappText = "" }: Props) {
  const waHref = whatsappText
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;
  const mailHref = `mailto:${EMAIL}`;

  return (
    <div
      className={`fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50 ${className}`}
    >
      {/* WhatsApp button */}
      <motion.a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat with +92 3233298913"
        title="WhatsApp: +92 3233298913"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-700 text-white shadow-md hover:scale-110 hover:shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.37 0 .01 5.36.01 12.01c0 2.12.56 4.18 1.62 6.01L0 24l6.2-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.36 12-11.99 0-3.2-1.25-6.2-3.48-8.53zM12 21.5c-1.8 0-3.54-.47-5.06-1.36l-.36-.21-3.71.97 1.01-3.62-.24-.37A9.46 9.46 0 0 1 2.5 12.01C2.5 6.76 6.73 2.5 12 2.5c2.56 0 4.98.97 6.8 2.72A9.48 9.48 0 0 1 21.5 12c0 5.24-4.23 9.5-9.5 9.5z" />
          <path d="M17.36 14.14c-.3-.15-1.77-.87-2.05-.97-.28-.09-.48-.14-.68.14-.19.28-.77.97-.95 1.17-.17.19-.35.21-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.28-.35.42-.53.14-.19.18-.32.28-.51.09-.19.05-.36-.03-.51-.09-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52l-.58-.01c-.19 0-.5.07-.76.36-.27.29-1.03 1.01-1.03 2.47 0 1.45 1.06 2.86 1.21 3.06.15.19 2.09 3.2 5.07 4.49 2.98 1.29 2.98.86 3.52.81.54-.06 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.28-.19-.58-.34z" />
        </svg>
      </motion.a>

      {/* Email button */}
      <motion.a
        href={mailHref}
        aria-label={`Send email to ${EMAIL}`}
        title={EMAIL}
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 text-white shadow-md hover:scale-110 hover:shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden>
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </motion.a>
    </div>
  );
}