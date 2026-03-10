export default function About() {
  return (
    <section
      id="about"
      className="section text-slate-600 border-b border-slate-200 pb-6 pt-6"
    >
      <div className="w-full mx-auto">
        <h2 className="section-title text-2xl text-amber-600 mb-4">About Me</h2>

        <p className="section-sub text-lg text-neutral-600 leading-relaxed">
          I’m <strong>Radu Bordea</strong> — a developer based in{" "}
          <strong>Bodø, Norway</strong>. I build modern digital products
          including <strong>full-stack web applications</strong>,{" "}
          <strong>data platforms</strong>, and{" "}
          <strong>business intelligence dashboards</strong>.
        </p>

        <p className="mt-5 text-neutral-600 leading-relaxed">
          On the web development side, I build small to medium{" "}
          <strong>full-stack applications</strong> using{" "}
          <strong>
            Next.js, TypeScript, TailwindCSS, Prisma, and Neon/Postgres
          </strong>
          , with secure authentication via <strong>Clerk</strong> or{" "}
          <strong>Next-Auth</strong>. My focus is creating fast, maintainable
          products that provide great user experiences.
        </p>

        <p className="mt-5 text-neutral-600 leading-relaxed">
          I also work with <strong>data engineering</strong> and{" "}
          <strong>business intelligence</strong>. I build data pipelines,
          transform datasets, and create analytics solutions using{" "}
          <strong>Python, Microsoft Fabric, Snowflake</strong>, and{" "}
          <strong>Power BI dashboards</strong> that help businesses turn data
          into actionable insights.
        </p>

        <p className="mt-5 text-neutral-600 leading-relaxed">
          I graduated in <strong>2024</strong> from{" "}
          <strong>Åland University of Applied Sciences</strong> in Mariehamn,
          Finland. During my studies I developed a strong interest in combining{" "}
          <strong>software development</strong> with{" "}
          <strong>data and analytics</strong> to build smarter digital systems.
        </p>

        <p className="mt-5 text-neutral-600 leading-relaxed">
          I speak <strong>English</strong>, <strong>Swedish</strong>, and{" "}
          <strong>Romanian</strong>, and enjoy collaborating with clients and
          teams from different backgrounds.
        </p>

        <p className="mt-5 text-neutral-600 leading-relaxed italic">
          My goal is to build modern, reliable applications and data solutions
          that help businesses grow and make better decisions.
        </p>
      </div>
    </section>
  );
}