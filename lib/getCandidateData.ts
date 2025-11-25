import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export interface CandidateValues {
  candidate: {
    name: string;
    title: string;
    location: string;
    availability: string;
    dateOfBirth: string;
    summary: string;
    contact: {
      email: string;
      phone: string;
    };
    profiles?: {
      linkedin?: string | null;
      github?: string | null;
      portfolio?: string | null;
    };
  };
  experience: {
    totalYears: number;
    roles: {
      name: string;
      company: string;
      location: string;
      type: string;
      remote: boolean;
      start: string;
      end: string;
      highlights: string[];
    }[];
  };
  stack: {
    cloud: {
      provider: string;
      services: string[];
    };
    automation: {
      iac: string[];
      scripting: string[];
    };
    containers: {
      tools: string[];
      orchestration: string[];
    };
    cicd: {
      tools: string[];
    };
  };
  education: {
    institution: string;
    level: string;
    cgpa: number;
    yearOfCompletion: number;
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: number | null;
  }[];
  leadership: {
    roles: string[];
    memberships: string[];
    volunteering: string[];
  };
  preferences: {
    workMode: string;
    rolesOfInterest: string[];
    locationsPreferred: string[];
  };
  metadata: {
    version: string;
    lastUpdated: string;
    source: string;
  };
}

export function getCandidateData(): CandidateValues {
  const filePath = path.join(process.cwd(), "data", "values.yaml");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = yaml.load(fileContents) as CandidateValues;
  return data;
}
