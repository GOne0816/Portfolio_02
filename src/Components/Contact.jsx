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
  // const [sent, setSent] = useState(false);

  // You can use EmailJS or Formspree for actual email sending.
  // This example uses EmailJS (https://www.emailjs.com/)
  // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID with your EmailJS credentials.

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fxoifh4", // replace this
        "template_6nj0uvb", // replace this
        formRef.current,
        "-MTjkf99jjWSRGA3_" // replace this
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
    // EmailJS integration (uncomment and configure to use)
    // import emailjs from 'emailjs-com';
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
    //   .then(() => setSent(true), () => alert("Failed to send!"));
    // setSent(true); // Remove this line when using real email service
    formRef.current.reset();
  };

  return (
    <div
      id="Contact"
      className="max-w-7xl mx-auto max-sm:mx-2 my-36 py-16 px-4 bg-[#63e]/10 rounded-2xl ring-2 ring-[#63e]/30"
    >
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Details */}
        <div className="flex-1 flex flex-col justify-start mb-8 md:mb-0">
          <div className="text-gray-200 space-y-8 px-16 text-xl ">
            <h1 className="pb-4">CONTACT INFO</h1>
            <div className="flex items-center">
              <FaUser className="text-[#63e] mr-2" />
              <span className="font-semibold">Name: </span>
              Jag Jeevan Ricky
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-[#63e] mr-2" />
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:yourpersonalemail@gmail.com"
                className="underline hover:text-[#a3a]"
              >
                jagjeevanricky2001@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#63e] mr-2" />
              <span className="font-semibold">Location: </span>
              Bhopal, India
            </div>
            <div className="flex items-center">
              <FaLinkedin className="text-[#63e] mr-2" />
              <span className="font-semibold">LinkedIn: </span>
              <a
                href="https://www.linkedin.com/in/jag-jeevan-ricky/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#a3a]"
              >
                linkedin.com/in/jag-jeevan-ricky
              </a>
            </div>
            <div className="flex items-center">
              <FaGithub className="text-[#63e] mr-2" />
              <span className="font-semibold">GitHub: </span>
              <a
                href="https://github.com/GOne0816"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#a3a]"
              >
                github.com/GOne0816
              </a>
            </div>
          </div>
        </div>
        {/* Vertical Line Separator */}
        <div className="hidden md:flex items-center">
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
            {/* {sent && (
              <p className="text-green-400 text-center mt-4">Thank you! Your message has been sent.</p>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
