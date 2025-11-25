import { CandidateValues } from "@/lib/getCandidateData";

interface HeroProps {
  candidate: CandidateValues["candidate"];
  preferences: CandidateValues["preferences"];
}

export function Hero({ candidate, preferences }: HeroProps) {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {candidate.name}
          </h1>
          <p className="mt-1 text-lg text-slate-700 dark:text-slate-300">
            {candidate.title} · {preferences.workMode}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {candidate.location} · Availability: {candidate.availability}
          </p>
        </div>
        <div className="text-sm text-slate-700 dark:text-slate-300">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href={`mailto:${candidate.contact.email}`}
              className="underline hover:no-underline"
            >
              {candidate.contact.email}
            </a>
          </p>
          <p>
            <span className="font-medium">Phone:</span> {candidate.contact.phone}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {candidate.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="/Yathindra_Bolloju_Resume.pdf"
          download
          className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow hover:bg-indigo-500"
        >
          ⬇ Download PDF Resume
        </a>

        <a
          href={`mailto:${candidate.contact.email}`}
          className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          ✉ Email Me
        </a>
      </div>
    </section>
  );
}
