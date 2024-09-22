"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";


export function AppleCardsCarouselDemo() {
  // Corrected 'key' to use 'index' instead of 'card.src'
  const cards = data.map((card, index) => (
    <Link href={card.link} key={index} target="_blank" rel="noopener noreferrer">
      <Card card={card} index={index} />
    </Link>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Publications...
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}  // Key is fine here, just ensure uniqueness
            className="bg-[#F5F] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing class notes. 
              {/* Placeholder text below, ensure it is intentional */}
              Langotiya jeetu ka mara hua yaar is ready to capture every thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="300"
              width="500"
              className="md:w-1/4 md:h-1/4 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "INMO Air Glasses",
    title: "The INMO Air2 AR glasses are revolutionizing how we experience augmented reality.",
    src: "https://preview.redd.it/inmo-air-2-augmented-reality-smart-glasses-gallery-v0-3v300ml5vjw91.jpg?width=1920&format=pjpg&auto=webp&s=1e7750e7922ef6321e7c09396aae2c4542ef07c0",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/inmo-air-glasses-1e56d1269084",
    
  },
  {
    category: "Prisma ORM",
    title: "Prisma ORM enhances developer efficiency and simplifies workflows for diverse projects.",
    src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*VLLYS8MznQJXq-1_.jpg",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/prisma-orm-d66f7ef59f4a",
  },
  {
    category: "What is GitHub?",
    title: "It uses Git for version control & It’s a widely-used platform for version control and collaborative software development.",
    src: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-github-dc0b4ee16620",
  },
  {
    category: "What is Figma design?",
    title: "Figma revolutionizes digital design with its cloud-based platform, enabling real-time collaboration and powerful design tools.",
    src: "https://www.bootstrapdash.com/blog/wp-content/uploads/2023/02/figma-design-scaled-1.jpg",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-figma-design-38ce1d7cd0dd",
  },
  {
    category: "What is an API?",
    title: "An API is a set of rules that allows different software applications to communicate and share data with each other.",
    src: "https://sinay.ai/wp-content/uploads/2022/09/api-e1649279794668-1024x502.webp",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-an-api-02e54e4eeaa1",
  },
  {
    category: "What is IOT?",
    title: "The Internet of Things (IoT) is a network of physical devices or 'things' that are embedded with sensors, software, and other technologies.",
    src: "https://omdia.tech.informa.com/-/media/tech/omdia/omdia-website-enhancement-oct-2023/iot-coverage-2.jpg?rev=4fa2eb28f841448c9d126f911019398f",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-iot-43e645d0166b",
  },
  {
    category: "What is an ant design?",
    title: "Developed by Ant Financial, is a comprehensive design system and React-based framework tailored for building enterprise-level user interfaces.",
    src: "https://blog.openreplay.com/images/building-react-components-with-ant-design/images/hero.png",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-an-ant-design-f5395974cda0",
  },
  {
    category: "Artificial Intelligence (AI)",
    title: "Artificial Intelligence (AI) enables machines to perform tasks such as understanding language, recognizing images, and making decisions.",
    src: "https://cdn.sanity.io/images/tlr8oxjg/production/ada7e002d4675941802c42448a489b0b1b5c6854-1456x816.png?w=3840&q=100&fit=clip&auto=format",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/artificial-intelligence-ai-a629e0767ea5",
  },
  {
    category: "NETFLIX",
    title: "Netflix is one of the most popular streaming services worldwide, known for revolutionizing how people consume media.",
    src: "https://global.ariseplay.com/amg/www.arise.tv/uploads/2024/07/Netflix.jpg",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/netflix-2ffbd4d4247e",
  },
  {
    category: "Inside Streaming Technology",
    title: "Streaming is a technology used to deliver digital content.",
    src: "https://info.6connex.com/hubfs/6_Blog/2022/10-OCT_BLOG_16x9_Live-Streaming_Blank.jpg",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-streaming-f5a62a36e2a0",
  },
];






