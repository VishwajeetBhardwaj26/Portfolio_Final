"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#0E1116] text-gray-200">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT – PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-72 h-72 rounded-full overflow-hidden border border-gray-700">
              <motion.img
                src="Protfolio_Img1.png"
                alt="Vishwajeet Bhardwaj"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-6xl font-bold tracking-tight"
            >
              Hello
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl font-medium text-gray-300"
            >
              A Bit About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-400 leading-relaxed max-w-md"
            >
              I build reliable software systems and work with data to solve real-world problems.
            </motion.p>

            {/* CIRCULAR BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 pt-6"
            >
              <a
                href="/Vishwajeet_Bhardwaj_Resume.pdf"
                download
                className="w-28 h-28 rounded-full bg-yellow-500 text-black
                          flex items-center justify-center font-medium
                          hover:scale-105 transition"
              >
                Resume
              </a>


              <motion.a
                href="#projects"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-28 h-28 rounded-full bg-red-500 text-black
                           flex items-center justify-center font-medium"
              >
                Projects
              </motion.a>
              <motion.a
                href="#clients"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-28 h-28 rounded-full bg-blue-300 text-black
                           flex items-center justify-center font-medium"
              >
                Clients
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-28 h-28 rounded-full bg-cyan-400 text-black
                           flex items-center justify-center font-medium"
              >
                Contact
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6"
      >
        {/* <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-20"
        >
          Selected Projects
        </motion.h2> */}

        <div className="space-y-20">

          {/* ================= PROJECTS ================= */}
<section
  id="projects"
  className="max-w-6xl mx-auto px-6"
>
  {/* <motion.h2
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-4xl font-bold mb-24"
  >
    Selected Projects
  </motion.h2> */}

  {/* ================= PROJECTS ================= */}
<section
  id="projects"
  className="max-w-6xl mx-auto px-6"
