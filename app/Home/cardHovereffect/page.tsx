"use client";
import { HoverEffect } from "../../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">What I Offer</h1>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title1: "< / >",
    title2: "Web Development",
    description:
      "Building dynamic websites and web applications using modern technologies.",
    link: "https://stripe.com",
  },
  {
    title1: "UI/UX",
    title2: "UI/UX Design",
    description:
      "A streaming service offering a wide variety of award-winning TV shows, movies, anime, and documentaries.",
    link: "https://www.figma.com/files/team/1285524015496311718/recents-and-sharing/recently-viewed?fuid=1285524011570901144",
  },
  {
    title1: "SE",
    title2: "Software Engineering",
    description:
      "Specializes in Internet-related services like search engines, cloud computing, and more.",
    link: "https://google.com",
  },
  {
    title1: "Meta",
    title2: "Photo /Video Editing",
    description:
      "Focused on building products that advance Facebook's mission of connecting the world.",
    link: "https://meta.com",
  },
  {
    title1: "Amazon",
    title2: "E-Commerce and AI",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, and AI.",
    link: "https://amazon.com",
  },
  {
    title1: "Microsoft",
    title2: "Software and Electronics",
    description:
      "Develops software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
