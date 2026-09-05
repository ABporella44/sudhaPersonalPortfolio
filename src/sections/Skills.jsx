import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/content'

function CircleStat({ percent, label }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const radius = 52
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const offset = circumference - (visible ? percent / 100 : 0) * circumference

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <svg width="130" height="130" viewBox="0 0 130 130">
        <circle cx="65" cy="65" r={radius} fill="none" stroke="#ffffff22" strokeWidth="6" />
        <circle
          cx="65"
          cy="65"
          r={radius}
          fill="none"
          stroke="#2f9aeb"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 65 65)"
          style={{ transition: 'stroke-dashoffset 1.4s ease' }}
        />
        <text
          x="65"
          y="72"
          textAnchor="middle"
          className="fill-white font-heading font-bold"
          fontSize="24"
        >
          {percent}%
        </text>
      </svg>
      <p className="font-semibold text-center">{label}</p>
    </div>
  )
}

export default function Skills() {
  const marqueeText =
    "I'M AN EXPERIENCED BUSINESS ANALYST \u2022 I'M OPEN FOR NEW PROJECTS \u2022 "

  return (
    <section className="py-20 overflow-hidden">
      <div className="marquee-track select-none mb-20">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-6xl sm:text-8xl font-bold text-white/5 [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] whitespace-nowrap pr-8"
          >
            {marqueeText.repeat(2)}
          </span>
        ))}
      </div>

      <div className="container grid lg:grid-cols-[minmax(0,360px)_1fr] gap-14 items-center">
        <div>
          <p className="text-accent tracking-[0.3em] text-sm font-semibold mb-3">MY SKILL</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">Growing Over Times</h2>
          <p className="text-white/60 leading-relaxed max-w-sm">
            Years spent shipping real projects across web, software, and systems work is what these
            numbers reflect.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-4 justify-items-center">
          {skills.map((s) => (
            <CircleStat key={s.label} percent={s.percent} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
