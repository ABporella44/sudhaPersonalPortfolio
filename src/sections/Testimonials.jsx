import { useEffect, useState } from 'react'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[index]

  return (
    <section className="py-24 bg-navy-light/40 relative overflow-hidden">
      <span className="absolute -bottom-6 left-0 text-7xl sm:text-9xl font-bold text-white/5 whitespace-nowrap select-none">
        Testimonials
      </span>

      <div className="container grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <p className="text-accent tracking-[0.3em] text-sm font-semibold mb-3">TESTIMONIALS</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">What People Say</h2>

          <span className="text-5xl text-accent leading-none">&ldquo;</span>
          <p className="text-lg sm:text-xl italic text-white/80 leading-relaxed mb-8 min-h-[7rem]">
            {t.quote}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <p className="font-semibold">{t.name},</p>
              <p className="text-white/50 text-sm">{t.company}</p>
            </div>
          </div>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === index ? 'bg-accent' : 'bg-white/25'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg overflow-hidden max-h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
            alt="Happy team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
