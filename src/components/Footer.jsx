import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5">
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-xl font-bold mb-4">
            <svg width="30" height="30" viewBox="0 0 32 32" className="shrink-0">
              <circle cx="16" cy="16" r="16" fill="#2F9AEB" />
              <path d="M9 11h14M16 11v11" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Sudha
          </div>
          <p className="text-white/50 text-sm">
            All rights reserved <span className="font-semibold text-white/70">Sudha</span> &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-navy-card rounded-md overflow-hidden border border-white/10 max-w-sm"
          >
            <input
              type="email"
              required
              placeholder="Submit your email"
              className="flex-1 bg-transparent px-4 py-3 text-sm placeholder-white/40 outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-accent hover:bg-accent-light transition-colors px-4 py-3 text-white"
            >
              <HiOutlineMail size={18} />
            </button>
          </form>
        </div>

        <div className="md:text-right">
          <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
          <div className="flex gap-3 md:justify-end">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-navy-card border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
