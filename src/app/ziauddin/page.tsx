"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ZuebBoard() {
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Page Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* 🔹 Top Heading */}
          <h1 className="text-5xl font-extrabold text-center text-orange-400 mb-12 mt-20 underline decoration-orange-500 drop-shadow-lg">
            Ziauddin University Examination Board (ZUEB)
          </h1>

          {/* 🔹 ZUEB Image */}
          <div className="flex justify-center mb-12">
            <Image
              src="/images/board3.jpg"
              alt="Ziauddin University Examination Board"
              width={450}
              height={320}
              className="rounded-lg shadow-lg border-4 border-orange-400"
            />
          </div>

          {/* 🔹 What is ZUEB */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">What is ZUEB?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-100 leading-relaxed">
              <li>
                <strong>ZUEB</strong> stands for{" "}
                <strong>Ziauddin University Examination Board</strong>.
              </li>
              <li>
                It is a <strong>private-sector examination board</strong> in Sindh (Pakistan),
                under Ziauddin University.
              </li>
              <li>
                Established by legislative act:{" "}
                <strong>Act No. XLI of 2018</strong>, passed on{" "}
                <strong>24 May 2018</strong>, assented by the Governor on{" "}
                <strong>6 June 2018</strong>.
              </li>
            </ul>
          </section>

          {/* 🔹 Mission, Vision & Roles */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">
              Mission, Vision & Roles
            </h2>
            <p className="text-gray-100 leading-relaxed">
              The board aims to provide <strong>quality education</strong> through{" "}
              fair, credible examinations, proper assessment procedures, and
              setting standards for student learning.
            </p>
          </section>

          {/* 🔹 Recent / Major Changes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">
              Recent / Major Changes
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-100 leading-relaxed">
              <li>
                <strong>Exam reforms (since 2023)</strong> under IBCC
                recommendations:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Students can choose electives with compulsory subjects.</li>
                  <li>New grading system with “unsatisfactory” grade instead of fail.</li>
                  <li>MCQs replacing some practical exams in sciences.</li>
                </ul>
              </li>
              <li>
                <strong>Two annual examinations:</strong> held in{" "}
                <strong>December</strong> and <strong>May</strong>.
              </li>
            </ul>
          </section>

          {/* 🔹 Contact & Location */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">Contact & Location</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-100 leading-relaxed mb-6">
              <li>
                <strong>Address:</strong> Bunglow No. D-20, Block-1, Scheme-5,
                Clifton, Karachi
              </li>
              <li>
                <strong>Phone:</strong> +92-323-3298913
              </li>
              <li>
                <strong>Email:</strong> info@zueb.edu.pk
              </li>
            </ul>

            {/* 🔹 Live Google Map Embed */}
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.016783645347!2d67.0309!3d24.8408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d8635e1b8e7%3A0x4b34b9df4f16d4f!2sZiauddin%20University!5e0!3m2!1sen!2s!4v1695640981111!5m2!1sen!2s"
                className="w-full h-64 sm:h-96 rounded-lg shadow-lg border-4 border-orange-400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          {/* 🔹 Advantages & Challenges */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-orange-300 mb-4">
              Advantages & Challenges
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-100 leading-relaxed">
              <li>
                <strong>Advantages:</strong> Flexible subject choices, updated
                reforms, potential for modern systems.
              </li>
              <li>
                <strong>Challenges:</strong> Recognition outside Sindh, transition
                issues with grading system, and possible higher fees.
              </li>
            </ul>
          </section>

          {/* 🔹 Z-shape Section */}
          <section className="space-y-16">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="/images/zp1.jpg"
                alt="ZUEB Modern Facilities"
                width={500}
                height={350}
                className="rounded-lg shadow-lg border-4 border-orange-400 w-full"
              />
              <div>
                <h3 className="text-2xl font-bold text-orange-300 mb-4">
                  Modern Examination Facilities
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  ZUEB ensures that students benefit from modern exam centers,
                  equipped with the latest technology to maintain transparency
                  and fairness in assessments.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-orange-300 mb-4">
                  Student-Centered Reforms
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  With elective subject choices and updated grading policies,
                  ZUEB offers students flexibility to pursue their academic
                  interests more effectively.
                </p>
              </div>
              <Image
                src="/images/zp2.jpg"
                alt="ZUEB Student Reforms"
                width={500}
                height={350}
                className="order-1 md:order-2 rounded-lg shadow-lg border-4 border-orange-400 w-full"
              />
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="/images/zp3.jpg"
                alt="ZUEB Innovation"
                width={500}
                height={350}
                className="rounded-lg shadow-lg border-4 border-orange-400 w-full"
              />
              <div>
                <h3 className="text-2xl font-bold text-orange-300 mb-4">
                  Innovation & Technology
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  The board integrates OMR systems, digital verification, and
                  online services to make processes faster and more reliable for
                  students and institutions.
                </p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-orange-300 mb-4">
                  Commitment to Quality
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  ZUEB is committed to providing quality education and fair
                  evaluation standards, aiming to prepare students for future
                  academic and professional challenges.
                </p>
              </div>
              <Image
                src="/images/zp4.jpg"
                alt="ZUEB Quality Commitment"
                width={500}
                height={350}
                className="order-1 md:order-2 rounded-lg shadow-lg border-4 border-orange-400 w-full"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
