const experiences = [
  {
    role: "Front End Developer Intern",
    company: "Unified Mentor",
    period: "June 2025 - August 2025",
    description:
      "Developing user interfaces and enhancing user experiences for web applications. Collaborating with designers and back-end developers to implement responsive designs.",
    type: "internship",
  },
  {
    role: "Infrastructure Consultant Intern",
    company: "RackMonk Datacenters Pvt. Ltd.",
    period: "Feb 2025 - April 2025",
    description:
      "Assisted in managing cloud infrastructure and optimizing server performance. Gained experience in AWS, Docker, and Kubernetes.",
    type: "internship",
  },
  {
    role: "BCA in Cloud Computing & Full Stack Development",
    company: "Jagran Lakecity University, Bhopal",
    period: "2022 - 2025",
    description:
      "Pursuing a Bachelor's degree with a focus on cloud computing and full stack development. Engaged in various projects involving web technologies and cloud services.",
    type: "college",
  },
  {
    role: "Class 12",
    company: "D.A.V. Sr. Sec. Public School",
    period: "2017 - 2019",
    description:
      "Completed high school with a focus on science and mathematics. Developed an early interest in computers and technology.",
    type: "school",
  },
];
const Exp = () => {
  return (
    <div className="max-w-full max-sm:mx-2 md:mx-20 xl:mx-40 bg-[#63e]/10 ring-2 ring-[#63e]/30 rounded-3xl px-2 sm:px-4 py-8 sm:mx-16 sm:py-12">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-12 text-white text-center">
        Experience
      </h2>
      <p className="text-gray-300 mb-8 sm:mb-12 text-center max-w-2xl sm:max-w-4xl mx-auto text-base sm:text-lg">
        My journey in technology has taken me from foundational school studies,
        through an immersive college experience in cloud computing and full
        stack development, to hands-on industry exposure as an intern. Each step
        has helped me grow my skills and passion for building impactful
        solutions.
      </p>
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden sm:block absolute left-1/2 top-0 w-1 bg-[#63e]/40 h-full -translate-x-1/2 z-0 rounded"></div>
        <ul className="space-y-8">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <li
                key={idx}
                className="relative z-10 flex flex-col sm:flex-row items-center w-full"
              >
                {/* Left side (or full width on mobile) */}
                <div
                  className={`w-full sm:w-1/2 ${
                    isLeft
                      ? "sm:pr-8 sm:justify-end sm:flex"
                      : "sm:pl-8 sm:justify-start sm:flex"
                  }`}
                >
                  {(isLeft || window.innerWidth < 640) && (
                    <div className="bg-[#63e]/10 p-6 rounded-lg shadow-lg max-w-lg sm:text-right text-left mx-auto sm:mx-0 mb-4 sm:mb-0">
                      <h3 className="text-xl font-semibold text-[#63e]">
                        {exp.role}
                      </h3>
                      <p className="text-white">
                        {exp.company}{" "}
                        <span className="text-gray-400">| {exp.period}</span>
                      </p>
                      <p className="text-gray-200 mt-2">{exp.description}</p>
                    </div>
                  )}
                </div>
                {/* Timeline dot */}
                <div className="flex flex-col items-center z-20 sm:mx-0 mx-auto">
                  <span className="w-5 h-5 bg-[#63e] rounded-full border-4 border-white shadow-lg"></span>
                  {idx !== experiences.length - 1 && (
                    <span className="hidden sm:block w-1 h-12 bg-[#63e]/40"></span>
                  )}
                </div>
                {/* Right side (only on desktop and for right-aligned items) */}
                <div
                  className={`w-full sm:w-1/2 ${
                    !isLeft
                      ? "sm:pl-8 sm:justify-start sm:flex"
                      : "sm:pr-8 sm:justify-end sm:flex"
                  }`}
                >
                  {!isLeft && window.innerWidth >= 640 && (
                    <div className="bg-[#63e]/10 p-6 rounded-lg shadow-lg max-w-lg text-left mx-auto sm:mx-0">
                      <h3 className="text-xl font-semibold text-[#63e]">
                        {exp.role}
                      </h3>
                      <p className="text-white">
                        {exp.company}{" "}
                        <span className="text-gray-400">| {exp.period}</span>
                      </p>
                      <p className="text-gray-200 mt-2">{exp.description}</p>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Exp;