import { CandidateValues } from "@/lib/getCandidateData";

interface LeadershipProps {
  leadership: CandidateValues["leadership"];
}

export function LeadershipSection({ leadership }: LeadershipProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">
        Leadership & Activities
      </h2>
      <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-700 dark:text-slate-300">
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
            Roles
          </h3>
          <ul className="space-y-1">
            {leadership.roles.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
            Memberships
          </h3>
          <ul className="space-y-1">
            {leadership.memberships.map((m, i) => (
              <li key={i}>• {m}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
            Volunteering
          </h3>
          <ul className="space-y-1">
            {leadership.volunteering.map((v, i) => (
              <li key={i}>• {v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
