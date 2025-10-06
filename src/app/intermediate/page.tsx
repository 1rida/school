"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function IntermediateBoard() {
  return (
    <>
      <Header />

      {/* 🔹 Full background with main.jpg */}
      <main
        className="relative min-h-[100vh] w-full bg-cover bg-center py-12 px-4 sm:px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/images/main.jpg')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 w-full h-full bg-black/70"></div>

        {/* Page Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          {/* 🔹 Top Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-orange-400 mb-8 sm:mb-12 mt-20 underline decoration-orange-500 drop-shadow-lg">
            Board of Intermediate Education Karachi (BIEK)
          </h1>

          {/* 🔹 Board2 Image */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <Image
              src="/images/board2.jpg"
              alt="Board of Intermediate Education Karachi"
              width={400}
              height={320}
              className="rounded-lg shadow-lg border-4 border-orange-400 max-w-full h-auto"
            />
          </div>

          {/* 🔹 Basic Information & History */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-300 mb-3 sm:mb-4">
              Basic Information & History
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-100 leading-relaxed text-sm sm:text-base">
              <li>
                The BIEK is the government board in Karachi responsible for{" "}
                <strong>Intermediate (11th & 12th / Higher Secondary)</strong>{" "}
                examinations.
              </li>
              <li>
                Established as a separate entity on{" "}
                <strong>1st February 1974</strong>, via the Sindh Amendment Act
                No. 20 of 1973.
              </li>
              <li>
                Prior to that, intermediate education was under the{" "}
                <strong>University of Karachi / University of Sindh</strong> and
                from 1962 under the{" "}
                <strong>West Pakistan Board Ordinance</strong>.
              </li>
            </ul>
          </section>

          {/* 🔹 Location & Contact */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-300 mb-3 sm:mb-4">
              Location & Contact
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-100 leading-relaxed text-sm sm:text-base">
              <li>
                <strong>Head Office:</strong> Bakhtiari Youth Center, Block P,
                North Nazimabad, Karachi, 74600
              </li>
              <li>
                <strong>Phone:</strong> +92-21-99260211, 99260212, 99260213
              </li>
              <li>
                <strong>Email:</strong> info@biek.edu.pk
              </li>
            </ul>

            {/* 🔹 Live Google Map Embed */}
            <div className="flex justify-center mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.215489653194!2d67.03037027434202!3d24.82349867793819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6f85d7bb1f%3A0xf3c7912e5b7e5d36!2sBakhtiari%20Youth%20Center!5e0!3m2!1sen!2s!4v1695649999999!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg border-4 border-orange-400"
              ></iframe>
            </div>
          </section>

          {/* 🔹 Leadership */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-300 mb-3 sm:mb-4">
              Leadership
            </h2>
            <p className="text-gray-100 leading-relaxed text-sm sm:text-base">
              The controlling authority over BIEK is the{" "}
              <strong>Governor of Sindh</strong> or his nominee. The Chairman is
              the principal executive & academic officer. Other key offices
              include the Secretary and Controller of Examinations. <br />
              <strong>Prof. Nasim Ahmad Memon</strong> is the current Chairman.
            </p>
          </section>

          {/* 🔹 Founder / First Chairman */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-300 mb-3 sm:mb-4">
              Founder / First Chairman
            </h2>
            <p className="text-gray-100 leading-relaxed text-sm sm:text-base">
              The first Chairman (when Intermediate Education was transferred
              from University to Board in 1962) was{" "}
              <strong>Professor Qaiser Hussain Khan Bakhtiari</strong>. He took
              charge from{" "}
              <strong>Dr. Ishtiaq Hussain Qureshi</strong>, then Vice
              Chancellor of Karachi University, on 2nd November 1961 under the{" "}
              <strong>West Pakistan Board Ordinance No. III of 1962</strong>.
            </p>
          </section>

          {/* 🔹 Powers, Functions & Policies */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-300 mb-3 sm:mb-4">
              Powers, Functions & Policies
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-100 leading-relaxed text-sm sm:text-base">
              <li>
                Organizes, regulates, develops, and controls Intermediate
                education in Karachi.
              </li>
              <li>
                Conducts exams, issues certificates, marksheets, and migration
                documents.
              </li>
              <li>
                Implements provincial syllabus & ensures standards of education
                in affiliated colleges.
              </li>
              <li>
                <strong>Recent Initiatives:</strong> Digitization, online
                enrollment, barcoded papers, scrutiny fee waivers, grace marks,
                and postponements when needed.
              </li>
            </ul>
          </section>

          {/* 🔹 Challenges & Controversies */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-300 mb-3 sm:mb-4">
              Challenges & Controversies
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-100 leading-relaxed text-sm sm:text-base">
              <li>
                Appointment controversies regarding Chairmen, with Sindh High
                Court declaring some appointments illegal.
              </li>
              <li>
                Student protests over low exam marks, leading to scrutiny,
                inquiries, and policy changes (e.g. grace marks).
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
