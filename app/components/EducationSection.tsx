import { CandidateValues } from "@/lib/getCandidateData";

interface EducationProps {
  education: CandidateValues["education"];
}

export function EducationSection({ education }: EducationProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">Education</h2>
      <div className="space-y-3">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {edu.level} – {edu.institution}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              CGPA: {edu.cgpa} · Year of completion: {edu.yearOfCompletion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
