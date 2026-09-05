import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const homeSections = ['home', 'works', 'contact', 'blog']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
      if (location.pathname !== '/') return
      let current = 'home'
      for (const id of homeSections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) {
          current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  function goToSection(id) {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 60)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isHomeRoute = location.pathname === '/'
  const linkBase = 'transition-colors duration-200 text-sm tracking-wide font-medium'
  const isActive = (key, isRoute) => {
    if (isRoute) return location.pathname === key
    return isHomeRoute && active === key
  }

  const navItem = (label, key, isRoute) => {
    const activeState = isActive(key, isRoute)
    const className = `${linkBase} ${activeState ? 'text-accent' : 'text-white hover:text-accent'}`
    if (isRoute) {
      return (
        <Link to={key} className={className}>
          {label}
        </Link>
      )
    }
    return (
      <button onClick={() => goToSection(key)} className={className}>
        {label}
      </button>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy-dark/95 backdrop-blur shadow-lg shadow-black/20' : 'bg-navy-dark'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <svg width="30" height="30" viewBox="0 0 32 32" className="shrink-0">
            <circle cx="16" cy="16" r="16" fill="#2F9AEB" />
            <path d="M9 11h14M16 11v11" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          </svg>
          Sudha 
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItem('Home', 'home', false)}
          {navItem('About', '/about', true)}
          {navItem('Works', 'works', false)}
          {navItem('Service', '/service', true)}
          {navItem('Contact', 'contact', false)}
          {/* {navItem('Blog', 'blog', false)} */}
        </nav>

        <Link
          to="/about"
          className="hidden sm:inline-block border border-accent text-accent hover:bg-accent hover:text-navy-dark transition-colors duration-200 text-sm font-semibold tracking-wide px-5 py-2.5 rounded-sm"
        >
          Download CV
        </Link>
      </div>
    </header>
  )
}
