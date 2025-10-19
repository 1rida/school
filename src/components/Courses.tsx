"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";

const COURSES = [
  {
    id: "html",
    title: "HTML5",
    tag: "Web",
    emoji: "🌐",
    desc: "Structure web pages using semantic HTML — the foundation of front-end development.",
    syllabus: [
      "HTML Syntax & Elements",
      "Headings, Paragraphs, Lists",
      "Links, Images, Tables",
      "Forms & Input Elements",
      "Semantic HTML5 Tags",
      "Best Practices",
    ],
  },
  {
    id: "css",
    title: "CSS3",
    tag: "Web",
    emoji: "🎨",
    desc: "Style responsive layouts, animations and modern UI patterns using pure CSS.",
    syllabus: [
      "Selectors & Specificity",
      "Box Model & Positioning",
      "Flexbox & Grid",
      "Media Queries (Responsive)",
      "Transitions & Animations",
      "CSS Variables",
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    tag: "Web",
    emoji: "🧭",
    desc: "Core programming language for the web — DOM, async, ES modules, and tooling.",
    syllabus: [
      "Variables & Data Types",
      "Functions & Loops",
      "DOM Manipulation",
      "Events & Listeners",
      "ES6+ Features",
      "Async & Fetch API",
    ],
  },
  {
    id: "typescript",
    title: "TypeScript",
    tag: "Web",
    emoji: "🔷",
    desc: "Statically-typed JS for safer large-scale apps — interfaces, types, generics.",
    syllabus: [
      "TS Basics & Types",
      "Interfaces & Enums",
      "Generics",
      "Type Narrowing",
      "Modules & Imports",
      "React with TS",
    ],
  },
  {
    id: "next",
    title: "Next.js",
    tag: "Web",
    emoji: "🚀",
    desc: "Fullstack React framework for SSR, SSG, routing and optimized performance.",
    syllabus: [
      "App Router Structure",
      "Pages & Layouts",
      "Server/Client Components",
      "Dynamic Routes",
      "API Routes",
      "Deployment on Vercel",
    ],
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    tag: "Web",
    emoji: "🧩",
    desc: "Utility-first CSS for rapid UI development with predictable styling.",
    syllabus: [
      "Setup & Config",
      "Utility Classes",
      "Responsive Design",
      "Custom Themes",
      "Animations & Plugins",
      "Best Practices",
    ],
  },
  {
    id: "python",
    title: "Python",
    tag: "Data/AI",
    emoji: "🐍",
    desc: "General-purpose language: scripting, data analysis, ML prototyping.",
    syllabus: [
      "Python Basics",
      "Control Structures",
      "Functions & Modules",
      "OOP Concepts",
      "Data Structures",
      "File Handling",
    ],
    bgIndex: 13,
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    tag: "AI",
    emoji: "🤖",
    desc: "Practical Agentic AI concepts — autonomous agents, workflows and tools.",
    syllabus: [
      "What is Agentic AI",
      "AI Agents & Tools",
      "Prompt Engineering",
      "Workflow Automation",
      "AI APIs Integration",
      "Build AI Projects",
    ],
  },
  {
    id: "canva",
    title: "Canva",
    tag: "Design",
    emoji: "🖼️",
    desc: "Fast graphic layout and social assets using Canva best practices.",
    syllabus: [
      "Canva Basics",
      "Design Templates",
      "Social Media Posts",
      "Posters & Flyers",
      "Brand Kit",
      "Presentations",
    ],
  },
  {
    id: "graphic",
    title: "Graphic Design",
    tag: "Design",
    emoji: "✏️",
    desc: "Design fundamentals: color, typography, composition and branding.",
    syllabus: [
      "Design Principles",
      "Color Theory",
      "Typography",
      "Logos & Branding",
      "Layouts & Grids",
      "Portfolio Building",
    ],
    

  },
  {
    id: "photography",
    title: "Photography",
    tag: "Design",
    emoji: "📷",
    desc: "Basics of digital photography: composition, lighting, editing workflow.",
    syllabus: [
      "Camera Basics",
      "Lighting Techniques",
      "Composition",
      "Portrait Photography",
      "Editing in Lightroom",
      "Export & Delivery",
    ],
    bgIndex: 20,
  },
  {
    id: "video",
    title: "Video Editing",
    tag: "Media",
    emoji: "🎬",
    desc: "Cutting, color-correcting and composing videos for web & social.",
    syllabus: [
      "Editing Basics",
      "Timeline & Cuts",
      "Transitions & Effects",
      "Color Correction",
      "Sound Mixing",
      "Final Export",
    ],
    bgIndex: 17,
  },
  {
    id: "illustrator",
    title: "Adobe Illustrator CC",
    tag: "Design",
    emoji: "🖌️",
    desc: "Create vector graphics, logos and illustrations with industry-standard tools.",
    syllabus: [
      "Interface & Tools",
      "Drawing & Pen Tool",
      "Shapes & Paths",
      "Typography & Text Effects",
      "Color & Gradients",
      "Exporting Artwork",
    ],
    bgIndex: 18,
  },

 {
  id: "Professional Logo Designing",
  title: "Professional Logo Designing",
  tag: "Design",
  emoji: "🎨",
  desc: "Master professional logo designing with Adobe Illustrator CC tools, shape building, pathfinder, guides, and other essential design techniques.",
  syllabus: [
    "Adobe Illustration CC Tools",
    "Shape Builder",
    "Griding",
    "Pathfinder",
    "Shortkeys",
    "Ruler Concept",
    "Guides Concept",
    "Offset Path",
    "Clipping Mask",
  ],
  bgImage: "/images/logodesign.jpg",
},


{
  id: "website-inspiration",
  title: "Website Inspiration",
  tag: "Web Design",
  emoji: "💡",
  desc: "Explore creative layouts, modern design styles, and user-friendly UI inspiration for websites.",
  syllabus: [
    "Modern Web Aesthetics",
    "Creative Layouts & Grids",
    "Color Schemes & Typography",
    "Responsive Design Concepts",
    "Interactive Design Trends",
    "Showcasing Portfolio Inspiration",
  ],
  bgImage: "/images/websiteinspiration.jpg",
},

{
  id: "5.	PROMPT ENGINEERING VS CONTEXT ENGINEERING",
  title: "5.	PROMPT ENGINEERING VS CONTEXT ENGINEERING",
  tag: "Editing",
  emoji: "🖼️",
  desc: "Master photo editing, retouching, and advanced creative manipulation techniques using Photoshop CC.",
  syllabus: [
    "Photoshop Interface & Tools",
    "Layer Masking & Blending",
    "Lighting & Shadows",
    "Retouching & Filters",
    "Creative Photo Composites",
    "Final Manipulation Project",
  ],
  bgImage: "/images/photoshopcc.jpg",
},
{
  id: "Adobe photoshop CC",
  title: "Adobe Photoshop CC",
  tag: "Editing",
  emoji: "🖼️",
  desc: "Learn professional photo editing, selection, custom brushing, mockup creation, packaging design, and manipulation techniques using Adobe Photoshop CC.",
  syllabus: [
    "Selection",
    "Editing",
    "Custom Brushing",
    "Mockups",
    "Packaging",
    "Manipulation",
  ],
  bgImage: 20,
},

{
  id: "Digital Office Tools Training",
  title: "Digital Office Tools Training",
  tag: "Productivity",
  emoji: "💼",
  desc: "Learn essential digital office tools, document design, and professional formatting skills to create resumes, letterheads, invoices, and more.",
  syllabus: [
    "Typing",
    "Formatting",
    "CV",
    "Letter Head",
    "School Documents",
    "ID Card",
    "Invoice",
    "Marksheet (Advanced Version)",
    "Attendance Sheet",
    "QR Code Generation",
    "Making of Thumbnails",
    "Banners",
    "Photo Cropping",
    "A4 Sizing",
    "Orientations",
    "Page Layout Setting",
  ],
  bgImage: "/images/digitaloffice.jpg",
},

];

export default function CoursesPage() {
  const [q,] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [openCourse, setOpenCourse] = useState<string | null>(null);

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(COURSES.map((c) => c.tag)))],
    []
  );

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return COURSES.filter((c) => {
      if (activeTag !== "All" && c.tag !== activeTag) return false;
      if (!query) return true;
      return (
        c.title.toLowerCase().includes(query) ||
        c.desc.toLowerCase().includes(query) ||
        c.id.toLowerCase().includes(query)
      );
    });
  }, [q, activeTag]);

  return (
    <>
      <Header />
      <main className="pt-5 bg-white min-h-screen text-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Title */}
          <div className="flex flex-col items-center gap-3 mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b3c7a]">
              IT & Creative Courses
            </h1>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm sm:text-base">
              Hands-on short courses, workshops and certifications — web, AI, design, media and more.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1.5 rounded-full text-sm transition ${
                  activeTag === t
                    ? "bg-orange-500 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((c, i) => {
              const imgIndex =
                c.bgIndex ?? (i === 0 ? 11 : 11 + ((i - 1) % 6) + 1);
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl border group min-h-[300px]"
                  style={{
                    backgroundImage: `url('/images/it${imgIndex}.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                  <div className="relative p-5 sm:p-6 text-white flex flex-col justify-between h-full">
                    <div>
                      <div className="flex gap-4">
                        <div className="text-3xl sm:text-4xl">{c.emoji}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{c.title}</h3>
                          <span className="text-xs mt-1 inline-block bg-white/20 text-white px-2 py-0.5 rounded-full">
                            {c.tag}
                          </span>
                          <p className="mt-3 text-sm opacity-90">{c.desc}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
                      <span className="text-xs sm:text-sm opacity-80">
                        Duration: <strong>8–12 weeks</strong>
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            setOpenCourse(openCourse === c.id ? null : c.id)
                          }
                          className="text-xs sm:text-sm px-3 py-1 rounded-lg bg-orange-500 text-white hover:bg-orange-400"
                        >
                          {openCourse === c.id ? "Hide" : "Learn"}
                        </button>
                        
                      </div>
                    </div>

                    <AnimatePresence>
                      {openCourse === c.id && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-4 pl-5 list-disc text-sm space-y-1 overflow-hidden"
                        >
                          {c.syllabus.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
          {/* 🔹 Profile Section */}
       <section className="mt-5 bg-gradient-to-r from-orange-50 to-orange-100 py-12 px-6 rounded-2xl shadow-lg">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold underline text-center text-[#0b3c7a] mb-8"
        >
          Profile of the Engineer Sir Abdul Rehman Ansari (GEHSS)
        </motion.h2>

        {/* Image with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/images/card4.jpg"
            alt="Engineer Abdul Rehman Ansari"
            width={400}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-black leading-relaxed mb-6">
            Engineer Sir Abdul Rehman Ansari serves as the branch manager of IT
            and Graphics, an HEC-recognized institution dedicated to providing
            quality education and fostering societal change. In his role, he is
            committed to supporting the professional development of both
            academic and administrative staff, recognizing their efforts through
            awards, and ensuring the provision of state-of-the-art facilities
            that guarantee academic excellence.
          </p>
          <p className="text-black leading-relaxed mb-6">
            He emphasizes the importance of evolving teaching strategies to
            align with the latest methodologies, thereby enhancing learning and
            increasing employability among students. In addition to his
            administrative role at GEHSS, Engineer Sir Abdul Rehman Ansari is an
            engineer performing a great task in agentic AI applications at all
            campuses in Karachi. He holds a B.E degree and a Masters in
            Mathematics, with over 18 years of experience working in DAWLANCE
            and MITSUBISHI reliable companies in Karachi.
          </p>
          <p className="text-black leading-relaxed mb-6">
            Along with GEHSS, as Manager, he leads GEHSS Schools and Colleges,
            institutions dedicated to providing students with a strong
            foundation in education, ethics, and the skills to make a meaningful
            impact on the world. Under his leadership, GEHSS Schools and
            Colleges have developed one of the most advanced and effective
            educational curriculums in Pakistan, focusing on critical thinking
            and leadership development.
          </p>

          {/* Message */}
          <h3 className="text-4xl font-extrabold underline text-[#0b3c7a] mt-10 mb-4">
            Message from Engineer Abdul Rehman Ansari
          </h3>
          <p className="text-black leading-relaxed mb-6">
            GEHSS was founded with the aim to provide quality education, ethics,
            and the will to make a difference. For me, education has always been
            the force that leads to collective change within a society. We hope
            to train young minds to be curious, to enhance their ability to
            think critically, and to find creative solutions. It is also
            imperative to recognize the role mass media plays as an effective
            tool to impart knowledge. As the branch manager, I have aimed to
            support the professional development of academic and administrative
            staff and to provide recognition of their efforts through awards. We
            focus on providing state-of-the-art facilities that guarantee
            academic excellence.
          </p>
          <p className="text-black leading-relaxed mb-6">
            We are constantly evolving our teaching strategies to be in line
            with the latest methodologies to support learning and increase
            employability. Over the coming years, I wish to further support the
            university in the next phase of our strategic transformation.
          </p>

          {/* Education & Experience */}
          <h3 className="text-4xl font-extrabold underline text-[#0b3c7a] mt-10 mb-4">
            Education & Experience
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-black">
            <li>Masters In Mathematics (Probability and Calculus-Integration)</li>
            <li>Bachelor In Electronics</li>
            <li>Agentic AI from GIAIC</li>
            <li>Montessori Art and Wall Paintings</li>
            <li>Sketching</li>
            <li>Short Course in Vitamin and Lipids (Saponification)</li>
            <li>Graphic Designing</li>
            <li>Video Animation (Editing and Composition)</li>
            <li>Web Development (Frontend and Backend, Full Stack Developer)</li>
          </ul>

          <p className="mt-6 font-semibold text-[#0b3c7a]">
            — Engineer Sir Abdul Rehman Ansari <br />
            Branch Manager of GLOBAL IT and Graphics, GEHSS
          </p>
        </motion.div>
      </div>
    </section>
      </main>
    </>
  );
}
