"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

   const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_0zhhjww",     
        "template_9vl0it8",    
        formRef.current,
        "PNbYzr3e0akwUJ6wC"      
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => setLoading(false));
  };

  return (
    <main className="bg-[#0E1116] text-gray-200">
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT – PROFILE IMAGE */}
          <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center md:justify-end"
>
  <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border border-gray-700">

    {/* PROFILE IMAGE */}
    <img
      src="Protfolio_Img1.png"
      alt="Vishwajeet Bhardwaj"
      className="w-full h-full object-cover"
    />

    {/* OVERLAY FILL */}
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
      className="
        absolute inset-0
        bg-gradient-to-t from-black/80 to-black/20
      "
    />

    {/* NAME TEXT */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.5 }}
      className="
        absolute bottom-6 w-full text-center
        text-white font-semibold tracking-wide
        text-sm sm:text-base
      "
    >
      Vishwajeet Bhardwaj
    </motion.div>

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
              className="
                text-gray-400
                leading-relaxed
                text-sm sm:text-base
                max-w-full sm:max-w-md
              "
            >
              I build and ship scalable software products for clients in India and abroad.
              I’ve delivered multiple production systems — some serving lakhs+ active users —
              across SaaS, marketplaces, and AI-driven platforms.
              My work focuses on performance, maintainability, and solving real business problems
              at scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="
                mt-8
                flex justify-between gap-4
                max-w-full sm:max-w-xl
              "
            >
              {/* Metric 1 */}
              <div className="text-center sm:text-left flex-1">
                <p className="text-2xl font-semibold text-gray-100">
                  5+
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Projects Delivered
                </p>
              </div>

              {/* Metric 2 */}
              <div className="text-center sm:text-left flex-1">
                <p className="text-2xl font-semibold text-gray-100">
                  3+
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Countries
                </p>
              </div>

              {/* Metric 3 */}
              <div className="text-center sm:text-left flex-1">
                <p className="text-2xl font-semibold text-gray-100">
                  100K+
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Users Impacted
                </p>
              </div>
            </motion.div>


            {/* CIRCULAR BUTTONS */}
           <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="
                grid grid-cols-2 place-items-center gap-4 pt-6
                sm:flex sm:flex-wrap sm:gap-6 sm:justify-start
              "
            >
            <a
              href="/Vishwajeet_Bhardwaj_Resume.pdf"
              download
              className="
                w-24 h-24 sm:w-28 sm:h-28
                rounded-full
                bg-[#161B22] text-gray-200
                border border-yellow-500/30
                flex items-center justify-center font-medium
                hover:border-yellow-400 hover:text-yellow-400
                hover:scale-105 transition
              "
            >
              Resume
            </a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-24 h-24 sm:w-28 sm:h-28
                rounded-full
                bg-[#161B22] text-gray-200
                border border-red-500/30
                flex items-center justify-center font-medium
                hover:border-red-400 hover:text-red-400
              "
            >
              Projects
            </motion.a>

            <motion.a
              href="#clients"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-24 h-24 sm:w-28 sm:h-28
                rounded-full
                bg-[#161B22] text-gray-200
                border border-blue-400/30
                flex items-center justify-center font-medium
                hover:border-blue-300 hover:text-blue-300
              "
            >
              Clients
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-24 h-24 sm:w-28 sm:h-28
                rounded-full
                bg-[#161B22] text-gray-200
                border border-cyan-400/30
                flex items-center justify-center font-medium
                hover:border-cyan-300 hover:text-cyan-300
              "
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
        className="max-w-6xl mx-auto px-6 sm:px-2 md:px-2 py-1 sm:py-15 md:py-15"
      >
          {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          className="max-w-6xl mx-auto px-6 sm:px-2 md:px-2"
        >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            font-bold
            text-2xl sm:text-3xl md:text-4xl
            mb-12 sm:mb-20 md:mb-24
            
          "
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
{/* ================= COMPANIES & CLIENTS ================= */}
        <section className="max-w-6xl mx-auto px-12 py-12 sm:px-2 md:px-2" id="clients">
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

    {/* ================= TESTIMONIALS ================= */}
        <section className="max-w-6xl mx-auto px-12 sm:px-2 md:px-2 mt-5">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              text-2xl sm:text-3xl font-bold
              mb-12
            "
          >
            What People Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                bg-[#0B0F1A]
                border border-gray-800
                rounded-xl
                p-6
              "
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                “Vishwajeet consistently demonstrated ownership, reliability, and the
                ability to deliver high-quality, scalable software systems. His
                contributions added measurable value across multiple production
                projects.”
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-100">
                  Director
                </p>
                <p className="text-xs text-gray-500">
                  Lawazia Tech Pvt. Ltd.
                </p>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                bg-[#0B0F1A]
                border border-gray-800
                rounded-xl
                p-6
              "
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                “He worked across the full software development lifecycle — frontend,
                backend, databases, cloud deployment, and AI automation — and handled
                complex modules independently with professionalism.”
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-100">
                  Director
                </p>
                <p className="text-xs text-gray-500">
                  PAIGN.AI
                </p>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                bg-[#0B0F1A]
                border border-gray-800
                rounded-xl
                p-6
              "
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                “A dependable problem solver with strong learning ability and work
                ethic. Someone you can rely on for complex software projects.”
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-100">
                  Director
                </p>
                <p className="text-xs text-gray-500">
                  Breathe4School
                </p>
              </div>
            </motion.div>

          </div>
        </section>
{/* ================= AVAILABILITY ================= */}
<section className="max-w-6xl mx-auto px-6 mb-10 mt-20">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="
      border border-gray-800
      bg-[#0B0F1A]
      rounded-2xl
      p-6 sm:p-8
      flex flex-col sm:flex-row
      items-start sm:items-center
      justify-between
      gap-6
    "
  >
    {/* Left */}
    <div>
      <p className="text-sm text-gray-400">
        Current Availability
      </p>
      <p className="text-lg sm:text-xl font-semibold text-gray-100 mt-1">
        Open for  · Contract · Freelance
      </p>
      <p className="text-sm text-gray-500 mt-2 max-w-xl">
        Available for building scalable, production-ready web and AI-driven
        applications for global clients and teams.
      </p>
    </div>

    {/* Right */}
    <a
      href="#contact"
      className="
        inline-flex items-center justify-center
        px-6 py-3
        rounded-full
        bg-cyan-400/10
        text-cyan-400
        border border-cyan-400/30
        font-medium
        hover:bg-cyan-400/20
        transition
      "
    >
      Let’s Talk →
    </a>
  </motion.div>
</section>

      {/* ================= CONTACT ================= */}
       <section id="contact" className="max-w-6xl mx-auto px-12 pb-32 sm:px-2 md:px-2 mt-10 ">
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
          Let’s Connect
        </motion.h2>

        <p className="text-gray-400 max-w-xl mb-10">
          Have a project in mind or want to collaborate?  
          Send me a message and I’ll get back to you.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-xl space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-[#0B0F1A] border border-gray-800 px-4 py-3 rounded-md
                       focus:outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-[#0B0F1A] border border-gray-800 px-4 py-3 rounded-md
                       focus:outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full bg-[#0B0F1A] border border-gray-800 px-4 py-3 rounded-md
                       focus:outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-cyan-400 text-black rounded-md font-medium
                       hover:scale-105 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
