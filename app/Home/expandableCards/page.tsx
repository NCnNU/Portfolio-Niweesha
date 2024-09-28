"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface ExpandableCardProps {
  id: string;
}

const ExpandableCardDemo: React.FC<ExpandableCardProps> = ({ id }) => {
  const [active, setActive] = useState<Card | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const ids = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${ids}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${ids}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden spotlight-effect"
            >
              <div className="p-4">
                <h3 className="font-bold text-neutral-700 dark:text-neutral-200">{active.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{active.description}</p>
              </div>
              <div className="pt-4 relative px-4">
                <a href={active.src} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    className="text-neutral-200 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4"
                  >
                    {/* Displaying PDF content */}
                    <span>Click to view PDF</span>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div id={id} className="max-w-7xl mx-auto mt-8 flex flex-col items-center relative "style={{ height: '100vh' }}>
        <br />
        <h2 className="text-3xl font-bold mb-10 mt-20 text-center ">What I Achieved</h2>
        <br /><br />
        <div className="flex justify-between items-start w-full">
          <div className="flex-1">
            <ul className="space-y-4">
              {achievements.map((card) => (
                <motion.div
                  layoutId={`card-${card.title}-${ids}`}
                  key={`card-${card.title}-${ids}`}
                  onClick={() => setActive(card)}
                  className="p-4 flex flex-col justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer spotlight-effect"
                >
                  <div>
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center">
                      {card.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-center">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-neutral-300 h-full mx-8"></div>

          <div className="flex-1">
            <ul className="space-y-4">
              {certificates.map((card) => (
                <motion.div
                  layoutId={`card-${card.title}-${ids}`}
                  key={`card-${card.title}-${ids}`}
                  onClick={() => setActive(card)}
                  className="p-4 flex flex-col justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer spotlight-effect"
                >
                  <div>
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center">
                      {card.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-center">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpandableCardDemo;

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </motion.svg>
  );
};

interface Card {
  title: string;
  description: string;
  src: string; // Link to the PDF file
  ctaText: string;
  ctaLink: string;
  content: string | (() => React.ReactNode);
}

const achievements: Card[] = [
  {
    title: "HACKMORAL 2024 - 3RD PLACE",
    description: "Organized by University Of Moratuwa 2024",
    src: "/pdf/Hackmora.pdf", // Link to the PDF file
    ctaText: "Learn More",
    ctaLink: "#",
    content: "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
  },
  {
    title: "CODERUSH 2023 - 12TH PLACE",
    description: "Organized by University Of Moratuwa 2023",
    src: "/pdf/coderush-2023.pdf", // Link to the PDF file
    ctaText: "Learn More",
    ctaLink: "#",
    content: "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
  },
  {
    title: "CODERUSH 2022 - 27TH PLACE",
    description: "Organized by University Of Moratuwa 2022",
    src: "/pdf/coderush-2023.pdf", // Link to the PDF file
    ctaText: "Learn More",
    ctaLink: "#",
    content: "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
  },
];

const certificates: Card[] = [
  {
    title: "WEB DEVELOPMENT  I",
    description: "University Of Moratuwa | Open Learning Platform",
    src: "/pdf/Web_Design-1.pdf", // Link to the PDF file
    ctaText: "Learn More",
    ctaLink: "#",
    content: "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
  },
  {
    title: "WEB DEVELOPMENT II",
    description: "University Of Moratuwa | Open Learning Platform",
    src: "/pdf/Web Development - 2.pdf", // Link to the PDF file
    ctaText: "Learn More",
    ctaLink: "#",
    content: "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
  },
  {
    title: "PROGRAMMING IN PYTHON I",
    description: "University Of Moratuwa | Open Learning Platform",
    src: "/public/pdf/Python-1.pdf", // Link to the PDF file
    ctaText: "Learn More",
    ctaLink: "#",
    content: "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
  },
];
