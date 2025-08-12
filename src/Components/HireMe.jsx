import React from "react";

const HireMe = () => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-[#63e]/10 rounded-3xl ring-2 ring-[#63e]/30 shadow-xl mt-8 sm:mt-12 md:mt-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 sm:mb-6">Why Hire Me?</h2>
    <p className="text-gray-300 text-center mb-6 sm:mb-8 text-base sm:text-lg">
      As a passionate and dedicated Full Stack Developer, I bring a blend of technical expertise, creativity, and a strong work ethic to every project. My experience spans modern web technologies, cloud infrastructure, and collaborative teamwork. Here's what I offer:
    </p>
    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
      {([
        ["Full Stack Proficiency:", "Skilled in React, Node.js, Express, MongoDB, and modern UI frameworks like Tailwind CSS and Shadcn UI."],
        ["Cloud & DevOps:", "Hands-on experience with AWS, Docker, and CI/CD pipelines for scalable and reliable deployments."],
        ["Problem Solver:", "Adept at breaking down complex problems and delivering efficient, maintainable solutions."],
        ["Team Player:", "Strong communication skills and a collaborative mindset, ensuring smooth teamwork and project delivery."],
        ["Continuous Learner:", "Always up-to-date with the latest trends and best practices in web development."]
      ]).map(([title, description], index) => (
        <li key={index} className="flex items-start gap-2 sm:gap-3">
          <span className="text-[#63e] text-xl sm:text-2xl flex-shrink-0">✓</span>
          <span className="text-gray-200 text-sm sm:text-base">
            <span className="font-semibold text-white">{title}</span> {description}
          </span>
        </li>
      ))}
    </ul>
    <div className="text-center">
      <a
        href="mailto:your.email@example.com"
        className="inline-block bg-[#63e] bg-gradient-to-br from-[#63e] to-[#a3a] text-white rounded-full ring-2 sm:ring-4 ring-[#63e]/30 px-6 sm:px-8 py-3 sm:py-4 shadow-xl font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-[#a3a]/60 transition-all duration-300"
      >
        Let's Work Together!
      </a>
    </div>
  </div>
);

export default HireMe;