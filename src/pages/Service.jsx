
import { services } from '../data/content'

import {
  FiClipboard,
  FiTarget,
  FiRefreshCw,
  FiCalendar,
  FiCpu,
  FiShield,
  FiCheckSquare,
  FiBarChart2,
} from 'react-icons/fi'

const icons = {
  clipboard: FiClipboard,
  target: FiTarget,
  agile: FiRefreshCw,
  calendar: FiCalendar,
  cpu: FiCpu,
  shield: FiShield,
  checksquare: FiCheckSquare,
  chart: FiBarChart2,
}

export default function Service() {
  return (
    <section className="pt-40 pb-24 min-h-screen">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16 relative">
          <span className="absolute right-0 top-0 text-3xl text-white/30 hidden sm:block">+</span>
          <p className="text-accent tracking-[0.3em] text-sm font-semibold mb-3">SERVICE</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Services Which I Offer</h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <div
                key={service.title}
        
                className="bg-navy-card border border-white/5 rounded-lg p-8 hover:border-accent/50 transition-colors"
              >
                <span className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Icon size={26} />
                </span>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
