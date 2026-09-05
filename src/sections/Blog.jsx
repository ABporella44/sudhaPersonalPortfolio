import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiFolder, FiUser, FiMessageCircle } from 'react-icons/fi'
import { blogPosts } from '../data/content'

export default function Blog() {
  const [start, setStart] = useState(0)
  const visible = blogPosts

  return (
    <section id="blog" className="py-24">
      <div className="container">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-accent tracking-[0.3em] text-sm font-semibold mb-3">GET UPDATES</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Recent Blog</h2>
          </div>
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => setStart((s) => (s - 1 + visible.length) % visible.length)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() => setStart((s) => (s + 1) % visible.length)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((post, i) => (
            <article
              key={post.title}
              className="bg-navy-card rounded-lg overflow-hidden border border-white/5"
              style={{ order: (i - start + visible.length) % visible.length }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
                  <span className="flex items-center gap-1.5">
                    <FiFolder size={13} /> {post.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiUser size={13} /> {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMessageCircle size={13} /> {post.comments}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
