import { motion } from "framer-motion"
import {
  Server,
  Database,
  ShieldCheck,
  Layers,
  Rocket,
  FileJson,
  type LucideIcon,
} from "lucide-react"

const LIME = "#ccff33"

type Service = {
  icon: LucideIcon
  title: string
  description: string
}

// Edit these to match what you actually offer
const SERVICES: Service[] = [
  {
    icon: FileJson,
    title: "REST API Design",
    description:
      "Building clean, well-documented REST APIs using Node.js and PHP that are easy to integrate, version, and extend.",
  },
  {
    icon: Layers,
    title: "Modular MVC Architecture",
    description:
      "Structuring server-side code with modular MVC patterns so every part of the system is predictable and easy to maintain.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "End-to-end server-side logic — routing, controllers, middleware, and business rules — built for reliability and speed.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Clean relational schemas, efficient queries, and optimised indexes in PostgreSQL and MySQL that keep your data fast and consistent.",
  },
  {
    icon: ShieldCheck,
    title: "Auth & Security",
    description:
      "Implementing JWT auth, role-based access control, input validation, and security best practices across every endpoint.",
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description:
      "Shipping APIs to production, setting up environment configs, and keeping services running smoothly after launch.",
  },
]

const Services = () => {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-extrabold tracking-tight md:text-7xl"
        >
          My{" "}
          <span style={{ color: LIME, textShadow: "0 0 32px rgba(204,255,51,0.55)" }}>
            Services
          </span>
        </motion.h2>

        {/* Cards */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff33]/60 hover:bg-[#ccff33]/10 hover:shadow-[0_0_40px_-10px_rgba(204,255,51,0.5)]"
            >
              {/* Index */}
              <span className="absolute right-8 top-8 text-xs tracking-widest text-white/50 transition-colors group-hover:text-[#ccff33]">
                {String(i + 1).padStart(2, "0")}/{String(SERVICES.length).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:scale-110 group-hover:border-transparent group-hover:bg-[#ccff33] group-hover:text-black"
                style={{ color: LIME }}
              >
                <Icon className="h-7 w-7" />
              </div>

              {/* Text */}
              <h3 className="mt-8 text-xl font-bold uppercase tracking-[0.15em] transition-colors group-hover:text-[#ccff33]">
                {title}
              </h3>
              <p className="mt-4 leading-relaxed text-white/60">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services