"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
{
title: "Spriny – Agile Sprint Planner",
desc: "Designed and developed core frontend and backend modules for sprint planning, implemented AI-driven task automation workflows, and built scalable features to improve team productivity and collaboration.",
tech: "Next.js, Node.js, MongoDB",
link: "https://www.lawazia.tech/spriny",
size: "col-span-1 md:col-span-2 md:row-span-2",
image: "/pic1.jpg",
},
{
title: "UrbanStall – Marketplace",
desc: "Built responsive UI components and optimized product listing pages, improving user experience and enhancing local vendor discoverability.",
tech: "React, Tailwind",
link: "https://www.urbanstall.app/explore",
size: "col-span-1",
image: "/pic1.jpg",
},
{
title: "Paign.ai – AI Productivity",
desc: "Integrated AI APIs and contributed to both frontend and backend systems to enable real-time AI assistance and streamline user workflows.",
tech: "Next.js, AI APIs",
link: "https://www.paign.ai/home",
size: "col-span-1",
image: "/pic1.jpg",
},

// ✅ MedMatch placed right after Paign.ai
{
title: "MedMatch Network – Healthcare Platform",
desc: "Developed referral management workflows, handled complex data flows for practice locations and specialties, and optimized backend APIs to ensure seamless doctor-patient matching and data consistency.",
tech: "Vue.js, Node.js, MySQL",
link: "https://medmatchnetwork.com/",
size: "col-span-1 md:col-span-2",
image: "/pic1.jpg",
},

{
title: "Breathe4School",
desc: "Developed a unified digital learning platform with scalable architecture and responsive design, improving accessibility and engagement for students and educators.",
tech: "Next.js",
link: "https://breathe4school.com",
size: "col-span-1",
image: "/pic1.jpg",
},
{
title: "Excelrs – Resource Tool",
desc: "Engineered backend workflows and optimized UI for handling large Excel datasets, enabling batch operations and improving operational efficiency.",
tech: "React, Node.js, SQL",
link: "https://www.lawazia.tech/excelrs",
size: "col-span-1",
image: "/pic1.jpg",
},
{
title: "Ampy – AMP Builder",
desc: "Built dynamic templates, live preview features, and publishing workflows for creating AMP-compliant pages quickly and efficiently.",
tech: "React, Next.js",
link: "https://www.lawazia.tech/ampy",
size: "col-span-1 md:col-span-2",
image: "/pic1.jpg",
},
];

export default function ProjectsSection() {
return ( <section className="max-w-7xl mx-auto py-20">

  {/* Heading */}
  <motion.h2
            initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            font-bold
            text-2xl sm:text-3xl md:text-4xl
            mb-10 sm:mb-7 md:mb-8
            
          "
          >
    Client Projects
  </motion.h2>

  <p className="text-gray-400 max-w-2xl mb-12">
    Selected client projects spanning enterprise, startup, and consulting collaborations.
  </p>

  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[220px] gap-6">

    {projects.map((project, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: i * 0.08 }}
        whileHover={{ scale: 1.03 }}
        className={`group relative rounded-2xl overflow-hidden cursor-pointer 
          ${project.size}
          border border-white/10
          transition-all duration-300`}
      >

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm group-hover:bg-black/50 transition" />

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />

        {/* Content */}
        <div className="relative z-10 h-full p-5 flex flex-col justify-between">

          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-cyan-400 transition">
              {project.title}
            </h3>

            <p className="mt-2 text-gray-300 text-xs md:text-sm leading-relaxed">
              {project.desc}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-3">
              {project.tech}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-cyan-400 text-xs md:text-sm hover:underline"
            >
              View Project →
            </a>
          </div>

        </div>

      </motion.div>
    ))}

  </div>
</section>
);
}
