"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface ExpandableCardProps {
  id: string;
}

const ExpandableCardDemo: React.FC<ExpandableCardProps> = ({ id }) => {
  console.log(id);
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
          <div
           
            className="fixed inset-0 grid place-items-center z-[100]"
          >
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
              <motion.div layoutId={`image-${active.title}-${ids}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div id={ids}>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${ids}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${ids}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div  id={id} className="max-w-7xl mx-auto mt-8 flex justify-between items-start relative">
        {/* Left section - Achievements */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4 text-center">Achievements</h2>
          <ul className="space-y-4">
            {achievements.map((card) => (
              <motion.div
                layoutId={`card-${card.title}-${ids}`}
                key={`card-${card.title}-${ids}`}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer spotlight-effect"
              >
                <div className="flex gap-4 flex-col md:flex-row">
                  <motion.div layoutId={`image-${card.title}-${ids}`}>
                    <Image
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div>
                    <motion.h3
                      layoutId={`title-${card.title}-${ids}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${ids}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
        </div>

        {/* Center dividing line */}
        <div className="border-l-2 border-neutral-300 h-full mx-8"></div>

        {/* Right section - Certificates */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4 text-center">Certificates</h2>
          <ul className="space-y-4">
            {certificates.map((card) => (
              <motion.div
                layoutId={`card-${card.title}-${ids}`}
                key={`card-${card.title}-${ids}`}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer spotlight-effect"
              >
                <div className="flex gap-4 flex-col md:flex-row">
                  <motion.div layoutId={`image-${card.title}-${ids}`}>
                    <Image
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div>
                    <motion.h3
                      layoutId={`title-${card.title}-${ids}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${ids}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
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
  src: string;
  ctaText: string;
  ctaLink: string;
  content: string | (() => React.ReactNode);
}

const achievements: Card[] = [
  {
    title: "HACKMORAL 2024 - 3RD PLACE",
    description: "Organized by University Of Moratuwa 2024",
    content:
      "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
    src: "/image/25.jpg",
    ctaText: "Learn More",
    ctaLink: "#",
  },
  {
    title: "CODERUSH 2023 - 12TH PLACE",
    description: "Organized by University Of Moratuwa 2023",
    content:
      "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
    src: "/image/24.jpg",
    ctaText: "Learn More",
    ctaLink: "#",
  },
  {
    title: "CODERUSH 2022 - 27TH PLACE",
    description: "Organized by University Of Moratuwa 2022",
    content:
      "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
    src: "/image/24.jpg",
    ctaText: "Learn More",
    ctaLink: "#",
  },
];

const certificates: Card[] = [
  {
    title: "WEB DEVELOPMENT  I",
    description: "University Of Moratuwa | Open Learning Platform",
    content:
      "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
    src: "/image/20.jpg",
    ctaText: "Learn More",
    ctaLink: "#",
  },
  {
    title: "WEB DEVELOPMENT II",
    description: "University Of Moratuwa | Open Learning Platform",
    content:
      "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
    src: "/image/21.jpg",
    ctaText: "Learn More",
    ctaLink: "#",
  },
  {
    title: "PROGRAMMING IN PYTHON I",
    description: "University Of Moratuwa | Open Learning Platform",
    content:
      "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
    src: "/image/22.jpg",
    ctaText: "Learn More",
    ctaLink: "#",
  },
  {
    title: "PROGRAMMING IN PYTHON II",
    description: "University Of Moratuwa | Open Learning Platform",
    content:
      "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
    src: "/image/23.jpg",
    ctaText: "Learn More",
    ctaLink: "#",
  },
  {
    title: "PROJECT SCOPE & SCHEDULE MANAGEMENT ",
    description: "University Of Moratuwa | Open Learning Platform",
    content:
      "For a comprehensive overview of my professional experience and achievements, please visit my LinkedIn profile.",
    src: "/image/23.jpg",
    ctaText: "Learn More",
    ctaLink: "#",
  },
];
