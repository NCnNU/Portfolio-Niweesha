"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


const Hero = () => {;
  return (
    <BackgroundBeamsWithCollision>
      <div
        id="home"
        className="flex flex-col md:flex-row items-center md:justify-between w-full p-4 space-y-4 md:space-y-0 md:space-x-4 h-screen"
      >
        {/* Left side: Enlarged image without any background */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/image/mee.png"
            alt="Niweesha Wijesinghe"
            className="w-60 h-72 md:w-74 md:h-90 lg:w-96 lg:h-[28rem] object-cover"
          />
        </div>

        {/* Right side: Text content */}
        <div className="w-full md:w-1/2 text-center md:text-right">
          <h2 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center md:text-right text-black dark:text-white font-sans tracking-tight">
            Hey there!
            <div className="relative mx-auto md:mx-0 inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="md:text-3xl lg:text-5xl xl:text-6xl absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-2 md:py-4 from-purple-700 via-violet-700 to-pink-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>It&apos;s Niweesha Wijesinghe</span>
              </div>
              <div className="md:text-3xl lg:text-5xl xl:text-6xl relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-700 via-violet-700 to-pink-700 py-2 md:py-4">
                <span>It&apos;s Niweesha Wijesinghe</span>
              </div>
            </div>
          </h2>
          <br />
          <br />
          <p className="mt-4 text-sm md:text-base lg:text-lg text-justify text-gray-600 dark:text-gray-300">
            As an IT undergraduate passionate about software development, I am
            dedicated to continuous learning and collaborative work. I excel in
            teamwork, leveraging shared strengths to develop innovative
            solutions that deliver meaningful user impact. Committed to both
            personal and professional growth, I am always seeking new
            opportunities to refine my skills and contribute positively to the
            dynamic world of technology.
          </p>
          <br />
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="/pdf/Niweesha Wijesinghe.pdf"
              download="Niweesha_Wijesinghe_CV.pdf"
              className="inline-block p-4 text-white font-medium text-sm leading-tight rounded-full shadow-md transition duration-150 ease-in-out
                         bg-gradient-to-r from-purple-1000 via-violet-800 to-pink-800
                         hover:from-purple-900 hover:via-violet-600 hover:to-pink-600"
              style={{
                textAlign: "center",
                fontSize: "16px",
                width: "150px",
                height: "42px",
                lineHeight: "14px",
              }}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
