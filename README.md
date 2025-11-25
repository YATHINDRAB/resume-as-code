# 🎯 Resume as Code – DevOps Portfolio (Next.js)

This repository contains my **DevOps resume as code**, rendered as a modern web portfolio built with:

- **Next.js (App Router, TypeScript)**
- **Tailwind CSS**
- **YAML** as the single source of truth (`data/values.yaml`)
- **Resume-driven UI components** (Hero, Skills, Experience, Education, Certifications, Leadership)
- **Dark/Light theme toggle**
- **Downloadable PDF resume**

Infrastructure-as-Code ideas applied to… me. 😄

---

## 🧱 Project Structure

```bash
resume-as-code/
├─ app/
│  ├─ layout.tsx          # Root layout, theme provider wrapper
│  ├─ page.tsx            # Main page reading from values.yaml
│  └─ components/
│     ├─ Hero.tsx
│     ├─ ExperienceSection.tsx
│     ├─ SkillsSection.tsx
│     ├─ EducationSection.tsx
│     ├─ CertificationsSection.tsx
│     ├─ LeadershipSection.tsx
│     └─ ThemeToggle.tsx
├─ data/
│  └─ values.yaml         # Source of truth for all resume data
├─ lib/
│  └─ getCandidateData.ts # YAML loader using js-yaml
├─ public/
│  └─ Yathindra_Bolloju_Resume.pdf  # Downloadable PDF resume
├─ .github/
│  └─ workflows/
│     └─ ci.yml           # CI pipeline (YAML + build checks)
├─ package.json
├─ tailwind.config.ts
├─ tsconfig.json
└─ postcss.config.mjs


🚀 Tech Stack

Framework: Next.js (App Router, TypeScript)

Styling: Tailwind CSS

Theming: next-themes (dark/light mode)

Config / Data: YAML (data/values.yaml)

Linting & CI: GitHub Actions (.github/workflows/ci.yml)

🧠 Concept: Resume as Code

Instead of duplicating data in multiple formats, this project uses data/values.yaml as the single source of truth.

The UI reads from YAML via:
// lib/getCandidateData.ts
const data = yaml.load(fileContents);
That means:

Update one YAML file → entire site updates.

Easy to version, diff, and review.

Treating my resume like configuration/IaC.

Running Locally
# install dependencies
npm install

# start dev server
npm run dev
Then open:
http://localhost:3000

You’ll see:

Hero section with contact, availability, and summary

Tech stack (Cloud, IaC, Automation, Containers, CI/CD)

Experience, Education, Certifications, Leadership

Theme toggle (🌙 / ☀️)

“Download PDF Resume” button (serving from public/Yathindra_Bolloju_Resume.pdf)

Downloadable PDF

The PDF resume is located at:

/public/Yathindra_Bolloju_Resume.pdf

<a href="/Yathindra_Bolloju_Resume.pdf" download>
  ⬇ Download PDF Resume
</a>
✅ CI: YAML Validation & Build

A GitHub Actions workflow is included at:

.github/workflows/ci.yml


It:

Checks out the repo

Sets up Node

Installs dependencies

Validates data/values.yaml using yamllint

Runs npm run build to ensure the app builds successfully

🌐 Deployment (Vercel)

This project is designed to be deployed on Vercel:

Push this repo to GitHub.

Go to Vercel
 → Import Git Repository.

Select this repo.

Use default Next.js settings.

Every push to main will automatically build & deploy.

You can then share the URL (e.g. https://yathindra-devops.vercel.app) with HRs & recruiters.

📬 Contact

Name: Yathindra Bolloju
📍 Hyderabad, India
📧 yathindrab17@gmail.com
📞 +91-9618560664


---
**follow this 2 steps to deploy this code**

## 2️⃣ CI pipeline – validate YAML + build app

Now let’s add a GitHub Actions workflow.

### Step 1: Create the folder & file

In your project root:

- Folder: `.github/workflows/`
- File: `.github/workflows/ci.yml`

### Step 2: Paste this into `ci.yml`

```yaml
name: CI – Validate YAML & Build

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  build-and-validate:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm install

      - name: Validate YAML (values.yaml)
        run: |
          pip install yamllint
          yamllint data/values.yaml

      - name: Build Next.js app
        run: npm run build


What this does:

Triggers on every push to main and on PRs

Installs your Node deps

Installs yamllint via pip

Lints data/values.yaml

Builds your Next.js app

If YAML is broken or build fails → CI will go red ✅

3️⃣ Auto-deploy to Vercel on pushes

The nice part: you don’t actually need a GitHub Action for Vercel.
Vercel integrates directly with GitHub and auto-deploys on push.

Step-by-step:

Make sure your code is pushed to GitHub (which you already did).

Go to https://vercel.com
 and log in with GitHub.

Click “Add New Project” → “Import Git Repository”.

Select your resume-as-code repo.

Vercel will auto-detect Next.js.

Click Deploy.

After initial deploy:

Any push to main will automatically trigger:

Vercel build

New deployment

You can see deployments in the Vercel dashboard.

Optional: nice project name / URL

In Vercel:

Go to Project → Settings → General

Change project name to something like:

yathindra-devops

resume-as-code

Your URL becomes:

https://yathindra-devops.vercel.app

This is the link you share with HR:

“You can also view my DevOps portfolio (Resume as Code) here:
https://yathindra-devops.vercel.app”
