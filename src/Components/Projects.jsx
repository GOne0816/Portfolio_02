// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from "framer-motion";

const projects = [
	{
		title: "Personal Portfolio",
		tech: ["React", "Tailwind CSS", "Node.js", "Framer Motion", "Shadcn UI"],
		description:
			"My personal portfolio showcasing my skills, projects, and experience as a full stack developer. Built with React and styled using Tailwind CSS, it features smooth animations with Framer Motion and a modern design with Shadcn UI.",
		link: "https://github.com/GOne0816/Portfolio",
		demo: "https://g-1portfolio.vercel.app/",
	},
	{
		title: "Expenses Tracker App",
		tech: ["React", "Tailwind CSS", "Node.js"],
		description:
			"A simple yet powerful expenses tracker app built with React and Tailwind CSS. Users can add, edit, and delete expenses, view their spending history, and track their budget.",
		link: "https://github.com/GOne0816/Expense_Tracker",
		demo: "https://g-1-exp-tracker.vercel.app/",
	},
	{
		title: "To-Do List App",
		tech: ["React", "Tailwind CSS", "Node.js"],
		description:
			"A feature-rich to-do list application that allows users to create, edit, and delete tasks. It includes a clean UI built with React and Tailwind CSS.",
		link: "https://github.com/GOne0816/ToDo-List",
		demo: "https://g-1-todo-list.vercel.app/",
	},
	{
		title: "Weather App",
		tech: ["React", "Tailwind CSS", "Node.js", "OpenWeather API"],
		description:
			"A weather application that fetches real-time weather data using the OpenWeather API. Built with React and styled using Tailwind CSS, it provides a user-friendly interface to check current weather conditions.",
		link: "https://github.com/GOne0816/Weather-App",
		demo: "https://g-1weatherapp.vercel.app/",
	},
	{
		title: "Event Management System",
		tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
		description:
			"A comprehensive event management system that allows users to create, manage, and RSVP for events. Built with a full stack approach using React for the frontend and Node.js with Express and MongoDB for the backend.",
		link: "https://github.com/GOne0816/Event-Management",
		demo: "https://festifys.vercel.app/",
	},
	{
		title: "Chat Application",
		tech: ["React", "Tailwind CSS", "Node.js", "Firebase"],
		description:
			"A real-time chat application that allows users to communicate with each other. Built with React for the frontend and Node.js with Firebase for real-time data handling and authentication.",
		link: "https://github.com/GOne0816/Chat-App",
		demo: "https://chat-app-one-self.vercel.app/",
	},
];

const Projects = () => (
	<div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
		<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white text-center">
			Projects
		</h2>
		<p className="text-gray-300 mb-8 sm:mb-10 md:mb-12 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
			Here are a few of my full stack projects, showcasing my skills in building
			robust, scalable, and user-friendly applications.
		</p>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
			{projects.map((project) => (
				<motion.div
					key={project.title}
					className="border-2 border-[#63e]/30 bg-[#63e]/10 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col h-full"
					whileHover={{
						scale: 1.02,
						boxShadow: "0 0 32px 8px rgba(99,51,238,0.15)",
						transition: { type: "spring", stiffness: 300, damping: 20 },
					}}
					whileTap={{ scale: 0.99 }}
				>
					<h3 className="text-xl sm:text-2xl font-semibold text-[#63e] mb-2">
						{project.title}
					</h3>
					<div className="flex flex-wrap gap-2 mb-2">
						{project.tech.map((tech) => (
							<span
								key={tech}
								className="bg-[#63e]/20 text-[#63e] px-2 py-1 rounded text-xs font-semibold"
							>
								{tech}
							</span>
						))}
					</div>
					<p className="text-gray-200 text-sm sm:text-base mb-4 flex-grow">
						{project.description}
					</p>
					<div className="mt-auto flex gap-4">
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#63e] underline hover:text-[#a3a] text-sm sm:text-base"
						>
							Code
						</a>
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#63e] underline hover:text-[#a3a] text-sm sm:text-base"
						>
							Live Demo
						</a>
					</div>
				</motion.div>
			))}
		</div>
	</div>
);

export default Projects;