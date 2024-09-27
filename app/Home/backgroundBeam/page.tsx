"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex items-center justify-between w-full">
        {/* Left side: Oval-shaped image */}
        <div className="w-1/2 flex justify-center">
          <img
            src="/path-to-your-image.jpg"
            alt="Niweesha Wijesinghe"
            className="rounded-full w-48 h-64 object-cover" // Oval-shaped image
          />
        </div>
        
        {/* Right side: Text content */}
        <div className="w-1/2 text-right">
          {/* Heading 'Hey there!' and 'It's Niweesha Wijesinghe' */}
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Hey there! {/* One line */}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>It&apos;s Niweesha Wijesinghe</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>It&apos;s Niweesha Wijesinghe</span>
              </div>
            </div>
          </h2>

          {/* Introduction text */}
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          As an IT undergraduate passionate about software development, I am
          dedicated to continuous learning and collaborative work. I excel in
          teamwork, leveraging shared strengths to develop innovative solutions
          that deliver meaningful user impact. Committed to both personal and
          professional growth, I am always seeking new opportunities to refine
          my skills and contribute positively to the dynamic world of
          technology.
          </p>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
