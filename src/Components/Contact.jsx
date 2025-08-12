import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fxoifh4",
        "template_6nj0uvb",
        formRef.current,
        "-MTjkf99jjWSRGA3_"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
    formRef.current.reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 py-16 bg-[#63e]/10 rounded-2xl ring-2 ring-[#63e]/30">
      <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12">
        Contact Me
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Details */}
        <div className="flex-1 flex flex-col justify-start mb-8 lg:mb-0">
          <div className="text-gray-200 space-y-6 sm:space-y-8 px-4 sm:px-8 lg:px-16 text-base sm:text-lg">
            <h2 className="text-xl sm:text-2xl font-semibold pb-4">CONTACT INFO</h2>
            <div className="flex items-center flex-wrap">
              <FaUser className="text-[#63e] mr-2" />
              <span className="font-semibold">Name: </span>
              <span className="ml-2">Jag Jeevan Ricky</span>
            </div>
            <div className="flex items-center flex-wrap">
              <FaEnvelope className="text-[#63e] mr-2" />
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:jagjeevanricky2001@gmail.com"
                className="ml-2 underline hover:text-[#a3a] break-all"
              >
                jagjeevanricky2001@gmail.com
              </a>
            </div>
            <div className="flex items-center flex-wrap">
              <FaMapMarkerAlt className="text-[#63e] mr-2" />
              <span className="font-semibold">Location: </span>
              <span className="ml-2">Bhopal, India</span>
            </div>
            <div className="flex items-center flex-wrap">
              <FaLinkedin className="text-[#63e] mr-2" />
              <span className="font-semibold">LinkedIn: </span>
              <a
                href="https://www.linkedin.com/in/jag-jeevan-ricky/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline hover:text-[#a3a] break-all"
              >
                linkedin.com/in/jag-jeevan-ricky
              </a>
            </div>
            <div className="flex items-center flex-wrap">
              <FaGithub className="text-[#63e] mr-2" />
              <span className="font-semibold">GitHub: </span>
              <a
                href="https://github.com/GOne0816"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline hover:text-[#a3a] break-all"
              >
                github.com/GOne0816
              </a>
            </div>
          </div>
        </div>
        {/* Vertical Line Separator */}
        <div className="hidden lg:flex items-center">
          <div className="w-px h-56 bg-[#63e]/30"></div>
        </div>
        {/* Contact Form */}
        <div className="flex-1">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-[#63e]/30 focus:ring-2 focus:ring-[#63e] outline-none"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-[#63e]/30 focus:ring-2 focus:ring-[#63e] outline-none"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-[#63e]/30 focus:ring-2 focus:ring-[#63e] outline-none"
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-black to-[#63e] text-white font-bold py-3 rounded-full shadow-lg ring-2 ring-[#63e]/30 hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;