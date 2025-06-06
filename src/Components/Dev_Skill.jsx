import React from "react";

const skills = [
  {
    name: "React",
    percent: 90,
    description: "Building dynamic and responsive user interfaces with hooks, context, and component-driven architecture.",
  },
  {
    name: "Node.js",
    percent: 85,
    description: "Developing scalable backend services and RESTful APIs using Express and modern JavaScript.",
  },
  {
    name: "MongoDB",
    percent: 80,
    description: "Designing and managing NoSQL databases for flexible and efficient data storage.",
  },
  {
    name: "Tailwind CSS",
    percent: 90,
    description: "Crafting modern, responsive, and utility-first designs for seamless user experiences.",
  },
  {
    name: "JavaScript (ES6+)",
    percent: 95,
    description: "Writing clean, efficient, and maintainable code for both frontend and backend development.",
  },
  {
    name: "TypeScript",
    percent: 75,
    description: "Enhancing code quality and maintainability with static typing and advanced tooling.",
  },
  {
    name: "Docker",
    percent: 70,
    description: "Containerizing applications for consistent development, testing, and deployment environments.",
  },
  {
    name: "AWS",
    percent: 60,
    description: "Deploying and managing cloud infrastructure for scalable and reliable applications.",
  },
];

const Dev_Skill = () => (
  <div className="max-w-7xl mx-auto py-32">
    <h2 className="text-6xl font-bold mb-8 text-white text-center">Full Stack Skills</h2>
    <p className="text-gray-300 mb-12 px-12 text-center">
      Here are the core tools and technologies I use to build robust, scalable, and modern web applications. Each bar represents my proficiency and experience with the respective technology.
    </p>
    <div className="bg-[#63e]/5 rounded-2xl ring-2 ring-[#63e]/30 p-8 max-sm:mx-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-[#63e]/10 p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-[#63e]">{skill.name}</span>
                <span className="text-gray-200 font-bold">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                <div
                  className="bg-gradient-to-r from-[#63e] to-[#a3a] h-4 rounded-full transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Dev_Skill;