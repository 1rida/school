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

        {/* 🌟 Engineer Jahangir Alam Profile Section */}
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
        Profile of Engineer Jahangir Alam
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Engineer Jahangir Alam is a visionary leader and dedicated educator, serving as 
        the Administrator of Global Educational Higher Secondary School (GEHSS). With a 
        strong foundation in engineering and a deep commitment to academic excellence, he 
        has played a pivotal role in shaping the institution into a center of quality 
        education and holistic development.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Known for his integrity, discipline, and forward-thinking approach, Engineer Jahangir 
        Alam has consistently worked to improve the learning environment, integrate modern 
        teaching methodologies, and inspire both students and faculty alike. His leadership 
        not only upholds high academic standards but also nurtures moral values and community 
        responsibility among students.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Under his guidance, the school continues to grow as a beacon of knowledge, innovation, 
        and opportunity for future generations. His leadership reflects a commitment to 
        elevating Pakistan’s educational standards and creating an education system that is 
        respected and recognized internationally.
      </p>

      <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-2">
        Message from Engineer Jahangir Alam
      </h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        Dear Students, Parents, and Respected Members of the Community,
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Education is not just about books and exams — it is about building character, 
        nurturing dreams, and preparing young minds to face the future with confidence 
        and wisdom. At Global Educational Higher Secondary School, we are committed to 
        creating a learning environment that inspires curiosity, discipline, and excellence.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        To my dear students: Always believe in your potential. The path to success may 
        be challenging, but with hard work, honesty, and dedication, there is nothing 
        you cannot achieve. Respect your teachers, cherish your learning, and strive 
        not only to be successful but to be kind, responsible human beings.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        To the public and our valued parents: Thank you for your trust and support. 
        Together, we are shaping the future — one student at a time. Let us continue 
        to work hand in hand to ensure that every child receives the quality education 
        they deserve.
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        May we all continue to grow in knowledge, wisdom, and unity.
      </p>

      <p className="text-gray-800 font-semibold mb-6">
        — Engineer Jahangir Alam<br />
        Administrator of Global Educational Higher Secondary School (GEHSS)
      </p>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        Education and Experience:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Software Engineer</li>
        <li>M.Com</li>
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
        src="/images/administrator.jpg"
        alt="Engineer Jahangir Alam"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  </div>
</div>

{/* 🌟 Mr. Mohammad Saad Alam Profile Section */}
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
        Profile of Mr. Mohammad Saad Alam
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Mr. Mohammad Saad Alam is an outstanding ACCA student at Global Educational Higher 
        Secondary School (GEHSS), recognized for his intelligence, discipline, and strong 
        passion for finance and technology. His academic journey reflects dedication, hard 
        work, and a deep interest in understanding the financial systems that drive the 
        modern world. From an early stage, he has displayed remarkable analytical and 
        leadership skills, setting an example for his peers through excellence and 
        determination.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        As an IT Financial Advisor, Mr. Saad Alam combines his knowledge of finance with 
        modern technology to create smart, efficient, and data-driven solutions. He 
        possesses a sharp understanding of financial management, budgeting, accounting 
        principles, and digital financial tools. His expertise in using technology to 
        analyze and organize financial data demonstrates his innovative approach and 
        problem-solving abilities in today’s digital economy.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        During his time at Global Educational Higher Secondary School, Mr. Mohammad Saad 
        Alam has actively participated in seminars, workshops, and academic projects 
        related to finance and information technology. His enthusiasm for learning and his 
        ability to adapt to new financial technologies have earned him appreciation from 
        teachers and respect from fellow students. He is known for his professionalism, 
        teamwork, and strong sense of responsibility toward his academic and personal growth.
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        Mr. Mohammad Saad Alam represents a new generation of business-minded and 
        tech-driven learners who aim to bring positive change to the world of finance. 
        His journey at Global Educational Higher Secondary School stands as an inspiring 
        example of how education, innovation, and determination can shape a bright future. 
        With his vision, dedication, and commitment to excellence, he is well on his way 
        to becoming a successful financial expert and a valuable contributor to society.
      </p>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        Education and Experience:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>B.Com</li>
        <li>ACCA</li>
        <li>Mass Communication</li>
        <li>Working in Finance Department</li>
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
        src="/images/card11.jpg"
        alt="Mr Mohammad Saad Alam"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  </div>
