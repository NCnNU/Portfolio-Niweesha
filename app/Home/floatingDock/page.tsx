// app/page.tsx
"use client"; // Ensure this directive is present to mark the file as a client component
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock"; // Ensure the correct import for FloatingDock
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconHome,
  IconCode,
} from "@tabler/icons-react"; // Importing correct icons from @tabler/icons-react

interface FloatingDockProps {
  id: string;
}

const FloatingDockDemo: React.FC<FloatingDockProps> = ({ id }) => {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/niweesha-wijesinghe-ab2812264/",
    },
    {
      title: "Medium",
      icon: <IconBrandMedium className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />,
      href: "https://medium.com/@uniweesha",
    },
    {
      title: "Hackerrank",
      icon: <IconCode className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.hackerrank.com/profile/Niweesha_HM",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/Niwee990519",
    },
  ];

  return (
    <div id={id} className="flex items-center justify-center w-full bg-black py-4">
      {/* Adjusted padding to avoid overlap with other content */}
      <FloatingDock
        mobileClassName="flex flex-row gap-4 justify-center w-full" // Mobile layout with icons in one row
        desktopClassName="flex gap-8" // Desktop layout with gaps between icons
        items={links}
      />
    </div>
  );
};

export default function HomePage() {
  return <FloatingDockDemo id="floating-dock" />;
}
