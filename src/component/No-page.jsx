import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";



export default function NoPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white overflow-hidden">
    
      <div className="pointer-events-none absolute -top-24 -right-32 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(transparent,black)] opacity-40" style={{
        backgroundImage:
          "radial-gradient(currentColor 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        color: "#1f2937", 
      }} />

      <main className="relative z-10 w-full px-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur shadow-xl"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <motion.span
              initial={{ rotate: -8, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              aria-hidden
            >
              <Sparkles className="h-7 w-7" />
            </motion.span>
          </div>

          <h1 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              We’re brewing something magical
            </span>
            <span className="text-white/70">…</span>
          </h1>

          <p className="mt-3 text-base md:text-lg text-white/70 leading-relaxed">
            Our workshop is currently under maintenance. The cauldrons are bubbling,
            the code is shimmering, and a fresh experience is on the way. Thanks for
            your patience while we sprinkle the last bits of stardust.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition shadow-sm"
            >
              Back to Home
            </a>
            <span className="text-xs text-white/50">ETA: soon™</span>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="mt-4 text-xs text-white/50">
            If you need urgent help, reach us at <span className="text-white/70">support@example.com</span>.
          </p>
        </motion.section>
      </main>

     
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/70"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, scale: 0 }}
            animate={{
              y: ["0%", "-10%", "0%"],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </motion.div>
    </div>
  );
}
