import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Code2, Smartphone, MessageCircle } from "lucide-react"
import Happy from "../../assets/happy.png"
// ---- Edit these ----
const FIRST_NAME = "Happy"
const LAST_NAME = "Adebayo"
const CV_FILE = "/Happy-Adebayo-CV-Fullstack-Developer.pdf"
const TECH_TAG = "REACT NATIVE"
const WHATSAPP_NUMBER = "2340000000000" // international format, no + or spaces
const ROLES = ["Full Stack Developer", "Mobile App Developer", "Back-End Developer", "Front-End Developer"]

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/HappyAdebayo" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/happy-adebayo/" },
  { icon: Mail, label: "Email", href: "mailto:happyadebayo2005@gmail.com" },
]
// --------------------

const LIME = "#ccff33"

/** Types each role, pauses, deletes it, then moves to the next one. */
const useTyping = (words: string[], typeMs = 90, deleteMs = 45, pauseMs = 1400) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let delay = deleting ? deleteMs : typeMs

    if (!deleting && text === word) delay = pauseMs

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === "") {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeMs, deleteMs, pauseMs])

  return text
}

const Hero = () => {
  const typed = useTyping(ROLES)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
        {/* ---------- Left: text ---------- */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-lg font-bold uppercase tracking-[0.3em]"
            style={{ color: LIME }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
          >
            {FIRST_NAME}{" "}
            <span
              style={{ color: LIME, textShadow: "0 0 32px rgba(204,255,51,0.55)" }}
            >
              {LAST_NAME}
            </span>
          </motion.h1>

          {/* Typing line: min-h stops the layout jumping while text is empty */}
          <div
            className="mt-6 flex min-h-[3.5rem] items-center text-4xl font-bold sm:text-5xl"
            style={{ color: LIME }}
            aria-label={ROLES.join(", ")}
          >
            <span>{typed}</span>
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.9 }}
              className="ml-1 inline-block h-10 w-0.5 sm:h-12"
              style={{ backgroundColor: LIME }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl"
          >
            I build fast, polished mobile and web apps, from the interface down to
            the API and database behind it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-4 max-w-xl leading-relaxed text-[#8aa0c8]"
          >
            Focused on React Native apps, full-stack web products, and the cutting-edge
            tools that make them ship faster.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href={CV_FILE} download>
              <Button
                size="lg"
                className="h-14 rounded-full px-8 text-sm font-bold uppercase tracking-[0.15em] text-black hover:brightness-110"
                style={{ backgroundColor: LIME }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>

            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/20 bg-transparent px-8 text-sm font-bold uppercase tracking-[0.15em] text-white hover:border-[#ccff33] hover:bg-[#ccff33]/10 hover:text-[#ccff33]"
              >
                Contact Me
              </Button>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 flex gap-4"
          >
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#ccff33] hover:bg-[#ccff33]/10 hover:text-[#ccff33]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ---------- Right: photo with orbit rings ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="relative mx-auto aspect-square w-[min(88vw,30rem)]"
        >
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-[#ccff33]/20" />

          {/* Inner ring with a slowly travelling dot */}
          <div className="absolute inset-[6%] rounded-full border border-[#ccff33]/40" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-[6%]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          >
            <span
              className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ backgroundColor: LIME, boxShadow: "0 0 14px 3px rgba(204,255,51,0.6)" }}
            />
          </motion.div>

          {/* Photo */}
          <div className="absolute inset-[16%] overflow-hidden rounded-full border border-white/10 bg-neutral-900">
            <img
              src={Happy}
              alt={`${FIRST_NAME} ${LAST_NAME}`}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute left-[2%] top-[34%] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/80 backdrop-blur"
            style={{ color: LIME }}
          >
            <Smartphone className="h-6 w-6" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute right-[2%] top-[58%] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/80 backdrop-blur"
            style={{ color: LIME }}
          >
            <Code2 className="h-6 w-6" />
          </motion.div>

          {/* Tech tag */}
          <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/80 px-5 py-2.5 text-xs font-bold tracking-[0.15em] backdrop-blur">
            {TECH_TAG}
          </div>
        </motion.div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </section>
  )
}

export default Hero