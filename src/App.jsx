import "./App.css";
import Home from "./Components/Home";
import Exp from "./Components/Exp";
import Dev_Skill from "./Components/Dev_Skill";
import Projects from "./Components/Projects";
import HireMe from "./Components/HireMe";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Switch_Game from "./Components/Switch_Game";
import Skill_Ribbon from "./Components/Skill_Ribbon";
import React, { useRef } from "react";

const App = () => {
  const mainRef = useRef(null);

  const handleScrollTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-2 sm:px-5 py-16 sm:py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      {/* Decorative bars */}
      <div className="fixed h-24 sm:h-40 w-0.5 sm:w-1 -z-10 bg-[#63e]/30 rounded-full bottom-6 sm:bottom-28 right-6 sm:right-14"></div>
      <div className="fixed bottom-32 sm:bottom-72 right-6 sm:right-14 h-2 sm:h-4 w-0.5 sm:w-1 rounded-full bg-[#63e]/30"></div>
      <div className="fixed bottom-36 sm:bottom-80 right-6 sm:right-14 h-1 sm:h-2 w-0.5 sm:w-1 rounded-full bg-[#63e]/30"></div>
      {/* Main content */}
      <div
        className="flex-1 overflow-y-auto max-sm:px-6"
        ref={mainRef}
      >
        <Home />
        <Exp />
        <Dev_Skill />
        <Skill_Ribbon />
        <Projects />
        <HireMe />
        <div id="Contact" className="pt-2">
          <Contact />
        </div>
        <Switch_Game />
        <FAQ />
      </div>
      <Footer />
      <div>
        <button
          onClick={handleScrollTop}
          className="fixed bottom-8 right-8 z-50 bg-[#63e] hover:bg-[#a3a] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={7}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;