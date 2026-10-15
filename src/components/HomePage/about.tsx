import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Happy from "../../assets/happy.png"

const LIME = "#ccff33"

// ---- Edit these ----
const NAME = "Happy Adebayo"
const TITLE = "Full Stack Mobile App Developer"
const PARAGRAPH_1 =
  "I'm Happy Adebayo, a Full Stack Developer focused on building mobile and web apps that feel fast and look sharp. I enjoy taking an idea from a rough sketch to a polished product, handling both the interface and the systems behind it."
const PARAGRAPH_2 =
  "My expertise lies in React Native apps, full-stack web products, REST APIs, and databases, with a strong eye for clean, usable design."
// --------------------

const About = () => {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="container mx-auto grid items-center gap-16 lg:grid-cols-2">
        {/* ---------- Left: photo ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Soft lime glow behind the card */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] opacity-30 blur-3xl"
            style={{ background: `radial-gradient(circle at 30% 20%, ${LIME}, transparent 60%)` }}
          />

          
          <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-neutral-950">
  <img
    src={Happy}
    alt={`${NAME} - About Me`}
  />
  {/* Fade the bottom edge into the page */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
</div>
        </motion.div>

        {/* ---------- Right: text ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            About{" "}
            <span style={{ color: LIME, textShadow: "0 0 32px rgba(204,255,51,0.55)" }}>
              Me
            </span>
          </h2>

          <h3 className="mt-10 text-2xl font-semibold md:text-3xl">{TITLE}</h3>

          <p className="mt-6 text-lg leading-relaxed text-white/60 md:text-xl">{PARAGRAPH_1}</p>

          <p className="mt-6 text-lg leading-relaxed text-[#8aa0c8]">{PARAGRAPH_2}</p>

          <a href="#portfolio" className="mt-10 inline-block">
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-[#ccff33] bg-transparent px-8 text-sm font-bold uppercase tracking-[0.15em] text-[#ccff33] shadow-[0_0_24px_-6px_rgba(204,255,51,0.6)] hover:bg-[#ccff33] hover:text-black"
            >
              View My Work
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About