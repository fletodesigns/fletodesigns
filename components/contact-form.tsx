"use client"

import { useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

const topics = [
  "General",
  "Partnership",
  "Press",
  "Careers",
  "Support",
] as const

export function ContactForm() {
  const [topic, setTopic] = useState<(typeof topics)[number]>("General")
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setPending(true)
        setTimeout(() => {
          setPending(false)
          setSubmitted(true)
        }, 700)
      }}
      className="space-y-6"
    >
      <div>
        <label className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Topic
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              className={
                "rounded-full border px-3 py-1 text-xs transition-colors " +
                (topic === t
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground")
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" placeholder="Ada Lovelace" required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="ada@example.com"
          required
        />
      </div>

      <Field
        label="Company"
        name="company"
        placeholder="Optional"
      />

      <div>
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us a bit about what you're working on…"
          className="mt-3 w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition"
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          We typically reply within two business days.
        </p>
        <button
          type="submit"
          disabled={pending || submitted}
          className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-shadow hover:glow-primary disabled:opacity-70"
        >
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.span
                key="ok"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="inline-flex items-center gap-2"
              >
                <Check className="h-4 w-4" />
                Message sent
              </motion.span>
            ) : pending ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Sending…
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="inline-flex items-center gap-2"
              >
                Send message
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition"
      />
    </div>
  )
}
