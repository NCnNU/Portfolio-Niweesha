import { HoverEffect } from "../../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "INMO Air Glasses",
    description:
      "The INMO Air2 AR glasses redefine augmented reality with a lightweight, wireless design and seamless digital integration. Featuring a high-definition camera, gesture controls, and GPS navigation, they deliver hands-free, immersive experiences for everyday use.",
    link: "https://medium.com/@uniweesha/inmo-air-glasses-1e56d1269084",
    image: "https://m.media-amazon.com/images/I/61CfsBUPvlL.jpg",
  },
  {
    title: "Prisma ORM",
    description:
      "Prisma ORM streamlines database management for Node.js and TypeScript, offering intuitive data modeling, automated migrations, and strong type safety. Supporting SQL and NoSQL databases, it enhances developer efficiency and simplifies workflows for diverse projects.",
    link: "https://medium.com/@uniweesha/prisma-orm-d66f7ef59f4a",
    image: "https://miro.medium.com/v2/resize:fit:1024/0*VLLYS8MznQJXq-1_.jpg",
  },
  {
    title: "What is GitHub?",
    description:
      "GitHub is a web-based platform that uses Git for version control & It’s a widely-used platform for version control and collaborative software development.It allows developers to collaborate on projects, share code, and track changes across versions. GitHub offers both free and paid plans, with a variety of features to support individual developers and large teams.",
    link: "https://medium.com/@uniweesha/what-is-github-dc0b4ee16620",
    image: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/08/github_hero_2.jpg",
  },
  {
    title: "What is Figma design ?",
    description:
      "Figma revolutionizes digital design with its cloud-based platform, enabling real-time collaboration and powerful design tools. Ideal for creating and prototyping user interfaces, it streamlines the design process for teams, from concept to completion, making it essential for modern projects.",
    link: "https://medium.com/@uniweesha/what-is-figma-design-38ce1d7cd0dd",
    image: "https://example.com/figma-design.jpg",
  },
  {
    title: "What is an API ?",
    description:
      "An API (Application Programming Interface) defines rules for software communication, enabling different applications to share data and interact. It simplifies development by providing pre-built functionalities, facilitating seamless integration and enhancing system interoperability.",
    link: "https://medium.com/@uniweesha/what-is-an-api-02e54e4eeaa1",
    image: "https://example.com/api.jpg",
  },
  {
    title: "What is IOT ?",
    description:
      "Internet of Things (IoT) refers to the network of physical objects or “things” embedded with sensors, software, and other technologies with the aim of connecting and exchanging data with other devices and systems over the internet. These “things” can range from everyday household items to sophisticated industrial tools.",
    link: "https://medium.com/@uniweesha/what-is-iot-43e645d0166b",
    image: "https://example.com/iot.jpg",
  },

  {
    title: "What is an ant design ?",
    description:
      "Ant Design, by Ant Financial, is a React-based framework for building enterprise UIs. It provides customizable components, design guidelines, and seamless integration, making it ideal for creating responsive, data-driven applications with global support.",
    link: "https://medium.com/@uniweesha/what-is-an-ant-design-f5395974cda0",
    image: "https://example.com/ant-design.jpg",
  },

  {
    title: "What is IOT ?",
    description:
      "Internet of Things (IoT) refers to the network of physical objects or “things” embedded with sensors, software, and other technologies with the aim of connecting and exchanging data with other devices and systems over the internet. These “things” can range from everyday household items to sophisticated industrial tools.",
    link: "https://medium.com/@uniweesha/what-is-iot-43e645d0166b",
    image: "https://example.com/io.jpg",
  },

  {
    title: "What is IOT ?",
    description:
      "Internet of Things (IoT) refers to the network of physical objects or “things” embedded with sensors, software, and other technologies with the aim of connecting and exchanging data with other devices and systems over the internet. These “things” can range from everyday household items to sophisticated industrial tools.",
    link: "https://medium.com/@uniweesha/what-is-iot-43e645d0166b",
    image: "https://example.com/iot.jpg",
  },
];