</div>

{/* 🌟 Mr. Uzair Alam Profile Section */}
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
        Profile of Mr. Uzair Alam
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Mr. Uzair Alam is a talented and enthusiastic F.Sc Computer Science student at 
        Global Educational Higher Secondary School (GEHSS), known for his intelligence, 
        creativity, and commitment to excellence. From the very beginning of his academic 
        journey, he has displayed a deep passion for technology and innovation. His strong 
        analytical skills and curiosity for understanding how systems work have made him a 
        standout student among his peers.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        As an IT expert, Mr. Uzair Alam has shown exceptional ability in handling modern 
        software, programming, and digital tools. He possesses in-depth knowledge of 
        computer hardware, networking, and troubleshooting, which he uses to assist both 
        students and teachers in various technical tasks. His problem-solving skills and 
        innovative mindset reflect his readiness to contribute to the ever-evolving world 
        of information technology.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Throughout his time at Global Educational Higher Secondary School, Uzair has actively 
        participated in various IT-related projects, workshops, and competitions. His 
        determination to learn new technologies and explore the latest trends in computer 
        science has earned him the admiration of his teachers and classmates. He constantly 
        strives for improvement and motivates others to embrace the digital world with 
        confidence and creativity.
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        Mr. Uzair Alam represents the new generation of tech-savvy youth who blend 
        intelligence with responsibility. His journey at Global Educational Higher Secondary 
        School is a source of pride and inspiration for all. With his dedication, discipline, 
        and forward-thinking approach, he is on the path to becoming a leading figure in the 
        field of information technology, ready to serve society through innovation and knowledge.
      </p>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        Education and Experience:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>F.Sc (Computer Science)</li>
        <li>IT Courses</li>
        <li>Office and Admin Working</li>
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
        src="/images/card10.jpg"
        alt="Mr Uzair Alam"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  </div>
</div>
{/* 🌟 Miss Urooj Jahangir Profile Section */}
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
        Profile of Miss Urooj Jahangir
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Miss Urooj Jahangir is a brilliant and passionate student who has shown outstanding 
        dedication toward her studies in the field of medical sciences. As an MBBS student, 
        she has always demonstrated a deep sense of responsibility, curiosity, and commitment 
        to learning. Her academic journey at Global Educational Higher Secondary School has 
        been marked by excellence, perseverance, and an unwavering desire to contribute 
        positively to the field of healthcare.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        In addition to her medical studies, Miss Urooj serves as a skilled Lab Technician, 
        where she performs her duties with precision and discipline. She has gained a strong 
        command over laboratory techniques, medical testing, and analytical procedures. Her 
        careful attention to detail and ability to maintain high professional standards make 
        her an inspiring example for fellow students who aspire to enter the medical and 
        scientific professions.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Miss Urooj Jahangir is also pursuing her interest as a Pre-Nursing student, where she 
        is developing essential skills in patient care, medical ethics, and first aid practices. 
        Her compassionate attitude, teamwork spirit, and eagerness to serve humanity reflect 
        her true character as a future healthcare provider. She believes that nursing and 
        medicine are not just professions but noble callings aimed at healing and supporting others.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        At Global Educational Higher Secondary School, Miss Urooj is admired for her 
        intelligence, humility, and leadership qualities. Her remarkable performance and 
        positive attitude continue to inspire her peers and teachers alike. She stands as a 
        proud representative of the institution’s mission — to empower students with knowledge, 
        discipline, and a heart devoted to service. Her journey is a perfect blend of academic 
        brilliance, moral values, and a strong sense of purpose.
      </p>

      <p className="text-gray-600 leading-relaxed mb-6 italic">
        Let us continue to work hand in hand to make Global Educational Higher Secondary School 
        a beacon of excellence — where learning is a joy, character-building is a priority, and 
        every child’s dream finds a path to success.
      </p>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        Education and Experience:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Pre-Medical</li>
        <li>MBBS</li>
        <li>Pre-Nursing</li>
        <li>Medical Technology</li>
        <li>Lab Incharge (Biology)</li>
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
        src="/images/card9.jpg"
        alt="Miss Urooj Jahangir"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  </div>
</div>

