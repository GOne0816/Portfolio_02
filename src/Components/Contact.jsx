import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);

  // You can use EmailJS or Formspree for actual email sending.
  // This example uses EmailJS (https://www.emailjs.com/)
  // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID with your EmailJS credentials.

  const handleSubmit = async (e) => {
    e.preventDefault();
    // EmailJS integration (uncomment and configure to use)
    // import emailjs from 'emailjs-com';
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
    //   .then(() => setSent(true), () => alert("Failed to send!"));
    setSent(true); // Remove this line when using real email service
    formRef.current.reset();
  };

  return (
    <div className="max-w-7xl mx-auto max-sm:mx-2 my-36 py-20 px-4 bg-[#63e]/10 rounded-2xl ring-2 ring-[#63e]/30">
      <h2 className="text-4xl font-bold text-white text-center mb-6">Contact Me</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Details */}
        <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0">
          <div className="text-gray-200 space-y-3 text-base">
            <div>
              <span className="font-semibold text-[#63e]">Name: </span>
              Jag Jeevan Ricky
            </div>
            <div>
              <span className="font-semibold text-[#63e]">Email: </span>
              <a href="mailto:yourpersonalemail@gmail.com" className="underline hover:text-[#a3a]">yourpersonalemail@gmail.com</a>
            </div>
            <div>
              <span className="font-semibold text-[#63e]">Location: </span>
              Bhopal, India
            </div>
            <div>
              <span className="font-semibold text-[#63e]">LinkedIn: </span>
              <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#a3a]">linkedin.com/in/your-linkedin</a>
            </div>
            <div>
              <span className="font-semibold text-[#63e]">GitHub: </span>
              <a href="https://github.com/GOne0816" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#a3a]">github.com/GOne0816</a>
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
              <label className="block text-gray-200 mb-2" htmlFor="name">Name</label>
              <input
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-[#63e]/30 focus:ring-2 focus:ring-[#63e] outline-none"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="email">Email Address</label>
              <input
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-[#63e]/30 focus:ring-2 focus:ring-[#63e] outline-none"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="message">Message</label>
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
            {sent && (
              <p className="text-green-400 text-center mt-4">Thank you! Your message has been sent.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;