  import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X,Menu } from "lucide-react"
import { useState } from "react"

  const Navbar =()=>{
      const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return(
        <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-xl z-40 border-b border-yellow-500/20"
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent"
                >
                    {"<Dev />"}
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {["About", "Skills", "Projects", "Contact"].map((item) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        whileHover={{ scale: 1.1, color: "#FFD700" }}
                        whileTap={{ scale: 0.95 }}
                        className="hover:text-yellow-400 transition-all duration-300 cursor-pointer font-medium relative group"
                    >
                        {item}
                        <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300" />
                    </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-yellow-400 hover:bg-yellow-400/10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </Button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    height: isMenuOpen ? "auto" : 0,
                }}
                className="md:hidden bg-black/95 border-t border-yellow-500/20 overflow-hidden"
                >
                <div className="container mx-auto px-6 py-6 space-y-4">
                    {["About", "Skills", "Projects", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block hover:text-yellow-400 transition-colors font-medium"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item}
                    </a>
                    ))}
                </div>
                </motion.div>
        </motion.nav>
    )
  }

  export default Navbar