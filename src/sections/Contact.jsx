import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon paths (Vite/webpack asset handling quirk with Leaflet)
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const position = [22.3569, 91.7832] // Chattogram, Bangladesh

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="h-72 sm:h-96 rounded-lg overflow-hidden mb-16 border border-white/10">
          <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>James Smith &mdash; Based here</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <p className="text-accent tracking-[0.3em] text-sm font-semibold mb-3">GET IN TOUCH</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5">Contact Me</h2>
            <p className="text-white/60 leading-relaxed max-w-md">
              Have a project in mind or just want to say hello? Send a message and I&apos;ll get back
              to you as soon as I can.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="bg-navy-card border border-white/10 rounded-md px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-accent"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                className="bg-navy-card border border-white/10 rounded-md px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-accent"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-navy-card border border-white/10 rounded-md px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-accent"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full bg-navy-card border border-white/10 rounded-md px-4 py-3 text-sm placeholder-white/40 outline-none focus:border-accent resize-none"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent-light transition-colors text-white font-semibold px-8 py-3.5 rounded-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
