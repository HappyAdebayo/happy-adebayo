import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
// Adjust this path to wherever your data file lives
import { projects } from "@/data/data"

const LIME = "#ccff33"

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative px-6 py-28">
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
            Portfolio
          </span>
        </motion.h2>

        {/* Project cards */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff33]/50 hover:shadow-[0_0_40px_-12px_rgba(204,255,51,0.5)]"
            >
              {/* Cover image */}
              <div className="aspect-[16/10] overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: LIME }}
                >
                  {project.siteplatform}
                </p>

                <h3 className="mt-3 text-3xl font-bold">{project.title}</h3>

                <p className="mt-4 leading-relaxed text-white/60">{project.description}</p>

                {/* Tech tags */}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Live link pinned to the bottom so all cards line up */}
                <div className="mt-auto pt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#ccff33]/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#ccff33] transition-colors hover:bg-[#ccff33] hover:text-black"
                  >
                    View Live
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio