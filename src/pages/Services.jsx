import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import engineering from '../assets/servicesoptions/construction.jpg';
import photogrammetry from '../assets/services/ser3.jpg';
import boundary from '../assets/servicesoptions/bau.jpg';
import subdivision from '../assets/servicesoptions/land.jpg';
import titledeed from '../assets/servicesoptions/tit.jpg'; 
import dispute from '../assets/servicesoptions/dis.webp';
import documentation from '../assets/servicesoptions/doc.jpg';
import earthworks from '../assets/servicesoptions/eath.jpg';
import roadpipeline from '../assets/servicesoptions/rd.jpg';
import modeling from '../assets/servicesoptions/doc.jpg';
import data from '../assets/servicesoptions/dt.jpg';
import topography from '../assets/servicesoptions/topography.jpg';


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
      title: "Professional Land Surveying Services",
      description: "Our Professional Land Surveying Services provide strategic solutions for land tenure and development. We specialize in the precise parceling, merging, and legal verification of land to ensure full compliance with the Registry Index Map (RIM). From investigating the legal status of a property to providing expert witness representation in land disputes, we offer comprehensive services to protect your investment and facilitate seamless residential, commercial, or agricultural growth.",
      options: [
        { title: "Land Subdivision", desc: "Strategic parceling of land for residential, commercial, or agricultural development.", image: subdivision, path: "/services/land-subdivision" },
        { title: "Land Amalgamation", desc: "Merging adjacent parcels into a single, legally recognized title.", image: boundary, path: "/services/land-amalgamation" },
        { title: "Sectional Properties Survey", desc: "Division of buildings into units to be owned by individual proprietors and common property to be owned by proprietors of the units as tenants in common.", image: titledeed, path: "/services/sectional-properties-survey" },
        { title: "Boundary Re-establishment (RIM)", desc: "Placing of boundaries as per the RIM to indicate its accurate ground location to avoid boundary disputes.", image: boundary, path: "/services/boundary-re-establishment" },
        { title: "Land Acquisition & Expert Witness", desc: "Providing expert witness representation on land acquisition, land disputes and land value negotiations.", image: dispute, path: "/services/land-acquisition-expert-witness" },
        { title: "Due Diligence & Pre-purchase Verification", desc: "Investigating the legal status of a property, including title ownership searches, zoning regulations, and encroachment verifications.", image: documentation, path: "/services/due-diligence-verification" }
      ]
    },
    {
      id: "engineering",
      title: "Engineering Surveying",
      description: "From civil set-outs for residential developments to monitoring and volume surveys, and construction set-outs for diverse infrastructures, our engineering surveying service ensures accuracy and reliability across various projects. We establish high-precision networks and map existing site conditions to provide the foundational data required for complex civil and structural engineering works.",
      options: [
        { title: "Geodetic Control Networks", desc: "Establishing high-accuracy spatial frameworks for large-scale projects.", image: engineering, path: "/services/geodetic-control-networks" },
        { title: "Topographic Surveys", desc: "Mapping existing conditions of a site to inform design and planning.", image: topography, path: "/services/topographic-surveys" },
        { title: "Civil & Construction Set-out", desc: "Precision marking for residential subdivisions, including earthworks, services, and kerb and channel.", image: engineering, path: "/services/civil-construction-setout" },
        { title: "As-Constructed Surveys", desc: "Final mapping and verification of completed infrastructure.", image: documentation, path: "/services/as-constructed-surveys" },
        { title: "Monitoring & Volume Surveys", desc: "Precise tracking of structural movement and earthwork quantities.", image: data, path: "/services/monitoring-volume-surveys" }
      ]
    },
    {
      id: "photogrammetry",
      title: "UAV Photogrammetry",
      description: "We deliver geospatial and photogrammetry solutions through our state-of-the-art UAV technology paired with an extensive array of sensors operated by our experienced team. Our surveyors and photogrammetrists understand local regulations, environmental conditions, and project requirements across urban development, agriculture, mining, and environmental monitoring to deliver high-resolution spatial data.",
      options: [
        { title: "High-Resolution Orthomosaics", desc: "Creating measurable, distortion-free aerial maps.", image: photogrammetry, path: "/services/high-resolution-orthomosaics" },
        { title: "Mine & Quarry Volumes", desc: "Rapid and accurate volumetric analysis for resource extraction sites.", image: modeling, path: "/services/mine-quarry-volumes" },
        { title: "Construction Progress Monitoring", desc: "High-detail quality assurance and progress tracking throughout the project lifecycle.", image: engineering, path: "/services/construction-progress-monitoring" },
        { title: "Environmental Compliance", desc: "Monitoring land use and ecological impact using advanced aerial sensors.", image: data, path: "/services/environmental-compliance" },
        { title: "Pre-construction Surveys", desc: "Capturing comprehensive site data before the commencement of physical works.", image: photogrammetry, path: "/services/pre-construction-surveys" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section - Styled like Projects Page */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 px-4 lg:px-6">
        <div className="relative w-full max-w-[95%] mx-auto h-[250px] sm:h-[180px] md:h-[220px] lg:h-[300px] overflow-hidden rounded-2xl rounded-br-[80px] sm:rounded-br-[120px] lg:rounded-br-[150px] shadow-2xl shadow-slate-200">
          <div className="absolute inset-0">
            <img src={photogrammetry} alt="Our Services" className="w-full h-full object-cover object-center" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/50"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-end pb-8 sm:pb-6 md:pb-8 px-3 sm:px-4 md:px-6 lg:px-12 lg:items-center lg:pb-4">
            <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
              <h1 className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.3em] text-primary font-bold">Our Services</h1>

              <motion.p 
                initial="hidden" animate="visible" transition={{ delay: 0.2 }} variants={fadeIn}
                className="text-white text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-xl font-semibold leading-tight sm:leading-relaxed drop-shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
              >
            Precision engineering surveys providing millimeter accuracy for infrastructure set-outs, structural monitoring, and reliable development.
              </motion.p>

              <motion.div
                initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={fadeIn}
                className="flex justify-start pt-0 sm:pt-1 md:pt-2 lg:pt-2"
              >
                <button 
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery("");
                    setTimeout(() => {
                      document.getElementById('engineering')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
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
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all font-medium text-xs sm:text-sm text-slate-900"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'cadastral', label: 'Land Surveying' },
              { id: 'engineering', label: 'Engineering' },
              { id: 'photogrammetry', label: 'UAV Photogrammetry' }
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
                          <h4 className="text-base font-black tracking-tight text-slate-900 group-hover:text-primary transition-colors">{option.title}</h4>
                          <p className="text-slate-600 text-xs leading-relaxed font-medium">{option.desc}</p>
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
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
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
                            <h4 className="text-base font-black tracking-tight text-slate-900 group-hover:text-primary transition-colors">{option.title}</h4>
                            <p className="text-slate-600 text-xs leading-relaxed font-medium">{option.desc}</p>
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
              <p className="text-sm lg:text-base mb-8 text-white/80 max-w-2xl mx-auto font-medium">
                From land surveying and boundary re-establishment to engineering surveys and UAV photogrammetry, our team is ready to support your next major project.
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
