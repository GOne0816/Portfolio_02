import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiShadcnui } from "react-icons/si";



// Example skill data with SVG icons (replace with your own or use icon libraries)
const skills = [
  {
    name: "HTML5",
    icon: (
      <FaHtml5 className="size-12"/>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <FaCss3Alt className="size-12"/>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <IoLogoJavascript className="size-12"/>
    ),
  },
  {
    name: "React",
    icon: (
      <FaReact className="size-12"/>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <FaNodeJs className="size-12"/>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb className="size-12"/>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <RiTailwindCssFill className="size-12"/>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript className="size-12"/>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <IoLogoFirebase className="size-12"/>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <TbBrandFramerMotion className="size-12"/>
    ),
  },
  {
    name: "ShadCN UI",
    icon: (
      <SiShadcnui className="size-12"/>
    ),
  },
];

// Duplicate the skills array to create a seamless loop
const loopedSkills = [...skills, ...skills];

const Skill_Ribbon = () => (
  <div className="overflow-hidden w-full my-8 py-6 bg-transparent">
    <div className="relative w-full">
      <div
        className="flex gap-12 animate-skill-ribbon"
        style={{
          width: `${loopedSkills.length * 12}rem`,
        }}
      >
        {loopedSkills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[8rem] select-none"
          >
            <div>{skill.icon}</div>
            <span className="mt-2 text-white font-semibold text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    {/* Animation styles */}
    <style>
      {`
        @keyframes skill-ribbon-loop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-skill-ribbon {
          animation: skill-ribbon-loop 24s linear infinite;
        }
      `}
    </style>
  </div>
);

export default Skill_Ribbon;