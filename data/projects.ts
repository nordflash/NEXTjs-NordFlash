// data/projects.ts
export type Project = {
  title: string;
  desc: string;
  stack: string[];
  link?: string;
  image?: "store" | "panoramax" | "beehives" | "cleaning";
  // image key
  category: string;
};

export const projects: Project[] = [
  {
    title: "Ecommerce Website",
    desc: "Full-stack ecommerce platform for selling facial creams and women’s beauty products with authentication, cart, checkout, and payments.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Neon (PostgreSQL)",
      "Clerk",
      "Zod",
      "Zustand",
      "Stripe",
      "Vercel",
    ],
    image: "store",
    link: "https://nordflash-mumu-store.vercel.app/",
    category: "web",
  },
  {
    title: "House Rental Site",
    desc: "Rental Propery Landing Page buit with Sanity CMS for gallery and contact, Airbnb links, contact info. This Page was built for a property house in the beauitiful Lofoten Arhipelago, Norway",
    stack: ["Next.js", "Typescript", "TailwindCSS", "Sanity", "Vercel"],
    image: "panoramax",
    link: "https://www.panorama-x-lofoten.com/",
    category: "web",
  },
  {
    title: "Beehive Live Dashboard",
    desc: "Full-stack sensor data website with cron jobs & API polling, live charts, maps, admin dashboard built for Åland' beehives producers (Finland)",
    stack: [
      "Next.js",
      "JavaScript",
      "MongoDB",
      "Next Auth",
      "API routes",
      "Vercel Cron Jobs",
    ],
    image: "beehives",
    link: "https://bidata.site/weight-charts",
    category: "web",
  },
  {
    title: "Cleaning Company Landing Page",
    desc: "This is a Cleaning Company Landing Page website that provides cleaning services for houses or offices in Bucharest, Romania.",
    stack: ["Next.js", "Typescript", "TailwindCSS", "Vercel"],
    image: "cleaning",
    link: "https://nex-tjs-cleaning-company.vercel.app/",
    category: "web"
  },
  // add more as needed...
  // {
  //   title: "Sales Analytics Dashboard",
  //   desc: "Business Intelligence dashboard built with Power BI using Snowflake warehouse.",
  //   image: "store",
  //   stack: ["Snowflake", "Power BI", "SQL"],
  //   link: "",
  //   category: "data",
  // },
];
