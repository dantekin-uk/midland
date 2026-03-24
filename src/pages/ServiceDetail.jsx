import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import engineering from '../assets/servicesoptions/construction.jpg';

import documentation from '../assets/servicesoptions/doc.jpg';
import earthworks from '../assets/servicesoptions/eath.jpg';
import roadpipeline from '../assets/servicesoptions/rd.jpg';
import boundary from '../assets/servicesoptions/bau.jpg';
import subdivision from '../assets/servicesoptions/land.jpg';
import titledeed from '../assets/servicesoptions/tit.jpg'; 
import dispute from '../assets/servicesoptions/dis.webp';
import modeling from '../assets/servicesoptions/doc.jpg';
import data from '../assets/servicesoptions/dt.jpg';

import photogrammetryUAV from '../assets/services/ser3.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SERVICE_DATA = {
  "boundary-definition": {
    title: "Boundary Definition & Re-establishment",
    category: "Cadastral & Legal Surveying",
    heroDesc: "Clear, legally recognized property boundaries are the foundation of any secure land investment.",
    details: "Clear, legally recognized property boundaries are the foundation of any secure land investment. Whether you are purchasing new land, resolving an encroachment issue, or simply need to locate missing beacons, our licensed surveyors provide total clarity in strict compliance with national statutory regulations.",
    features: [
      { label: "Beacon Replacement", desc: "Accurate restoration of lost, buried, or moved boundary markers." },
      { label: "Pre-Purchase Verification", desc: "Confirming exact acreage and dimensions before finalizing land transactions to protect your investment." },
      { label: "Statutory Compliance", desc: "All boundary work is executed to the exact legal standards required by the Land Surveyors' Board (LSB)." }
    ],
    image: boundary,
    specs: [ { label: "Accuracy", val: "±20mm" }, { label: "Standard", val: "LSB Regulated" }, { label: "Tech", val: "GNSS/RTK" } ]
  },
  "land-subdivisions": {
    title: "Land Subdivision & Consolidation",
    category: "Cadastral & Legal Surveying",
    heroDesc: "Strategic spatial and legal process of altering property boundaries to maximize land value.",
    details: "Whether you are a developer looking to maximize land value or a family dividing an estate, we handle the entire spatial and legal process of altering property boundaries. We ensure your subdivision design or consolidation aligns perfectly with local zoning laws and physical planning requirements.",
    features: [
      { label: "Subdivision Design", desc: "Strategic parceling of large tracts of land for residential, commercial, or agricultural development." },
      { label: "Land Consolidation", desc: "Merging adjacent parcels into a single, legally recognized title." },
      { label: "Mutation Forms", desc: "Preparation and submission of the precise technical documents required by the Land Registry." }
    ],
    image: subdivision,
    specs: [ { label: "Deliverable", val: "Deed Plans" }, { label: "Compliance", val: "Town Planning" }, { label: "Capacity", val: "1000+ Ha" } ]
  },
  "title-deed-processing": {
    title: "Title Deed Processing Surveys",
    category: "Cadastral & Legal Surveying",
    heroDesc: "Highly accurate surveying required to process, update, or amend title deeds.",
    details: "Navigating the legalities of land ownership requires exact data. We bridge the gap between your physical property and the Ministry of Lands by providing the highly accurate surveying required to process, update, or amend title deeds.",
    features: [
      { label: "New Allocations", desc: "Surveying un-alienated land for the issuance of new grants." },
      { label: "Registry Index Mapping (RIM)", desc: "Updating official government maps to reflect new subdivisions or boundary changes." },
      { label: "Lease Extensions", desc: "Providing the necessary spatial documentation for renewing land leases." }
    ],
    image: titledeed,
    specs: [ { label: "Authority", val: "Min. of Lands" }, { label: "Format", val: "RIM/FR" }, { label: "Support", val: "Full Legal" } ]
  },
  "dispute-resolution": {
    title: "Dispute Resolution Surveys",
    category: "Cadastral & Legal Surveying",
    heroDesc: "Expert, impartial surveying services to resolve land disputes quickly and fairly.",
    details: "When boundary conflicts arise, you need objective, indisputable data. We provide expert, impartial surveying services to help landowners, legal teams, and the courts resolve land disputes quickly and fairly.",
    features: [
      { label: "Encroachment Analysis", desc: "Precisely measuring and documenting overlapping structures or fences." },
      { label: "Expert Witness Representation", desc: "Providing professional, legally sound testimony based on accurate geospatial data." },
      { label: "Historical Data Comparison", desc: "Analyzing old deed plans against current ground realities." }
    ],
    image: dispute,
    specs: [ { label: "Role", val: "Expert Witness" }, { label: "Evidence", val: "Court-Ready" }, { label: "Standard", val: "Professional Ethics" } ]
  },
  "construction-setting-out": {
    title: "Construction Setting Out",
    category: "Engineering & Infrastructure Surveying",
    heroDesc: "Flawless translation of architectural and engineering design to reality.",
    details: "A successful construction project relies on a flawless translation of design to reality. We take architectural and engineering blueprints and mark their exact, millimeter perfect positions on the ground, ensuring your contractors build exactly where they are supposed to.",
    features: [
      { label: "Foundation Positioning", desc: "Precise pegging for building corners, columns, and structural grids." },
      { label: "Infrastructure Alignment", desc: "Setting out centerlines and limits for roads, drainage, and utilities." },
      { label: "Vertical Control", desc: "Establishing accurate datum points and benchmarks for level control throughout the project lifecycle." }
    ],
    image: engineering, // Assuming 'engineering.jpg' is for Construction Setting Out
    specs: [ { label: "Accuracy", val: "±5mm" }, { label: "Instruments", val: "Total Station" }, { label: "Support", val: "24/7 On-site" } ]
  },
  "as-built-surveys": {
    title: "As-Built Surveys & Documentation",
    category: "Engineering & Infrastructure Surveying",
    heroDesc: "Mapping finished structures and comparing them against original designs.",
    details: "Once construction is complete, it is critical to verify the final product. We conduct comprehensive as-built surveys to map the exact locations of finished structures, underground utilities, and road networks, comparing them against the original design.",
    features: [
      { label: "Utility Mapping", desc: "Recording the exact placement of pipes, cables, and sewage lines before they are buried." },
      { label: "Compliance Verification", desc: "Ensuring the finished construction meets all regulatory and design tolerances." },
      { label: "Facility Management Data", desc: "Providing accurate blueprints for future maintenance, renovations, or expansions." }
    ],
    image: documentation,
    specs: [ { label: "Deliverable", val: "As-Built CAD" }, { label: "Detail", val: "High Density" }, { label: "Format", val: "BIM Ready" } ]
  },
  "earthworks-computation": {
    title: "Earthworks & Volume Computations",
    category: "Engineering & Infrastructure Surveying",
    heroDesc: "Highly accurate cut-and-fill calculations for efficient resource management.",
    details: "Moving earth is expensive. We provide contractors and developers with highly accurate cut-and-fill calculations, allowing for precise budget estimations and efficient resource management during site grading or mining operations.",
    features: [
      { label: "Pre- and Post-Excavation Surveys", desc: "Measuring the site before and after earthmoving to calculate exact volumes." },
      { label: "Stockpile Measurement", desc: "Accurately determining the volume of mined materials, gravel, or soil reserves." },
      { label: "Terrain Leveling", desc: "Generating precise grading plans to achieve optimal site drainage." }
    ],
    image: earthworks,
    specs: [ { label: "Precision", val: "Volumetric" }, { label: "Software", val: "Civil 3D" }, { label: "Output", val: "PDF/CSV" } ]
  },
  "road-pipeline-profiling": {
    title: "Road, Railway & Pipeline Profiling",
    category: "Engineering & Infrastructure Surveying",
    heroDesc: "Essential surveying support for linear infrastructure projects.",
    details: "Linear infrastructure projects require continuous, high-accuracy data over long distances. We provide the essential surveying support for the planning, design, and construction of transport and utility networks.",
    features: [
      { label: "Route Selection", desc: "Topographical mapping to determine the most efficient and cost-effective alignments." },
      { label: "Longitudinal & Cross Sections", desc: "Detailed profiling of the terrain to guide gradient design and earthworks." },
      { label: "Right-of-Way Surveying", desc: "Defining the legal corridors required for infrastructure development." }
    ],
    image: roadpipeline,
    specs: [ { label: "Scale", val: "Linear KM" }, { label: "Profile", val: "Long/Cross" }, { label: "Standard", val: "KeNHA/KURA" } ]
  },
  "uav-photogrammetry": {
    title: "UAV Drone Mapping & Photogrammetry",
    category: "Topographical & Photogrammetry",
    heroDesc: "Harnessing aerial technology for rapid mapping of large or complex terrains.",
    details: "Harnessing the power of aerial technology, we capture massive amounts of high-resolution spatial data in a fraction of the time required by traditional methods. This allows for rapid, cost-effective mapping of large, inaccessible, or complex terrains.",
    features: [
      { label: "High-Resolution Orthomosaics", desc: "Generating highly detailed, distortion-free aerial maps." },
      { label: "Rapid Site Assessment", desc: "Quickly capturing the current state of a development site or agricultural block." },
      { label: "Progress Monitoring", desc: "Periodic drone flights to track construction milestones visually." }
    ],
    image: photogrammetryUAV,
    specs: [ { label: "GSD", val: "1.5cm/px" }, { label: "Output", val: "3D Models" }, { label: "Platform", val: "Fixed Wing/Multi" } ]
  },
  "topographic-surveys": {
    title: "Master Plan Topographical Surveys",
    category: "Topographical & Photogrammetry",
    heroDesc: "Capturing site features to provide foundational data for master planning.",
    details: "Before any major development begins, you need a complete understanding of the canvas. We capture every natural and man-made feature on your site—from varying elevations to existing buildings and vegetation providing the foundational data for architects, engineers, and urban planners.",
    features: [
      { label: "Contour Mapping", desc: "Detailed illustration of land elevation and slopes." },
      { label: "Feature Extraction", desc: "Pinpointing the exact locations of trees, water bodies, roads, and existing infrastructure." },
      { label: "Design Foundation", desc: "Supplying precise CAD-ready files that serve as the base layer for all design work." }
    ],
    image: roadpipeline,
    specs: [ { label: "Format", val: "DWG/DXF" }, { label: "Interval", val: "0.5m Contours" }, { label: "Detail", val: "All-Feature" } ]
  },
  "3d-terrain-modeling": {
    title: "3D Terrain Modeling (DTM/DEM)",
    category: "Topographical & Photogrammetry",
    heroDesc: "Rich, digital, three-dimensional representations of the earth's surface.",
    details: "We go beyond flat maps to create rich, digital, three-dimensional representations of the earth's surface. These models are crucial for advanced engineering design, environmental analysis, and visual planning.",
    features: [
      { label: "Digital Elevation Models (DEM)", desc: "Bare-earth models essential for hydrological and drainage analysis." },
      { label: "Digital Terrain Models (DTM)", desc: "Incorporating breaklines and spatial features for complex engineering calculations." },
      { label: "Slope & Runoff Analysis", desc: "Utilizing 3D data to predict water flow and prevent flooding on development sites." }
    ],
    image: modeling,
    specs: [ { label: "Mesh", val: "Triangulated" }, { label: "Analysis", val: "Slope/Aspect" }, { label: "Precision", val: "High-Grid" } ]
  },
  "gis-data-management": {
    title: "GIS Data Collection & Management",
    category: "Topographical & Photogrammetry",
    heroDesc: "Turning raw spatial data into actionable intelligence for informed decisions.",
    details: "Geographic Information Systems (GIS) turn raw spatial data into actionable intelligence. We help institutions, governments, and large agricultural operations collect, organize, and analyze geospatial data to make informed, location-based decisions.",
    features: [
      { label: "Asset Mapping", desc: "Digitally logging the exact locations of dispersed physical assets (e.g., utility poles, manholes)." },
      { label: "Spatial Database Creation", desc: "Structuring your location data into searchable, easy-to-manage digital formats." },
      { label: "Custom Mapping Solutions", desc: "Creating thematic maps tailored to specific analytical needs, such as land use or soil distribution." }
    ],
    image: data,
    specs: [ { label: "Software", val: "ArcGIS/QGIS" }, { label: "Database", val: "PostGIS/SQL" }, { label: "Attribute", val: "Custom Schema" } ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = SERVICE_DATA[slug] || SERVICE_DATA["boundary-definition"];

  const scroll = (direction) => {
    const container = document.getElementById('discovery-scroll');
    if (container) {
      const scrollAmount = 340;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Logic to select 3 random "More Services" cards
  const moreServices = useMemo(() => {
    return Object.entries(SERVICE_DATA)
      .filter(([key]) => key !== slug)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(([key, val]) => ({ ...val, slug: key }));
  }, [slug]);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="bg-white">
      {/* 1. Hero Section - Same design as Services Page */}
      <section className="relative pt-20 sm:pt-24 px-4 lg:px-6">
        <div className="relative w-full max-w-[95%] mx-auto h-[280px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-2xl rounded-br-[80px] sm:rounded-br-[150px] shadow-2xl shadow-slate-200">
          <div className="absolute inset-0">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" loading="eager" /> {/* Hero image loads eagerly */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl space-y-4 sm:space-y-6">
                <h1 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] text-primary font-bold">{data.title}</h1>

              <motion.p 
                initial="hidden" animate="visible" transition={{ delay: 0.2 }} variants={fadeIn}
                className="text-white text-xs sm:text-base md:text-xl font-semibold leading-relaxed drop-shadow-md max-w-2xl"
              >
                {data.heroDesc}
              </motion.p>

              <motion.div
                initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={fadeIn}
                className="flex justify-start pt-2"
              >
                <button 
                  onClick={() => document.getElementById('service-details-content')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative bg-primary text-white px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl font-bold text-[10px] sm:text-xs tracking-widest uppercase hover:opacity-90 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/25 overflow-hidden"
                >
                  <span className="relative z-10">Read More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Content & Sidebar Section */}
      <section className="py-12 lg:py-24">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Main Content Column */}
            <motion.div
              id="service-details-content" 
              whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeIn}
              className="w-full lg:w-2/3 space-y-8"
            >
              <h3 className="text-lg lg:text-xl font-black tracking-tighter leading-tight bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
                About {data.title}
              </h3>
              
              <div className="space-y-8 sm:space-y-10 text-slate-600 leading-relaxed font-medium text-xs sm:text-base">
                <p className="max-w-3xl">{data.details}</p>

                {/* Key Capabilities - Individual Modern Cards */}
                <div className="space-y-6">
                  <h4 className="text-text-main font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-primary"></span>
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {data.features?.map((feat, fIdx) => (
                      <motion.div
                        key={fIdx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fIdx * 0.1 }}
                        className="group p-5 sm:p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-slate-800 font-black text-xs sm:text-sm tracking-tight uppercase group-hover:text-primary transition-colors">{feat.label}</h4>
                            <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">{feat.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar CTA Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <div className="lg:sticky lg:top-32 bg-gradient-to-br from-primary to-steel-grey p-6 sm:p-8 lg:p-10 rounded-[2.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
                {/* Decorative background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                
                <div className="relative z-10 space-y-6">
                  <h4 className="text-lg lg:text-xl font-black tracking-tighter leading-tight">
                    Ready to get started?
                  </h4>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-medium">
                    Partner with Kenya's leading geospatial experts for precision-driven solutions tailored to your infrastructure needs.
                  </p>
                  
                  <div className="flex flex-col gap-3 pt-4">
                    <Link to="/contact" className="w-full py-3.5 bg-white text-primary font-bold rounded-xl text-center text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-lg shadow-black/10">
                      Get a Quote
                    </Link>
                    <Link to="/contact" className="w-full py-3.5 border border-white/20 text-white font-bold rounded-xl text-center text-[10px] uppercase tracking-widest hover:bg-white/5 transition-colors">
                      Contact Specialist
                    </Link>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">Service Standards</div>
                    <div className="grid grid-cols-2 gap-4 text-white/70">
                      {data.specs?.slice(0, 2).map((spec, sIdx) => (
                        <div key={sIdx}>
                          <div className="text-white font-black text-xs">{spec.val}</div>
                          <div className="text-white/40 text-[8px] uppercase font-bold">{spec.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Quick Inquiry Form Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50/50 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 border border-slate-100 relative overflow-hidden"
          >
            {/* Technical Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-start">
              <div className="w-full lg:w-1/3 space-y-4">
                <h3 className="text-xl lg:text-2xl font-black tracking-tighter leading-tight bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent">
                  Have a specific question about this service?
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  Provide your project details below and our technical lead for <span className="text-primary font-bold">{data.category}</span> will contact you within 24 hours.
                </p>
              </div>

              <div className="w-full lg:w-2/3">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2 text-slate-900">
                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Jane Mwangi" 
                      className="w-full px-5 py-3 sm:px-6 sm:py-4 bg-white border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-xs sm:text-sm font-medium text-slate-900 shadow-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="jane@company.co.ke" 
                      className="w-full px-5 py-3 sm:px-6 sm:py-4 bg-white border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-xs sm:text-sm font-medium text-slate-900 shadow-sm" 
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Project Scope or Question</label>
                    <textarea 
                      rows="4" 
                      placeholder={`Tell us about your requirements for ${data.title}...`} 
                      className="w-full px-5 py-3 sm:px-6 sm:py-4 bg-white border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-xs sm:text-sm font-medium text-slate-900 shadow-sm resize-none"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2 pt-2">
                    <button type="submit" className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 bg-primary text-white font-bold rounded-2xl hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-primary/20">
                      <span className="text-[10px] sm:text-xs tracking-widest uppercase">Send Quick Inquiry</span>
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. More Services Section - Random Selection */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-4">Discovery</h2>
            <h3 className="text-2xl lg:text-3xl font-black tracking-tighter leading-tight bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent">
              Explore More Services.
            </h3>
          </div>

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

            <div id="discovery-scroll" className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]">
              {moreServices.map((service, idx) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] snap-center"
                >
                  <Link to={`/services/${service.slug}`} className="group block h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 transform hover:-translate-y-1">
                    <div className="h-40 overflow-hidden relative">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" /> {/* Lazy load for discovery cards */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent"></div>
                    </div>
                    <div className="p-8">
                      <h4 className="text-base font-black tracking-tight text-slate-900 group-hover:text-primary transition-colors mb-2">{service.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{service.heroDesc}</p>
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
    </div>
  );
};

export default ServiceDetail;