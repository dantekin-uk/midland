import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import photogrammetry from '../assets/services/ser.jpeg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const UAVPhotogrammetry = () => {
  const services = [
    "Generation of High-Resolution Orthomosaics",
    "Mine and quarry monthly volumes",
    "Construction progress monitoring and quality assurance",
    "Environmental compliance",
    "Preconstruction condition surveys."
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Replicated from About Page */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 px-4 lg:px-6">
        <div className="relative w-full max-w-[95%] mx-auto h-[250px] sm:h-[180px] md:h-[220px] lg:h-[300px] overflow-hidden rounded-2xl rounded-br-[80px] sm:rounded-br-[120px] lg:rounded-br-[150px] shadow-2xl shadow-slate-200">
          <div className="absolute inset-0">
            <img src={photogrammetry} alt="UAV Photogrammetry" className="w-full h-full object-cover object-center" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/50"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-end pb-8 sm:pb-6 md:pb-8 px-3 sm:px-4 md:px-6 lg:px-12 lg:items-center lg:pb-4">
            <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
              <h1 className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.3em] text-primary font-bold">Our Services</h1>

              <motion.p 
                initial="hidden" animate="visible" transition={{ delay: 0.2 }} variants={fadeIn}
                className="text-white text-[16px] sm:text-[20px] md:text-2xl lg:text-3xl xl:text-5xl font-black leading-tight drop-shadow-2xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl"
              >
                UAV Photogrammetry
              </motion.p>

              <motion.div
                initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={fadeIn}
                className="flex justify-start pt-0 sm:pt-1 md:pt-2 lg:pt-2"
              >
                <Link 
                  to="/contact"
                  className="group relative bg-primary text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-bold text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] tracking-widest uppercase hover:opacity-90 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/25 overflow-hidden"
                >
                  <span className="relative z-10 whitespace-nowrap">Get a Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 lg:py-16">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We deliver geospatial and photogrammetry solutions through our state-of-the-art UAV technology paired with an extensive array of sensors operated by our experienced team. Our surveyors and photogrammetrists understand local regulations, environmental conditions and project requirements across urban development, agriculture, mining and environmental monitoring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl shadow-primary/5 p-8 md:p-12"
            >
              <h2 className="text-2xl lg:text-3xl font-black tracking-tighter leading-tight mb-4 bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent">
                UAV Photogrammetry
              </h2>
              
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Our photogrammetry services can support your project with the following:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 pt-12">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-steel-grey rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl shadow-primary/20"
          >
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-4xl font-black tracking-tighter leading-tight mb-4 text-white">
                Need UAV <span className="text-white/80">Photogrammetry Services?</span>
              </h2>
              <p className="text-sm lg:text-base mb-8 text-white/80 max-w-2xl mx-auto font-medium">
                Our cutting-edge UAV technology provides detailed aerial surveys for projects of any complexity.
              </p>
              <Link 
                to="/contact" 
                className="group inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
              >
                <span className="text-[10px] sm:text-xs tracking-widest uppercase">Get a Quote</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UAVPhotogrammetry;
