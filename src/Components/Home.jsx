import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 md:py-40 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 text-center gap-2">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-6 uppercase tracking-wide">
          Jag Jeevan Ricky
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 px-2 sm:px-8 md:px-24 lg:px-40 xl:px-56">
          Welcome to my developer portfolio! I am a passionate software engineer specializing in building modern web applications with React and JavaScript.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 px-2 sm:px-8 md:px-24 lg:px-40 xl:px-56">
          I love crafting clean, efficient, and user-friendly interfaces. Explore my projects and get to know more about my journey in tech.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 px-2 sm:px-8 md:px-24 lg:px-40 xl:px-56">
          Let's connect and create something amazing together!
        </p>
        <a href="#Contact">
        <button className="bg-[#63e] bg-gradient-to-br from-[#63e] to-[#a3a] rounded-full ring-4 ring-[#63e]/30 px-8 py-4 my-8 shadow-xl font-semibold text-sm hover:scale-105 hover:shadow-[#a3a]/60 transition-all duration-300">
          Contact Me!
        </button>
        </a>
      </div>
    </div>
  )
}

export default Home