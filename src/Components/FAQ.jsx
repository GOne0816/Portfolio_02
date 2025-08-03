import React, { useState } from "react";

const faqs = [
	{
		question: "What technologies do you specialize in?",
		answer:
			"I specialize in full stack development using React, Node.js, Express, MongoDB, Tailwind CSS, and cloud platforms like AWS. I also have experience with TypeScript, Docker, and modern UI frameworks.",
	},
	{
		question: "Are you open to remote or onsite opportunities?",
		answer:
			"Yes, I am open to both remote and onsite opportunities. I am flexible and can adapt to different work environments to deliver the best results.",
	},
	{
		question: "Can you build and deploy scalable web applications?",
		answer:
			"Absolutely! I have hands-on experience in building, deploying, and maintaining scalable web applications using modern DevOps practices and cloud infrastructure.",
	},
	{
		question: "How can I contact you for a project or collaboration?",
		answer:
			"You can reach out to me via the contact form on this website or email me directly at yourpersonalemail@gmail.com. I am also available on LinkedIn and GitHub.",
	},
	{
		question: "Do you contribute to open source projects?",
		answer:
			"Yes, I enjoy contributing to open source projects and collaborating with the developer community to learn and grow together.",
	},
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<div className="max-w-3xl mx-auto py-20 px-4">
			<h2 className="text-4xl font-bold text-white text-center mb-8">
				Frequently Asked Questions
			</h2>
			<div className="space-y-4">
				{faqs.map((faq, idx) => (
					<div
						key={idx}
						className="bg-[#63e]/10 rounded-xl ring-2 ring-[#63e]/30 transition-all duration-300 hover:ring-[#63e] hover:shadow-[0_0_16px_4px_rgba(99,51,238,0.5)]"
					>
						<button
							className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
							onClick={() => toggle(idx)}
						>
							<span className="text-lg font-semibold text-[#63e]">
								{faq.question}
							</span>
							<span className="text-2xl text-[#63e]">
								{openIndex === idx ? "−" : "+"}
							</span>
						</button>
						<div
							className={`px-6 pb-4 text-gray-200 text-base transition-all duration-300 ease-in-out overflow-hidden ${
								openIndex === idx
									? "opacity-100 max-h-[500px]"
									: "opacity-0 max-h-0"
							}`}
							style={{
								// Optional: for even smoother animation, you can add will-change
								willChange: "opacity, max-height",
							}}
						>
							{faq.answer}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;