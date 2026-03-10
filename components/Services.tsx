import { Code, ChartBar, Shield, Layers, Server, Database, BarChart3 } from "lucide-react";

const items = [
  {
    icon: Code,
    title: "Websites & Landing Pages",
    desc: "Modern, responsive websites for businesses, cafés, restaurants, and personal portfolios — built with Next.js, TypeScript, and Tailwind. Includes SEO optimization, contact forms, image galleries, and fast performance.",
  },
  {
    icon: Layers,
    title: "Full-Stack Web Applications",
    desc: "Custom applications powered by Next.js with Prisma and Neon or MongoDB. Includes secure CRUD systems, admin dashboards, and scalable backend architecture for SaaS products and internal tools.",
  },
  {
    icon: Shield,
    title: "Authentication & User Accounts",
    desc: "Secure login systems with Clerk or Next-Auth including protected routes, admin access, and role-based permissions for teams and users.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Design and implementation of modern data platforms using Microsoft Fabric and Snowflake. Build reliable data pipelines, ingestion workflows, and scalable analytics infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    desc: "Interactive dashboards and reporting solutions with Power BI that transform business data into actionable insights for operations, sales, and leadership teams.",
  },
  {
    icon: Server,
    title: "Maintenance & Hosting",
    desc: "Continuous updates, bug fixes, and secure hosting on Vercel or your preferred cloud platform. Optional monthly maintenance plans to keep applications fast and reliable.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section text-slate-600 border-y-1 border-slate-200 mb-4 py-4"
    >
      <h2 className="section-title text-2xl text-amber-600">Services</h2>
      <p>Web development, data engineering, and analytics solutions with clear scope and fast delivery.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {items.map((it) => (
          <div key={it.title} className="card">
            <it.icon className="w-7 h-7 text-brand" />
            <h3 className="text-xl font-semibold mt-4">{it.title}</h3>
            <p className="mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}