import Hero from '../sections/Hero'
import Works from '../sections/Works'
import Experience from '../sections/Experience'
import Skills from '../sections/Skills'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import Blog from '../sections/Blog'

export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <Experience />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      {/* <Blog /> */}
    </>
  )
}
