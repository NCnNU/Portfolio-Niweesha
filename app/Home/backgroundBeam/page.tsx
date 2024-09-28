"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface BackgroundBeamsWithCollisionProps {
  id: string;
}

const BackgroundBeamsWithCollisionDemo: React.FC<
  BackgroundBeamsWithCollisionProps
> = ({ id }) => {
  return (
    <BackgroundBeamsWithCollision>
      <div id={id} className="flex items-center justify-between w-full">
        {/* Left side: Enlarged image without any background */}
        <div className="w-1/2 flex justify-center">
          <img
            src="/image/mee.png"
            alt="Niweesha Wijesinghe"
            className="w-74 h-90 object-cover" // Increased image size
          />
        </div>

        {/* Right side: Text content */}
        <div className="w-1/2 text-right">
          {/* Heading 'Hey there!' and 'It's Niweesha Wijesinghe' */}
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-left text-black dark:text-white font-sans tracking-tight">
            Hey there! {/* One line */}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="lg:text-6xl absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-700 via-violet-700 to-pink-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>It&apos;s Niweesha Wijesinghe</span>
              </div>
              <div className="lg:text-6xl relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-700 via-violet-700 to-pink-700 py-4">
                <span>It&apos;s Niweesha Wijesinghe</span>
              </div>
            </div>
          </h2>
          <br />
          <br />
          {/* Introduction text */}
          <p className="mt-4 text-lg text-left text-gray-600 dark:text-gray-300">
            As an IT undergraduate passionate about software development, I am
            dedicated to continuous learning and collaborative work. I excel in
            teamwork, leveraging shared strengths to develop innovative
            solutions that deliver meaningful user impact. Committed to both
            personal and professional growth, I am always seeking new
            opportunities to refine my skills and contribute positively to the
            dynamic world of technology.
          </p>
          <br />
          {/* Circular Resume Button */}
          <div className="mt-6 flex justify-start">
            <a
              href="/pdf/Niweesha_Wijesinghe_CV.pdf" // Path to your CV PDF file
              download="Niweesha_Wijesinghe_CV.pdf" // Download attribute with filename
              className="inline-block p-4 text-white font-medium text-sm leading-tight rounded-full shadow-md transition duration-150 ease-in-out
                         bg-gradient-to-r from-purple-1000 via-violet-800 to-pink-800
                         hover:from-purple-900 hover:via-violet-600 hover:to-pink-600"
              style={{
                textAlign: "center",
                fontSize: "20px",
                width: "164px",
                height: "42px",
                lineHeight: "14px",
              }} // Ensure button is circular
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default BackgroundBeamsWithCollisionDemo;
