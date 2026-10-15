import { motion } from "framer-motion"
import { Smartphone, Code2, Server, Wrench, type LucideIcon } from "lucide-react"

const LIME = "#ccff33"

type SkillGroup = {
  icon: LucideIcon
  title: string
  skills: string[]
}

// Edit these to match your real stack
const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: Smartphone,
    title: "Mobile",
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "Navigation",
      "State Management",
      "Push Notifications",
      "App Store Release",
    ],
  },
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    icon: Server,
    title: "Backend & Data",
    skills: [
      "Node.js",
      "Php",
      "Laravel",
      "Express",
      "REST APIs",
      "Authentication",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platform",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Responsive Design", "Accessibility"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="relative px-6 py-28">
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
            Skills
          </span>
        </motion.h2>

        {/* Rows */}
        <div className="mx-auto mt-20 flex max-w-6xl flex-col gap-8">
          {SKILL_GROUPS.map(({ icon: Icon, title, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#ccff33]/50 hover:shadow-[0_0_40px_-12px_rgba(204,255,51,0.5)] md:grid-cols-[15rem_1fr]"
            >
              {/* Category */}
              <div className="flex items-center gap-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-transparent group-hover:bg-[#ccff33] group-hover:text-black"
                  style={{ color: LIME }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-[0.2em]">{title}</h3>
              </div>

              {/* Skill pills */}
              <ul className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-white/80 transition-colors duration-200 hover:border-[#ccff33] hover:text-[#ccff33]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills