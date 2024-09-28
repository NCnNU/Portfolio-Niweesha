"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Increased navbar width */}
      <Navbar className="top-2 w-full max-w-5xl" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Function to scroll to the relevant section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(sectionId); // Set the active section
    }
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 bg-white shadow-lg rounded-lg", // Navbar styling and increased width
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem
          active={active}
          icon="fa-home"
          onClick={() => scrollToSection("home")} // Link to 'Home' section
        />
        <MenuItem
          active={active}
          icon="fa-code"
          onClick={() => scrollToSection("cardSpotlight")} // Link to 'My Skills' section
        />
        <MenuItem
          active={active}
          icon="fa-project-diagram"
          onClick={() => scrollToSection("project")} // Link to 'Project' section
        />
        <MenuItem
          active={active}
          icon="fa-briefcase"
          onClick={() => scrollToSection("what-i-offer")} // Link to 'What I Offer' section
        />
        <MenuItem
          active={active}
          icon="fa-book"
          onClick={() => scrollToSection("my-publications")} // Link to 'My Publications' section
        />
        <MenuItem
          active={active}
          icon="fa-award"
          onClick={() => scrollToSection("achievements-certifications")} // Link to 'Achievements & Certifications' section
        />
        <MenuItem
          active={active}
          icon="fa-envelope"
          onClick={() => scrollToSection("contact-me")} // Link to 'Contact Me' section
        />
      </Menu>
    </div>
  );
}
