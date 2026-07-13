"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ProjectsSection from "./projects";

function CountUp({ target, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const clients = [
  {
    name: "LTIMindtree",
    logo: "https://dslntlv9vhjr4.cloudfront.net/bowls_images/MUbpBqmJurZH9.jpg",
    desc: "Global technology consulting and digital solutions company where I worked as a Data Engineer on enterprise-scale systems.",
    link: "https://www.ltimindtree.com",
  },
  {
    name: "LawaziaTech",
    logo: "https://www.lawazia.tech/_next/image?url=%2Flogo.png&w=256&q=75",
    desc: "Product and engineering services company where I worked on full-stack applications and internal tools.",
    link: "https://www.lawazia.tech",
  },
  {
    name: "Spriny",
    logo: "logo.png",
    desc: "AI-powered sprint planning and task management platform built for modern software teams.",
    link: "https://spriny.io",
  },
  {
    name: "UrbanStall",
    logo: "https://tse2.mm.bing.net/th/id/OIP.00TOe3bsv8EseeO2dZ87JwHaHa?pid=Api&P=0&h=180",
    desc: "Hyperlocal marketplace platform connecting vendors with nearby customers through a modern web experience.",
    link: "https://www.urbanstall.app",
  },
  {
    name: "Paign.ai",
    logo: "https://www.paign.ai/assets/button-icons/paign-ai.svg",
    desc: "AI-enabled productivity platform designed to simplify workflows and content generation.",
    link: "https://www.paign.ai",
  },
  {
    name: "XploreSense Private Limited",
    logo: "xs.png",
    desc: "Motive is to make education more accessible, organized, and personalized by simplifying academic management, improving learner engagement, and enabling institutions to adapt to modern, technology-driven learning needs.",
    link: "https://www.linkedin.com/company/xploresense-private-limited/posts/?feedView=all",
  },
  {
    name: "Prodware Solutions",
    logo: "https://cdn.theorg.com/365d5164-f2ed-419f-b34a-ba610ea8c17a_medium.jpg",
    desc: "Prodware Solutions is a growing IT and healthcare services company delivering enterprise solutions, with strong expertise in Oracle platforms and AI-driven technologies to improve business efficiency and operations.",
    link: "https://www.linkedin.com/company/prodware-solutions-llc/",
  },
  {
    name: "Medmatch Network",
    logo: "Medmatch.webp",
    desc: "MedMatch Network is a cloud-based healthcare platform that connects doctors and patients to streamline and manage medical referrals and securely exchange patient information.",
    link: "https://medmatchnetwork.com/",
  },
];

const testimonials = [
  {
    quote:
      "Vishwajeet consistently demonstrated ownership, reliability, and the ability to deliver high-quality, scalable software systems. His contributions added measurable value across multiple production projects.",
    role: "Director",
    org: "Lawazia Tech Pvt. Ltd.",
  },
  {
    quote:
      "He worked across the full software development lifecycle — frontend, backend, databases, cloud deployment, and AI automation — and handled complex modules independently with professionalism.",
    role: "Director",
    org: "Prodware solutions",
  },
  {
    quote:
      "A dependable problem solver with strong learning ability and work ethic. Someone you can rely on for complex software projects.",
    role: "Director",
    org: "XploreSense Private Limited",
  },
];

const navButtons = [
  {
    label: "Resume",
    href: "/Vishwajeet_Bhardwaj_Resume.pdf",
    download: true,
    border: "border-yellow-500/30 hover:border-yellow-400 hover:text-yellow-400",
  },
  {
    label: "Projects",
    href: "#projects",
    border: "border-red-500/30 hover:border-red-400 hover:text-red-400",
  },
  {
    label: "Clients",
    href: "#clients",
    border: "border-blue-400/30 hover:border-blue-300 hover:text-blue-300",
  },
  {
    label: "Contact",
    href: "#contact",
    border: "border-cyan-400/30 hover:border-cyan-300 hover:text-cyan-300",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

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
    <main className="bg-[#0E1116] text-gray-200 overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Ambient orbs */}
        <div
          className="ambient-orb w-[420px] h-[420px] bg-cyan-500/10 top-[-10%] left-[-5%]"
          aria-hidden
        />
        <div
          className="ambient-orb ambient-orb-delayed w-[360px] h-[360px] bg-blue-500/10 bottom-[10%] right-[-8%]"
          aria-hidden
        />

        <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT – PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Pulsing ring */}
              <div
                className="profile-ring absolute -inset-3 rounded-full border border-cyan-400/30"
                aria-hidden
              />
              <motion.div
                className="absolute -inset-6 rounded-full bg-cyan-400/5 blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border border-gray-700">
                <img
                  src="Protfolio_Img1.png"
                  alt="Vishwajeet Bhardwaj"
                  className="w-full h-full object-cover"
                />

                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"
                />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="absolute bottom-6 w-full text-center text-white font-semibold tracking-wide text-sm sm:text-base"
                >
                  Vishwajeet Bhardwaj
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl font-bold tracking-tight"
            >
              Hello
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-xl font-medium text-gray-300"
            >
              A Bit About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-full sm:max-w-md"
            >
              I build and ship scalable software products for clients in India and abroad.
              I’ve delivered multiple production systems — some serving lakhs+ active users —
              across SaaS, marketplaces, and AI-driven platforms.
              My work focuses on performance, maintainability, and solving real business problems
              at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex justify-between gap-4 max-w-full sm:max-w-xl"
            >
              <div className="text-center sm:text-left flex-1">
                <p className="text-2xl font-semibold text-gray-100">
                  <CountUp target={7} />
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Projects Delivered</p>
              </div>
              <div className="text-center sm:text-left flex-1">
                <p className="text-2xl font-semibold text-gray-100">
                  <CountUp target={4} />
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Countries</p>
              </div>
              <div className="text-center sm:text-left flex-1">
                <p className="text-2xl font-semibold text-gray-100">
                  <CountUp target={100} suffix="K+" />
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Users Impacted</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 place-items-center gap-4 pt-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-start">
              {navButtons.map((btn, i) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  download={btn.download || undefined}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.7 + i * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.94 }}
                  className={`
                    w-24 h-24 sm:w-28 sm:h-28
                    rounded-full
                    bg-[#161B22] text-gray-200
                    border
                    flex items-center justify-center font-medium
                    transition-colors duration-300
                    ${btn.border}
                  `}
                >
                  {btn.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-cyan-400/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 sm:px-2 md:px-2 py-1 sm:py-25 md:py-25"
      >
        <ProjectsSection />
      </section>

      {/* ================= COMPANIES & CLIENTS ================= */}
      <section className="max-w-6xl mx-auto px-12 py-12 sm:px-2 md:px-2" id="clients">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-bold text-2xl sm:text-3xl md:text-4xl mb-10 sm:mb-7 md:mb-8"
        >
          Companies & Clients
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mb-16"
        >
          Organizations and products I’ve worked with across enterprise,
          startup, and client-based engagements.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, borderColor: "rgba(34, 211, 238, 0.35)" }}
              className="border border-gray-800 rounded-xl p-6 bg-[#0B0F1A] transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)]"
            >
              <motion.img
                src={client.logo}
                alt={client.name}
                className="h-10 object-contain mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-semibold">{client.name}</h3>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">{client.desc}</p>
              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cyan-400 hover:underline text-sm group/link"
              >
                Visit{" "}
                <span className="inline-block transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-6xl mx-auto px-12 sm:px-2 md:px-2 mt-5">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-bold text-2xl sm:text-3xl md:text-4xl mb-10 sm:mb-7 md:mb-8 mb-12"
        >
          Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.org}
              initial={{ opacity: 0, y: 30, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-[#0B0F1A] border border-gray-800 rounded-xl p-6"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.25, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12 }}
                className="block text-4xl text-cyan-400 leading-none mb-3"
                aria-hidden
              >
                “
              </motion.span>
              <p className="text-gray-300 text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-100">{t.role}</p>
                <p className="text-xs text-gray-500">{t.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= AVAILABILITY ================= */}
      <section className="max-w-6xl mx-auto px-6 mb-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative border border-gray-800 bg-[#0B0F1A] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <div className="relative">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Current Availability
            </p>
            <p className="text-lg sm:text-xl font-semibold text-gray-100 mt-1">
              Open for · Contract · Freelance
            </p>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Available for building scalable, production-ready web and AI-driven
              applications for global clients and teams.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 font-medium hover:bg-cyan-400/20 transition"
          >
            Let’s Talk →
          </motion.a>
        </motion.div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-12 pb-32 sm:px-2 md:px-2 mt-10"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-bold text-2xl sm:text-3xl md:text-4xl mb-10 sm:mb-7 md:mb-8"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 max-w-xl mb-10"
        >
          Have a project in mind or want to collaborate?
          Send me a message and I’ll get back to you.
        </motion.p>

        <form ref={formRef} onSubmit={sendEmail} className="max-w-xl space-y-6">
          {[
            { name: "name", type: "text", placeholder: "Your Name" },
            { name: "email", type: "email", placeholder: "Your Email" },
          ].map((field, i) => (
            <motion.input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileFocus={{ scale: 1.01, borderColor: "rgb(34 211 238)" }}
              className="w-full bg-[#0B0F1A] border border-gray-800 px-4 py-3 rounded-md focus:outline-none focus:border-cyan-400 transition-colors"
            />
          ))}

          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            whileFocus={{ scale: 1.01, borderColor: "rgb(34 211 238)" }}
            className="w-full bg-[#0B0F1A] border border-gray-800 px-4 py-3 rounded-md focus:outline-none focus:border-cyan-400 transition-colors"
          />

          <motion.button
            type="submit"
            disabled={loading}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-cyan-400 text-black rounded-md font-medium disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm"
            >
              ❌ Something went wrong. Please try again.
            </motion.p>
          )}
        </form>
      </section>
    </main>
  );
}