>
  <motion.h2
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-4xl font-bold mb-24"
  >
    Selected Projects
  </motion.h2>

  <div className="space-y-24">

    {/* PROJECT 1 – SPRYNY */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 border-l border-gray-800 group"
    >
      <span className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-cyan-400 opacity-70 group-hover:opacity-100 transition" />

      <div className="flex items-start gap-5">
        {/* <img
          src="/logos/spriny.png"
          alt="Spriny logo"
          className="w-10 h-10 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition"
        /> */}

        <div>
          <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition">
            Spriny – Agile Sprint Planner
          </h3>

          <p className="mt-4 text-gray-400 max-w-3xl leading-relaxed">
            A lightweight, AI-powered sprint planning platform helping software
            teams manage work efficiently without complex overhead. Built
            scalable frontend and backend components with automation-focused
            workflows.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Role: Full-Stack Engineer · Tech: Next.js, Node.js, MongoDB
          </p>

          <a
            href="https://spriny.io/"
            target="_blank"
            className="inline-block mt-6 text-cyan-400 hover:underline"
          >
            View Live →
          </a>
        </div>
      </div>
    </motion.div>

    {/* PROJECT 2 – URBANSTALL */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 border-l border-gray-800 group"
    >
      <span className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-cyan-400 opacity-70 group-hover:opacity-100 transition" />

      <div className="flex items-start gap-5">
        {/* <img
          src="/logos/urbanstall.png"
          alt="UrbanStall logo"
          className="w-10 h-10 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition"
        /> */}

        <div>
          <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition">
            UrbanStall – Local Marketplace App
          </h3>

          <p className="mt-4 text-gray-400 max-w-3xl leading-relaxed">
            A discovery and marketplace platform connecting local vendors with
            nearby shoppers. Built responsive UI components and
            performance-optimized listing pages to improve product
            discoverability.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Role: Frontend Developer · Tech: React, Tailwind CSS
          </p>

          <a
            href="https://www.urbanstall.app/explore"
            target="_blank"
            className="inline-block mt-6 text-cyan-400 hover:underline"
          >
            View Live →
          </a>
        </div>
      </div>
    </motion.div>

    {/* PROJECT 3 – PAIGN */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 border-l border-gray-800 group"
    >
      <span className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-cyan-400 opacity-70 group-hover:opacity-100 transition" />

      <div className="flex items-start gap-5">
        {/* <img
          src="/logos/paign.png"
          alt="Paign logo"
          className="w-10 h-10 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition"
        /> */}

        <div>
          <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition">
            Paign.ai – AI-Enabled Productivity Platform
          </h3>

          <p className="mt-4 text-gray-400 max-w-3xl leading-relaxed">
            A modern AI-driven productivity suite that simplifies workflows and
            provides real-time AI assistance. Contributed to UI and backend
            integrations for seamless AI-powered experiences.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Role: Full-Stack Contributor · Tech: Next.js, React, AI APIs
          </p>

          <a
            href="https://www.paign.ai/home"
            target="_blank"
            className="inline-block mt-6 text-cyan-400 hover:underline"
          >
            View Live →
          </a>
        </div>
      </div>
    </motion.div>

    {/* PROJECT 4 – BREATHE4SCHOOL */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 border-l border-gray-800 group"
    >
      <span className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-cyan-400 opacity-70 group-hover:opacity-100 transition" />

      <div className="flex items-start gap-5">
        {/* <img
          src="/logos/breathe4school.png"
          alt="Breathe4School logo"
          className="w-10 h-10 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition"
        /> */}

        <div>
          <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition">
            Breathe4School – Education Wellness Platform
          </h3>

          <p className="mt-4 text-gray-400 max-w-3xl leading-relaxed">
            A public-facing platform promoting mindfulness and breathing
            practices in schools. Built clean, accessible UI with strong
            responsiveness and performance focus.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Role: Full-Stack Engineer · Tech: Next.js, Responsive Design
          </p>

          <a
            href="https://breathe4school.com/about-us/"
            target="_blank"
            className="inline-block mt-6 text-cyan-400 hover:underline"
          >
            View Live →
          </a>
        </div>
      </div>
    </motion.div>

    {/* PROJECT 5 – EXCELRS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 border-l border-gray-800 group"
    >
      <span className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-cyan-400 opacity-70 group-hover:opacity-100 transition" />

      <div className="flex items-start gap-5">
        {/* <img
          src="/logos/excelrs.png"
          alt="ExcelRS logo"
          className="w-10 h-10 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition"
        /> */}

        <div>
          <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition">
            Excelrs – Excel Resource Management
          </h3>

          <p className="mt-4 text-gray-400 max-w-3xl leading-relaxed">
            An internal tool extending Excel workflows for large datasets with
            batch operations and structured processing. Implemented backend
            workflows and efficient UI for daily operations.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Role: Full-Stack Engineer · Tech: React, Node.js, Express, SQL
          </p>

          <a
            href="https://www.lawazia.tech/excelrs"
            target="_blank"
            className="inline-block mt-6 text-cyan-400 hover:underline"
          >
            View Live →
          </a>
        </div>
      </div>
    </motion.div>

    {/* PROJECT 6 – AMPY */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 border-l border-gray-800 group"
    >
      <span className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-cyan-400 opacity-70 group-hover:opacity-100 transition" />

      <div className="flex items-start gap-5">
        {/* <img
          src="/logos/ampy.png"
          alt="Ampy logo"
          className="w-10 h-10 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition"
        /> */}

        <div>
          <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition">
            Ampy – Interactive AMP Builder
          </h3>

          <p className="mt-4 text-gray-400 max-w-3xl leading-relaxed">
            An interactive AMP page builder enabling rapid creation and
            publishing of AMP-compliant pages. Built templates, live previews,
            and publishing workflows.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Role: Full-Stack Engineer · Tech: React, Next.js, Node.js
          </p>

          <a
            href="https://www.lawazia.tech/ampy"
            target="_blank"
            className="inline-block mt-6 text-cyan-400 hover:underline"
          >
            View Live →
          </a>
        </div>
      </div>
    </motion.div>

  </div>
</section>

</section>


        </div>
      </section>
{/* ================= COMPANIES & CLIENTS ================= */}
<section className="max-w-6xl mx-auto px-12 py-12" id="clients">
  <motion.h2
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-4xl font-bold mb-6"
  >
    Companies & Clients
  </motion.h2>

  <p className="text-gray-400 max-w-2xl mb-16">
    Organizations and products I’ve worked with across enterprise,
    startup, and client-based engagements.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* CARD 1 */}
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-800 rounded-xl p-6 bg-[#0B0F1A]"
    >
      <img
        src="https://dslntlv9vhjr4.cloudfront.net/bowls_images/MUbpBqmJurZH9.jpg"
        alt="LTIMindtree"
        className="h-10 object-contain mb-6 "
      />
      <h3 className="text-xl font-semibold">LTIMindtree</h3>
      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        Global technology consulting and digital solutions company where I
        worked as a Data Engineer on enterprise-scale systems.
      </p>
      <a
        href="https://www.ltimindtree.com"
        target="_blank"
        className="inline-block mt-4 text-cyan-400 hover:underline text-sm"
      >
        Visit →
      </a>
    </motion.div>

    {/* CARD 2 */}
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-800 rounded-xl p-6 bg-[#0B0F1A]"
    >
      <img
        src="https://www.lawazia.tech/_next/image?url=%2Flogo.png&w=256&q=75"
        alt="LawaziaTech"
        className="h-10 object-contain mb-6"
      />
      <h3 className="text-xl font-semibold">LawaziaTech</h3>
      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        Product and engineering services company where I worked on
        full-stack applications and internal tools.
      </p>
      <a
        href="https://www.lawazia.tech"
        target="_blank"
        className="inline-block mt-4 text-cyan-400 hover:underline text-sm"
      >
        Visit →
      </a>
    </motion.div>

    {/* CARD 3 */}
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-800 rounded-xl p-6 bg-[#0B0F1A]"
    >
      <img
        src="https://spriny.io/_next/image?url=%2Flogo.png&w=96&q=75"
        alt="Spriny"
        className="h-10 object-contain mb-6"
      />
      <h3 className="text-xl font-semibold">Spriny</h3>
      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        AI-powered sprint planning and task management platform built for
        modern software teams.
      </p>
      <a
        href="https://spriny.io"
        target="_blank"
        className="inline-block mt-4 text-cyan-400 hover:underline text-sm"
      >
        Visit →
      </a>
    </motion.div>

    {/* CARD 4 */}
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-800 rounded-xl p-6 bg-[#0B0F1A]"
    >
      <img
        src="https://tse2.mm.bing.net/th/id/OIP.00TOe3bsv8EseeO2dZ87JwHaHa?pid=Api&P=0&h=180"
        alt="UrbanStall"
        className="h-10 object-contain mb-6"
      />
      <h3 className="text-xl font-semibold">UrbanStall</h3>
      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        Hyperlocal marketplace platform connecting vendors with nearby
        customers through a modern web experience.
      </p>
      <a
        href="https://www.urbanstall.app"
        target="_blank"
        className="inline-block mt-4 text-cyan-400 hover:underline text-sm"
      >
        Visit →
      </a>
    </motion.div>

    {/* CARD 5 */}
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-800 rounded-xl p-6 bg-[#0B0F1A]"
    >
      <img
        src="https://www.paign.ai/assets/button-icons/paign-ai.svg"
        alt="Paign.ai"
        className="h-10 object-contain mb-6"
      />
      <h3 className="text-xl font-semibold">Paign.ai</h3>
      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        AI-enabled productivity platform designed to simplify workflows
        and content generation.
      </p>
      <a
        href="https://www.paign.ai"
        target="_blank"
        className="inline-block mt-4 text-cyan-400 hover:underline text-sm"
      >
        Visit →
      </a>
    </motion.div>

    {/* CARD 6 */}
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-800 rounded-xl p-6 bg-[#0B0F1A]"
    >
      <img
        src="b4school.jpg"
        alt="Breathe4School"
        className="h-10 object-contain mb-6"
      />
      <h3 className="text-xl font-semibold">Breathe4School</h3>
      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        Education-focused wellness initiative promoting mindfulness and
        breathing practices in schools.
      </p>
      <a
        href="https://breathe4school.com"
        target="_blank"
        className="inline-block mt-4 text-cyan-400 hover:underline text-sm"
      >
        Visit →
      </a>
    </motion.div>

  </div>
</section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-12 pb-32"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Let’s Connect
        </motion.h2>

        <p className="text-gray-400 max-w-xl">
          If you’re interested in working together or discussing a project,
          feel free to reach out.
        </p>

        <a
          href="mailto:vishwajeetbhardwaj2612@gmail.com"
          className="inline-block mt-6 text-cyan-400 hover:underline"
        >
          vishwajeetbhardwaj2612@gmail.com
        </a>
      </section>

    </main>
  );
}
