import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiMongodb, SiTypescript, SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

// Example skill data with SVG icons (replace with your own or use icon libraries)
const skills = [
  {
    name: "HTML5",
    icon: (
      <FaHtml5 />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <FaCss3Alt />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <IoLogoJavascript />
    ),
  },
  {
    name: "React",
    icon: (
      <FaReact />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <FaNodeJs />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <RiTailwindCssFill />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <IoLogoFirebase />
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <TbBrandFramerMotion />
    ),
  },
  {
    name: "ShadCN UI",
    icon: (
      <SiShadcnui />
    ),
  },
];

// Duplicate the skills array to create a seamless loop
const loopedSkills = [...skills, ...skills];

const Skill_Ribbon = () => (
  <div className="overflow-hidden w-full my-4 sm:my-6 md:my-8 py-4 sm:py-6 bg-transparent">
    <div className="relative w-full">
      <div
        className="flex gap-6 sm:gap-8 md:gap-12 animate-skill-ribbon"
        style={{
          width: `${loopedSkills.length * 8}rem`,
        }}
      >
        {loopedSkills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center min-w-[6rem] sm:min-w-[7rem] md:min-w-[8rem] select-none"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl text-[#63e]">{skill.icon}</div>
            <span className="mt-2 text-white font-semibold text-xs sm:text-sm md:text-base">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    {/* Animation styles */}
    <style jsx>{`
      @keyframes skill-ribbon-loop {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-skill-ribbon {
        animation: skill-ribbon-loop 30s linear infinite;
      }
    `}</style>
  </div>
);

export default Skill_Ribbon;