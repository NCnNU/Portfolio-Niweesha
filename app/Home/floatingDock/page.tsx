"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconHome,
  IconCode,
} from "@tabler/icons-react"; // Import the correct icons for each link

interface FloatingDockProps {
  id: string;
}

const FloatingDockDemo: React.FC<FloatingDockProps> = ({ id }) => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-10 w-10 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-10 w-10 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/niweesha-wijesinghe-ab2812264/",
    },
    {
      title: "Medium",
      icon: (
        <IconBrandMedium className="h-12 w-12 text-neutral-500 dark:text-neutral-300" />
      ), // Made the Medium icon bigger by increasing h-12 w-12
      href: "https://medium.com/@uniweesha",
    },
    {
      title: "Hackerrank",
      icon: (
        <IconCode className="h-10 w-10 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.hackerrank.com/profile/Niweesha_HM",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-10 w-10 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Niwee990519",
    },
  ];

  return (
    <div id={id} className="flex items-center justify-center w-full bg-black lg:-mt-14 md:-mt-14 sm:-mt-14">
      {/* Background color set to black */}
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
};

export default FloatingDockDemo;
