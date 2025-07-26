import { motion } from "framer-motion"

const Footer =()=>{
    return(
              <footer className="py-12 border-t border-yellow-500/20 bg-gradient-to-r from-black to-gray-900">
                <div className="container mx-auto px-6 text-center">
                  <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gray-400 text-lg">
                    © {new Date().getFullYear()} Full Stack Developer. Built with <span className="text-yellow-400">React.js</span> and{" "}
                    <span className="text-yellow-400">Framer Motion</span>.
                  </motion.p>
                </div>
              </footer>
    )
}

export default Footer