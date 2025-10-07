"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 🔹 Header & Footer Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="bg-white text-gray-800">
        {/* 🌟 Top Banner Section */}
        <div className="relative w-full h-[80vh]">
          <Image
            src="/images/about-banner.jpg"
            alt="About Us Banner"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-6xl md:text-6xl mt-[120px] font-bold text-white">
              About Us
            </h1>
          </div>
        </div>

        {/* 🌟 Principal Section */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* --- Principal Intro --- */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-none"
            >
              <h2 className="text-3xl md:text-4xl font-bold underline decoration-[#f97316] text-blue-900 mb-4">
                Our Principal
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our respected principal leads with vision, dedication, and a deep
                commitment to the holistic growth of every student. Under her
                guidance, the school has flourished as a place of academic
                excellence and character building.
              </p>
              <p className="text-gray-600 leading-relaxed">
                She strongly believes in nurturing not only the minds but also
                the hearts of students, inspiring them to become responsible and
                compassionate citizens.
              </p>
            </motion.div>

            {/* --- Principal Image --- */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center order-2 md:order-none"
            >
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/principal.jpg"
                  alt="School Principal"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-blue-900">
                  Mrs. Tahira Jahangir
                </h3>
                <p className="text-gray-600">Principal</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 🌟 Team Section */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* --- Team Intro --- */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-none"
            >
              <h2 className="text-3xl md:text-4xl font-bold underline decoration-[#f97316] text-blue-900 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are a team of passionate educators and professionals dedicated
                to nurturing students and shaping future leaders. Our institution
                strives to provide quality education, innovative learning, and a
                supportive environment for every learner.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience and a strong commitment to excellence,
                our goal is to empower students to reach their full potential
                academically, socially, and emotionally.
              </p>
            </motion.div>

            {/* --- Team Image --- */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg order-2 md:order-none"
            >
              <Image
                src="/images/team.jpg"
                alt="Our Team"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

        {/* 🌟 Mrs Saima Liaquat Profile Section */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* --- Profile Text --- */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-6 order-1 md:order-none"
            >
              <h2 className="text-3xl md:text-4xl font-bold underline decoration-[#f97316] text-blue-900 mb-4">
                Profile of Mrs. Saima Liaquat
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                It is an honor to serve at Global Educational Higher Secondary
                School, where the well-being and progress of every student are
                given utmost priority. As an Assistant of Doctor, I deeply value
                the health and care of our students — because a healthy mind grows
                best in a healthy body. I strive to ensure that our children feel
                safe, supported, and cared for, both physically and emotionally,
                so they can focus fully on their education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In my role as a Rechecker, I see my responsibility as more than
                just reviewing papers — it is about maintaining fairness, accuracy,
                and transparency in our evaluation system. Every student’s hard
                work deserves to be recognized with honesty and justice, and I take
                pride in upholding that trust.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                My message to all students is simple: Take care of your health,
                work hard with sincerity, and never lose faith in yourself. Success
                comes to those who stay consistent, keep learning, and respect the
                values of honesty and discipline.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Together, as a school community, let us continue to build an
                environment where every student feels nurtured, respected, and
                motivated to reach their full potential.
              </p>

              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Education and Experience:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>BSc in Pre-Medical</li>
                <li>Study in Biology, Chemistry and Zoology</li>
                <li>Management</li>
                <li>Sketching</li>
                <li>Short Course in Vitamin and Lipids (Saponification)</li>
              </ul>
            </motion.div>

            {/* --- Profile Image --- */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-none"
            >
              <Image
                src="/images/card8.jpg"
                alt="Mrs Saima Liaquat"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

         {/* 🌟 Miss Kainat Profile Section */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* --- Profile Text --- */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-6 order-1 md:order-none"
            >
              <h2 className="text-3xl md:text-4xl font-bold underline decoration-[#f97316] text-blue-900 mb-4">
                Profile of Miss Kainat
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Miss Kainat is one of the most valuable members of the Global
                Educational Higher Secondary School family. Serving with honesty
                and commitment as the school,s accountant, she manages every
                detail with precision, accuracy, and care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Her role is not limited to numbers — she brings order,
                transparency, and trust to the entire system. Through her
                dedication, she ensures that every record is clear, every
                transaction is smooth, and every financial matter is handled with
                integrity.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Miss Kainat is known for her professionalism, discipline, and
                supportive nature. She is always ready to assist colleagues, guide
                students, and work as a team player to keep the school,s
                operations running efficiently.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Global Educational Higher Secondary School proudly acknowledges
                her as a symbol of reliability, hard work, and sincerity — an
                inspiration for others to follow.
              </p>

              <div className="mt-4 text-center md:text-left">
                <h3 className="text-xl font-bold text-blue-900">Miss Kainat</h3>
                <p className="text-gray-600">Accountant, GEHSS</p>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">
                Education and Experience:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>BA</li>
                <li>Graphic Designing (Canva)</li>
                <li>Video Animation (CapCut)</li>
              </ul>
            </motion.div>

            {/* --- Profile Image --- */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-none"
            >
              <Image
                src="/images/card6.jpg"
                alt="Miss Kainat"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

        {/* 🌟 Mrs Maria Kanwal Profile Section */}
<div className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* --- Profile Text --- */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-2xl p-6 order-1 md:order-none"
    >
      <h2 className="text-3xl md:text-4xl font-bold underline decoration-[#f97316] text-blue-900 mb-4">
        Profile of Mrs Maria Kanwal
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        It gives me immense pleasure to share my thoughts as the Vice Principal
        of Global Educational Higher Secondary School. Education, to me, is not
        merely the process of acquiring knowledge but the art of shaping a
        child,s personality, character, and vision for life. At Global, we believe
        that every student is a unique individual blessed with immense potential,
        and it is our responsibility to nurture that potential with care,
        dedication, and wisdom.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Our school stands as a symbol of quality education, moral values, and
        innovative learning. We focus not only on academic excellence but also on
        instilling discipline, respect, and compassion among our students. We
        encourage critical thinking, creativity, and leadership so that our
        students can confidently face the challenges of the modern world.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        As Vice Principal, I feel honored to work with a team of passionate
        teachers, cooperative parents, and highly motivated students. Together, we
        aim to create a learning environment that inspires curiosity, builds
        confidence, and develops future leaders who will serve society with
        dignity and purpose.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        I believe that education is a partnership between school and parents.
        When we work together, we create a nurturing and supportive atmosphere
        that helps children discover their strengths and achieve their goals.
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        Let us continue to work hand in hand to make Global Educational Higher
        Secondary School a beacon of excellence — where learning is a joy,
        character-building is a priority, and every child,s dream finds a path to
        success.
      </p>

      <div className="mt-4 text-center md:text-left">
        <h3 className="text-xl font-bold text-blue-900">Mrs. Maria Kanwal</h3>
        <p className="text-gray-600">Vice Principal, GEHSS</p>
      </div>

      <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">
        Education and Experience:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>MSc in Islamiat</li>
        <li>Public Dealing</li>
        <li>Management</li>
        <li>Montessori Art and Wall Paintings</li>
        <li>Sketching</li>
        <li>Short Course in Vitamin and Lipids (Saponification)</li>
        <li>Web Development (Frontend)</li>
        <li>Office Automation (MS Word, MS Excel, MS PowerPoint)</li>
        <li>Google (Docs, Sheets, Slides)</li>
      </ul>
    </motion.div>

    {/* --- Profile Image --- */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-none"
    >
      <Image
        src="/images/card7.jpg"
        alt="Mrs Maria Kanwal"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  </div>
</div>
{/* 🌟 Mrs Sadaf Zahra Profile Section */}
<div className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* --- Profile Text --- */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-2xl p-6 order-1 md:order-none"
    >
      <h2 className="text-3xl md:text-4xl font-bold underline decoration-[#f97316] text-blue-900 mb-4">
        Profile of Mrs Sadaf Zahra
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        It is a matter of great pride to be a part of Global Educational Higher
        Secondary School — an institution that values honesty, dedication, and
        excellence. In my dual role as Accountant and Motivational Speaker, I
        believe that true education goes beyond numbers and classrooms; it is
        about teaching students the values of discipline, responsibility, and
        perseverance.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Just as a well-balanced account reflects clarity and honesty, a
        well-balanced life reflects character and integrity. I encourage our
        students to be accountable for their actions, to remain focused on their
        goals, and to believe in the power of hard work and positivity.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Challenges are part of every journey, but with determination, faith, and
        the right mindset, no obstacle is too great. My message to all students
        is: Dream big, plan wisely, and never give up — your success is the
        result of your own consistent efforts.
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        At Global, we are not just educating minds — we are building
        personalities who will contribute positively to society, lead with
        courage, and inspire others through their achievements.
      </p>

      <div className="mt-4 text-center md:text-left">
        <h3 className="text-xl font-bold text-blue-900">Mrs. Sadaf Zahra</h3>
        <p className="text-gray-600">
          Accountant & Motivational Speaker, GEHSS
        </p>
      </div>

      <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">
        Education and Experience:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>B.A</li>
        <li>Public Dealing</li>
        <li>Management</li>
        <li>Montessori Art and Wall Paintings</li>
        <li>Sketching</li>
        <li>Short Course in Vitamin and Lipids (Saponification)</li>
        <li>Office Automation (MS Word, MS Excel, MS PowerPoint)</li>
        <li>Google (Docs, Sheets, Slides)</li>
      </ul>
    </motion.div>

    {/* --- Profile Image --- */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-none"
    >
      <Image
        src="/images/card3.jpg"
        alt="Mrs Sadaf Zahra"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  </div>
</div>
{/* 🌟 Mrs Shafaq Nayyar Profile Section */}
<div className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* --- Profile Text --- */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-2xl p-6 order-1 md:order-none"
    >
      <h2 className="text-3xl md:text-4xl font-bold underline decoration-[#f97316] text-blue-900 mb-4">
        Profile of Mrs Shafaq Nayyar
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        It gives me immense pleasure to share my thoughts as the Vice Principal
        of Global Educational Higher Secondary School. Education, to me, is not
        merely the process of acquiring knowledge but the art of shaping a
        child,s personality, character, and vision for life. At Global, we
        believe that every student is a unique individual blessed with immense
        potential, and it is our responsibility to nurture that potential with
        care, dedication, and wisdom.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Our school stands as a symbol of quality education, moral values, and
        innovative learning. We focus not only on academic excellence but also
        on instilling discipline, respect, and compassion among our students. We
        encourage critical thinking, creativity, and leadership so that our
        students can confidently face the challenges of the modern world.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        As Vice Principal, I feel honored to work with a team of passionate
        teachers, cooperative parents, and highly motivated students. Together,
        we aim to create a learning environment that inspires curiosity, builds
        confidence, and develops future leaders who will serve society with
        dignity and purpose.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        I believe that education is a partnership between school and parents.
        When we work together, we create a nurturing and supportive atmosphere
        that helps children discover their strengths and achieve their goals.
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        Let us continue to work hand in hand to make Global Educational Higher
        Secondary School a beacon of excellence — where learning is a joy,
        character-building is a priority, and every child,s dream finds a path
        to success.
      </p>

      <div className="mt-4 text-center md:text-left">
        <h3 className="text-xl font-bold text-blue-900">Mrs. Shafaq Nayyar</h3>
        <p className="text-gray-600">Vice Principal, GEHSS</p>
      </div>

      <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">
        Education and Experience:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>BA</li>
        <li>Public Dealing</li>
        <li>Management</li>
        <li>Montessori Art and Wall Paintings</li>
        <li>Office Automation (MS Word, MS Excel, MS PowerPoint)</li>
        <li>Google (Docs, Sheets, Slides)</li>
      </ul>
    </motion.div>

    {/* --- Profile Image --- */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-none"
    >
      <Image
        src="/images/card2.jpg"
        alt="Mrs Shafaq Nayyar"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  </div>
</div>
{/* 🌟 Sir Afzal Profile Section */}
<div className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    
    {/* --- Profile Text --- */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-2xl p-6 order-1 md:order-none"
    >
      <h2 className="text-3xl md:text-4xl font-bold underline decoration-[#f97316] text-blue-900 mb-4">
        Profile of Sir Afzal
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        At Global Educational Higher Secondary School, every success story is
        powered by the hard work of dedicated individuals — and Sir Afzal stands
        tall among them. His role as a technician and printing machine operator
        is not just a duty, but a service that uplifts the entire school system.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        From early mornings to late hours, Sir Afzal ensures that every
        technical task and every printed page is perfect, supporting teachers,
        students, and administration alike. His precision, patience, and
        commitment bring smoothness to daily operations.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        He is a man of discipline, responsibility, and quiet strength — always
        ready to solve a problem, lend a helping hand, and keep things on track.
        His efforts may be behind the scenes, but the results of his work shine
        brightly in every classroom, every exam, and every school event.
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        Global Educational Higher Secondary School proudly recognizes Sir Afzal
        as not just a staff member, but a key pillar of its smooth functioning
        and a true example of dedication and loyalty.
      </p>

      <div className="mt-4 text-center md:text-left">
        <h3 className="text-xl font-bold text-blue-900">Sir Afzal</h3>
        <p className="text-gray-600">IT & Printing Machine, GEHSS</p>
      </div>

      <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">
        Education and Experience:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>BA</li>
        <li>Graphic Designing (Canva)</li>
        <li>Video Animation (Capcut)</li>
      </ul>
    </motion.div>

    {/* --- Profile Image --- */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-none"
    >
      <Image
        src="/images/card5.jpg"
        alt="Sir Afzal"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  </div>
</div>



        {/* 🌟 Mission, Vision, Values, Why Choose Us */}
        <div className="bg-orange-300 py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Our Mission",
                text: "To deliver high-quality education that encourages creativity, critical thinking, and character development, preparing students for a rapidly changing world.",
              },
              {
                title: "Our Vision",
                text: "To be a leading educational institution recognized for inspiring and empowering students to achieve their dreams and make a positive impact on society.",
              },
              {
                title: "Our Values",
                text: "We believe in integrity, respect, collaboration, and inclusivity. These values guide our daily actions and help us build a strong, caring community.",
              },
              {
                title: "Why Choose Us",
                text: "Our innovative teaching, supportive environment, and focus on holistic growth make us the ideal place for students to thrive academically and personally.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md text-center"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
