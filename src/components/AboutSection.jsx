import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import aboutimage from '../assets/about.jpg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const AboutSection = () => {
  return (
    <section className="pt-40 pb-8 bg-gradient-to-br from-white via-bg-light/30 to-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-steel-grey/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="w-full max-w-[95%] mx-auto px-4">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Content */}
            <motion.div className="lg:flex-1 lg:max-w-lg" variants={itemVariants}>
              
              

              {/* Heading */}
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-[1.05] mb-5 bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
                Your Partner Across<br />
                Industries.
              </h2>

              {/* Description */}
              <p className="text-sm text-steel-grey leading-relaxed mb-7 font-medium max-w-xl">
                We take a technically superior and commercially balanced approach to all our work,
                providing clients with specific and practical solutions that deliver real value.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12">
                {[
                  { title: "Timely & High-Quality", desc: "Precision-focused delivery" },
                  { title: "Cost-Effective Solutions", desc: "Efficiency & savings" },
                  { title: "Advanced Technology", desc: "Latest surveying tools" },
                  { title: "Expert Consultation", desc: "Professional guidance" }
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="group p-3 sm:p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-main mb-0.5 sm:mb-1 tracking-tight text-[11px] sm:text-xs leading-tight">{item.title}</h4>
                        <p className="text-steel-grey text-[9px] sm:text-[11px] font-medium leading-tight">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="/about"
                className="group inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                <span className="text-sm tracking-wide">Learn More About Us</span>
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Right Image */}
            <motion.div className="w-full lg:flex-1 relative lg:max-w-lg" variants={itemVariants}>
              {/* Main Image Container */}
              <div className="relative group">
                <div className="relative z-10 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-black/20 transform group-hover:scale-[1.02] transition-all duration-700">
                  <img
                    src={aboutimage}
                    className="w-full h-[250px] sm:h-[350px] lg:h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-steel-grey/20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                </div>

                {/* Floating Stats Card */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl shadow-black/10 border border-white/20 transform hover:scale-105 transition-all duration-300 z-20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-text-main">10+</div>
                      <div className="text-xs text-steel-grey font-semibold uppercase tracking-wider">Years Experience</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-steel-grey/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Geometric accent */}
                <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/20 rounded-2xl backdrop-blur-sm rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection