import { FiDownload } from 'react-icons/fi'
import { aboutInfo } from '../data/content'

export default function About() {
  return (
    <section className="pt-40 pb-24 min-h-screen">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          <span className="absolute -left-2 top-6 w-28 h-28 border-2 border-accent hidden sm:block" />
          <span className="absolute left-10 top-0 w-20 h-20 bg-accent hidden sm:block" />
          <span className="absolute right-10 bottom-8 w-14 h-14 bg-accent hidden sm:block" />

          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
            alt="James Smith"
            className="relative z-10 w-72 sm:w-80 grayscale contrast-125 object-cover"
          />

          {/* Rotating "Download my CV" badge */}
          <div className="absolute -bottom-6 -left-6 sm:left-2 z-20 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
            <svg viewBox="0 0 100 100" className="spin-slow absolute w-full h-full">
              <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              </defs>
              <text fontSize="8" fill="#131a44" fontWeight="700" letterSpacing="1.5">
                <textPath href="#circlePath" startOffset="0%">
                  DOWNLOAD MY CV &bull; DOWNLOAD MY CV &bull;
                </textPath>
              </text>
            </svg>
            <span className="w-11 h-11 rounded-full bg-navy flex items-center justify-center text-accent z-10">
              <FiDownload size={18} />
            </span>
          </div>
        </div>

        <div>
          <p className="text-accent tracking-[0.3em] text-sm font-semibold mb-3">ABOUT ME</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            I Develop System that Works
          </h1>
          <p className="text-white/60 leading-relaxed mb-4 max-w-lg">
       I'm a business analyst with over a decade of experience working at the intersection of healthcare, insurance, and technology. My work spans the full lifecycle of a product — from gathering requirements and writing BRDs, FRDs, and RTMs, to translating them into JIRA epics and user stories that development and QA teams can act on with confidence. I've led claims adjudication projects, group insurance workflow builds, and a full clinical trial data migration, always keeping compliance with HIPAA, CMS, and Medicare/Medicaid rules front and center.

More recently, my focus has shifted toward AI implementation in healthcare products — defining scope, feasibility, and roadmaps for embedding AI into existing workflows, and partnering closely with developers, product owners, and data scientists to turn that vision into something shippable. I authored a white paper on how AI can transform claims processing, fraud detection, and clinical workflows, which is being featured on my company's website starting this December.
          </p>
          <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
Outside of pure delivery work, I care a lot about the craft of business analysis itself — running productive stakeholder workshops, keeping sprint planning honest, and building dashboards that give leadership a real, data-driven view of quality and operations. I've also driven automation initiatives that cut testing time by 40%, which is the kind of quiet, unglamorous win I find most satisfying.
          </p>

          <dl className="grid grid-cols-2 gap-y-4 mb-10 max-w-md text-sm">
            <div className="flex gap-2">
              <dt className="text-white/50 w-24">Name</dt>
              <dd className="font-medium">{aboutInfo.name}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/50 w-24">Phone</dt>
              <dd className="font-medium">{aboutInfo.phone}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/50 w-24">Age</dt>
              <dd className="font-medium">{aboutInfo.age}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/50 w-24">Email</dt>
              <dd className="font-medium">{aboutInfo.email}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/50 w-24">Occupation</dt>
              <dd className="font-medium">{aboutInfo.occupation}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/50 w-24">Nationality</dt>
              <dd className="font-medium">{aboutInfo.nationality}</dd>
            </div>
          </dl>

          <div className="flex items-center gap-4 pt-6 border-t border-white/10">
            <span className="font-signature text-3xl text-accent italic" style={{ fontFamily: 'cursive' }}>
              Sudha Sravanthi
            </span>
            <div className="text-sm">
              <p className="font-semibold">Sudha Sravanthi</p>
              <p className="text-white/50">Technical Business Analyst, Hyderabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
