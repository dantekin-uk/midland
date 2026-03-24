import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import StatsDock from './StatsDock'

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    let isMounted = true
    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setVideoError(true)
      }
    }, 5000) // 5 second timeout

    // Check if video file exists and can be loaded
    const video = document.createElement('video')
    video.src = '/assets/hero.mp4'

    video.onloadeddata = () => {
      if (isMounted) {
        setVideoLoaded(true)
        setVideoError(false)
        clearTimeout(timeoutId)
      }
    }

    video.onerror = () => {
      if (isMounted) {
        setVideoLoaded(false)
        setVideoError(true)
        clearTimeout(timeoutId)
      }
    }

    // Also try to fetch the file to check if it exists
    const controller = new AbortController()
    const fetchTimeoutId = setTimeout(() => {
      controller.abort()
    }, 3000)

    fetch('/assets/hero.mp4', { signal: controller.signal })
      .then(response => {
        clearTimeout(fetchTimeoutId)
        if (response.ok && isMounted) {
          // File exists, try to load it
          video.load()
        } else if (isMounted) {
          setVideoError(true)
        }
      })
      .catch((error) => {
        clearTimeout(fetchTimeoutId)
        if (isMounted && error.name !== 'AbortError') {
          setVideoError(true)
        }
      })

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
      clearTimeout(fetchTimeoutId)
      controller.abort()
    }
  }, [])

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-slate-900 pt-32 pb-48 sm:pt-40 sm:pb-24">
      {/* Background - Video or Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoLoaded && !videoError ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/assets/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback gradient background
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900"></div>
        )}
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-slate-900/40 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center w-full">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto translate-y-0 sm:-translate-y-4">
            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-6 drop-shadow-2xl">
              <span className="block bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent">
                Precision Surveying &
              </span>
              <span className="block bg-gradient-to-r from-primary to-steel-grey bg-clip-text text-transparent drop-shadow-xl">
                Spatial Solutions
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 text-base sm:text-xl leading-relaxed text-white max-w-2xl mx-auto font-medium drop-shadow-md">
              Operating throughout Kenya since 2016, delivering precise solutions for large infrastructure and mining projects.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-row gap-2 sm:gap-4 justify-center items-center px-2">
              <Link 
                to="/contact" 
                className="group relative flex-1 sm:flex-none bg-primary text-white px-3 py-2.5 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-[10px] sm:text-sm tracking-wide hover:opacity-90 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/25 overflow-hidden text-center whitespace-nowrap"
              >
                <span className="relative z-10">GET CONSULTATION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </Link>
              <Link 
                to="/services" 
                className="flex-1 sm:flex-none border border-white/30 text-white px-3 py-2.5 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-[10px] sm:text-sm tracking-wide hover:bg-white hover:text-primary transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 backdrop-blur-md bg-white/5 hover:border-white hover:shadow-2xl hover:shadow-white/10 text-center whitespace-nowrap"
              >
                OUR SERVICES
              </Link>
            </div>

            
          </div>
        </div>
      </div>

      {/* Floating Stats Dock */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full z-20">
        <StatsDock />
      </div>
    </section>
  )
}

export default HeroSection
