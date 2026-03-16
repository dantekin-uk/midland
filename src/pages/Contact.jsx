import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/servicesoptions/data.jpg'; // New image for Contact hero

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const customIcon = new L.divIcon({
  className: 'custom-marker',
  html: `<div style="background-color: #B05B43; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 20px rgba(176,91,67,0.4);"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-24 px-4 lg:px-6">
        <div className="relative w-full max-w-[95%] mx-auto h-[260px] lg:h-[300px] overflow-hidden rounded-2xl rounded-br-[150px] shadow-2xl shadow-slate-200">
          <div className="absolute inset-0">
            <img src={data} alt="Contact Us" className="w-full h-full object-cover" loading="eager" /> {/* Hero image loads eagerly */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center px-6 lg:px-12">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] text-primary font-bold">Connect</h1>
              <motion.h2 
                initial="hidden" animate="visible" transition={{ delay: 0.1 }} variants={fadeIn}
                className="text-white text-2xl md:text-4xl font-black tracking-tighter leading-tight drop-shadow-md"
              >
                Technical Inquiries & <br />
                <span className="text-white/70">Project Consultations.</span>
              </motion.h2>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Minimalist Info Cards */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { label: "Email Address", val: "info@midlandgeosystems.co.ke", icon: "✉️" },
              { label: "Phone Line", val: "+245725970173", icon: "📞" },
              { label: "Office Location", val: "ABC Plaza, Moi Avenue, Nairobi", icon: "📍" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="text-2xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">{item.label}</div>
                <div className="text-sm lg:text-base font-black text-text-main tracking-tight">{item.val}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Body: Form & Map */}
      <section className="pb-24">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-3/5 space-y-10"
            >
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-text-main leading-tight bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent">
                  Send an Inquiry
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-xl">
                  Fill out the form below with your project requirements. Our technical team will review your scope and provide a tailored response within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-12 text-center space-y-4">
                  <div className="text-4xl">✅</div>
                  <h4 className="text-xl font-black text-primary">Inquiry Sent Successfully</h4>
                  <p className="text-slate-500 text-sm font-medium">Thank you for reaching out. A specialist will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-medium text-text-main" placeholder="e.g. John Kamau" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company / Organization</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-medium text-text-main" placeholder="Organization Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-medium text-text-main" placeholder="name@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-medium text-text-main" placeholder="+254..." />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Service Required</label>
                    <select name="service" required value={formData.service} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-medium text-text-main appearance-none">
                      <option value="">Select a service...</option>
                      <option value="cadastral">Cadastral & Legal Surveying</option>
                      <option value="engineering">Engineering & Infrastructure</option>
                      <option value="topographical">Topographical & GIS</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Project Details</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} rows="5" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-medium text-text-main resize-none" placeholder="Describe the location and requirements of your project..."></textarea>
                  </div>
                  <div className="sm:col-span-2 pt-4">
                    <button type="submit" className="group flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-4 bg-primary text-white font-bold rounded-2xl hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-primary/20">
                      <span className="text-xs tracking-widest uppercase">Send Inquiry</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Map Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/5 min-h-[400px] lg:min-h-full"
            >
              <div className="h-full rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative group">
                <MapContainer 
                  center={[-1.2858, 36.8235]} 
                  zoom={15} 
                  className="w-full h-full grayscale-[0.2] contrast-[1.1]"
                  zoomControl={false}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[-1.2858, 36.8235]} icon={customIcon} />
                </MapContainer>
                
                {/* Map Overlay Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl border border-white/20 z-[1000] transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Headquarters</div>
                  <div className="text-sm font-black text-text-main">ABC Plaza, Moi Avenue</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-1">Nairobi, Kenya</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
