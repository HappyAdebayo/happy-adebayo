import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const LIME = "#ccff33"

// Create a free form at https://formspree.io and paste its endpoint here.
// Messages will be emailed to you.
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id"

type Status = "idle" | "sending" | "success" | "error"

const FIELD_BASE =
  "peer w-full border-0 border-b border-white/20 bg-transparent px-5 py-4 text-white placeholder:text-[#8aa0c8] outline-none transition-colors duration-200 focus:border-[#ccff33]"

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("sending")

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })

      if (!res.ok) throw new Error("Request failed")

      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl"
        >
          Let's Build{" "}
          <span style={{ color: LIME, textShadow: "0 0 32px rgba(204,255,51,0.55)" }}>
            Something Great
          </span>
        </motion.h2>

        {/* Form card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-20 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-10"
        >
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Full Name"
                className={FIELD_BASE}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email Address"
                className={FIELD_BASE}
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Mobile Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Mobile Number"
                className={FIELD_BASE}
              />
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Email Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Email Subject"
                className={FIELD_BASE}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className={`${FIELD_BASE} resize-none`}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-10 flex flex-col items-center gap-5">
            <Button
              type="submit"
              size="lg"
              variant="outline"
              disabled={status === "sending"}
              className="h-14 rounded-full border-white/20 bg-transparent px-10 text-sm font-bold uppercase tracking-[0.2em] text-white hover:border-[#ccff33] hover:bg-[#ccff33]/10 hover:text-[#ccff33] disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>

            {/* Status message, announced to screen readers */}
            <p role="status" aria-live="polite" className="min-h-6 text-center text-sm">
              {status === "success" && (
                <span style={{ color: LIME }}>Message sent. I'll get back to you soon.</span>
              )}
              {status === "error" && (
                <span className="text-red-400">
                  Something went wrong. Please try again, or email me directly.
                </span>
              )}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact