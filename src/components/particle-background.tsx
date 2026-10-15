import { useEffect, useRef } from "react"

const COLOR = "204, 255, 51" // lime #ccff33 as r, g, b
const LINK_DISTANCE = 140 // max distance between two connected molecules
const MOUSE_RADIUS = 180 // how far the cursor reaches
const DENSITY = 11000 // px² per particle (lower = more particles)

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const mouse = { x: -9999, y: -9999 }
    let particles: Particle[] = []
    let width = 0
    let height = 0
    let raf = 0

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(Math.floor((width * height) / DENSITY), 140)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (!reduceMotion) {
          p.x += p.vx
          p.y += p.vy

          // Gently push molecules away from the cursor
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (1 - dist / MOUSE_RADIUS) * 0.6
            p.x += (dx / dist) * force
            p.y += (dy / dist) * force
          }

          // Wrap around the edges
          if (p.x < -20) p.x = width + 20
          if (p.x > width + 20) p.x = -20
          if (p.y < -20) p.y = height + 20
          if (p.y > height + 20) p.y = -20
        }

        // Molecule-to-molecule bonds
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${COLOR}, ${(1 - d / LINK_DISTANCE) * 0.18})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }

        // Bonds to the cursor, brighter than the rest
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        if (md < MOUSE_RADIUS) {
          ctx.strokeStyle = `rgba(${COLOR}, ${(1 - md / MOUSE_RADIUS) * 0.55})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }

        // The molecule itself
        ctx.fillStyle = `rgba(${COLOR}, 0.55)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(draw)
    }

    init()
    raf = requestAnimationFrame(draw)

    window.addEventListener("resize", init)
    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", init)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}

export default ParticleBackground