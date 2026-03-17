import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useInView } from 'react-intersection-observer';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import topography from '../assets/servicesoptions/ser3.jpg'; // New image for Projects hero

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// 1. Project Data with Coordinates
const PROJECTS = [
  {
    id: 'nzoia',
    title: 'Lower Nzoia Irrigation Project',
    client: 'Agricultural Infrastructure',
    year: '2024',
    category: 'Cadastral',
    description: 'Executed a massive cadastral survey of farms spanning Blocks 1 through 5, covering a total of 1,194 hectares to facilitate critical agricultural development and land rights definition.',
    techStats: { area: '1,194 Ha', beacons: '450+', accuracy: '±20mm', deliverables: 'Registry Index Maps' },
    coordinates: [0.1000, 34.1200],
    zoom: 13,
  },
  {
    id: 'siaya',
    title: 'Siaya Institute of Technology',
    client: 'Institutional Development',
    year: '2023',
    category: 'Topographical',
    description: 'Conducted a highly detailed topographical survey of the entire institute grounds. The precise spatial data captured served as the foundational layer for the institution\'s comprehensive Master Plan design.',
    techStats: { area: '45 Ha', points: '12,000+', accuracy: '±15mm', deliverables: 'Digital Terrain Model' },
    coordinates: [0.0610, 34.2520],
    zoom: 15,
  },
  {
    id: 'last-mile',
    title: 'Last Mile Connectivity Project',
    client: 'National Infrastructure',
    year: '2016 – 2018',
    category: 'Infrastructure',
    description: 'Successfully partnered in a Joint Venture (JV) with Bryfin Ventures Ltd to execute large-scale, critical surveying operations, ensuring the accurate rollout of utility infrastructure across designated regions.',
    techStats: { span: 'Multiple Counties', jv: 'Bryfin Ventures', accuracy: 'Centimeter-level', scale: 'Broadacre' },
    coordinates: [-1.2921, 36.8219],
    zoom: 9,
  }
];

