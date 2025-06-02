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
    tech: ["React", "Tailwind CSS", "Node.js",],
    description:
      "A simple yet powerful expenses tracker app built with React and Tailwind CSS. Users can add, edit, and delete expenses, view their spending history, and track their budget.",
    link: "https://github.com/GOne0816/Expense_Tracker",
    demo: "https://g-1-exp-tracker.vercel.app/",
  },
  {
    title: "To-Do List App",
    tech: ["React", "Tailwind CSS", "Node.js",],
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
  <div className="max-w-7xl mx-auto py-12 px-2 sm:px-4">
    <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-white text-center">Projects</h2>
    <p className="text-gray-300 mb-12 text-center text-base sm:text-lg">
      Here are a few of my full stack projects, showcasing my skills in building robust, scalable, and user-friendly applications.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div key={project.title} className="ring-2 ring-[#63e]/30 bg-[#63e]/10 p-6 rounded-lg shadow-lg flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-[#63e] mb-2">{project.title}</h3>
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
          <p className="text-gray-200 mb-4">{project.description}</p>
          <div className="mt-auto flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#63e] underline hover:text-[#a3a]"
            >
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#63e] underline hover:text-[#a3a]"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;