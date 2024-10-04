"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 0.9], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      id="project"
      className="w-full bg-white dark:bg-neutral-950 font-sans px-4 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 md:py-0">
        <h2 className="text-center text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200">
          My Projects
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-20 gap-4 md:gap-10"
          >
            {/* Timeline indicator */}
            <div className="sticky top-20 z-40 flex items-center justify-center md:justify-start max-w-xs lg:max-w-sm md:w-1/3">
              <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-black">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:text-2xl lg:text-3xl font-bold text-neutral-500 dark:text-neutral-500 md:pl-10 truncate">
                {/* Adjusted text size to adapt responsively */}
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative w-full pl-8 md:pl-4 md:w-2/3">
              <div className="block md:hidden text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 mb-4 truncate">
                {item.title}
              </div>
              <div className="text-sm md:text-sm lg:text-9xl">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Vertical Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 md:left-12 top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
