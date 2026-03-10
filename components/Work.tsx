import Image, { type StaticImageData } from "next/image";
import store from "../public/assets/store.png";
import panoramax from "../public/assets/panoramax.png";
import beehives from "../public/assets/beehives.png";
import cleaning from "../public/assets/cleaning.png";

const images: Record<
  "store" | "panoramax" | "beehives" | "cleaning",
  StaticImageData
> = {
  store,
  panoramax,
  beehives,
  cleaning,
};

import { projects } from "@/data/projects";

export default function Work() {
  const webProjects = projects.filter((p) => p.category === "web");
  const dataProjects = projects.filter((p) => p.category === "data");

  const renderProjects = (list: typeof projects) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {list.map((p) => {
        const imgKey = p.image ?? "store";
        const imgSrc = images[imgKey];

        return (
          <div
            key={p.title}
            className="card bg-slate-200 border rounded-2xl shadow-sm hover:shadow-xl overflow-hidden transition"
          >
            <div className="w-full h-48 overflow-hidden group">
              <Image
                src={imgSrc}
                alt={p.title}
                width={800}
                height={600}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-slate-600 mt-2">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((s) => (
                  <span key={s} className="badge">
                    {s}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-md text-amber-600 hover:underline"
                >
                  Visit project →
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      id="work"
      className="section text-slate-600 border-b border-slate-200 pb-6"
    >
      <h2 className="section-title text-2xl text-amber-600">Projects</h2>
      <p className="section-sub">
        Projects built for clients and data platforms.
      </p>

      <div className="flex flex-col">
        {/* Web apps */}
        <h3 className="text-xl font-semibold mt-10">Web Applications</h3>
        {renderProjects(webProjects)}

        {/* Data engineering */}
        <h3 className="text-xl font-semibold mt-16">
          Data Engineering & Business Intelligence
        </h3>
        ... Learning & Developing
        {renderProjects(dataProjects)}
      </div>
    </section>
  );
}
