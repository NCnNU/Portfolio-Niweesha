
"use client";
import { HoverEffect } from "../../../components/ui/card-hover-effect";
import { Project } from "../../../components/ui/card-hover-effect"; // Adjust the path as necessary


export function CardHoverEffectDemo2() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">My Technical Skills</h1>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects: Project[] = [
  {
    title: "Programming Languages",
    description:
      "Proficient in programming languages that allow building robust applications.",
    link: "https://stripe.com",
    leftSubtitle1: "🔵 C",
    leftSubtitle2: "☕ Java",
    rightSubtitle1: "📜 JavaScript",
    rightSubtitle2: "🟦 TypeScript",
  },
  {
    title: "Web Development",
    description:
      "Experienced in modern web development frameworks and tools.",
    link: "https://www.figma.com/files/team/1285524015496311718/recents-and-sharing/recently-viewed?fuid=1285524011570901144",
    leftSubtitle1: "🟠 Node.js",
    leftSubtitle2: "🌐 HTML",
    rightSubtitle1: "⚛️ React",
    rightSubtitle2: "🔷 Next.js",
  },
  {
    title: "Databases",
    description:
      "Skilled in various relational and non-relational database management systems.",
    link: "https://google.com",
    leftSubtitle1: "🗄️ MySQL",
    leftSubtitle2: "🗂️ MSSQL",
    rightSubtitle1: "🍃 MongoDB",
    rightSubtitle2: "🐘 PostgreSQL",
  },
  {
    title: "Project Management Tools",
    leftSubtitle1: "📋 Jira",
    leftSubtitle2: "✅ ClickUp",
    rightSubtitle1: "",
    rightSubtitle2: "",
  },
  {
    title: "Version Control",
    leftSubtitle1: "🌳 Git",
    leftSubtitle2: "",
    rightSubtitle1: "",
    rightSubtitle2: "",
  },
  {
    title: "Other Tools",
    description:
      "Experienced in using design and editing tools.",
    link: "https://microsoft.com",
    leftSubtitle1: "🖼️ Photoshop",
    leftSubtitle2: "🎨 Figma",
    rightSubtitle1: "",
    rightSubtitle2: "",
  },
];
