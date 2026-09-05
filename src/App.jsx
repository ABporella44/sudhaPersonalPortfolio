import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0 })
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
