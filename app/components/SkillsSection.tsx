import { CandidateValues } from "@/lib/getCandidateData";

interface SkillsProps {
  stack: CandidateValues["stack"];
}

export function SkillsSection({ stack }: SkillsProps) {
  const pill =
    "inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-800 dark:border-slate-700 dark:text-slate-100";

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">Tech Stack</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/40">
          <h3 className="mb-2 text-sm font-medium text-slate-800 dark:text-slate-200">
            Cloud
          </h3>
          <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">
            Provider: {stack.cloud.provider}
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.cloud.services.map((s) => (
              <span key={s} className={pill}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/40">
          <h3 className="mb-2 text-sm font-medium text-slate-800 dark:text-slate-200">
            Automation & IaC
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.automation.iac.map((s) => (
              <span key={s} className={pill}>
                {s}
              </span>
            ))}
          </div>
          <h4 className="mt-3 mb-1 text-xs font-medium text-slate-700 dark:text-slate-300">
            Scripting
          </h4>
          <div className="flex flex-wrap gap-2">
            {stack.automation.scripting.map((s) => (
              <span key={s} className={pill}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/40">
          <h3 className="mb-2 text-sm font-medium text-slate-800 dark:text-slate-200">
            Containers & Orchestration
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.containers.tools.map((s) => (
              <span key={s} className={pill}>
                {s}
              </span>
            ))}
            {stack.containers.orchestration.map((s) => (
              <span key={s} className={pill}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/40">
          <h3 className="mb-2 text-sm font-medium text-slate-800 dark:text-slate-200">
            CI/CD
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.cicd.tools.map((s) => (
              <span key={s} className={pill}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
