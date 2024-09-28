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
        "fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 bg-white bg-opacity-30 shadow-lg rounded-lg", // Changed background color to black and added transparency
        className
      )}
    
    >
      <Menu setActive={setActive}>
        <MenuItem
          active={active}
          icon="fa-home"
          onClick={() => scrollToSection("home")} 
        />
        <MenuItem
          active={active}
          icon="fa-code"
          onClick={() => scrollToSection("cardSpotlight")} 
        />
        <MenuItem
          active={active}
          icon="fa-project-diagram"
          onClick={() => scrollToSection("project")} 
        />
        <MenuItem
          active={active}
          icon="fa-briefcase"
          onClick={() => scrollToSection("what-i-offer")} 
        />
        <MenuItem
          active={active}
          icon="fa-book"
          onClick={() => scrollToSection("my-publications")} 
        />
        <MenuItem
          active={active}
          icon="fa-award"
          onClick={() => scrollToSection("achievements-certifications")} 
        />
        <MenuItem
          active={active}
          icon="fa-envelope"
          onClick={() => scrollToSection("contact-me")} 
        />

<MenuItem
  active={active}
  icon="fa-globe"  // Chain link icon
  onClick={() => scrollToSection("Links")} 
/>

      </Menu>

    </div>
  );
}
