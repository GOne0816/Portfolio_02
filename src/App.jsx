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

const App = () => {
  return (
    <div className="w-full h-dvh overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-2 sm:px-5 py-16 sm:py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      {/* Decorative bars */}
      <div className="fixed h-24 sm:h-48 w-0.5 sm:w-1 -z-10 bg-[#63e]/30 rounded-full bottom-6 sm:bottom-12 right-6 sm:right-12"></div>
      <div className="fixed bottom-32 sm:bottom-64 right-6 sm:right-12 h-2 sm:h-4 w-0.5 sm:w-1 rounded-full bg-[#63e]/30"></div>
      <div className="fixed bottom-36 sm:bottom-72 right-6 sm:right-12 h-1 sm:h-2 w-0.5 sm:w-1 rounded-full bg-[#63e]/30"></div>
      {/* Main content */}
      <div className="max-sm:px-6">
        <Home />
        <Exp />
        <Dev_Skill />
        <Skill_Ribbon />
        <Projects />
        <HireMe />
        <Contact />
        <Switch_Game />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default App;
