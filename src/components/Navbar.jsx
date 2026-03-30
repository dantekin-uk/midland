import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const serviceCategories = [
  {
    title: "Land Surveying",
    items: [
      { name: "Land Subdivision", slug: "land-subdivision" },
      { name: "Land Amalgamation", slug: "land-amalgamation" },
      { name: "Sectional Properties Survey", slug: "sectional-properties-survey" },
      { name: "Boundary Re-establishment (RIM)", slug: "boundary-re-establishment" },
      { name: "Land Acquisition & Expert Witness", slug: "land-acquisition-expert-witness" },
      { name: "Due Diligence & Verification", slug: "due-diligence-verification" }
    ]
  },
  {
    title: "Engineering Surveying",
    items: [
      { name: "Geodetic Control Networks", slug: "geodetic-control-networks" },
      { name: "Topographic Surveys", slug: "topographic-surveys" },
      { name: "Civil & Construction Set-out", slug: "civil-construction-setout" },
      { name: "As-Constructed Surveys", slug: "as-constructed-surveys" },
      { name: "Monitoring & Volume Surveys", slug: "monitoring-volume-surveys" }
    ]
  },
  {
    title: "UAV Photogrammetry",
    items: [
      { name: "High-Resolution Orthomosaics", slug: "high-resolution-orthomosaics" },
      { name: "Mine & Quarry Volumes", slug: "mine-quarry-volumes" },
      { name: "Construction Progress Monitoring", slug: "construction-progress-monitoring" },
      { name: "Environmental Compliance", slug: "environmental-compliance" },
      { name: "Pre-construction Surveys", slug: "pre-construction-surveys" }
    ]
  }
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [activeMobileCategory, setActiveMobileCategory] = useState(null)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesHovered(false)
    setActiveMobileCategory(null)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100/50 py-1 transition-all duration-300">
      <div className="w-full max-w-[95%] mx-auto px-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="group flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="Midland Geosystems Logo" 
            className="h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav - Centered with modern pill styling */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="py-4"
              onMouseEnter={() => link.hasDropdown && setIsServicesHovered(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesHovered(false)}
            >
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-1 ${
                  (location.pathname === link.path) || (link.hasDropdown && location.pathname.startsWith('/services'))
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg className={`w-3 h-3 transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Mega Dropdown - Centered relative to the navbar container */}
        <AnimatePresence>
          {isServicesHovered && (
            <motion.div
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
              initial={{ opacity: 0, y: 10, scale: 0.98, x: "-50%" }}
              animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
              exit={{ opacity: 0, y: 10, scale: 0.98, x: "-50%" }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="hidden md:block absolute top-full left-1/2 w-[660px] z-50 pt-2"
            >
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.12)] border border-slate-100/50 overflow-hidden p-6">
                <div className="grid grid-cols-3 gap-6">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="space-y-3 text-left">
                      <div 
                        className="group/cat flex items-center justify-start gap-2 text-primary font-black text-[13px] uppercase tracking-[0.2em] border-b border-primary/10 pb-2"
                      >
                        <span>{category.title}</span>
                        <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover/cat:opacity-100 group-hover/cat:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7-7" />
                        </svg>
                      </div>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              to={`/services/${item.slug}`} 
                              className="text-[13px] font-bold text-steel-grey hover:text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-all duration-300 block leading-tight"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-center">
                  <Link to="/services" className="text-[11px] font-black text-primary uppercase tracking-[0.2em] hover:underline">
                    View All Services →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right side actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            to="/contact"
            className="hidden md:block px-6 py-2.5 rounded-xl font-bold text-[10px] lg:text-xs uppercase tracking-widest transition-all duration-300 bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-lg transition-colors text-text-main hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-[calc(100%+1rem)] left-4 right-4 bg-steel-grey rounded-[2.5rem] overflow-hidden z-40 shadow-2xl shadow-steel-grey/30 border border-white/10"
          >
            <div className="p-8 space-y-5 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-2">
                  <Link
                    to={link.path}
                    className={`block text-base font-medium tracking-wide ${
                      location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith('/services')) ? 'text-white' : 'text-white/70'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 space-y-1 pb-1">
                      {serviceCategories.map((category, idx) => (
                        <div key={category.title} className="border-l border-white/10 ml-1">
                          <button 
                            onClick={() => setActiveMobileCategory(activeMobileCategory === idx ? null : idx)}
                            className={`w-full flex items-center justify-between py-2.5 pl-4 text-xs font-semibold tracking-wide transition-colors ${activeMobileCategory === idx ? 'text-white bg-white/10 rounded-r-xl' : 'text-white/80'}`}
                          > 
                            <span>{category.title}</span>
                            <svg 
                              className={`w-3 h-3 transition-transform duration-300 ${activeMobileCategory === idx ? 'rotate-180' : ''}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <AnimatePresence>
                            {activeMobileCategory === idx && (
                              <motion.ul 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden space-y-1 pl-4 pb-2"
                              >
                                {category.items.map((item) => (
                                  <li key={item.slug}> 
                                    <Link 
                                      to={`/services/${item.slug}`}
                                      className="text-xs font-normal text-white/70 hover:text-white transition-colors block py-2 flex items-center gap-2"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-white/30"></span>
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact" 
                  className="block w-full py-4 bg-white text-slate-900 text-center rounded-2xl font-bold text-sm tracking-widest shadow-xl"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
