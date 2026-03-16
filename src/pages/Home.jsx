import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesOverview from '../components/ServicesOverview'
import ProjectsSection from '../components/ProjectsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative selection:bg-primary/10 selection:text-primary">
      {/* Premium Ambient Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-steel-grey/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] bg-primary/3 rounded-full blur-[80px]"></div>
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.015]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="relative z-10">
      <HeroSection />
      <AboutSection />
      <ServicesOverview />
      <ProjectsSection />
      
      <TestimonialsSection />

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
                Ready to Start Your <br className="sm:hidden" /> <span className="text-white/80">Project?</span>
              </h2>
              <p className="text-xs sm:text-sm lg:text-base mb-8 text-white/70 max-w-2xl mx-auto font-medium">
                Partner with Kenya's leading geospatial experts for precision-driven solutions tailored to your infrastructure needs.
              </p>
              <Link 
                to="/contact" 
                className="group inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
              >
                <span className="text-[10px] sm:text-xs tracking-widest uppercase">Get in Touch</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQSection />
      </div>
    </div>
  )
}

export default Home
