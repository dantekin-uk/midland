import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import irrigation from '../assets/projects/irrigation.jpg'
import siaya from '../assets/projects/siaya.jpg'
import lastmile from '../assets/projects/lastmile.jpg'
const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const projects = [
  {
    id: "01",
    title: "Lower Nzoia Irrigation Project",
    year: "2024",
    desc: "Cadastral Survey of Farms (Blocks 1 to 5) covering 1194 Hectares for farm development purposes.",
    image: irrigation,
    category: "Cadastral"
  },
  {
    id: "02",
    title: "Siaya Institute of Technology",
    year: "2023",
    desc: "Topographical Survey for the institution's Master Plan.",
    image: siaya,
    category: "Topographical"
  },
  {
    id: "03",
    title: "Last Mile Connectivity Project",
    year: "2016 - 2018",
    desc: "Executed in a Joint Venture (JV) with Bryfin Ventures Ltd.",
    image: lastmile,
    category: "Infrastructure"
  }
]

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern - Matching Services Section */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="w-full max-w-[95%] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mb-10 text-center mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-[1.05] mb-6 bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
            Featured Projects.
          </h2>
          <p className="text-steel-grey font-medium text-xs sm:text-sm max-w-xl mx-auto opacity-80">
            A showcase of our commitment to precision and technical excellence across Kenya's most vital infrastructure developments.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16 lg:space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-24`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-[35%] relative group">
                <div className="absolute -inset-4 bg-slate-100 rounded-[2.5rem] -z-10 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"></div>
                <div className="relative h-[240px] md:h-[300px] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                {/* Project Number Overlay */}
                <span className="absolute -top-6 -left-4 md:-top-10 md:-left-6 text-6xl md:text-8xl font-black text-slate-100 select-none -z-10 opacity-50 md:opacity-100">
                  {project.id}
                </span>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[50%] space-y-4 md:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  {project.category}
                </div>
                <h3 className="text-lg lg:text-2xl font-black text-text-main tracking-tighter leading-tight">
                  {project.title}
                </h3>
                <div className="flex gap-6 text-[10px] font-bold uppercase tracking-wider text-steel-grey/60">
                  {project.client && <span>Client: <span className="text-text-main">{project.client}</span></span>}
                  <span>Year: <span className="text-text-main">{project.year}</span></span>
                </div>
                <p className="text-steel-grey text-xs sm:text-sm leading-relaxed font-medium">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center px-8 py-3.5 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/25"
          >
            <span className="text-xs tracking-widest uppercase">Explore More Projects</span>
            <svg 
              className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection