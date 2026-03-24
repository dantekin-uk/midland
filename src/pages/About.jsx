import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutHero from '../assets/services/ser3.jpg'; // Reusing your existing asset
import storyimage from '../assets/abt2.jpg';
import storyimage2 from '../assets/abt.jpg';// New image for the story section

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-24 px-4 lg:px-6">
        <div className="relative w-full max-w-[95%] mx-auto h-[260px] lg:h-[300px] overflow-hidden rounded-2xl rounded-br-[150px] shadow-2xl shadow-slate-200">
          {/* Background Image Container */}
          <div className="absolute inset-0">
            <img src={aboutHero} alt="Midland Geosystems Fieldwork" className="w-full h-full object-cover" loading="eager" /> {/* Hero image loads eagerly */}
            {/* Gradient Overlay for Readability - Image is now full opacity */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center px-6 lg:px-12">
          <div className="max-w-2xl space-y-6">
              <h1 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] text-primary font-bold">About Us</h1>
              <motion.p 
                initial="hidden" animate="visible" transition={{ delay: 0.2 }} variants={fadeIn}
                className="text-white text-sm sm:text-base md:text-xl font-semibold leading-relaxed drop-shadow-md"
              >
                Delivering innovative surveying, photogrammetry, and GIS solutions for a rapidly developing world.
              </motion.p>

              <motion.div
                initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={fadeIn}
                className="flex justify-start"
              >
                <button className="group relative bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-widest uppercase hover:opacity-90 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/25 overflow-hidden">
                  <span className="relative z-10">Discover Our Story</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Overlay */}

      {/* 3. Our Story (The Narrative) */}
      <section className="py-12 lg:py-20">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeIn}
              className="lg:w-1/2"
            >
              <h2 className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4">
                Our Story
              </h2>
               <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-[1.05] mb-5 bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
                Building Trust 
                <br />
                Through Precision
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed font-medium text-xs sm:text-sm">
                <p>
                  Founded in 2016, Midland Geosystems Ltd is a premier surveying company operating throughout Kenya. 
                  We pride ourselves on being more than just a consultancy; we act as a true partner contributing to 
                  large infrastructure, mining, and development projects across various industries.
                </p>
                <p>
                  Our operations are driven by a highly qualified and diverse team of professionals proudly registered
                  with the Land Surveyors' Board (LSB). By utilizing the latest 
                  surveying products, systems, and equipment, we specialize in a wide range of services including 
                  engineering surveys, subdivision design, and town planning ensuring successful project delivery 
                  regardless of location.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 20 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10 group">
                <img 
                  src={storyimage} 
                  alt="Team at work" 
                  className="w-full h-[250px] sm:h-[350px] lg:h-[350px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative Accents */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* 4. Vision & Mission Cards */}
      <section className="pb-24">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div 
              whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeIn}
              className="bg-white p-8 lg:p-10 rounded-[3rem] shadow-xl shadow-slate-100 border border-slate-100 relative overflow-hidden group hover:border-primary/20 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/10 transition-colors"></div>              
              <h4 className="text-xl lg:text-2xl font-black tracking-tighter mb-4 bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
                OUR MISSION
              </h4>
              <p className="text-sm lg:text-base text-slate-700 leading-relaxed font-medium">
                To deliver timely, high-quality surveying solutions by combining cutting-edge technology with a technically superior and commercially balanced approach.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeIn}
              className="bg-[#2A3036] p-8 lg:p-10 rounded-[3rem] text-white relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              <h4 className="text-xl lg:text-2xl font-black tracking-tighter mb-4 text-white">
                OUR VISION
              </h4>
              <p className="text-sm lg:text-base text-slate-200 leading-relaxed font-medium">
                To seamlessly capture spatial data with total accuracy, driving efficiencies and cost savings for our clients across the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 4. Milestones Section (Horizontal & Compact) */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
        {/* Background Pattern - Matching other technical sections */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="w-full max-w-[95%] mx-auto px-4">
          <motion.div 
            whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeIn}
            className="mb-12"
          >
            <h3 className="text-2xl lg:text-3xl font-black tracking-tighter bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
              Key Milestones & Major Projects
            </h3>
          </motion.div>

          <div className="relative">
            {/* Timeline Connectors */}
            <div className="absolute top-10 left-0 w-full h-[1px] bg-slate-100 hidden md:block"></div> {/* Desktop Horizontal */}
            <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-slate-100 md:hidden"></div> {/* Mobile Vertical */}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative z-10">
              {[
                { year: "2024", title: "Lower Nzoia Irrigation Project", desc: "Completed the Cadastral Survey of Blocks 1 to 5, covering a massive 1,194 hectares." },
                { year: "2023", title: "Siaya Institute of Technology", desc: "Executed a comprehensive Topographical Survey for the institution's critical Master Plan." },
                { year: "2016 - 2018", title: "Last Mile Connectivity Project", desc: "Successfully executed large-scale surveying operations in a Joint Venture with Bryfin Ventures Ltd." }
              ].map((milestone, index) => (
                <motion.div 
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group pl-24 md:pl-0"
                >
                  {/* Year Node */}
                  <div className="absolute left-0 top-0 md:relative w-20 h-20 rounded-2xl bg-white shadow-xl shadow-slate-100 border border-slate-50 flex items-center justify-center mb-6 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-105">
                    <span className="text-primary font-black text-sm tracking-tighter leading-none">{milestone.year}</span>
                  </div>
                  <div className="pt-2 md:pt-0">
                    <h4 className="text-lg font-black tracking-tighter text-slate-900 mb-3 group-hover:text-primary transition-colors">{milestone.title}</h4>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Accreditations & Compliance Section */}
      <section className="py-12 lg:py-16 bg-slate-50/50 relative overflow-hidden border-b border-slate-100">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="w-full max-w-[95%] mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Image Side - Left */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10 group">
                <img 
                  src={storyimage2} 
                  alt="Professional Surveying Standards" 
                  className="w-full h-[250px] sm:h-[350px] lg:h-[350px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                
                {/* Floating Status Tag */}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white/90 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-text-main">Regulated & Licensed</span>
                </div>
              </div>
              
              {/* Decorative Accents */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </motion.div>

            {/* Content Side - Right */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 space-y-6 text-left"
            >
              <div>
                
                <h2 className="text-2xl sm:text-3xl font-black tracking-tighter leading-[1.05] mb-4 bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
                  Accreditations & <br /> Compliance
                </h2>
                <p className="text-slate-700 leading-relaxed font-medium text-xs sm:text-sm max-w-xl">
                  At Midland Geosystems Ltd, we operate with the highest level of professional integrity and regulatory compliance. Our operations are fully backed by a team of highly qualified surveyors who are recognized by Kenya's leading professional bodies.
                </p>
              </div>

              {/* Detailed Accreditations Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    org: "Land Surveyors' Board (LSB)",
                    desc: "Our professionals are proudly registered with the board, ensuring all our cadastral and legal surveys meet strict statutory requirements and national standards.",
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                    className="group p-4 bg-white rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 transform hover:-translate-y-1 text-left"
                  >
                    <div className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-slate-50 shadow-inner flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-black tracking-tight text-slate-800 group-hover:text-primary transition-colors leading-tight">{item.org}</h4>
                        <p className="text-slate-600 text-[10px] sm:text-xs leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Technology & Equipment - Redesigned to be more compact and enclosed in a main card */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50/50 rounded-[3rem] lg:rounded-[4rem] p-8 lg:p-14 border border-slate-100 relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:items-center mb-10">
              <div className="lg:w-1/3">
                <h2 className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-3">Technical Assets</h2>
                <h2 className="text-2xl lg:text-3xl font-black tracking-tighter leading-tight bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent">
                  Our Technology & <br className="hidden lg:block" /> Equipment
                </h2>
              </div>
              <div className="lg:w-2/3 text-slate-700">
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                  We leverage state-of-the-art surveying equipment and software to ensure every measurement is captured with total accuracy, driving efficiencies for our clients.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  title: "GNSS/RTK Receivers",
                  desc: "Advanced satellite systems for rapid, accurate boundary surveys.",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  title: "Robotic Total Stations",
                  desc: "Precise measurements for complex infrastructure projects.",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  title: "UAV Photogrammetry",
                  desc: "Drones for high-res 3D terrain models and mapping.",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                },
                {
                  title: "GIS & CAD Software",
                  desc: "Processing spatial data into actionable documentation.",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                }
              ].map((tech, index) => (
                <div key={index} className="group p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="text-lg font-black tracking-tight text-slate-900 mb-3">{tech.title}</h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="w-full max-w-[95%] mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-primary to-steel-grey rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl shadow-primary/20"
          >
            {/* Background Accents inside the card */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] bg-white/5 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-primary/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl lg:text-4xl font-black tracking-tighter leading-tight mb-4 text-white">
                Let's Engineer Your Vision <span className="text-white/80">Together.</span>
              </h2>
              <p className="text-sm lg:text-base mb-8 text-white/80 max-w-2xl mx-auto font-medium">
                Our dedicated team is ready to provide the professional integrity and technical accuracy your project demands.
              </p>
              <Link 
                to="/contact" 
                className="group inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
              >
                <span className="text-[10px] sm:text-xs tracking-widest uppercase">Schedule a Consultation</span>
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

export default About;