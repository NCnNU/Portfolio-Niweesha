"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const NavbarDemo: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Navbar with increased width */}
      <Navbar className="top-2 w-full max-w-5xl" />
    </div>
  );
}
export default NavbarDemo;

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
    <>
      {/* Desktop and Tablet View */}
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 shadow-lg rounded-lg bg-white bg-opacity-30 backdrop-blur-md hidden md:block",
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
            icon="fa-globe"
            onClick={() => scrollToSection("Links")}
          />
        </Menu>
      </div>

      {/* Mobile View */}
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 shadow-lg rounded-lg bg-white bg-opacity-30 backdrop-blur-md block md:hidden",
          className
        )}
      >
        <Menu setActive={setActive} className="flex justify-around space-x-0"> {/* Reduced space-x-4 to space-x-1 */}
          <MenuItem
            active={active}
            icon="fa-home"
            onClick={() => scrollToSection("home")}
            className="text-xs" // Smaller icon size
          />
          <MenuItem
            active={active}
            icon="fa-code"
            onClick={() => scrollToSection("cardSpotlight")}
            className="text-xs" // Smaller icon size
          />
          <MenuItem
            active={active}
            icon="fa-project-diagram"
            onClick={() => scrollToSection("project")}
            className="text-xs" // Smaller icon size
          />
          <MenuItem
            active={active}
            icon="fa-briefcase"
            onClick={() => scrollToSection("what-i-offer")}
            className="text-xs" // Smaller icon size
          />
          <MenuItem
            active={active}
            icon="fa-book"
            onClick={() => scrollToSection("my-publications")}
            className="text-xs" // Smaller icon size
          />
          <MenuItem
            active={active}
            icon="fa-award"
            onClick={() => scrollToSection("achievements-certifications")}
            className="text-xs" // Smaller icon size
          />
          <MenuItem
            active={active}
            icon="fa-envelope"
            onClick={() => scrollToSection("contact-me")}
            className="text-xs" // Smaller icon size
          />
          <MenuItem
            active={active}
            icon="fa-globe"
            onClick={() => scrollToSection("Links")}
            className="text-xs" // Smaller icon size
          />
        </Menu>
      </div>
    </>
  );
}
