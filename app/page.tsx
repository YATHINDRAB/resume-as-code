import { getCandidateData } from "@/lib/getCandidateData";
import { Hero } from "./components/Hero";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { EducationSection } from "./components/EducationSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Page() {
  const data = getCandidateData();

  return (
    <div className="space-y-6">
      <header className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Resume as Code
        </span>
        <ThemeToggle />
      </header>

      <Hero candidate={data.candidate} preferences={data.preferences} />
      <SkillsSection stack={data.stack} />
      <ExperienceSection experience={data.experience} />
      <EducationSection education={data.education} />
      <CertificationsSection certifications={data.certifications} />
      <LeadershipSection leadership={data.leadership} />

      <footer className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800">
        <p>values.yaml v{data.metadata.version}</p>
        <p>Last updated: {data.metadata.lastUpdated}</p>
      </footer>
    </div>
  );
}
