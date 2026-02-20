"use client";

import { useEffect, useState } from "react";
import { Check, Minus } from "lucide-react";

type Currency = "EUR" | "USD";

type FeatureKey =
  | "responsive"
  | "contact"
  | "pictures"
  | "gallery"
  | "auth"
  | "crud"
  | "db"
  | "admin"
  | "maintenance";

const FEATURES: Record<FeatureKey, string> = {
  responsive: "Responsive design + navbar",
  contact: "Contact / socials",
  pictures: "Static Image Gallery",
  gallery: "Editable Gallery",
  auth: "Authentication",
  crud: "CRUD screens",
  db: "Database integration",
  admin: "Admin dashboard / roles",
  maintenance: "Deployment & setup",
};

const PRICING = {
  simple: 500,
  fullstack: 1000,
  custom: 40,
  
};

function FeatureItem({
  label,
  included,
}: {
  label: string;
  included: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-2 ${
        included
          ? "text-slate-800 font-medium"
          : "text-slate-400 line-through"
      }`}
    >
      {included ? (
        <Check className="mt-[2px] h-4 w-4 text-emerald-600 shrink-0" />
      ) : (
        <Minus className="mt-[2px] h-4 w-4 text-slate-300 shrink-0" />
      )}
      <span>{label}</span>
    </li>
  );
}

export default function Packages() {
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [rate, setRate] = useState(1.1); // safe fallback rate

  useEffect(() => {
    async function fetchRate() {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/EUR");
        const data = await res.json();

        if (data?.rates?.USD) {
          setRate(data.rates.USD);
        }
      } catch {
        // silently keep fallback
      }
    }

    fetchRate();
  }, []);

  const formatPrice = (eur: number) => {
    const value = currency === "EUR" ? eur : eur * rate;

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="border-b border-slate-200 py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight text-slate-900">
          Packages
        </h2>

        <p className="text-center text-slate-500 mt-3">
          Clear pricing. No surprises. Built for real businesses.
        </p>

        {/* Currency Toggle */}
        <div className="flex justify-center mt-8">
          <div className="flex rounded-full border border-slate-300 overflow-hidden">
            {(["EUR", "USD"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-6 py-2 text-sm font-medium transition ${
                  currency === c
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-10">

          {/* Simple Landing */}
          <div className="rounded-2xl border border-slate-200 p-10 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-center text-slate-900">
              Simple Landing
            </h3>

            <p className="mt-6 text-4xl font-bold text-center tracking-tight text-slate-900">
              {formatPrice(PRICING.simple)}
            </p>

            <ul className="mt-10 space-y-3 text-sm">
              <FeatureItem label={FEATURES.responsive} included />
              <FeatureItem label={FEATURES.contact} included />
              <FeatureItem label={FEATURES.pictures} included />
              <FeatureItem label={FEATURES.maintenance} included />
              <FeatureItem label={FEATURES.auth} included={false} />
              <FeatureItem label={FEATURES.db} included={false} />
            </ul>
          </div>

          {/* Full-Stack Starter */}
          <div className="rounded-2xl border-2 border-slate-900 p-10 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-center text-slate-900">
              Full-Stack Starter
            </h3>

            <p className="mt-6 text-4xl font-bold text-center tracking-tight text-slate-900">
              {formatPrice(PRICING.fullstack)}
            </p>

            <ul className="mt-10 space-y-3 text-sm">
              <FeatureItem label={FEATURES.responsive} included />
              <FeatureItem label={FEATURES.contact} included />
              <FeatureItem label={FEATURES.gallery} included />
              <FeatureItem label={FEATURES.auth} included />
              <FeatureItem label={FEATURES.db} included />
              <FeatureItem label={FEATURES.crud} included />
              <FeatureItem label={FEATURES.admin} included />
              <FeatureItem label={FEATURES.maintenance} included />
            </ul>
          </div>

          {/* Custom */}
          <div className="rounded-2xl border border-slate-200 p-10 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-center text-slate-900">
              Custom Application
            </h3>

            <p className="mt-6 text-4xl font-bold text-center tracking-tight text-slate-900">
              {formatPrice(PRICING.custom)}
              <span className="text-lg font-medium text-slate-500">
                {" "} / hour
              </span>
            </p>

            <p className="mt-8 text-sm text-slate-600 leading-relaxed text-center">
              Advanced web apps, dashboards, e-commerce, integrations,
              automations and long-term development partnerships.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}