"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import React, { useState, useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

interface TimelineDemoProps {
  id: string;
}

const TimelineDemo: React.FC<TimelineDemoProps> = ({ id }) => {
  // Data for timeline
  const data = [
    {
      title: "2024",
      content: (
        <div className="flex space-x-4 ">
          {/* Left Card */}
          <CardSpotlight className="h-80 w-80">
            {" "}
            {/* Reduced height and width */}
            <p className="text-lg font-bold relative z-20 mt-2 text-white">
              {" "}
              {/* Decreased font size */}
              <a
                href="https://sportzi.live/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SportZi - Sports Facilities Management System
              </a>
            </p>
            <div className="text-neutral-200 mt-4 relative z-20 text-sm">
              {" "}
              {/* Decreased text size */}
              SportZi is an innovative web application that connects athletes,
              coaches, and sports facilities. It offers features like seamless
              booking management, real-time updates, and more.
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-xs">
              {" "}
              {/* Smaller description */}
              As a Full Stack Developer, I worked with React, Node.js,
              Express.js, and MySQL for this project.
            </p>
          </CardSpotlight>

          {/* Right Card with Image Slider */}
          <CardSpotlight className="h-80 w-80">
            {" "}
            {/* Same size adjustment for the image card */}
            <ImageSliderCard
              images={[
                "/image/9.jpeg",
                "/image/10.jpeg",
                "/image/11.jpeg",
                "/image/12.jpeg",
              ]}
            />
          </CardSpotlight>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex space-x-4">
          <CardSpotlight className="h-80 w-80">
            {" "}
            {/* Consistent size change */}
            <p className="text-lg font-bold relative z-20 mt-2 text-white">
              <a
                href="https://github.com/NCnNU/SweetCakes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online Cake Ordering System
              </a>
            </p>
            <div className="text-neutral-200 mt-4 relative z-20 text-sm">
              Developed a system allowing users to customize cakes and choose
              delivery options. It offers a seamless, user-friendly experience,
              showcasing my expertise in full-stack development, database
              management, and UI/UX design.
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-xs">
              Full-stack development using Next.js and PostgreSQL.
            </p>
          </CardSpotlight>

          <CardSpotlight className="h-80 w-80">
            {" "}
            {/* Image card size adjustment */}
            <ImageSliderCard
              images={[
                "/image/16.png",
                "/image/17.png",
                "/image/18.png",
                "/image/19.png",
              ]}
            />
          </CardSpotlight>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex space-x-4">
          <CardSpotlight className="h-80 w-80">
            {" "}
            {/* Reduced size */}
            <p className="text-lg font-bold relative z-20 mt-2 text-white">
              PetCareTaker - Pet Feeding & Enrichment System
            </p>
            <div className="text-neutral-200 mt-4 relative z-20 text-sm">
              PetCaretaker comprises hardware and a mobile application. The
              system automates feeding schedules and offers interactive
              entertainment options for pets.
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-xs">
              Used ATmega32 Microcontrollers, React, and Express for this
              project.
            </p>
          </CardSpotlight>

          <CardSpotlight className="h-80 w-80">
            {" "}
            {/* Adjust image card size */}
            <ImageSliderCard
              images={[
                "/image/5.jpeg",
                "/image/6.jpeg",
                "/image/7.jpeg",
                "/image/8.jpeg",
              ]}
            />
          </CardSpotlight>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="flex space-x-4">
          <CardSpotlight className="h-80 w-80">
            {" "}
            {/* Reduced size */}
            <p className="text-lg font-bold relative z-20 mt-2 text-white">
              Finance - Banking Website
            </p>
            <div className="text-neutral-200 mt-4 relative z-20 text-sm">
              For my first-year project, I developed a front-end banking website
              featuring interfaces for deposits, loans, cards, and digital
              banking, along with offers and promotions. The project highlights
              my skills in responsive design, intuitive navigation, and creating
              a seamless user experience.
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-xs">
              Front-end project using HTML, CSS, and JavaScript.
            </p>
          </CardSpotlight>

          <CardSpotlight className="h-80 w-80">
            {" "}
            {/* Adjust image card size */}
            <ImageSliderCard
              images={[
                "/image/1.png",
                "/image/2.png",
                "/image/3.png",
                "/image/4.png",
              ]}
            />
          </CardSpotlight>
        </div>
      ),
    },
  ];

  return (
    <div id={id} className="w-full">
      <Timeline data={data} />
    </div>
  );
};

// Image slider component
export function ImageSliderCard({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set the interval to switch images every 2 seconds (2000 milliseconds)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Switch image every 2 seconds

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [images.length]);

  return (
    <div className="relative h-full w-full">
      <Image
        src={images[currentIndex]}
        alt="Slideshow Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
      />
    </div>
  );
}

export default TimelineDemo;
