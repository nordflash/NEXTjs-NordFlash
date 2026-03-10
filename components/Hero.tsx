'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import me from "../public/assets/me.png"

export default function Hero() {
  return (
    <header className="relative overflow-hidden my-4 text-slate-600 pb-8">
      <div className="section">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div>
            <motion.h1
              className="text-3xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Building Scalable Web Applications, Modern Data Engineering & Business Intelligence Platforms
            </motion.h1>

            <p className="mt-4 max-w-xl">
              I help startups and companies build modern applications and data platforms. 
              I develop scalable <strong>Next.js full-stack applications</strong> and deliver 
              <strong> data engineering & analytics solutions</strong> using <strong>Microsoft Fabric, 
              Snowflake, and Power BI dashboards</strong>.
            </p>

            <p className="mt-3 max-w-xl">
              My stack includes Next.js, TypeScript, Prisma, serverless Postgres, and Tailwind 
              for fast web apps, plus modern data pipelines and interactive dashboards that turn 
              raw data into business insights.
            </p>

            <div className="mt-8 flex gap-4">
              <a className="btn" href="#contact">
                Get a quote
              </a>
              <a className="btn-outline" href="#work">
                See my work
              </a>
            </div>
          </div>

          <div className="relative mx-auto">
            <Image
              src={me}
              width={220}
              height={220}
              alt="Developer portrait"
              className="rounded-full"
            />
          </div>

        </div>
      </div>
    </header>
  );
}