{/* 🌟 Miss Alishah Profile Section */}
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
        Profile of Miss Alishah GEHSS
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Miss Alishah is a B.A qualified student at Global Educational Higher Secondary School,
        known for her intelligence, confidence, and dedication to academic and professional
        excellence. Her educational journey reflects a deep commitment to learning,
        self-improvement, and a strong sense of responsibility. With a keen interest in
        business and accounting, she has developed a solid foundation in management and
        financial studies, making her a valuable member of the institution.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        As an Accountant, Miss Alishah has shown exceptional skills in managing financial
        records, organizing data, and maintaining transparency in all her work. Her accuracy,
        discipline, and attention to detail are remarkable, ensuring that every task she
        handles is completed with perfection. She has also assisted in various administrative
        and financial projects within the school, showcasing her reliability and professional
        competence.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Throughout her association with Global Educational Higher Secondary School, Miss
        Alishah has earned the respect of teachers and colleagues through her hard work,
        honesty, and cooperative nature. She demonstrates excellent communication and
        leadership abilities, guiding others with kindness and patience. Her dedication to
        both academic excellence and professional duties reflects her balanced personality and
        strong moral values.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Miss Alishah represents the spirit of responsibility, commitment, and continuous
        learning that Global Educational Higher Secondary School stands for. Her achievements
        and work ethic make her an inspiration for other students who aspire to succeed
        through discipline and dedication. With her educational background, financial
        expertise, and humble attitude, she continues to contribute positively to the
        institution and the community around her.
      </p>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        Education and Experience:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
        <li>B.A (ARTS)</li>
        <li>ACCOUNTS</li>
      </ul>

      <h3 className="text-xl font-bold text-blue-900 mb-2">Skills:</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Public Dealing</li>
        <li>Management</li>
        <li>Office Automation (MS WORD, MS EXCEL, MS POWER POINT)</li>
        <li>Google (DOCS, SHEETS, SLIDES)</li>
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
        src="/images/card12.jpg"
        alt="Miss Alishah"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  </div>
</div>
{/* 🌟 Engineer Sir Abdul Rehman Ansari Profile Section */}
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
        Profile of Engineer Sir Abdul Rehman Ansari
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Engineer Sir Abdul Rehman Ansari is a highly skilled professional and a dedicated 
        educator at Global Educational Higher Secondary School (GEHSS). He has an extensive 
        academic background and years of experience across multiple disciplines including 
        Electronics, Mathematics, Food Chemistry, Design, and Web Development. His passion 
        for teaching, creativity, and innovation makes him an invaluable asset to the 
        institution.
      </p>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        Detail About Qualification and Skills:
      </h3>

      <ul className="list-decimal list-inside text-gray-600 space-y-1 mb-6">
        <li>Electronics Engineering from DCET — 2010</li>
        <li>Masters in Mathematics (Calculus, Probability, Integrations, Curves) — 2015</li>
        <li>1 Year Short Course in Food Chemistry and Lipids, Fats, and Oils</li>
        <li>1 Year Sketching Course and Winner from Press Art Club</li>
        <li>Graphic Designing from SMIT (Gulshan Campus)</li>
        <li>UI/UX and Graphic Designing from Khud Kafeel #FixIt</li>
        <li>Website Development from Bano Qabil (Sakhi Hasan Campus)</li>
        <li>
          Full Stack Engineering in Web Development and Agentic AI from GIAIC 
          (Governor Initiative Artificial Intelligence Course — Governor Kamran Khan Tessori)
        </li>
      </ul>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        Degrees and Certificates:
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        Engineer Sir Abdul Rehman Ansari currently serves as the Branch Manager of 
        <span className="font-semibold text-blue-900"> GLOBAL IT and Graphics, GEHSS</span>. 
        His expertise and leadership continue to inspire both students and faculty in 
        embracing technology, creativity, and academic excellence.
      </p>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        Education and Experience:
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Masters in Mathematics (Probability and Calculus - Integration)</li>
        <li>Bachelor in Electronics</li>
        <li>Agentic AI from GIAIC</li>
        <li>Montessori Art and Wall Paintings</li>
        <li>Sketching</li>
        <li>Short Course in Vitamin and Lipids (Saponification)</li>
        <li>Graphic Designing</li>
        <li>Video Animation (Editing and Composition)</li>
        <li>Web Development (Frontend and Backend, Full Stack Developer)</li>
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
        src="/images/card4.jpg"
        alt="Engineer Sir Abdul Rehman Ansari"
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
