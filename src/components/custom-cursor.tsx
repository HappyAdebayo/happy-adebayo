import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label"

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // The ring trails behind the dot with a soft spring
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 })

  useEffect(() => {
    // Only on devices with a real mouse
    if (!window.matchMedia("(pointer: fine)").matches) return
    setEnabled(true)
    document.documentElement.classList.add("has-custom-cursor")

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      setHovering(!!(e.target as Element | null)?.closest(INTERACTIVE))
    }
    const onLeave = () => setVisible(false)

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)

    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      {/* Ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-[#ccff33]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.6 : 1,
          backgroundColor: hovering ? "rgba(204,255,51,0.12)" : "rgba(204,255,51,0)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-[#ccff33]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
        }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}

export default CustomCursor