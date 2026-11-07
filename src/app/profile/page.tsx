import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { buttonStyles } from "@/components/ui/Button";
import { getProfileSettings } from "@/lib/profile";
import { getPublishedProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";
import {
  ArrowUpRight,
  Code as Code2,
  LinkSimple as LinkIcon,
  FileText,
  ArrowSquareOut as ExternalLink,
  Briefcase,
  GraduationCap,
  Cpu,
  Database,
  Cloud,
  TerminalWindow,
  EnvelopeSimple,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Shivam Shukla — Profile & Engineering Portfolio",
  description:
    "AI Systems Engineer & Backend Developer. Professional profile, technical skills matrix, verified experience at Nexvia and Soft Pro, education, and resume.",
  alternates: { canonical: absoluteUrl("/profile") },
  openGraph: {
    title: "Shivam Shukla — Profile & Engineering Portfolio",
    description:
      "AI Systems Engineer & Backend Developer. Verified skills, production experience, and engineering case studies.",
    url: absoluteUrl("/profile"),
    type: "profile",
    siteName: "SHIVSASTRA",
  },
};

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java (17/21)", "TypeScript", "JavaScript (ES6+)", "Python", "SQL (PostgreSQL/MySQL)"],
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    skills: [
      "Agentic Tool Orchestration",
      "Groq API (Llama 3)",
      "RAG Pipelines",
      "Whisper Turbo",
      "Prompt Guardrails",
      "Deterministic Decision Layers",
    ],
  },
  {
    title: "Backend Engineering",
    icon: TerminalWindow,
    skills: [
      "Spring Boot 3",
      "Next.js 16 (App Router)",
      "RESTful API Architecture",
      "Hibernate ORM / Spring Data JPA",
      "WebSockets / STOMP",
      "JWT Rotation & Spring Security",
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: [
      "PostgreSQL 17",
      "Neon Serverless",
      "Supabase (Postgres & RLS)",
      "MySQL",
      "Redis (Upstash)",
      "Relational Data Modeling",
    ],
  },
  {
    title: "Cloud, DevOps & Tooling",
    icon: Cloud,
    skills: [
      "Docker & Containers",
      "Cloudflare Turnstile",
      "Vercel Deployment",
      "Git & GitHub Actions",
      "Postman API Testing",
      "Playwright End-to-End",
    ],
  },
];

const VERIFIED_EXPERIENCE = [
  {
    role: "AI / ML Intern",
    company: "Nexvia Technologies",
    period: "Oct 2026 – Present",
    location: "Remote",
    highlights: [
      "Engineering production-grade AI/ML workflows and autonomous agent tooling.",
      "Collaborating on deterministic tool integration, latency optimization, and automated testing.",
      "Adhering to strict input sanitization, data privacy, and zero-retention developer standards.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Soft Pro",
    period: "Jul 2025 – Sep 2025",
    location: "Noida, India",
    highlights: [
      "Architected backend REST APIs using Java 17, Spring Boot 3, MySQL, and Hibernate ORM.",
      "Reduced API response latency by ~20% through indexed query optimizations and connection tuning.",
      "Constructed comprehensive Postman regression test suites and resolved 15+ backend defects.",
    ],
  },
];

export default async function ProfilePage() {
  const [profile, allProjects] = await Promise.all([
    getProfileSettings(),
    getPublishedProjects(),
  ]);

  const allowedSlugs = ["inbox", "yojna-setu", "quickeats"];
  const projects = allProjects
    .filter((project) => allowedSlugs.includes(project.slug))
    .sort((a, b) => allowedSlugs.indexOf(a.slug) - allowedSlugs.indexOf(b.slug));

  const links = [
    { label: "GitHub", href: profile.githubUrl || "https://github.com/shivam-shukla888", icon: Code2 },
    { label: "LinkedIn", href: profile.linkedinUrl || "https://www.linkedin.com/in/shivam-shukla-186276374/", icon: LinkIcon },
    { label: "Contra", href: profile.contraUrl, icon: ExternalLink },
  ].filter((item): item is { label: string; href: string; icon: typeof Code2 | typeof LinkIcon | typeof ExternalLink } => Boolean(item.href));

  return (
    <div className="w-full bg-[#F5F2ED] text-[#1A1D20]">
      {/* 1. HERO PROFILE INTRODUCTION */}
      <section className="relative border-b border-[#C09F80]/40 py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Warm atmospheric light wash */}
        <div className="hero-glow-warm pointer-events-none" />
        <div className="hero-glow-right pointer-events-none" />

        <SectionContainer className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-4 max-w-sm mx-auto lg:mx-0 w-full">
              {/* Double Hairline Luxury Portrait Frame */}
              <div className="p-1.5 border border-[#D7CEC7] bg-[#FAF8F5] shadow-[6px_6px_0px_0px_#C09F80] group">
                <div className="relative aspect-[4/5] border border-[#D7CEC7] bg-[#1A1D20] overflow-hidden">
                  <Image
                    src="/images/shivam-shukla.jpg"
                    alt="Shivam Shukla"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-semibold shadow-[1px_1px_0px_0px_#C09F80]">
                <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
                <span>AI Systems &amp; Backend Software Engineer</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-normal text-[#1A1D20]">
                {profile.fullName}
              </h1>

              <p className="font-sans text-lg sm:text-xl text-[#565656] leading-relaxed">
                Specializing in production Agentic AI workflows, high-throughput backend services, and resilient web platforms. Committed to strict architectural separation: <strong className="text-[#1A1D20] font-semibold">&ldquo;AI Extracts. Code Decides.&rdquo;</strong>
              </p>

              <p className="font-sans text-sm sm:text-base text-[#565656] leading-relaxed max-w-2xl">
                B.Tech in Computer Science &amp; Engineering graduate (2026) with production experience across Java, Spring Boot 3, TypeScript, Next.js, PostgreSQL, Docker, and LLM orchestration with Groq and Llama 3.
              </p>

              {/* Authoritative Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/resume.pdf"
                  download="Shivam_Shukla_Resume.pdf"
                  className={buttonStyles({
                    variant: "primary",
                    size: "lg",
                    className: "bg-[#76323F] hover:bg-[#5a2530] text-[#FAF8F5] border-none shadow-[2px_2px_0px_0px_#C09F80]",
                  })}
                >
                  <FileText className="w-4 h-4 mr-1.5" />
                  <span>Download Resume (PDF)</span>
                </a>

                <Link
                  href="/resume"
                  className={buttonStyles({
                    variant: "secondary",
                    size: "lg",
                    className: "border-[#D7CEC7] bg-[#FAF8F5] text-[#1A1D20] hover:border-[#76323F]",
                  })}
                >
                  <span>View Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-[#76323F]" />
                </Link>

                <Link
                  href="/contact"
                  className={buttonStyles({
                    variant: "secondary",
                    size: "lg",
                    className: "border-[#D7CEC7] bg-[#FAF8F5] text-[#1A1D20] hover:border-[#76323F]",
                  })}
                >
                  <EnvelopeSimple className="w-4 h-4 mr-1.5" />
                  <span>Contact</span>
                </Link>
              </div>

              {/* Verified Links */}
              <div className="flex flex-wrap gap-5 pt-2 font-mono text-xs text-[#565656]">
                {links.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#565656] hover:text-[#76323F] transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#76323F]" />
                    <span>{label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#565656]" />
                  </a>
                ))}
                <span className="text-[#565656]">Location: India</span>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 2. TECHNICAL SKILLS MATRIX */}
      <section className="py-16 sm:py-20 border-b border-[#C09F80]/30 bg-[#FFFFFF]">
        <SectionContainer>
          <div className="space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
                <span>Technical Capabilities</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#1A1D20]">
                Technical Skills Grouped by Domain
              </h2>
              <p className="font-sans text-base text-[#565656] max-w-2xl">
                Verified hands-on competencies deployed across production web applications, backend services, and autonomous agent systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_CATEGORIES.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.title}
                    className="p-6 bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] transition-all duration-200 group space-y-4"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-[#D7CEC7]">
                      <div className="w-8 h-8 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#D7CEC7] group-hover:border-[#76323F] shadow-[1px_1px_0px_0px_#C09F80] flex items-center justify-center shrink-0 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display text-lg font-normal text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-xs font-mono text-[#565656]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#76323F] shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 3. VERIFIED EXPERIENCE & EDUCATION */}
      <section className="py-16 sm:py-20 border-b border-[#C09F80]/30 bg-[#F5F2ED]">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Production Experience */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-semibold shadow-[1px_1px_0px_0px_#C09F80]">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Work Experience</span>
                </div>
                <h2 className="font-display text-3xl font-normal text-[#1A1D20]">
                  Production Experience
                </h2>
              </div>

              <div className="space-y-6">
                {VERIFIED_EXPERIENCE.map((item) => (
                  <div
                    key={`${item.company}-${item.role}`}
                    className="p-6 bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#C09F80] transition-all duration-200 group space-y-3"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="font-display text-xl font-normal text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                          {item.role}
                        </h3>
                        <p className="font-sans text-sm font-semibold text-[#76323F]">
                          {item.company}
                        </p>
                      </div>
                      <div className="text-right font-mono text-xs text-[#565656]">
                        <div>{item.period}</div>
                        <div className="text-[11px] text-[#565656]/80">{item.location}</div>
                      </div>
                    </div>

                    <ul className="space-y-1.5 pt-2 border-t border-[#D7CEC7] text-xs font-sans text-[#565656]">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#76323F] font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Education & Philosophy */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-semibold shadow-[1px_1px_0px_0px_#C09F80]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Academic Credentials</span>
                </div>
                <h2 className="font-display text-3xl font-normal text-[#1A1D20]">
                  Education
                </h2>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] transition-colors space-y-3">
                <span className="font-mono text-xs font-bold text-[#76323F] uppercase tracking-wider block">
                  Bachelor of Technology
                </span>
                <h3 className="font-display text-xl font-normal text-[#1A1D20]">
                  Computer Science &amp; Engineering
                </h3>
                <p className="font-sans text-sm text-[#565656]">
                  SRMS College of Engineering, Technology &amp; Research
                </p>
                <div className="font-mono text-xs text-[#565656] pt-1">
                  Duration: 2022 – 2026
                </div>
                <p className="font-sans text-xs text-[#565656] leading-relaxed pt-2 border-t border-[#D7CEC7]">
                  Rigorous focus on data structures, relational database architecture, distributed systems, operating systems, and computer networks.
                </p>
              </div>

              <div className="p-6 bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] transition-colors space-y-3">
                <span className="font-mono text-xs font-bold text-[#76323F] uppercase tracking-wider block">
                  Core Engineering Ethos
                </span>
                <h3 className="font-display text-lg font-normal text-[#1A1D20]">
                  AI Extracts. Code Decides.
                </h3>
                <p className="font-sans text-xs text-[#565656] leading-relaxed">
                  Probabilistic models excel at parsing unstructured text, intent, and parameters. However, business math, database operations, authorizations, and financial state transitions must always be executed by deterministic, test-covered code.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* 4. SELECTED CLIENT CASE STUDIES */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <SectionContainer>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5] text-[#76323F] border border-[#C09F80]/50 text-xs font-mono font-semibold shadow-[1px_1px_0px_0px_#C09F80]">
                <span className="w-1.5 h-1.5 rounded-none bg-[#76323F]" />
                <span>Featured Systems</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#1A1D20]">
                Featured Client Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-wider font-semibold text-[#76323F] hover:text-[#5A1C29] inline-flex items-center gap-1.5"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-[#FAF8F5] border border-[#D7CEC7] shadow-[2px_2px_0px_0px_#D7CEC7] hover:border-[#76323F] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#C09F80] transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {project.coverImageUrl && (
                    <div className="p-1 border-b border-[#D7CEC7] bg-[#F5F2ED]">
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1D20]">
                        <Image
                          src={project.coverImageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#76323F] font-semibold">
                        {project.category || "Engineering Project"}
                      </p>
                      <h3 className="font-display text-2xl mt-1 text-[#1A1D20] group-hover:text-[#76323F] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.summary && (
                      <p className="font-sans text-xs text-[#565656] leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2 py-0.5 border border-[#D7CEC7] bg-[#FAF8F5] text-[#565656]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#D7CEC7] mt-4 flex items-center justify-between text-xs font-mono">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-semibold text-[#76323F] hover:text-[#5A1C29] inline-flex items-center gap-1"
                  >
                    <span>Read Monograph</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#565656] hover:text-[#1A1D20] inline-flex items-center gap-1"
                    >
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* 5. INTERVIEW / COLLABORATION CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-[#1A1D20] text-[#F5F2ED] border-t border-[#C09F80]/30">
        <SectionContainer>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#FAF8F5]/10 text-[#C09F80] border border-[#C09F80]/40 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-none bg-[#C09F80]" />
              <span>INTERVIEW &amp; COLLABORATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#F5F2ED]">
              Let&rsquo;s discuss an engineering opportunity.
            </h2>
            <p className="font-sans text-base text-[#D7CEC7] leading-relaxed">
              Whether you are evaluating candidates for software engineering and AI systems roles, or looking to engineer a custom backend platform, I welcome direct conversations.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={buttonStyles({ variant: "primary", size: "lg" })}
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Link>
              <a
                href="mailto:theshivamshukla.4uu@gmail.com"
                className={buttonStyles({ variant: "dark-inverse", size: "lg" })}
              >
                <span>theshivamshukla.4uu@gmail.com</span>
              </a>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}
