"use client";

import { motion, type Variants } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiSnowflake,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { FaChartBar } from "react-icons/fa"; // fallback for Power BI
import { FaUserShield } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { GiCrownedSkull } from "react-icons/gi";

const tech = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Neon/Postgres", icon: <SiPostgresql /> },
  { name: "Clerk", icon: <FaUserShield /> },
  { name: "Next-Auth", icon: <MdOutlineLogin /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Zustand", icon: <GiCrownedSkull /> },
  { name: "Vercel", icon: <SiVercel /> },
  // Data Engineering & BI
  { name: "Microsoft Fabric", icon: <VscAzureDevops /> },
  { name: "Snowflake", icon: <SiSnowflake /> },
  { name: "Power BI Dashboards", icon: <FaChartBar /> },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Stack() {
  return (
    <section
      id="stack"
      className="mt-4 mb-6 pb-6 text-slate-600 border-b border-slate-200"
    >
      <h2 className="section-title text-2xl text-amber-600">Tech Stack</h2>
      <p className="section-sub">
        Modern tools for web development, data engineering, and business intelligence — simple, maintainable, and fast.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10"
      >
        {tech.map((t) => (
          <motion.div
            key={t.name}
            variants={item}
            className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-200/60 bg-white/70 shadow-sm
                       dark:border-slate-800 dark:bg-slate-900/60 hover:shadow-md transition"
            role="figure"
            aria-label={t.name}
            title={t.name}
          >
            <div className="text-3xl text-slate-800 dark:text-slate-100">
              {t.icon}
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {t.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}