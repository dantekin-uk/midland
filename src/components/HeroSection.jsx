import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StatsDock from './StatsDock'
import hero1 from '../assets/hero/hero1.jpeg'
import hero2 from '../assets/hero/hero2.jpg'
import hero3 from '../assets/hero/hero3.jpg'

const SLIDE_MS = 6000

const slides = [
  {
    src: hero1,
    title: 'Land & Engineering Survey',
  },
  {
    src: hero2,
    title: 'Spatial data for Engineering & planning',
  },
  {
    src: hero3,
    title: 'GIS, Remote Sensing, Cartography and Mapping',
  },
]

const HeroSection = () => {
  const [index, setIndex] = useState(0)

  const goTo = useCallback((i) => {
    setIndex(i % slides.length)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  const slide = slides[index]

  return (
    <section className="relative min-h-[70vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center bg-slate-100 pt-20 sm:pt-24 md:pt-32 pb-32 sm:pb-24 md:pb-32 lg:pb-40 xl:pb-48">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1100ms] ease-in-out pointer-events-none select-none ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            draggable={false}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center w-full">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="max-w-[75%] sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl text-left translate-y-6 sm:translate-y-6 md:translate-y-8 lg:translate-y-10">
            <div className="rounded-2xl sm:rounded-3xl bg-white/96 backdrop-blur-xl border border-white/90 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/60 p-2 sm:p-4 md:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-950 leading-snug">
                    <span className="text-primary">{slide.title}</span>
                  </h1>
                </motion.div>
              </AnimatePresence>

              <div
                className="mt-3 sm:mt-4 md:mt-6 flex justify-start gap-1.5 sm:gap-2"
                role="tablist"
                aria-label="Hero slides"
              >
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? 'w-4 sm:w-6 md:w-8 bg-primary shadow-md shadow-primary/35'
                        : 'w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <div className="mt-4 sm:mt-4 md:mt-6 flex flex-row flex-wrap gap-2 sm:gap-2 md:gap-3 justify-start items-center">
                <Link
                  to="/contact"
                  className="group relative inline-flex bg-primary text-white px-3 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs tracking-wide hover:opacity-95 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-primary/25 overflow-hidden text-center whitespace-nowrap"
                >
                  <span className="relative z-10">GET CONSULTATION</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex border border-slate-300/90 bg-white text-slate-900 px-3 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-[7px] sm:text-[8px] md:text-[10px] lg:text-xs tracking-wide hover:bg-slate-50 hover:border-slate-400 transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm text-center whitespace-nowrap"
                >
                  OUR SERVICES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 sm:translate-y-1/2 md:translate-y-1/2 lg:translate-y-1/2 w-full z-20">
        <StatsDock />
      </div>
    </section>
  )
}

export default HeroSection
