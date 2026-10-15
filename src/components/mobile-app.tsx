import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Smartphone, CheckCircle2, Download, Info, ChevronLeft, ChevronRight } from "lucide-react"
// Adjust this path to wherever your data file lives
import { mobileApps } from "@/data/data"

const LIME = "#ccff33"

const MobileApps = () => {
  const [activeAppIndex, setActiveAppIndex] = useState(0)
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)

  const activeApp = mobileApps[activeAppIndex]
  const screens = activeApp.screens
  const activeScreen = screens[activeScreenIndex]

  const selectApp = (index: number) => {
    setActiveAppIndex(index)
    setActiveScreenIndex(0)
  }

  const prevScreen = () =>
    setActiveScreenIndex((i) => (i === 0 ? screens.length - 1 : i - 1))
  const nextScreen = () =>
    setActiveScreenIndex((i) => (i === screens.length - 1 ? 0 : i + 1))

  return (
    <section id="mobile-apps" className="relative px-6 py-28">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            Mobile{" "}
            <span style={{ color: LIME, textShadow: "0 0 32px rgba(204,255,51,0.55)" }}>
              Apps
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
            High-performance React Native apps designed for smooth, everyday use.
          </p>
        </motion.div>

        {/* App switcher */}
        <div className="mt-14 flex justify-center">
          <div
            role="tablist"
            aria-label="Mobile apps"
            className="flex w-full max-w-md gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-sm"
          >
            {mobileApps.map((app, index) => {
              const isActive = activeAppIndex === index
              return (
                <button
                  key={app.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectApp(index)}
                  className={`relative flex-1 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] transition-colors ${
                    isActive ? "text-black" : "text-white/70 hover:text-[#ccff33]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobile-app-tab"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: LIME }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    {app.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Showcase */}
        <div className="mx-auto mt-16 grid max-w-6xl items-center gap-14 lg:grid-cols-12">
          {/* ---------- Left: details ---------- */}
          <motion.div
            key={activeApp.id}
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10 lg:col-span-7"
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: LIME }}
              >
                {activeApp.platform}
              </p>

              <h3 className="mt-3 text-4xl font-bold md:text-5xl">{activeApp.title}</h3>
              <p className="mt-2 text-xl font-medium" style={{ color: LIME }}>
                {activeApp.tagline}
              </p>

              <p className="mt-5 text-lg leading-relaxed text-white/60">
                {activeApp.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {activeApp.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key features */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em]">
                <CheckCircle2 className="h-5 w-5" style={{ color: LIME }} />
                Key Features
              </h4>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {activeApp.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 leading-snug text-white/60"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: LIME }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Screen selector */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em]">
                <Info className="h-5 w-5" style={{ color: LIME }} />
                Explore App Flow
              </h4>

              <div className="mt-5 flex flex-wrap gap-2">
                {screens.map((screen, idx) => {
                  const isActive = activeScreenIndex === idx
                  return (
                    <button
                      key={screen.label}
                      onClick={() => setActiveScreenIndex(idx)}
                      aria-pressed={isActive}
                      className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "border-[#ccff33] bg-[#ccff33]/10 text-[#ccff33]"
                          : "border-white/10 bg-white/5 text-white/70 hover:border-[#ccff33]/60 hover:text-[#ccff33]"
                      }`}
                    >
                      {screen.label}
                    </button>
                  )
                })}
              </div>

              <p className="mt-4 text-sm text-[#8aa0c8]" aria-live="polite">
                {activeScreen.description}
              </p>
            </div>

            {/* Action */}
            <div>
              {activeApp.apkUrl ? (
                <a href={activeApp.apkUrl} download={`${activeApp.title}.apk`}>
                  <Button
                    size="lg"
                    className="h-14 rounded-full px-8 text-sm font-bold uppercase tracking-[0.15em] text-black hover:brightness-110"
                    style={{ backgroundColor: LIME }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Android App (APK)
                  </Button>
                </a>
              ) : (
                <div className="max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em]"
                    style={{ color: LIME }}
                  >
                    <Info className="h-4 w-4" />
                    Showcase only
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {activeApp.title} has no install file. Use the phone preview to step through
                    every screen, from sign-up to dashboard.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* ---------- Right: phone mockup ---------- */}
          <div className="flex flex-col items-center lg:col-span-5">
            <div className="relative">
              {/* Glow behind the phone */}
              <div
                aria-hidden="true"
                className="absolute -inset-10 rounded-full opacity-25 blur-3xl"
                style={{ background: `radial-gradient(circle, ${LIME}, transparent 65%)` }}
              />

              <div className="relative aspect-[1/2] w-[min(75vw,18.5rem)] overflow-hidden rounded-[3rem] border-[8px] border-neutral-800 bg-black shadow-2xl">
                {/* Glass edge */}
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[2.5rem] border border-white/10" />

                {/* Camera island */}
                <div className="absolute left-1/2 top-3 z-30 flex h-6 w-28 -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-black">
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
                  <span className="h-2 w-2 rounded-full bg-neutral-800" />
                </div>

                {/* Prev / next */}
                <button
                  onClick={prevScreen}
                  aria-label="Previous screenshot"
                  className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ccff33]/40 bg-black/60 text-[#ccff33] backdrop-blur transition-colors hover:bg-[#ccff33] hover:text-black"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextScreen}
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ccff33]/40 bg-black/60 text-[#ccff33] backdrop-blur transition-colors hover:bg-[#ccff33] hover:text-black"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Screen */}
                <div className="absolute inset-0 bg-neutral-950">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${activeApp.id}-${activeScreenIndex}`}
                      src={activeScreen.image}
                      alt={`${activeApp.title} ${activeScreen.label} screen`}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.25 }}
                      className="h-full w-full object-cover object-top"
                    />
                  </AnimatePresence>
                </div>

                {/* Home indicator */}
                <div className="pointer-events-none absolute bottom-2 left-1/2 z-30 h-1 w-28 -translate-x-1/2 rounded-full bg-white/40" />
              </div>
            </div>

            {/* Progress dots */}
            <div className="mt-8 flex items-center gap-2">
              {screens.map((screen, idx) => (
                <button
                  key={screen.label}
                  onClick={() => setActiveScreenIndex(idx)}
                  aria-label={`Show ${screen.label} screen`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeScreenIndex === idx
                      ? "w-7 bg-[#ccff33]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileApps