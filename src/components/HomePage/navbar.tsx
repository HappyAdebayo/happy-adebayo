import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Menu, Volume2, VolumeX } from "lucide-react"

const LOGO = "HAPPY."

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Mobile App", id: "mobile-apps" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [active, setActive] = useState("home")

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => el !== null
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-b border-white/5"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-tight text-[#ccff33]"
          style={{ textShadow: "0 0 18px rgba(204,255,51,0.35)" }}
        >
          {LOGO}
        </a>

        <div className="flex items-center gap-8">
          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ label, id }) => {
              const isActive = active === id
              return (
                <li key={id} className="relative">
                  <a
                    href={`#${id}`}
                    onClick={() => setActive(id)}
                    className={`block py-2 text-[15px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#ccff33]"
                        : "text-white/90 hover:text-[#ccff33]"
                    }`}
                  >
                    {label}
                  </a>

                  {/* Active underline slides between links */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#ccff33]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* Sound toggle */}
          <button
            type="button"
            onClick={() => setIsMuted((m) => !m)}
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
            className="hidden md:inline-flex text-white/70 hover:text-[#ccff33] transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#ccff33] hover:bg-[#ccff33]/10 hover:text-[#ccff33]"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {NAV_ITEMS.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => {
                    setActive(id)
                    setIsMenuOpen(false)
                  }}
                  className={`uppercase tracking-[0.15em] text-sm transition-colors ${
                    active === id ? "text-[#ccff33]" : "text-white/90"
                  }`}
                >
                  {label}
                </a>
              ))}

              <button
                type="button"
                onClick={() => setIsMuted((m) => !m)}
                className="flex items-center gap-2 text-white/70 text-sm uppercase tracking-[0.15em]"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                {isMuted ? "Sound off" : "Sound on"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar