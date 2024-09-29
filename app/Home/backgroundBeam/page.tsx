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
      {/* Main container with responsive flex layout */}
      <div
        id={id}
        className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen py-10 lg:py-0 md:min-h-[100vh]" // Flex column for mobile, row for laptop
      >
        {/* Left Section (Text and Image stack vertically on mobile/tablet, split in laptop view) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-center">
          {/* Text Section - Centered in mobile/tablet, aligned left in laptop */}
          <div className="w-full lg:w-auto text-center lg:text-left">
            {/* Heading 'Hey there!' and 'It's Niweesha Wijesinghe' */}
            <h2 className="text-xl md:text-2xl lg:text-6xl font-bold text-black dark:text-gray-500 font-sans tracking-tight mt-10">
              Hey there ! {/* One line */}  <br />
              <div className="relative mx-auto lg:mx-0 inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="lg:text-4xl md:text-4xl absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-700 via-violet-700 to-pink-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span>It&apos;s Niweesha Wijesinghe</span>
                </div>
                <div className="lg:text-4xl md:text-4xl relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-700 via-violet-700 to-pink-700 py-4">
                  <span>It&apos;s Niweesha Wijesinghe</span>
                </div>
              </div>
            </h2>
          </div>

          {/* Introduction and Button in mobile/tablet */}
          <div className="w-full text-center lg:text-left mt-6 lg:mt-0 px-4">
            <p className="mt-4 text-sm md:text-lg text-center lg:text-left text-gray-600 dark:text-gray-300">
              As an IT undergraduate passionate about software development, I am
              dedicated to continuous learning and collaborative work. I excel
              in teamwork, leveraging shared strengths to develop innovative
              solutions that deliver meaningful user impact. Committed to both
              personal and professional growth, I am always seeking new
              opportunities to refine my skills and contribute positively to the
              dynamic world of technology.
            </p>

            {/* Circular Resume Button */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href="/pdf/Niweesha Wijesinghe.pdf" // Path to your CV PDF file
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

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0 lg:order-first">
          <img
            src="/image/mee.png"
            alt="Niweesha Wijesinghe"
            className="w-1/2 md:w-1/3 lg:w-auto h-auto object-cover" // Adjust size for mobile, tablet, and laptop
          />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default BackgroundBeamsWithCollisionDemo;
