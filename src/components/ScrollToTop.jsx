import { useEffect, useState } from 'react'
import { HiChevronUp } from 'react-icons/hi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-accent hover:bg-accent-light text-white flex items-center justify-center shadow-lg shadow-black/30 transition-colors"
    >
      <HiChevronUp size={22} />
    </button>
  )
}
