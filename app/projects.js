"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Spriny – Agile Sprint Planner",
    desc: "Designed and developed core frontend and backend modules for sprint planning, implemented AI-driven task automation workflows, and built scalable features to improve team productivity and collaboration.",
    tech: "Next.js, Node.js, MongoDB",
    link: "https://www.lawazia.tech/spriny",
  },
  {
    title: "UrbanStall – Marketplace",
    desc: "Built responsive UI components and optimized product listing pages, improving user experience and enhancing local vendor discoverability.",
    tech: "React, Tailwind",
    link: "https://www.urbanstall.app/explore",
  },
  {
    title: "Paign.ai – AI Productivity",
    desc: "Integrated AI APIs and contributed to both frontend and backend systems to enable real-time AI assistance and streamline user workflows.",
    tech: "Next.js, AI APIs",
    link: "https://www.paign.ai/home",
  },
  {
    title: "MedMatch Network – Healthcare Platform",
    desc: "Developed referral management workflows, handled complex data flows for practice locations and specialties, and optimized backend APIs to ensure seamless doctor-patient matching and data consistency.",
    tech: "Vue.js, Node.js, MySQL",
    link: "https://medmatchnetwork.com/",
  },
  {
    title: "Breathe4School",
    desc: "Developed a unified digital learning platform with scalable architecture and responsive design, improving accessibility and engagement for students and educators.",
    tech: "Next.js",
    link: "https://breathe4school.com",
  },
  {
    title: "Excelrs – Resource Tool",
    desc: "Engineered backend workflows and optimized UI for handling large Excel datasets, enabling batch operations and improving operational efficiency.",
    tech: "React, Node.js, SQL",
    link: "https://www.lawazia.tech/excelrs",
  },
  {
    title: "Ampy – AMP Builder",
    desc: "Built dynamic templates, live preview features, and publishing workflows for creating AMP-compliant pages quickly and efficiently.",
    tech: "React, Next.js",
    link: "https://www.lawazia.tech/ampy",
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-7xl mx-auto py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="font-bold text-2xl sm:text-3xl md:text-4xl mb-10 sm:mb-7 md:mb-8"
      >
        Client Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="text-gray-400 max-w-2xl mb-12"
      >
        Selected client projects spanning enterprise, startup, and consulting
        collaborations.
      </motion.p>

      <div className="border-t border-gray-800">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.45,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ x: 6 }}
            className="
              group relative grid grid-cols-[auto_1fr] sm:grid-cols-[3rem_1fr_auto]
              gap-x-4 sm:gap-x-8 gap-y-3
              py-8 sm:py-10
              border-b border-gray-800
              items-start
              -mx-2 px-2 sm:-mx-4 sm:px-4
            "
          >
            {/* Hover accent bar */}
            <motion.span
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
              aria-hidden
            />

            <span className="text-sm text-gray-600 font-mono pt-1 group-hover:text-cyan-400/70 transition-colors duration-300">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-500">{project.tech}</span>
              </div>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-2xl">
                {project.desc}
              </p>
            </div>

            <span
              className="
                hidden sm:inline-flex items-center gap-1
                text-sm text-gray-600
                pt-1
                group-hover:text-cyan-400
                transition-all duration-300
              "
            >
              View
              <motion.span
                aria-hidden
                className="inline-block"
                initial={false}
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
