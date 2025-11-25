import { CandidateValues } from "@/lib/getCandidateData";

interface CertificationsProps {
  certifications: CandidateValues["certifications"];
}

export function CertificationsSection({ certifications }: CertificationsProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">Certifications</h2>
      <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
        {certifications.map((cert, idx) => (
          <li key={idx}>
            <span className="font-medium">{cert.name}</span>
            {cert.issuer && (
              <span className="text-slate-500 dark:text-slate-400">
                {" "}
                – {cert.issuer}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
