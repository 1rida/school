"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SecondaryBoard() {
  return (
    <>
      <Header />

      {/* 🔹 Full background with main.jpg */}
      <main
        className="relative min-h-screen bg-cover bg-center py-16 px-6"
        style={{
          backgroundImage: "url('/images/main.jpg')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Page Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* 🔹 Top Heading */}
          <h1 className="text-5xl font-extrabold text-center text-orange-400 mb-12 mt-20 underline decoration-orange-500 drop-shadow-lg">
            Board of Secondary Education Karachi (BSEK)
          </h1>

          {/* 🔹 Board1 Image */}
          <div className="flex justify-center mb-12">
            <Image
              src="/images/board1.jpg"
              alt="Board of Secondary Education Karachi"
              width={450}
              height={320}
              className="rounded-lg shadow-lg border-4 border-orange-400"
            />
          </div>

          {/* 🔹 Basic Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">
              Basic Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-100 leading-relaxed">
              <li>
                <strong>Full Name:</strong> Board of Secondary Education,
                Karachi (BSEK)
              </li>
              <li>
                <strong>Established:</strong> 1950, under the Central Legislative
                Act No. XVI of 1950
              </li>
              <li>
                <strong>Headquarters / Location:</strong> Block 5, Nazimabad,
                Karachi
              </li>
              <li>
                <strong>Languages used:</strong> Urdu, Sindhi, and English
              </li>
            </ul>
          </section>

          {/* 🔹 Founder / First Leadership */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">
              Founder / First Leadership
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-100 leading-relaxed">
              <li>
                The first President (later “Chairman” equivalent) was{" "}
                <strong>Mr. Sultan Mohyuddin</strong>.
              </li>
              <li>
                Early office: The board started in a small office (three-room
                ground floor residential house) at Fatima Jinnah Colony, off
                Jamshed Road, Karachi.
              </li>
            </ul>
          </section>

          {/* 🔹 Current Chairman & Key Officials */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">
              Current Chairman & Key Officials
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-100 leading-relaxed">
              <li>
                <strong>Chairman:</strong> Mr. Ghulam Hussain Sohoo
              </li>
              <li>
                <strong>Dr. Hamzo Khan Tagar</strong> — Controller of Examinations
              </li>
              <li>
                <strong>Muhammad Zia Ul Haq</strong> — Acting Secretary
              </li>
              <li>
                <strong>Muhammad Abbas Baloch</strong> — Secretary for
                Universities & Boards, Sindh (linked with BSEK leadership)
              </li>
            </ul>
          </section>

          {/* 🔹 Key Features / Mandates / Policies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">
              Key Features / Mandates / Policies
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-100 leading-relaxed">
              <li>
                <strong>Examination Authority:</strong> Regulates SSC / Matric
                (Classes 9 & 10) exams — theory and practical.
              </li>
              <li>
                <strong>Curriculum & Syllabus:</strong> Introduced reduced syllabus
                for some optional subjects.
              </li>
              <li>
                <strong>Transparency & Credibility:</strong> Mission focuses on
                transparent evaluation, fairness, and consistent marking.
              </li>
              <li>
                <strong>Innovation / Digital Integration:</strong> OMR, online
                forms, status checks, and digital services.
              </li>
              <li>
                <strong>Forms & Certificates:</strong> Provides verification,
                migration, duplicate certificates, provisional certifications.
              </li>
            </ul>
          </section>

          {/* 🔹 Location Details */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">
              Location Details
            </h2>
            <p className="text-gray-100 leading-relaxed mb-6">
              Physical address: Block 5, Nazimabad, Karachi. Offices for
              Examination, Registration, OMR, and other departments are located
              here.
            </p>

            {/* 🔹 Live Google Map Embed */}
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6338155083846!2d67.03456287434156!3d24.81012587796559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e69c5e06723%3A0x8df3c4b6e6c0c9e1!2sBoard%20of%20Secondary%20Education%20Karachi!5e0!3m2!1sen!2s!4v1695640927375!5m2!1sen!2s"
                width="2080"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg border-4 border-orange-400"
              ></iframe>
            </div>
          </section>

          {/* 🔹 Policy / Legal / Administrative Notes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">
              Policy / Legal / Administrative Notes
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-100 leading-relaxed">
              <li>
                Reduced syllabus policy for 2024-25 in many optional/general
                subjects.
              </li>
              <li>
                Appointment of Chairman under legal scrutiny — Sept 2025, Sindh
                High Court notices challenging appointment of{" "}
                <strong>Ghulam Hussain Sohoo</strong>.
              </li>
              <li>
                Strict policies for exam security, prevention of leaks, and fair
                conduct.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
