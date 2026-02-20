import Image, { type StaticImageData } from "next/image";
import store from "../public/assets/store.png";
import panoramax from "../public/assets/panoramax.png";
import beehives from "../public/assets/beehives.png";
import itportfolio from "../public/assets/itportfolio.png";
import expensetracker from "../public/assets/expensetracker.png";
import model from "../public/assets/model.png";
import seasafety from "../public/assets/seasafety.png";

const images: Record<
  "store" | "panoramax" | "beehives" | "expensetracker" | "itportfolio" | "model" | "seasafety",
  StaticImageData
> = {
  store,
  panoramax,
  beehives,
  expensetracker,
  itportfolio,
  model,
  seasafety
};

import { projects } from "@/data/projects";

export default function Work() {
  return (
    <section
      id="work"
      className="section text-slate-600 border-b border-slate-200 pb-6"
    >
      <h2 className="section-title text-2xl text-amber-600">Selected Work</h2>
      <p className="section-sub">
        A few real and demo projects I can show live.
      </p>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((p) => {
            const imgKey = p.image ?? "itportfolio"; // fallback
            const imgSrc = images[imgKey];

            return (
              <div
                key={p.title}
                className="card bg-slate-200 border rounded-2xl shadow-sm hover:shadow-xl overflow-hidden transition"
              >
                {/* Image flush with card edges + hover zoom */}
                <div className="w-full h-48 overflow-hidden group">
                  <Image
                    src={imgSrc}
                    alt={p.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    priority={false}
                  />
                </div>

                {/* Card content */}
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
      </div>
    </section>
  );
}
