import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What areas does Midland Geosystems serve?",
    answer: "We provide professional surveying services across the entire Republic of Kenya. Our teams have successfully executed projects in all 47 counties, from urban centers like Nairobi and Mombasa to remote infrastructure sites."
  },
  {
    question: "Are your surveyors licensed and registered?",
    answer: "Yes. All our lead professionals are proudly registered with the Land Surveyors' Board (LSB), ensuring full regulatory compliance and ethical standards."
  },
  {
    question: "What technology do you utilize for large-scale projects?",
    answer: "We leverage state-of-the-art GNSS/RTK receivers, robotic total stations, and high-end UAVs for drone photogrammetry. This allows us to deliver centimeter-level accuracy even on massive terrains."
  },
  {
    question: "How long does a typical cadastral or engineering survey take?",
    answer: "Timelines depend on the project's complexity and location. A standard boundary survey might take 2-5 days, while major infrastructure setting-out or topographical mapping for master plans can take several weeks. We provide precise timelines with every quote."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-100 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`text-sm sm:text-base font-black tracking-tight transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-text-main group-hover:text-primary'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary border-primary text-white rotate-180' : 'text-slate-400 group-hover:border-primary/30 group-hover:text-primary'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 text-xs sm:text-sm leading-relaxed font-medium max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-full max-w-[95%] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Header */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-4">Support & Clarity</h2>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-[1.05] bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
              Frequently Asked <br /> Questions.
            </h2>
            <p className="mt-6 text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
              Can't find the answer you're looking for? Reach out to our technical team for more specific inquiries regarding your project.
            </p>
          </motion.div>

          {/* Right Side: Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-slate-50/50 rounded-[3rem] p-8 sm:p-12 border border-slate-100"
          >
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;