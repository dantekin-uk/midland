import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import photogrammetryUAV from '../assets/services/ser3.jpg';
import engineering from '../assets/servicesoptions/construction.jpg';
import modeling from '../assets/servicesoptions/doc.jpg';
import data from '../assets/servicesoptions/dt.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const UAVPhotogrammetryCategory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const scroll = (direction) => {
    const container = document.getElementById('services-scroll');
    if (container) {
      const scrollAmount = 340;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      title: "High-Resolution Orthomosaics",
      slug: "high-resolution-orthomosaics",
      image: photogrammetryUAV,
      desc: "Measurable, distortion-free aerial maps for rapid site intelligence."
    },
    {
      title: "Mine & Quarry Volumes",
      slug: "mine-quarry-volumes",
      image: modeling,
      desc: "Rapid and accurate volumetric analysis for resource extraction sites."
    },
    {
      title: "Construction Progress Monitoring",
      slug: "construction-progress-monitoring",
      image: engineering,
      desc: "Visual and spatial quality assurance throughout the project lifecycle."
    },
    {
      title: "Environmental Compliance",
      slug: "environmental-compliance",
      image: data,
      desc: "Monitoring land use and ecological impact using advanced aerial sensors."
    },
    {
      title: "Pre-construction Surveys",
      slug: "pre-construction-surveys",
      image: photogrammetryUAV,
      desc: "Capturing comprehensive site data before the commencement of works."
    }
  ];

  const categoryTitle = "UAV Photogrammetry";
  const categoryDescription = `We deliver geospatial and photogrammetry solutions through our state-of-the-art UAV technology paired with an extensive array of sensors operated by our experienced team. Our surveyors and photogrammetrists understand local regulations, environmental conditions and project requirements across urban development, agriculture, mining and environmental monitoring.

Our photogrammetry services can support your project with the following:

• Generation of High-Resolution Orthomosaics
• Mine and quarry monthly volumes
• Construction progress monitoring and quality assurance
• Environmental compliance
• Preconstruction condition surveys.`;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Styled like About page */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 px-4 lg:px-6">
        <div className="relative w-full max-w-[95%] mx-auto h-[250px] sm:h-[180px] md:h-[220px] lg:h-[300px] overflow-hidden rounded-2xl rounded-br-[80px] sm:rounded-br-[120px] lg:rounded-br-[150px] shadow-2xl shadow-slate-200">
          <div className="absolute inset-0">
            <img src={photogrammetryUAV} alt="UAV Photogrammetry" className="w-full h-full object-cover object-center" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/50"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-end pb-8 sm:pb-6 md:pb-8 px-3 sm:px-4 md:px-6 lg:px-12 lg:items-center lg:pb-4">
            <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
              <h1 className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.3em] text-primary font-bold">{categoryTitle}</h1>
              <motion.p 
                initial="hidden" animate="visible" transition={{ delay: 0.2 }} variants={fadeIn}
                className="text-white text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-xl font-semibold leading-tight sm:leading-relaxed drop-shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
              >
                State-of-the-art drone technology for geospatial analysis and advanced project monitoring.
              </motion.p>
              <motion.div
                initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={fadeIn}
                className="flex justify-start pt-0 sm:pt-1 md:pt-2 lg:pt-2"
              >
                <button 
                  onClick={() => {
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative bg-primary text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-bold text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] tracking-widest uppercase hover:opacity-90 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/25 overflow-hidden"
                >
                  <span className="relative z-10 whitespace-nowrap">Explore Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 lg:py-20">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <div className="space-y-4 text-slate-600 leading-relaxed font-medium text-xs sm:text-base whitespace-pre-line">
              {categoryDescription}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-section" className="py-16 lg:py-24">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-black tracking-tighter leading-tight bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
              Our Photogrammetry Services
            </h2>
          </motion.div>

          <div className="relative group/scroll">
            {/* Navigation Arrows */}
            <div className="absolute top-[40%] -left-4 -translate-y-1/2 z-20 hidden lg:block opacity-0 group-hover/scroll:opacity-100 transition-opacity">
              <button 
                onClick={() => scroll('left')}
                className="p-2.5 rounded-full bg-white shadow-xl border border-slate-100 text-primary hover:bg-primary hover:text-white transition-all active:scale-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
              </button>
            </div>
            <div className="absolute top-[40%] -right-4 -translate-y-1/2 z-20 hidden lg:block opacity-0 group-hover/scroll:opacity-100 transition-opacity">
              <button 
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full bg-white shadow-xl border border-slate-100 text-primary hover:bg-primary hover:text-white transition-all active:scale-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            <div id="services-scroll" className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]">
              {services.map((service, idx) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="min-w-[280px] sm:min-w-[320px] snap-center"
                >
                  <Link to={`/services/${service.slug}`} className="group block h-full bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 transform hover:-translate-y-1">
                    <div className="h-48 overflow-hidden relative">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center min-h-[140px]">
                      <h4 className="text-base font-black tracking-tight text-slate-900 group-hover:text-primary transition-colors mb-2">{service.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{service.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Technical scroll hint */}
            <div className="absolute -bottom-2 right-0 flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
              Scroll to explore <div className="w-12 h-[1px] bg-slate-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
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
                Leverage our state-of-the-art drone technology for your next geospatial project.
              </p>
              <Link 
                to="/contact" 
                className="group inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
              >
                <span className="text-[10px] sm:text-xs tracking-widest uppercase">Get a Quote</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UAVPhotogrammetryCategory;
