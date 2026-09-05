import { FiBriefcase } from 'react-icons/fi'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section className="py-24">
      <div className="container grid md:grid-cols-2 gap-14 items-start">
        <div className="order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80"
            alt="Presenting work on a whiteboard"
            className="w-full h-full object-cover rounded-sm max-h-[560px]"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-accent tracking-[0.3em] text-sm font-semibold mb-3">WORK EXPERIENCE</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">My Experience</h2>
          <p className="text-white/60 mb-10 max-w-md leading-relaxed">
            A quick look at where I&apos;ve worked and what I focused on at each stop along the way.
          </p>

          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.role} className="flex gap-5">
                <span className="w-12 h-12 rounded-lg bg-accent/90 flex items-center justify-center shrink-0">
                  <FiBriefcase size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="text-accent text-sm font-medium mb-2">
                    {job.company} <span className="text-white/40">( {job.period} )</span>
                  </p>
                  <p className="text-white/60 leading-relaxed max-w-md">{job.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
