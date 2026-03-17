import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import aboutHero from '../assets/about.jpg';
import surveying from '../assets/services/survaying.jpg';
import engineering from '../assets/servicesoptions/construction.jpg';
import photogrammetry from '../assets/services/ser3.jpg';
import boundary from '../assets/servicesoptions/bau.jpg';
import subdivision from '../assets/servicesoptions/land.jpg';
import titledeed from '../assets/servicesoptions/tit.jpg'; 
import dispute from '../assets/servicesoptions/dis.webp';
import documentation from '../assets/servicesoptions/doc.jpg';
import earthworks from '../assets/servicesoptions/eath.jpg';
import roadpipeline from '../assets/servicesoptions/rd.jpg';
import modeling from '../assets/servicesoptions/ser2.jpg';
import data from '../assets/servicesoptions/dt.jpg';
import topography from '../assets/servicesoptions/rd.jpg';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const scroll = (id, direction) => {
    const container = document.getElementById(`scroll-${id}`);
    if (container) {
      const scrollAmount = 340; // Card width + gap
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const serviceCategories = [
    {
      id: "cadastral",
      title: "Cadastral & Legal Surveying",
      description: "Our cadastral services provide the foundation for secure land ownership. We combine technical expertise with legal knowledge to deliver accurate boundary surveys recognized by the LSB.",
      options: [
        { title: "Boundary Definition", desc: "Precise re-establishment of legal property lines.", image: boundary, path: "/services/boundary-definition" },
        { title: "Land Subdivisions", desc: "Expert partitioning for residential and commercial development.", image: subdivision, path: "/services/land-subdivisions" },
        { title: "Title Deed Processing", desc: "Technical surveys required for registration and issuance.", image: titledeed, path: "/services/title-deed-processing" },
        { title: "Dispute Resolution", desc: "Expert witness and technical reporting for boundary cases.", image: dispute, path: "/services/dispute-resolution" }
      ]
    },
    {
      id: "engineering",
      title: "Engineering & Infrastructure",
      description: "Ensuring millimeter-level accuracy across the entire construction lifecycle, from initial site layout to final as-built documentation for major infrastructure projects.",
      options: [
        { title: "Construction Setting Out", desc: "Precise marking of design coordinates on site.", image: engineering, path: "/services/construction-setting-out" },
        { title: "As-Built Surveys", desc: "Verifying final construction against engineering plans.", image: documentation, path: "/services/as-built-surveys" },
        { title: "Road & Pipeline Profiling", desc: "Longitudinal and cross-section surveys for utilities.", image: roadpipeline, path: "/services/road-pipeline-profiling" },
        { title: "Earthworks Computation", desc: "Volume calculations for cut-and-fill optimization.", image: earthworks, path: "/services/earthworks-computation" }
      ]
    },
    {
      id: "mapping",
      title: "Mapping & GIS Solutions",
      description: "Utilizing advanced UAV technology and spatial analysis tools to generate high-resolution terrain models and actionable GIS datasets.",
      options: [
        { title: "UAV Photogrammetry", desc: "Rapid aerial mapping using state-of-the-art drones.", image: photogrammetry, path: "/services/uav-photogrammetry" },
        { title: "3D Terrain Modeling", desc: "High-density DTM and DEM for engineering design.", image: modeling, path: "/services/3d-terrain-modeling" },
        { title: "Topographic Surveys", desc: "Detailed contour mapping and feature identification.", image: topography, path: "/services/topographic-surveys" },
        { title: "GIS Data Management", desc: "Customized spatial databases for asset tracking.", image: data, path: "/services/gis-data-management" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section - Styled like About Page */}
      <section className="relative pt-24 px-4 lg:px-6">
        <div className="relative w-full max-w-[95%] mx-auto h-[260px] lg:h-[300px] overflow-hidden rounded-2xl rounded-br-[150px] shadow-2xl shadow-slate-200">
          <div className="absolute inset-0">
            <img src={modeling} alt="Our Services" className="w-full h-full object-cover" loading="eager" /> {/* Hero image loads eagerly */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center px-6 lg:px-12">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] text-primary font-bold">Our Services</h1>
              <motion.p 
                initial="hidden" animate="visible" transition={{ delay: 0.2 }} variants={fadeIn}
                className="text-white text-sm sm:text-base md:text-xl font-semibold leading-relaxed drop-shadow-md opacity-90"
              >
                Delivering highly accurate setting out, earthwork computations, and as-built documentation to keep your complex infrastructure projects on track and on budget.
              </motion.p>

              <motion.div
                initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={fadeIn}
                className="flex justify-start pt-2"
              >
                <button 
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery("");
                    setTimeout(() => {
                      document.getElementById('engineering')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="group relative bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase hover:opacity-90 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/25 overflow-hidden"
                >
                  <span className="relative z-10">Read More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. Search & Filter Bar - Technical & Modern */}
      <section className="py-8 bg-white border-b border-slate-50 sticky top-[72px] md:top-[88px] z-30">
        <div className="w-full max-w-[95%] mx-auto px-4 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text"
              placeholder="Search for a specific service (e.g. 'Subdivision', 'UAV')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all font-medium text-xs sm:text-sm text-text-main"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'cadastral', label: 'Cadastral' },
              { id: 'engineering', label: 'Engineering' },
              { id: 'mapping', label: 'Mapping & GIS' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setSearchQuery("");
                }}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === tab.id && !searchQuery 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="py-16 lg:py-24">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <AnimatePresence mode="wait">
            {searchQuery ? (
              /* Search Results Grid */
              <motion.div 
                key="search-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {serviceCategories.flatMap(cat => cat.options).filter(opt => 
                  opt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  opt.desc.toLowerCase().includes(searchQuery.toLowerCase())
                ).length > 0 ? (
                  serviceCategories.flatMap(cat => cat.options).filter(opt => 
                    opt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    opt.desc.toLowerCase().includes(searchQuery.toLowerCase())
                  ).map((option, idx) => (
                    <div key={idx}>
                      <Link to={option.path} className="group block h-full bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 transform hover:-translate-y-1">
                        <div className="h-40 overflow-hidden relative">
                          <img src={option.image} alt={option.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" /> {/* Lazy load for service option images */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="p-8 space-y-3">
                          <h4 className="text-base font-black tracking-tight text-text-main group-hover:text-primary transition-colors">{option.title}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed font-medium">{option.desc}</p>
                          <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest pt-2">
                            <span>View Details</span>
                            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center text-slate-400 font-medium">
                    No services found matching "{searchQuery}"
                  </div>
                )}
              </motion.div>
            ) : (
              /* Categorized Sections */
              <div className="space-y-24 lg:space-y-32">
                {serviceCategories.filter(cat => activeCategory === 'all' || cat.id === activeCategory).map((category, idx) => (
              <div key={category.id} id={category.id} className="flex flex-col lg:flex-row gap-12">
                {/* Left Side: Category Info */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/3 space-y-4"
                >
                  <h2 className="text-2xl lg:text-3xl font-black tracking-tighter leading-tight bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
                    {category.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {category.description}
                  </p>
                </motion.div>

                {/* Right Side: Horizontal Snap Scroll Container */}
                <div className="lg:w-2/3 relative group/scroll">
                  {/* Navigation Arrows */}
                  <div className="absolute top-[40%] -left-4 -translate-y-1/2 z-20 hidden lg:block opacity-0 group-hover/scroll:opacity-100 transition-opacity">
                    <button 
                      onClick={() => scroll(category.id, 'left')}
                      className="p-2.5 rounded-full bg-white shadow-xl border border-slate-100 text-primary hover:bg-primary hover:text-white transition-all active:scale-90"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                  </div>
                  <div className="absolute top-[40%] -right-4 -translate-y-1/2 z-20 hidden lg:block opacity-0 group-hover/scroll:opacity-100 transition-opacity">
                    <button 
                      onClick={() => scroll(category.id, 'right')}
                      className="p-2.5 rounded-full bg-white shadow-xl border border-slate-100 text-primary hover:bg-primary hover:text-white transition-all active:scale-90"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>

                  <div id={`scroll-${category.id}`} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]">
                    {category.options.map((option, optIdx) => (
                      <motion.div
                        key={optIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: optIdx * 0.1 }}
                        className="min-w-[280px] sm:min-w-[320px] snap-center"
                      >
                        <Link to={option.path} className="group block h-full bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 transform hover:-translate-y-1">
                          <div className="h-40 overflow-hidden relative">
                            <img src={option.image} alt={option.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          <div className="p-8 space-y-3">
                            <h4 className="text-base font-black tracking-tight text-text-main group-hover:text-primary transition-colors">{option.title}</h4>
                            <p className="text-slate-500 text-xs leading-relaxed font-medium">{option.desc}</p>
                            <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest pt-2">
                              <span>View Details</span>
                              <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
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
            ))}
          </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. CTA Section */}
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
                Need a Custom <span className="text-white/80">Spatial Solution?</span>
              </h2>
              <p className="text-sm lg:text-base mb-8 text-white/70 max-w-2xl mx-auto font-medium">
                From broadacre cadastral surveys to complex drone photogrammetry, our team is ready to support your next major project.
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

export default Services;
