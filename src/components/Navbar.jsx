import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const serviceCategories = [
  {
    title: "Professional Land Surveying",
    description: "Subdivision, Amalgamation, Boundary Definition",
    slug: "land-surveying",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Engineering Survey",
    description: "Topographic, Civil Set Out, Monitoring",
    slug: "engineering-survey",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "UAV Photogrammetry",
    description: "Orthomosaics, Volumetric Analysis, 3D Modeling",
    slug: "uav-photogrammetry",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
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
    { name: 'Services', path: '#', hasDropdown: true },
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
                onClick={(e) => link.hasDropdown && e.preventDefault()}
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
              className="hidden md:block absolute top-full left-1/2 w-auto z-50 pt-2"
            >
              <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.12)] border border-slate-100/50 overflow-hidden p-3 min-w-[320px]">
                <div className="flex flex-col">
                  {serviceCategories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/services/${category.slug}`}
                      className="group/cat flex items-center gap-4 px-5 py-4 rounded-3xl hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover/cat:bg-white flex items-center justify-center text-slate-400 group-hover/cat:text-primary transition-all duration-300 shadow-sm group-hover/cat:shadow-md">
                        {category.icon}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-800 group-hover/cat:text-primary transition-colors">
                          {category.title}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium tracking-tight">
                          {category.description}
                        </span>
                      </div>
                      <svg className="w-4 h-4 ml-auto text-primary opacity-0 -translate-x-2 group-hover/cat:opacity-100 group-hover/cat:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
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
                    onClick={(e) => link.hasDropdown && e.preventDefault()}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 space-y-3 pb-1 border-l border-white/10 ml-2">
                      {serviceCategories.map((category) => (
                        <Link
                          key={category.slug}
                          to={`/services/${category.slug}`}
                          className="w-full flex items-center gap-4 py-2 pl-4 text-white/80 hover:text-white transition-colors group/mobile"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover/mobile:text-primary group-hover/mobile:bg-white/10 transition-all">
                            {category.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-black uppercase tracking-widest leading-none mb-1">{category.title}</span>
                            <span className="text-[10px] text-white/40 font-medium tracking-tight">{category.description}</span>
                          </div>
                        </Link>
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
