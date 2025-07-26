import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  ArrowDown,
  Star,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedCounter from "@/components/animated-counter"
import { techStack,projects,stats } from "@/data/data"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            style={{ y: yBg }}
            className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-600/5"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">Adebayo Happy Adeyanju</span>
              <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full Stack Mobile App
              <motion.span
                className="block bg-gold-gradient bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Crafting exceptional digital experiences with cutting-edge technologies and innovative solutions
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a href="/Happy-Adebayo-CV-Frontend-Developer.docx" download>
                <Button
                  size="lg"
                  className="bg-gold-gradient text-black hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 font-semibold px-8 py-4 text-lg group"
                >
                  Download Resume
                  <motion.div
                    className="ml-3"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ArrowDown className="w-5 h-5" />
                  </motion.div>
                </Button>
              </a>

              <div className="flex space-x-6">
                {[
                  { icon: Github, href: "https://github.com/HappyAdebayo" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/happy-adebayo/" },
                  { icon: Mail, href: "happyadebayo2005@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-full border border-yellow-500/30 hover:border-yellow-400 hover:bg-yellow-400/10 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6 text-yellow-400" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 6,
            ease: "easeInOut",
          }}
          className="absolute top-32 left-16 text-6xl text-yellow-400/20 font-bold"
        >
          {"{}"}
        </motion.div>

        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 right-16 text-6xl text-yellow-400/20 font-bold"
        >
          {"</>"}
        </motion.div>

        {/* Decorative Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3 + i,
              delay: i * 0.5,
            }}
          >
            <Star className="w-4 h-4 text-yellow-400/40" />
          </motion.div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-500/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div whileHover={{ scale: 1.1 }} className="mb-4">
                  <AnimatedCounter end={stat.value} />
                </motion.div>
                <p className="text-gray-400 font-medium text-lg group-hover:text-yellow-400 transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">About Me</h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-12 rounded-full"></div>

            <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto">
              I’m a full-stack mobile app developer who enjoys building practical, well-designed web apps that actually solve problems. I’ve spent the last couple of years working across both frontend and backend, and I love learning new things, sharing what I know, and collaborating with others in the dev community.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Frontend",
                  desc: "React",
                  color: "from-blue-500 to-purple-600",
                },
                {
                  icon: Database,
                  title: "Backend",
                  desc: "Php, Python, MySQL",
                  color: "from-green-500 to-teal-600",
                },
    
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group"
                >
                  <Card className="p-8 bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 h-full">
                    <CardContent className="p-0 text-center">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-transparent to-yellow-500/5">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">Tech Stack</h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-400 text-xl">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
              
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
              >
                <Card className="p-8 bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 text-center">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 rounded-full ${tech.color} flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-yellow-400 transition-colors duration-300">
                      {tech.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-400 text-xl">Some of my recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -15 }}
                className="group"
              >
                <Card className="overflow-hidden h-full bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {
                        project.siteplatform == 'Website' &&
                      <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold" onClick={()=>window.open(project.live,"_blank")}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>

                      }
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 text-base leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-t from-yellow-500/5 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gold-gradient bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-12 rounded-full"></div>

            <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together and bring your
              vision to life.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => window.location.href = "mailto:happyadebayo2005@gmail.com"}
                className="bg-gold-gradient text-black hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 font-bold px-12 py-6 text-xl group"
              >
                <Mail className="w-6 h-6 mr-3" />
                Get In Touch
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>

            <div className="flex justify-center space-x-12 mt-16">
              {[
                { icon: Github, label: "GitHub", color: "hover:text-purple-400", href:'https://github.com/HappyAdebayo' },
                { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" , href: "https://www.linkedin.com/in/happy-adebayo/"},
                { icon: Mail, label: "Email", color: "hover:text-green-400" , href: "happyadebayo2005@gmail.com"},
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -8 }}
                  className={`flex flex-col items-center space-y-3 text-gray-400 ${social.color} transition-all duration-300 group`}
                >
                  <div className="p-4 rounded-full border border-yellow-500/30 group-hover:border-yellow-400 group-hover:bg-yellow-400/10 group-hover:shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300">
                    <social.icon className="w-7 h-7" />
                  </div>
                  <span className="text-base font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
