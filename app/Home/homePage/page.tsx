"use client";
import React, { useState, useEffect } from "react"; // Import useState and useEffect hooks
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function ShootingStarsAndStarsBackgroundDemo() {
  // State to manage the blinking text effect
  const [blinkingText, setBlinkingText] = useState("");
  const fullText = "IT Undergraduate"; // Full sentence to display letter by letter

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      // Add letters one by one to blinkingText every 0.3 seconds
      setBlinkingText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId); // Stop the interval once all letters are added
      }
    }, 300); // Set the interval to 0.3s (300 milliseconds)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[45rem] rounded-md bg-neutral-900 flex flex-col md:flex-row items-center justify-between relative w-full">
      {/* Image */}
      <div className="hidden md:block md:w-1/2 p-4">
        <img
          src="/image/1.png" // Replace with the actual path to your image
          alt=""
          className="w-64 h-64 rounded-full object-cover mx-auto"
        />
      </div>

      {/* Text and Introduction */}
      <div className="text-center md:text-left md:w-1/2 p-4">
        <h2 className="relative flex flex-col md:flex-row z-10 text-3xl md:text-6xl md:leading-tight max-w-3xl mx-auto md:mx-0 text-center md:text-left tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          <span className="block">Hey there !</span>{" "}
        </h2>
        <h2 className="relative flex flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-3xl mx-auto md:mx-0 text-center md:text-left tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          {" "}
          <span className="block"> It's Niweesha Wijesinghe</span>
        </h2>

        {/* Blinking Text */}
        <h3 className="text-2xl md:text-3xl text-blue-400 mt-4">
          {blinkingText}
        </h3>

        <br />
        <p className="mt-4 text-lg text-white">
          As an IT undergraduate passionate about software development, I am
          dedicated to continuous learning and collaborative work. I excel in
          teamwork, leveraging shared strengths to develop innovative solutions
          that deliver meaningful user impact. Committed to both personal and
          professional growth, I am always seeking new opportunities to refine
          my skills and contribute positively to the dynamic world of
          technology.
        </p>

        {/* View Resume Button with Link */}
        <a
          href="https://drive.google.com/file/d/1pyS1B2npgzod9H0z1kPYHNiz3g_Plp-_/view?usp=sharing" // Replace with actual CV URL/path
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security improvement for external links
        >
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            View Resume
          </button>
        </a>
      </div>

      {/* Background Effects */}
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
