import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { works } from '../data/content'

export default function Works() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="works" className="py-24 bg-navy-light/40">
      <div className="container">
        <div className="mb-14 max-w-xl">
          <p className="text-accent tracking-[0.3em] text-sm font-semibold mb-3">PORTFOLIO</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Recent Works</h2>
        </div>

        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {works.map((work, i) => {
            const isOpen = openIndex === i
            return (
              <div key={work.title} className="py-8">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 text-left group"
                >
                  <span className="hidden sm:block text-xs tracking-[0.25em] text-white/40 w-32 shrink-0">
                    {work.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold flex-1 group-hover:text-accent transition-colors">
                    {work.title}
                  </h3>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-20 h-14 sm:w-28 sm:h-16 object-cover rounded -rotate-2 hidden sm:block"
                  />
                  <span
                    className={`w-11 h-11 rounded-full border border-accent text-accent flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-accent text-white' : ''
                    }`}
                  >
                    <FiPlus size={18} />
                  </span>
                </button>
                {isOpen && (
                  <p className="text-white/60 mt-4 sm:ml-32 max-w-2xl leading-relaxed">
                    {work.detail}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
