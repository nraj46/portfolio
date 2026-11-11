import { EXPERIENCE, PROFILE, PROJECTS, SERVICES, SKILL_GROUPS, STATS } from "@/data";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO / ABOUT */}
      <section id="about" className="scroll-mt-24 py-14 sm:py-20">
        <p className="text-sm font-medium text-cyan-400">📍 {PROFILE.location}</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {PROFILE.name}
        </h1>
        <p className="mt-2 text-xl font-medium text-slate-300 sm:text-2xl">{PROFILE.title}</p>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {PROFILE.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-cyan-500 px-5 py-2.5 font-medium text-slate-950 hover:bg-cyan-400"
          >
            View Projects
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-700 px-5 py-2.5 text-slate-200 hover:bg-slate-800"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-700 px-5 py-2.5 text-slate-200 hover:bg-slate-800"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-md border border-slate-700 px-5 py-2.5 text-slate-200 hover:bg-slate-800"
          >
            Email
          </a>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 px-5 py-4"
            >
              <dt className="order-2 mt-1 text-sm text-slate-400">{s.label}</dt>
              <dd className="order-1 text-3xl font-bold text-cyan-400">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 border-t border-slate-800 py-14">
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <div className="grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <h3 className="mb-3 font-semibold text-slate-100">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-24 border-t border-slate-800 py-14">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <ol className="relative space-y-8 border-l border-slate-800 pl-6">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <span className="text-sm text-cyan-400">{job.role}</span>
              </div>
              <p className="mt-0.5 text-sm text-slate-500">
                {job.location} · {job.period}
              </p>
              <p className="mt-2 max-w-3xl leading-relaxed text-slate-400">{job.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 border-t border-slate-800 py-14">
        <SectionHeading eyebrow="Projects" title="Live apps I've built" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-cyan-500/40"
            >
              <h3 className="font-semibold text-slate-50">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-medium text-cyan-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4 border-t border-slate-800 pt-3 text-sm">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-cyan-400 hover:text-cyan-300"
                >
                  Live demo ↗
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-white"
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 border-t border-slate-800 py-14">
        <SectionHeading eyebrow="Services" title="What I can build for you" />
        <div className="grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <h3 className="font-semibold text-slate-50">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6 text-center">
          <p className="text-lg font-medium">Have a project in mind?</p>
          <p className="mt-1 text-sm text-slate-400">
            Tell me what you're building — I'll reply with a plan and a timeline.
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-4 inline-block rounded-md bg-cyan-500 px-5 py-2.5 font-medium text-slate-950 hover:bg-cyan-400"
          >
            Email me
          </a>
        </div>
      </section>
    </>
  );
}
