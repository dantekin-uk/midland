import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import surveying from '../assets/services/ser1.jpg'
import engineering from '../assets/services/ser2.jpg'
import photogrammetry from '../assets/services/ser3.jpg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const services = [
  {
    title: "Cadastral Surveying",
    desc: "Accurately defining legal boundaries and land ownership rights for land management and urban planning.",
    image: surveying,
    link: "/services/cadastral"
  },
  {
    title: "Engineering Surveying",
    desc: "Ensuring accuracy, compliance, and efficiency throughout the construction and development project lifecycle.",
    image: engineering,
    link: "/services/engineering"
  },
  {
    title: "UAV Photogrammetry",
    desc: "Delivering geospatial solutions through state-of-the-art UAV technology paired with an extensive array of sensors.",
    image: photogrammetry,
    link: "/services/photogrammetry"
  }
]

const ServicesOverview = () => {
  return (
    <section className="pt-10 pb-16 bg-slate-50/50 relative overflow-hidden border-y border-slate-100">
      {/* Background Pattern - Subtle Technical Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-steel-grey/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-[95%] mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-10 text-center mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-[1.05] mb-8 bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
            Specialized Spatial
            Solutions.
          </h2>
        </div>

        <motion.div 
          className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-8 pb-8 md:pb-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:px-0 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index} 
              variants={itemVariants}
              className="group min-w-[85%] md:min-w-0 snap-center"
            >
              <Link 
                to={service.link}
                className="relative block h-[260px] sm:h-[300px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/5 transition-all duration-700 ease-[0.22, 1, 0.36, 1] hover:shadow-primary/20 hover:-translate-y-2"
              >
                {/* Image with subtle zoom */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy"
                />
                
                {/* Modern Gradient Overlay - Primary color at bottom, smooth transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 md:opacity-40 md:group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3 tracking-tighter leading-tight">
                      {service.title}
                    </h3>
                    
                    <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-white/80 text-[10px] sm:text-xs font-medium mb-4 sm:mb-6 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-white font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                      <span className="w-6 h-[2px] bg-white/40 group-hover:w-10 group-hover:bg-white transition-all duration-500"></span>
                      Learn More
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-12 group-hover:rotate-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview