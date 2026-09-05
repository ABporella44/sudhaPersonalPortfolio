import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import useTypewriter from '../hooks/useTypewriter'
import { roles } from '../data/content'

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40">
      {/* decorative squiggle + plus marks */}
      <svg
        className="float-slow absolute left-1/2 top-24 -translate-x-1/2 opacity-70 hidden md:block"
        width="60" height="50" viewBox="0 0 60 50" fill="none"
      >
        <path d="M5 5c10 20 20-20 25 0s10 15 20 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="absolute right-16 top-28 text-2xl text-white/70 hidden md:block">+</span>
      <span className="absolute right-10 top-40 text-lg text-white/50 hidden md:block">+</span>
      <span className="absolute left-10 bottom-24 text-lg text-white/40 hidden md:block">+</span>

      {/* social sidebar */}
      <div className="hidden lg:flex flex-col gap-4 absolute right-8 top-1/2 -translate-y-1/2 z-10">
        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-11 h-11 border border-white/20 rounded-md flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="fade-in-up">
          <p className="text-accent tracking-[0.3em] text-sm font-semibold mb-4">HELLO I&apos;M</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-2">
            Sudha 
            <br />
            Sravanthi
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mt-6 h-8">
            A Passionate <span className="text-accent font-semibold">{typed}</span>
            <span className="typed-cursor text-accent">|</span>
          </p>
          <button
            onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 bg-accent hover:bg-accent-light transition-colors text-white font-semibold px-8 py-3.5 rounded-sm"
          >
            My Portfolio
          </button>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-navy-card right-0 top-6 -z-10" />
          <img
            src="./Sudha.jpeg"
            alt="Sudha Sravanthi Portrait"
            className="w-72 sm:w-96 grayscale contrast-125 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
