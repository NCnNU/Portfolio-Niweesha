/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";



const Publications: React.FC = () => {
  // Corrected 'key' to use 'index' instead of 'card.src'
  const cards = data.map((card, index) => (
    <Link href={card.link} key={index} target="_blank" rel="noopener noreferrer">
      <Card card={card} index={index} />
    </Link>
  ));

  return (
    <div id="my-publications" className="w-full h-full py-20 flex flex-col items-center justify-center">
      {/* Center the title horizontally and vertically */}
      <h2 className="text-center max-w-7xl mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Publications
      </h2>
      <br/>
     
    
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
     
      {[...new Array(3).fill(1)].map((_) => {
       
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence (AI)",
    title: "",
    src: "https://cdn.sanity.io/images/tlr8oxjg/production/ada7e002d4675941802c42448a489b0b1b5c6854-1456x816.png?w=3840&q=100&fit=clip&auto=format",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/artificial-intelligence-ai-a629e0767ea5",
  },
  {
    category: "What is an API?",
    title: "",
    src: "https://sinay.ai/wp-content/uploads/2022/09/api-e1649279794668-1024x502.webp",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-an-api-02e54e4eeaa1",
  },
  
  {
    category: "What is GitHub?",
    title: "",
    src: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-github-dc0b4ee16620",
  },
  {
    category: "Inside Streaming Technology",
    title: "",
    src: "https://info.6connex.com/hubfs/6_Blog/2022/10-OCT_BLOG_16x9_Live-Streaming_Blank.jpg",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-streaming-f5a62a36e2a0",
  },
 
  {
    category: "NETFLIX",
    title: "",
    src: "https://global.ariseplay.com/amg/www.arise.tv/uploads/2024/07/Netflix.jpg",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/netflix-2ffbd4d4247e",
  },
  
  {
    category: "What is Figma design?",
    title: "",
    src: "https://www.bootstrapdash.com/blog/wp-content/uploads/2023/02/figma-design-scaled-1.jpg",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-figma-design-38ce1d7cd0dd",
  },
 
  {
    category: "What is IoT?",
    title: "",
    src: "https://omdia.tech.informa.com/-/media/tech/omdia/omdia-website-enhancement-oct-2023/iot-coverage-2.jpg?rev=4fa2eb28f841448c9d126f911019398f",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-iot-43e645d0166b",
  },
  {
    category: "What is Ant Design?",
    title: "",
    src: "https://blog.openreplay.com/images/building-react-components-with-ant-design/images/hero.png",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/what-is-an-ant-design-f5395974cda0",
  },
 
  
 
  {
    category: "INMO Air Glasses",
    title: "",
    src: "https://preview.redd.it/inmo-air-2-augmented-reality-smart-glasses-gallery-v0-3v300ml5vjw91.jpg?width=1920&format=pjpg&auto=webp&s=1e7750e7922ef6321e7c09396aae2c4542ef07c0",
    content: <DummyContent />,
    link: "https://medium.com/@uniweesha/inmo-air-glasses-1e56d1269084",
  },
];

export default Publications;
