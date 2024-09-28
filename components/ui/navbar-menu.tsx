"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faProjectDiagram,
  faBriefcase,
  faBook,
  faAward,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Map icons to their corresponding FontAwesome icons
const iconMap = {
  "fa-home": faHome,
  "fa-code": faCode,
  "fa-project-diagram": faProjectDiagram,
  "fa-briefcase": faBriefcase,
  "fa-book": faBook,
  "fa-award": faAward,
  "fa-envelope": faEnvelope,
};

interface MenuProps {
  setActive: (item: string) => void;
}

interface MenuItemProps {
  active?: string | null;
  icon: string; // Icon name passed as a prop
  onClick: () => void; // Handle click to navigate to section
}

export function Menu({ children }: React.PropsWithChildren<MenuProps>) {
  return <ul className="flex justify-around space-x-4">{children}</ul>; // Adjust spacing and layout
}

export function MenuItem({ icon, onClick }: MenuItemProps) {
  return (
    <li
      className="relative flex items-center space-x-2 px-4 py-2 cursor-pointer transition duration-200 hover:text-gray-400 transform hover:scale-125"
      onClick={onClick} // Handle click
    >
      <FontAwesomeIcon
        icon={iconMap[icon]} // Map icon to FontAwesome icon
        className="text-2xl text-black" // Icon size
        title={icon} // Tooltip to show icon name on hover
      />
    </li>
  );
}