// 2. Custom Map Marker Styling
const customIcon = new L.divIcon({
  className: 'custom-marker',
  html: `<div style="background-color: #B05B43; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 20px rgba(176,91,67,0.4);"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

// 3. Map Controller for smooth transitions
const FlyToLocation = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    const isValidCenter = Array.isArray(center) && 
                         center.length === 2 && 
                         typeof center[0] === 'number' && 
                         typeof center[1] === 'number' &&
                         Number.isFinite(center[0]) && 
                         Number.isFinite(center[1]);
    
    const isValidZoom = typeof zoom === 'number' && Number.isFinite(zoom);

    if (map && isValidCenter && isValidZoom) {
      try {
        map.flyTo(center, zoom, {
          duration: 2,
          easeLinearity: 0.25
        });
      } catch (error) {
        console.error("Leaflet flyTo animation error:", error);
      }
    }
  }, [center, zoom, map]);
  return null;
};

// 4. Interactive Project Card
const ProjectCard = ({ project, onEnter, onViewData }) => {
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) onEnter(project);
  }, [inView, onEnter, project]);

  return (
    <div 
      ref={ref} 
      className={`min-h-[70vh] flex flex-col justify-center py-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-4'}`}
    >
      <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl transition-colors group-hover:bg-primary/10"></div>
        
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              {project.category} • {project.year}
            </span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black tracking-tighter text-text-main leading-tight">
            {project.title}
          </h2>
          
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Client: <span className="text-slate-600">{project.client}</span>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed font-medium">
            {project.description}
          </p>

          <button 
            onClick={() => onViewData(project)}
            className="pt-4 flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest group/btn"
          >
            <span>View Spatial Data</span>
            <svg className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// 5. Technical Data Overlay (The GIS Panel)
const TechnicalPanel = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed top-4 bottom-4 right-4 left-4 sm:left-auto sm:right-8 sm:w-[450px] bg-white z-[2000] shadow-[0_25px_100px_rgba(0,0,0,0.2)] p-6 sm:p-8 lg:p-10 flex flex-col border border-slate-100 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden"
    >
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="flex justify-between items-center mb-8 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Live Data Feed</div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-all active:scale-90 relative z-20">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div className="flex-grow space-y-8 relative z-10 overflow-y-auto scrollbar-hide pr-1">
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter text-text-main mb-2 leading-tight">{project.title}</h3>
          <div className="inline-block px-2 py-1 rounded bg-slate-100 text-[9px] font-black text-slate-500 uppercase tracking-widest">
            {project.category} Core Data
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
          {Object.entries(project.techStats).map(([key, val]) => (
            <div key={key} className="p-4 sm:p-5 bg-slate-50/80 backdrop-blur-sm rounded-3xl border border-slate-100 hover:border-primary/20 transition-colors group">
              <div className="text-text-main font-black text-base mb-1 group-hover:text-primary transition-colors">{val}</div>
              <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">{key}</div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
          </div>
          <div className="relative z-10">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">Verification Summary</h4>
            <p className="text-slate-600 text-xs leading-relaxed font-medium">
              Spatial data collection utilized RTK-enabled GNSS receivers and high-order control networks to ensure statutory compliance with Surveyors Board of Kenya (SBK) standards.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-auto shrink-0 relative z-10">
        <Link 
          to="/contact"
          className="w-full py-3.5 bg-primary text-white font-bold rounded-2xl text-center text-[10px] uppercase tracking-widest block shadow-xl shadow-primary/20 hover:opacity-90 transition-opacity"
        >
          Inquire About Similar Scope
        </Link>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  const [inspectedProject, setInspectedProject] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-24 px-4 lg:px-6">
        <div className="relative w-full max-w-[95%] mx-auto h-[260px] lg:h-[300px] overflow-hidden rounded-2xl rounded-br-[150px] shadow-2xl shadow-slate-200">
          <div className="absolute inset-0">
            <img src={topography} alt="Our Projects" className="w-full h-full object-cover" loading="eager" /> {/* Hero image loads eagerly */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center px-6 lg:px-12">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] text-primary font-bold">Portfolio</h1>

              <motion.p 
                initial="hidden" animate="visible" transition={{ delay: 0.2 }} variants={fadeIn}
                className="text-white text-sm sm:text-base md:text-xl font-semibold leading-relaxed drop-shadow-md opacity-90"
              >
                Showcasing our commitment to precision and technical excellence across Kenya's most vital infrastructure developments and land management projects.
              </motion.p>

              <motion.div
                initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={fadeIn}
                className="flex justify-start pt-2"
              >
                <button 
                  onClick={() => document.getElementById('projects-content')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase hover:opacity-90 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/25 overflow-hidden"
                >
                  <span className="relative z-10">Explore Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Area - Styled to avoid touching Hero and Footer */}
      <div id="projects-content" className="max-w-[95%] mx-auto py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
          
          {/* Mobile Map View - Positioned at top on mobile for context */}
          <div className="lg:hidden h-[350px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 mb-8">
            <MapContainer 
              center={activeProject.coordinates} 
              zoom={activeProject.zoom} 
              className="w-full h-full"
              zoomControl={true}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {activeProject && <FlyToLocation center={activeProject.coordinates} zoom={activeProject.zoom} />}
              <Marker position={activeProject.coordinates} icon={customIcon} />
            </MapContainer>
          </div>
        
          {/* Left Side: Scrolling Projects */}
          <div className="w-full lg:w-1/2 px-2 sm:px-6 bg-transparent relative z-10">
            <div className="max-w-xl mx-auto lg:mx-0">
              {PROJECTS.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onEnter={setActiveProject} 
                  onViewData={setInspectedProject}
                />
              ))}
              {/* Extra scroll space */}
              <div className="h-[10vh] lg:h-[20vh]" />
            </div>
          </div>

          {/* Right Side: Sticky Map Container - Redesigned as a floating card */}
          <div className="hidden lg:block lg:w-1/2 h-[650px] sticky top-32 z-0 rounded-[3.5rem] border border-slate-100 overflow-hidden shadow-2xl shadow-slate-200">
            <MapContainer 
              center={PROJECTS[0].coordinates} 
              zoom={PROJECTS[0].zoom} 
              className="w-full h-full"
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; Midland Geosystems'
              />
              
              {activeProject && <FlyToLocation center={activeProject.coordinates} zoom={activeProject.zoom} />}

              {PROJECTS.map((project) => (
                <Marker 
                  key={`marker-${project.id}`} 
                  position={project.coordinates}
                  icon={customIcon}
                />
              ))}
            </MapContainer>

            {/* Map Overlay Badge */}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-white/20 z-[1000] flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-text-main">Live Project Visualizer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Sidebar Overlay */}
      <AnimatePresence>
        {inspectedProject && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setInspectedProject(null)} className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[1999]" />
            <TechnicalPanel project={inspectedProject} onClose={() => setInspectedProject(null)} />
          </>
        )}
      </AnimatePresence>

      {/* 4. Projects Page CTA */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="w-full max-w-[95%] mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-primary to-steel-grey rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl shadow-primary/20"
          >
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] bg-white/5 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-primary/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl lg:text-4xl font-black tracking-tighter leading-tight mb-4 text-white">
                Your Vision, <span className="text-white/80">Precisely Mapped.</span>
              </h2>
              <p className="text-xs sm:text-sm lg:text-base mb-8 text-white/70 max-w-2xl mx-auto font-medium">
                From complex infrastructure to legal boundary definitions, our technical team is ready to deliver the accuracy your next project demands.
              </p>
              <Link 
                to="/contact" 
                className="group inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
              >
                <span className="text-[10px] sm:text-xs tracking-widest uppercase">Start a Project Consultation</span>
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

export default Projects;
