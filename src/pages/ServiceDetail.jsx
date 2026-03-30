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
import topography from '../assets/servicesoptions/topography.jpg';

import photogrammetryUAV from '../assets/services/ser3.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SERVICE_DATA = {
  "land-subdivision": {
    title: "Land Subdivision",
    category: "Professional Land Surveying",
    heroDesc: "Strategic parceling of land for residential, commercial, or agricultural development.",
    details: "Strategic land development begins with precise parceling. Whether you are creating a residential estate, a commercial park, or agricultural blocks, our subdivision services ensure your land is divided to maximize utility while adhering to all physical planning and legal requirements for individual title issuance.",
    features: [
      { label: "Development Strategy", desc: "Optimized parceling for residential and commercial growth." },
      { label: "Title Readiness", desc: "Ensuring every new parcel is prepared for independent legal registration." },
      { label: "Planning Compliance", desc: "Strict adherence to local physical planning and land acts." }
    ],
    image: subdivision,
    specs: [ { label: "Accuracy", val: "±30mm" }, { label: "Regulated", val: "LSB & Min. of Lands" } ]
  },
  "land-amalgamation": {
    title: "Land Amalgamation",
    category: "Professional Land Surveying",
    heroDesc: "Merging adjacent parcels into a single, legally recognized title.",
    details: "Unlock greater development potential by consolidating your holdings. Land amalgamation involves the seamless merging of adjacent parcels into a single, unified title. This process simplifies land management, enhances property value for large projects, and streamlines building approval processes.",
    features: [
      { label: "Title Consolidation", desc: "Merging multiple deeds into a single, clean legal entity." },
      { label: "Site Optimization", desc: "Removing internal boundaries to maximize buildable area." },
      { label: "Registry Coordination", desc: "Managing technical updates with the Land Registry." }
    ],
    image: boundary,
    specs: [ { label: "Process", val: "Statutory Legal Merge" }, { label: "Standard", val: "LSB Compliant" } ]
  },
  "sectional-properties-survey": {
    title: "Sectional Properties Survey",
    category: "Professional Land Surveying",
    heroDesc: "Division of buildings into units to be owned by individual proprietors.",
    details: "We specialize in the complex division of buildings into individual units and common property. Our surveys ensure that units are accurately defined for individual ownership, while common areas are correctly designated to be owned by proprietors of the units as tenants in common.",
    features: [
      { label: "Unit Mapping", desc: "Precise spatial definition of private apartment/office units." },
      { label: "Common Area Designation", desc: "Clear demarcation of shared utility and access zones." },
      { label: "Act Compliance", desc: "Fully aligned with the Sectional Properties Act 2020." }
    ],
    image: titledeed,
    specs: [ { label: "Accuracy", val: "±10mm (Internal)" }, { label: "Title Type", val: "Sectional Title Deed" } ]
  },
  "boundary-re-establishment": {
    title: "Boundary Re-establishment (RIM)",
    category: "Professional Land Surveying",
    heroDesc: "Placing boundaries as per the RIM to indicate accurate ground locations.",
    details: "Clear, legally recognized property boundaries are the foundation of secure land investment. We precisely place boundaries as per the Registry Index Map (RIM) to indicate accurate ground locations. This service is essential for resolving encroachments and avoiding future boundary disputes.",
    features: [
      { label: "Beacon Restoration", desc: "Accurate replacement of lost or moved boundary markers." },
      { label: "RIM Alignment", desc: "Ensuring ground locations match official Registry Index Maps." },
      { label: "Dispute Resolution", desc: "Providing technical evidence to settle boundary conflicts." }
    ],
    image: boundary,
    specs: [ { label: "Accuracy", val: "±20mm" }, { label: "Standard", val: "LSB Regulated" } ]
  },
  "land-acquisition-expert-witness": {
    title: "Land Acquisition & Expert Witness",
    category: "Professional Land Surveying",
    heroDesc: "Expert witness representation on land acquisition and value negotiations.",
    details: "Navigating land disputes and utility route acquisitions requires technical and legal authority. We provide expert witness representation for land acquisition, boundary disputes, and land value negotiations, ensuring your interests are protected in tribunals and legal settings.",
    features: [
      { label: "Expert Testimony", desc: "Providing professional technical evidence in land courts." },
      { label: "Utility Route Planning", desc: "Surveying for pipelines, powerlines, and wayleaves." },
      { label: "Negotiation Support", desc: "Data-driven advice for land value and compensation." }
    ],
    image: dispute,
    specs: [ { label: "Authority", val: "Certified Expert Witness" }, { label: "Scope", val: "Legal & Technical Advisory" } ]
  },
  "due-diligence-verification": {
    title: "Due Diligence & Pre-purchase Verification",
    category: "Professional Land Surveying",
    heroDesc: "Investigating the legal status of property to protect your investment.",
    details: "Protect your investment before finalizing any transaction. We investigate the legal status of a property, including title ownership searches, zoning regulations, and encroachment verifications. We confirm the exact acreage and dimensions on the ground to ensure complete transparency.",
    features: [
      { label: "Acreage Confirmation", desc: "Independent verification of land size before purchase." },
      { label: "Encroachment Checks", desc: "Identifying if structures cross official boundaries." },
      { label: "Zoning Verification", desc: "Confirming the land's permitted use and restrictions." }
    ],
    image: documentation,
    specs: [ { label: "Verification", val: "100% Risk Audit" }, { label: "Status", val: "Pre-purchase Certified" } ]
  },
  "geodetic-control-networks": {
    title: "Geodetic Control Networks",
    category: "Engineering Surveying",
    heroDesc: "Establishing high-accuracy spatial frameworks for large-scale projects.",
    details: "The foundation of every major engineering project is a precise coordinate system. We establish geodetic survey control networks that provide a stable, high-accuracy spatial framework, ensuring all subsequent project phases—from design to construction—are perfectly aligned.",
    features: [
      { label: "Primary Control", desc: "Establishing permanent, high-precision survey markers." },
      { label: "Coordinate Stability", desc: "Ensuring consistent data across massive project areas." },
      { label: "GNSS Integration", desc: "Utilizing satellite technology for millimeter-level accuracy." }
    ],
    image: engineering,
    specs: [ { label: "Accuracy", val: "±5mm (H/V)" }, { label: "Standard", val: "Geodetic Grade" } ]
  },
  "topographic-surveys": {
    title: "Topographic Surveys",
    category: "Engineering Surveying",
    heroDesc: "Mapping existing site conditions to inform design and planning.",
    details: "Understand the \"lay of the land\" before you build. Our topographic surveys map all existing conditions of a site, including natural features, man-made structures, and elevation changes, providing the detailed data essential for architectural and engineering design.",
    features: [
      { label: "Terrain Mapping", desc: "Detailed contour and elevation data collection." },
      { label: "Feature Inventory", desc: "Identifying all existing trees, utilities, and structures." },
      { label: "Design Readiness", desc: "Providing CAD-ready data for engineers and architects." }
    ],
    image: topography,
    specs: [ { label: "Detail", val: "High-density point capture" }, { label: "Output", val: "2D/3D CAD & Contours" } ]
  },
  "civil-construction-setout": {
    title: "Civil & Construction Set-out",
    category: "Engineering Surveying",
    heroDesc: "Ensuring accuracy for buildings, bridges, and road infrastructure.",
    details: "We translate your engineering designs into reality with perfect precision. From civil set-outs for residential subdivisions—including earthworks, services, and kerb and channel—to major structural set-outs for buildings and bridges, we ensure every element is built exactly where it should be.",
    features: [
      { label: "Structural Positioning", desc: "Precision marking for building and bridge foundations." },
      { label: "Infrastructure Layout", desc: "Setting out roads, drainage, and utility networks." },
      { label: "Earthworks Control", desc: "Guiding excavation and grading for site preparation." }
    ],
    image: engineering,
    specs: [ { label: "Accuracy", val: "±5mm to ±15mm" }, { label: "Equipment", val: "Robotic Total Station / RTK" } ]
  },
  "as-constructed-surveys": {
    title: "As-Constructed Surveys",
    category: "Engineering Surveying",
    heroDesc: "Final mapping and verification of completed infrastructure.",
    details: "The \"As-Built\" survey is the final validation of your project. We provide a detailed map of the finished conditions of the site, confirming that all infrastructure has been installed according to design and providing critical documentation for project handover.",
    features: [
      { label: "Utility Verification", desc: "Precise mapping of installed underground services." },
      { label: "Compliance Checks", desc: "Confirming the build matches the approved design." },
      { label: "Asset Mapping", desc: "Creating high-detail records for future maintenance." }
    ],
    image: documentation,
    specs: [ { label: "Reporting", val: "CAD/GIS Integrated" }, { label: "Precision", val: "Standard Engineering Spec" } ]
  },
  "monitoring-volume-surveys": {
    title: "Monitoring & Volume Surveys",
    category: "Engineering Surveying",
    heroDesc: "Precise tracking of structural movement and earthwork quantities.",
    details: "Safety and cost-control depend on accurate measurement. We provide structural monitoring to detect ground or building movement over time, alongside volume surveys for accurate calculation of earthworks, excavations, and stockpiles.",
    features: [
      { label: "Structural Monitoring", desc: "High-frequency tracking of building deformation." },
      { label: "Volume Calculation", desc: "Precise measurement of stockpiles and excavation." },
      { label: "Progress Auditing", desc: "Independent verification of material moved on-site." }
    ],
    image: earthworks,
    specs: [ { label: "Accuracy", val: "Millimeter Monitoring" }, { label: "Volumetric", val: "±1-3% Error Margin" } ]
  },
  "high-resolution-orthomosaics": {
    title: "High-Resolution Orthomosaics",
    category: "UAV Photogrammetry",
    heroDesc: "Measurable, distortion-free aerial maps for rapid site intelligence.",
    details: "Leverage advanced UAV technology to see your project in unprecedented detail. Our photogrammetrists generate high-resolution orthomosaics—distortion-free aerial maps that allow for precise measurements and detailed site analysis across urban and rural landscapes.",
    features: [
      { label: "Aerial Intelligence", desc: "Survey-grade visual data for large project areas." },
      { label: "Geometric Precision", desc: "Maps that allow for direct, accurate measurement." },
      { label: "Rapid Turnaround", desc: "Faster data collection than traditional methods." }
    ],
    image: photogrammetryUAV,
    specs: [ { label: "GSD", val: "< 2cm/pixel" }, { label: "Technology", val: "Multi-rotor/Fixed-wing UAV" } ]
  },
  "mine-quarry-volumes": {
    title: "Mine & Quarry Volumes",
    category: "UAV Photogrammetry",
    heroDesc: "Rapid and accurate volumetric analysis for resource extraction sites.",
    details: "Safety and efficiency are critical in mining environments. Our UAV-based volumetric surveys allow us to calculate monthly extraction volumes and stockpile quantities safely, without the need for ground personnel to enter hazardous areas.",
    features: [
      { label: "Safe Data Collection", desc: "Mapping hazardous slopes from the air." },
      { label: "Extraction Auditing", desc: "Accurate monthly reporting of material moved." },
      { label: "Inventory Control", desc: "Precise volume calculations for all stockpiles." }
    ],
    image: modeling,
    specs: [ { label: "Accuracy", val: "±1% to ±3% Volumetric" }, { label: "Output", val: "3D Mesh / Volumetric Report" } ]
  },
  "construction-progress-monitoring": {
    title: "Construction Progress Monitoring",
    category: "UAV Photogrammetry",
    heroDesc: "Visual and spatial quality assurance throughout the project lifecycle.",
    details: "Stay on schedule and within budget with aerial progress tracking. We provide high-detail visual and spatial data that allows developers and contractors to monitor site progress, verify quality, and share real-time updates with stakeholders.",
    features: [
      { label: "Visual Timelines", desc: "Regular aerial photos and videos of site progress." },
      { label: "Quality Assurance", desc: "Identifying deviations from design early in the build." },
      { label: "Stakeholder Reporting", desc: "Professional visual data for client updates." }
    ],
    image: engineering,
    specs: [ { label: "Frequency", val: "Weekly/Monthly Flights" }, { label: "Detail", val: "High-definition 4K Visuals" } ]
  },
  "environmental-compliance": {
    title: "Environmental Compliance",
    category: "UAV Photogrammetry",
    heroDesc: "Monitoring land use and ecological impact using advanced aerial sensors.",
    details: "Infrastructure and mining projects must meet strict environmental standards. Our UAV services support environmental compliance by monitoring land-use changes, vegetation health, and ecological impacts through high-resolution multispectral and visual data.",
    features: [
      { label: "Land Use Tracking", desc: "Monitoring site boundaries and buffer zones." },
      { label: "Ecological Auditing", desc: "High-detail mapping of sensitive environmental areas." },
      { label: "Rehabilitation Monitoring", desc: "Tracking the success of site restoration efforts." }
    ],
    image: data,
    specs: [ { label: "Analysis", val: "Multi-layer Geospatial Data" }, { label: "Standard", val: "NEMA / local regulations" } ]
  },
  "pre-construction-surveys": {
    title: "Pre-construction Surveys",
    category: "UAV Photogrammetry",
    heroDesc: "Capturing comprehensive site data before the commencement of works.",
    details: "The success of a project depends on its starting data. We use UAV technology to capture a comprehensive digital baseline of your site before work begins, providing designers and contractors with high-accuracy maps of existing site conditions.",
    features: [
      { label: "Baseline Mapping", desc: "Creating a digital twin of the site before disruption." },
      { label: "Constraint Identification", desc: "Identifying access and terrain challenges early." },
      { label: "Condition Reporting", desc: "Documenting the site for legal and planning records." }
    ],
    image: photogrammetryUAV,
    specs: [ { label: "Format", val: "CAD / GIS / Point Cloud" }, { label: "Status", val: "Site Baseline Certified" } ]
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
      <section className="relative pt-16 sm:pt-20 md:pt-24 px-4 lg:px-6">
        <div className="relative w-full max-w-[95%] mx-auto h-[250px] sm:h-[180px] md:h-[220px] lg:h-[300px] overflow-hidden rounded-2xl rounded-br-[80px] sm:rounded-br-[120px] lg:rounded-br-[150px] shadow-2xl shadow-slate-200">
          <div className="absolute inset-0">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover object-center" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/50"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-end pb-8 sm:pb-6 md:pb-8 px-3 sm:px-4 md:px-6 lg:px-12 lg:items-center lg:pb-4">
            <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                <h1 className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.3em] text-primary font-bold">{data.title}</h1>

              <motion.p 
                initial="hidden" animate="visible" transition={{ delay: 0.2 }} variants={fadeIn}
                className="text-white text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-xl font-semibold leading-tight sm:leading-relaxed drop-shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
              >
                {data.heroDesc}
              </motion.p>

              <motion.div
                initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={fadeIn}
                className="flex justify-start pt-0 sm:pt-1 md:pt-2 lg:pt-2"
              >
                <button 
                  onClick={() => document.getElementById('service-details-content')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative bg-primary text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-bold text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] tracking-widest uppercase hover:opacity-90 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/25 overflow-hidden"
                >
                  <span className="relative z-10 whitespace-nowrap">Read More</span>
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
