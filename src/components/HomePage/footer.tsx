import { ArrowUp } from "lucide-react"

// ---- Edit these ----
const LOGO = "HAPPY."
const NAME = "Happy Adebayo"
const TAGLINE = "Full Stack Mobile App Developer"
const WHATSAPP_NUMBER = "2340000000000" // international format, no + or spaces

const LINKS = [
  { label: "GitHub", href: "https://github.com/HappyAdebayo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/happy-adebayo/" },
  { label: "Email", href: "mailto:happyadebayo2005@gmail.com" },
  { label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
]
// --------------------

const Footer = () => {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
  }

  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="container mx-auto flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Left: brand */}
        <div>
          <p className="text-2xl font-bold uppercase tracking-[0.15em]">{LOGO}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.12em] text-[#6b7fa8]">{TAGLINE}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[#6b7fa8]/80">
            &copy; {new Date().getFullYear()} {NAME}
          </p>
        </div>

        {/* Right: links + back to top */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <nav aria-label="Social links" className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="text-sm uppercase tracking-[0.12em] text-[#6b7fa8] transition-colors hover:text-[#ccff33]"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black text-white transition-colors hover:border-[#ccff33] hover:text-[#ccff33]"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer