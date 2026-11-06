import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { buttonStyles } from "@/components/ui/Button";
import { getProfileSettings } from "@/lib/profile";
import { getPublishedProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";
import { ArrowUpRight, Github, Linkedin, FileText, ExternalLink } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Shivam Shukla — Profile & Engineering Portfolio",
  description: "Founder profile, selected engineering projects, technical focus and professional links.",
  alternates: { canonical: absoluteUrl("/profile") },
  openGraph: {
    title: "Shivam Shukla — Profile & Engineering Portfolio",
    description: "Selected engineering work, technical focus and professional background.",
    url: absoluteUrl("/profile"),
    type: "profile",
    siteName: "SHIVSASTRA",
  },
};

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
    { label: "GitHub", href: profile.githubUrl, icon: Github },
    { label: "LinkedIn", href: profile.linkedinUrl, icon: Linkedin },
    { label: "Contra", href: profile.contraUrl, icon: ExternalLink },
  ].filter((item): item is { label: string; href: string; icon: typeof Github } => Boolean(item.href));

  return (
    <div className="w-full bg-[#F5F2ED] text-[#1A1D20]">
      <section className="border-b border-[#C09F80]/40 py-16 sm:py-20 md:py-28">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-4 max-w-sm mx-auto lg:mx-0 w-full">
              <div className="relative aspect-[4/5] border border-[#C09F80] bg-[#FAF8F5] shadow-[4px_4px_0px_0px_#D7CEC7] overflow-hidden">
                <Image src="/images/shivam-shukla.jpg" alt="Shivam Shukla" fill priority sizes="(max-width: 1024px) 90vw, 400px" className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#76323F]">Founder · Engineer · Builder</p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-normal">{profile.fullName}</h1>
              <p className="font-sans text-lg sm:text-xl text-[#565656] leading-relaxed">{profile.positioningStatement}</p>
              <p className="font-sans text-base text-[#565656] leading-relaxed max-w-2xl">{profile.heroSupportingText}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/resume" className={buttonStyles({ variant: "primary", size: "lg" })}>
                  <FileText className="w-4 h-4" /> View Resume
                </Link>
                <Link href="/contact" className={buttonStyles({ variant: "secondary", size: "lg" })}>Contact</Link>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                {links.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#565656] hover:text-[#76323F] transition-colors">
                    <Icon className="w-4 h-4" /> {label} <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section className="py-16 sm:py-20 border-b border-[#C09F80]/30">
        <SectionContainer>
          <div className="max-w-3xl space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#76323F]">About</p>
            <h2 className="font-display text-3xl sm:text-4xl font-normal">Engineering with clear boundaries between AI and application logic.</h2>
            <p className="font-sans text-base leading-relaxed text-[#565656] whitespace-pre-line">{profile.aboutMarkdown}</p>
          </div>
        </SectionContainer>
      </section>

      <section className="py-16 sm:py-20">
        <SectionContainer>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#76323F]">Selected Work</p>
              <h2 className="font-display text-3xl sm:text-4xl font-normal">Engineering projects</h2>
            </div>
            <Link href="/projects" className="font-mono text-xs uppercase tracking-wider text-[#76323F] hover:text-[#5A1C29]">All projects ↗</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article key={project.id} className="bg-[#FAF8F5] border border-[#C09F80]/70 shadow-[2px_2px_0px_0px_#D7CEC7] flex flex-col">
                {project.coverImageUrl && (
                  <div className="relative aspect-[16/10] border-b border-[#C09F80]/50 bg-[#F5F2ED]">
                    <Image src={project.coverImageUrl} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#76323F]">{project.category || "Engineering Project"}</p>
                    <h3 className="font-display text-2xl mt-2">{project.title}</h3>
                  </div>
                  {project.summary && <p className="text-sm text-[#565656] leading-relaxed">{project.summary}</p>}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.slice(0, 5).map((tech) => <span key={tech} className="font-mono text-[10px] px-2 py-1 border border-[#D7CEC7] text-[#565656]">{tech}</span>)}
                  </div>
                  <div className="flex gap-4 pt-2 text-xs font-mono uppercase tracking-wider">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#76323F] hover:underline">Live <ArrowUpRight className="inline w-3 h-3" /></a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#565656] hover:text-[#76323F]">Source <ArrowUpRight className="inline w-3 h-3" /></a>}
                    <Link href={`/projects/${project.slug}`} className="text-[#565656] hover:text-[#76323F]">Case study ↗</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {projects.length === 0 && <p className="text-sm text-[#565656]">Selected projects are being prepared for publication.</p>}
        </SectionContainer>
      </section>
    </div>
  );
}
