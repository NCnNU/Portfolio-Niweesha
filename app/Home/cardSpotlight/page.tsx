import { CardSpotlight } from "@/components/ui/card-spotlight";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaGit,
  FaGithub,
} from "react-icons/fa"; // Importing icons
import {
  SiMysql,
  SiMongodb,
  SiJira,
  SiPostgresql,
  SiClickup,
  SiTypescript,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si"; // Other relevant icons
import { Key } from "react";

interface CardSpotlightDemoProps {
  id: string;
}

const CardSpotlightDemo: React.FC<CardSpotlightDemoProps> = ({ id }) => {
  return (
    // Added 'min-h-screen' to ensure full page height
    <div id={id} className="min-h-screen max-w-6xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SpotlightCard
          title="Programming Languages"
          skills={[
            { icon: <FaJava size={24} />, name: "Java" },
            { icon: <FaPython size={24} />, name: "C" },
            { icon: <FaJs size={24} />, name: "JavaScript" },
            { icon: <SiTypescript size={24} />, name: "TypeScript" },
          ]}
        />

        <SpotlightCard
          title="Web Development"
          skills={[
            { icon: <FaNodeJs size={24} />, name: "Node.js" },
            { icon: <FaReact size={24} />, name: "React" },
            { icon: <FaHtml5 size={24} />, name: "HTML" },
            { icon: <FaReact size={24} />, name: "Next.js" },
          ]}
        />
        <SpotlightCard
          title="Database"
          skills={[
            { icon: <SiMysql size={24} />, name: "MySQL" },
            { icon: <SiMongodb size={24} />, name: "MongoDB" },
            { icon: <SiPostgresql size={24} />, name: "PostgreSql" },
          ]}
        />
        <SpotlightCard
          title="Project Management Tools"
          skills={[
            { icon: <SiJira size={24} />, name: "Jira" },
            { icon: <SiClickup size={24} />, name: "ClickUp" },
          ]}
        />
        <SpotlightCard
          title="Version Control"
          skills={[
            { icon: <FaGit size={24} />, name: "Git" },
            { icon: <FaGithub size={24} />, name: "GitHub" },
          ]}
        />
        <SpotlightCard
          title="Other"
          skills={[
            { icon: <SiAdobephotoshop size={24} />, name: "Photoshop" },
            { icon: <SiFigma size={24} />, name: "Figma" },
          ]}
        />
      </div>
    </div>
  );
};

const SpotlightCard = ({
  title,
  skills,
}: {
  title: string;
  skills: { icon: JSX.Element; name: string }[];
}) => {
  return (
    <CardSpotlight className="h-70 w-full p-6">
      {" "}
      {/* Apply a smaller z-index for the spotlight title */}
      <p className="text-xl font-bold relative z-10 mt-2 text-white text-center">
        {title}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {skills.map((skill, index: Key | null | undefined) => (
          <SkillRectangle key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </CardSpotlight>
  );
};

const SkillRectangle = ({
  icon,
  name,
}: {
  icon: JSX.Element;
  name: string;
}) => {
  return (
    // Apply a larger z-index for the icon rectangles
    <div className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out relative z-20">
      <div className="mr-4 text-white">{icon}</div>
      <p className="text-white">{name}</p>
    </div>
  );
};

export default CardSpotlightDemo;
