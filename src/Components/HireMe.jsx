import React from "react";

const HireMe = () => (
  <div className="max-w-3xl mx-auto max-sm:mx-2 py-20 px-6 bg-[#63e]/10 rounded-3xl ring-2 ring-[#63e]/30 shadow-xl mt-16">
    <h2 className="text-4xl font-bold text-white text-center mb-6">Why Hire Me?</h2>
    <p className="text-gray-300 text-center mb-8 text-lg">
      As a passionate and dedicated Full Stack Developer, I bring a blend of technical expertise, creativity, and a strong work ethic to every project. My experience spans modern web technologies, cloud infrastructure, and collaborative teamwork. Here’s what I offer:
    </p>
    <ul className="space-y-4 mb-8">
      <li className="flex items-start gap-3">
        <span className="text-[#63e] text-2xl">✓</span>
        <span className="text-gray-200">
          <span className="font-semibold text-white">Full Stack Proficiency:</span> Skilled in React, Node.js, Express, MongoDB, and modern UI frameworks like Tailwind CSS and Shadcn UI.
        </span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-[#63e] text-2xl">✓</span>
        <span className="text-gray-200">
          <span className="font-semibold text-white">Cloud & DevOps:</span> Hands-on experience with AWS, Docker, and CI/CD pipelines for scalable and reliable deployments.
        </span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-[#63e] text-2xl">✓</span>
        <span className="text-gray-200">
          <span className="font-semibold text-white">Problem Solver:</span> Adept at breaking down complex problems and delivering efficient, maintainable solutions.
        </span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-[#63e] text-2xl">✓</span>
        <span className="text-gray-200">
          <span className="font-semibold text-white">Team Player:</span> Strong communication skills and a collaborative mindset, ensuring smooth teamwork and project delivery.
        </span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-[#63e] text-2xl">✓</span>
        <span className="text-gray-200">
          <span className="font-semibold text-white">Continuous Learner:</span> Always up-to-date with the latest trends and best practices in web development.
        </span>
      </li>
    </ul>
    <div className="text-center">
      <a
        href="mailto:your.email@example.com"
        className="bg-[#63e] bg-gradient-to-br from-[#63e] to-[#a3a] text-white rounded-full ring-4 ring-[#63e]/30 px-8 py-4 my-8 shadow-xl font-semibold text-base hover:scale-105 hover:shadow-[#a3a]/60 transition-all duration-300"
      >
        Let's Work Together!
      </a>
    </div>
  </div>
);

export default HireMe;