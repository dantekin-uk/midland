import React, { useState, useEffect, useRef } from 'react'

/**
 * Counter Component
 * Animates a number from 0 to targetValue when it enters the viewport.
 */
const Counter = ({ targetValue }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  const number = parseInt(targetValue.replace(/,/g, ''))
  const suffix = targetValue.includes('+') ? '+' : ''
  const useComma = targetValue.includes(',')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTimestamp = null
    const duration = 2000 // 2 seconds animation

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const easeOutQuad = progress * (2 - progress)
      
      setCount(Math.floor(easeOutQuad * number))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [isVisible, number])

  return (
    <span ref={containerRef}>
      {useComma ? count.toLocaleString() : count}{suffix}
    </span>
  )
}

const StatsDock = () => {
  const stats = [
    {
      value: "10+",
      label: "Years Operating",
      desc: "Throughout Kenya since 2016",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      hoverBg: "group-hover:bg-amber-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: "12",
      label: "Spatial Services",
      desc: "Cadastral, Engineering, LiDAR",
      color: "text-orange-600",
      bg: "bg-orange-600/10",
      hoverBg: "group-hover:bg-orange-600",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      value: "1",
      label: "Board Reg",
      color: "text-primary",
      desc: "LSB Registered",
      bg: "bg-primary/10",
      hoverBg: "group-hover:bg-primary",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      value: "10,000+",
      label: "Hectare Capacity",
      desc: "Broadacre Operations",
      color: "text-red-800",
      bg: "bg-red-800/10",
      hoverBg: "group-hover:bg-red-800",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    }
  ]

  return (
    <div className="w-full max-w-[95%] mx-auto px-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 overflow-hidden grid grid-cols-2 lg:grid-cols-4 divide-slate-100 lg:divide-x">
        {stats.map((stat, index) => (
          <div key={index} className="group flex flex-col items-center lg:items-start text-center lg:text-left p-6 sm:p-8 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 cursor-default relative z-10 hover:z-20">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color} group-hover:scale-110 group-hover:rotate-3 ${stat.hoverBg} group-hover:text-white transition-all duration-500 shadow-sm`}>
                {stat.icon}
              </div>
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter leading-none">
                <Counter targetValue={stat.value} />
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-widest">
              {stat.label}
            </span>
            <span className="hidden sm:block text-[10px] text-steel-grey font-medium mt-1 opacity-70">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsDock