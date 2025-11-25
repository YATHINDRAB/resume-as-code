import { CandidateValues } from "@/lib/getCandidateData";

interface ExperienceProps {
  experience: CandidateValues["experience"];
}

export function ExperienceSection({ experience }: ExperienceProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">Experience</h2>
      <div className="space-y-4">
        {experience.roles.map((role, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-base font-semibold">
                  {role.name} · {role.company}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {role.location} · {role.type}
                  {role.remote ? " · Remote" : ""}
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-500">
                {role.start} – {role.end}
              </p>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-700 dark:text-slate-300">
              {role.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
