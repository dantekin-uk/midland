import { motion, useAnimate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: "John Kamau",
    role: "Property Developer",
    content: "Midland Geosystems provided exceptional service for our land subdivision. Their precision and professionalism are unmatched in the industry.",
    avatar: "JK"
  },
  {
    name: "Sarah Omondi",
    role: "Infrastructure Manager",
    content: "The 3D mapping they did for our port facilities was game-changing. The level of detail and accuracy helped us optimize our operations significantly.",
    avatar: "SO"
  },
  {
    name: "David Kipkorir",
    role: "Project Coordinator",
    content: "Working with their team on the irrigation project was a breeze. They delivered high-quality cadastral surveys ahead of schedule.",
    avatar: "DK"
  }
]

// Duplicate for seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

const TestimonialsSection = () => {
  const [scope, animate] = useAnimate()
  const animationRef = useRef(null)

  // Calculate total width for a single set of testimonials to ensure a seamless loop
  const cardWidth = 350
  const gap = 32 // gap-8 is 32px
  const scrollDistance = testimonials.length * (cardWidth + gap)

  useEffect(() => {
    animationRef.current = animate(
      scope.current,
      { x: [0, -scrollDistance] },
      {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      }
    )
    return () => animationRef.current?.stop()
  }, [scrollDistance, animate, scope])

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden border-y border-slate-100">
      {/* Background Pattern - Subtle Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="w-full max-w-[95%] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-[1.05] mb-6 bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-sm">
            What Our Clients Say.
          </h2>
          <p className="text-steel-grey font-medium text-xs sm:text-sm max-w-xl mx-auto opacity-80">
            Trusted by developers, government agencies, and infrastructure leaders across Kenya.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative flex overflow-x-hidden"
          onMouseEnter={() => animationRef.current?.pause()}
          onMouseLeave={() => animationRef.current?.play()}
        >
          {/* Gradient Fades for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50/50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50/50 to-transparent z-20 pointer-events-none"></div>

          <div ref={scope} className="flex gap-8 py-4 cursor-default">
            {duplicatedTestimonials.map((t, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[350px] p-10 bg-white rounded-[2.5rem] shadow-2xl shadow-black/5 border border-slate-100 relative group hover:border-primary/20 hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="text-primary/10 absolute -top-4 -left-4 text-6xl font-serif leading-none select-none">“</div>
                  <p className="text-text-main text-sm leading-relaxed font-medium mb-8 italic relative z-10">
                    "{t.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-black text-text-main text-xs tracking-tight">{t.name}</h4>
                      <p className="text-primary font-bold text-[9px] uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection