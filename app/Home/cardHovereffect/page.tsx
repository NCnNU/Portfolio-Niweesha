"use client";

import CardHoverEffect from "../../../components/ui/card-hover-effect";

import {
  FaCode,
  FaPaintBrush,
  FaCogs,
  FaCamera,
  FaProjectDiagram,
  FaWindows,
} from "react-icons/fa"; // Importing icons

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Reduced margin below the title */}
      <h1 className="text-3xl font-bold text-center mb-4">What I Offer</h1>
      {/* Reduced padding in the card grid */}
      <CardHoverEffect items={projects} />
    </div>
  );
}

const projects = [
  {
    icon: <FaCode size={40} className="text-indigo-600 mb-4" />, // Icon for Web Development
    title2: "Web Development",
    description:
      "Building responsive, high-performance dynamic websites and web applications using modern technologies.",
    link: "https://stripe.com",
  },
  {
    icon: <FaPaintBrush size={40} className="text-pink-500 mb-4" />, // Icon for UI/UX Design
    title2: "UI/UX Design",
    description:
      "Crafting intuitive and visually captivating user interfaces using Figma to elevate user experiences and ensure seamless interactions.",
    link: "https://www.figma.com/files/team/1285524015496311718/recents-and-sharing/recently-viewed?fuid=1285524011570901144",
  },
  {
    icon: <FaCogs size={40} className="text-blue-500 mb-4" />, // Icon for Software Engineering
    title2: "Software Engineering",
    description:
      "Building scalable and efficient software solutions using modern programming practices and technologies.",
    link: "https://google.com",
  },
  {
    icon: <FaCamera size={40} className="text-green-500 mb-4" />, // Icon for Photo/Video Editing
    title2: "Photo/Video Editing",
    description:
      "Creating and editing high-quality visuals and videos that effectively communicate",
    link: "https://meta.com",
  },
  {
    icon: <FaProjectDiagram size={40} className="text-yellow-500 mb-4" />, // Icon for Project Management
    title2: "Project Management",
    description:
      "Delivering well-organized, timely, and cost-effective projects through effective planning and team coordination.",
    link: "https://amazon.com",
  },
  {
    icon: <FaWindows size={40} className="text-purple-600 mb-4" />, // Icon for Software and Electronics
    title2: "Software and Electronics",
    description:
      "Develops software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
