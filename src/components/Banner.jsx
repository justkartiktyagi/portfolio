import React from "react";
import { motion } from "framer-motion";

/**
 * Portfolio Banner Component (Tailwind + React)
 *
 * Usage:
 * <Banner
 *   name="Kartik Tyagi"
 *   role="Python & MERN Developer"
 *   tagline="I build interactive websites & delightful UI."
 *   avatar="/images/me.jpg"
 *   ctaPrimary={{ label: 'See Work', href: '#projects' }}
 *   ctaSecondary={{ label: 'Contact', href: '#contact' }}
 * />
 */

export default function Banner({
  name = "Kartik Tyagi",
  role = "Python & MERN Developer",
  tagline = "I'm a student developer passionate about crafting digital experiences. I love building intuitive web apps, exploring new technologies, and turning creative ideas into accessible tools.",
  avatar = "/photo.jpg",
  ctaPrimary = { label: "See my work", href: "#projects" },
  ctaSecondary = { label: "Contact me", href: "#contact" },
}) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative gradient / blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/20 to-rose-400/10 blur-3xl transform rotate-12" />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/20 via-lime-400/10 to-violet-400/10 blur-3xl transform -rotate-6" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white"
            >
              Hi, I’m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-cyan-200">
                {name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg sm:text-xl text-slate-200 max-w-2xl"
            >
              <strong className="text-white">{role}</strong> — {tagline}
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href={ctaPrimary.href}
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                className="inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-3 text-sm font-medium text-white hover:scale-[1.02] hover:bg-white/12 transition"
              >
                {ctaPrimary.label}
                <svg
                  className="w-4 h-4 opacity-80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>

              <motion.a
                href={ctaSecondary.href}
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.45 }}
                className="inline-flex items-center gap-3 rounded-2xl bg-transparent px-5 py-3 text-sm font-medium text-white/90 border border-white/10 hover:bg-white/5 transition"
              >
                {ctaSecondary.label}
              </motion.a>
            </div>

            {/* Feature list */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl text-slate-300"
            >
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/6">
                  💻
                </span>
                <span>
                  MERN Stack Development (MongoDB, Express, React, Node.js)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/6">
                  🐍
                </span>
                <span>Python Programming (Backend, Scripting, Automation)</span>
              </li>
            </motion.ul>
          </div>

          {/* Right: avatar / mock canvas */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-full max-w-[320px]"
            >
              <div className="rounded-2xl p-1 bg-gradient-to-tr from-white/10 via-white/6 to-white/4 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-b from-slate-800/80 to-slate-900/60 p-6">
                  {/* Avatar or placeholder */}
                  {avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={avatar}
                      alt={`${name} avatar`}
                      className="w-40 h-40 object-cover rounded-full mx-auto ring-1 ring-white/10"
                    />
                  ) : (
                    <div className="w-40 h-40 rounded-full mx-auto ring-1 ring-white/10 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-cyan-500 text-white font-semibold text-lg">
                      {name.split(" ")[0]}
                    </div>
                  )}

                  <div className="mt-4 text-center">
                    <div className="text-sm font-semibold text-white">
                      {name}
                    </div>
                    <div className="text-xs text-slate-300">{role}</div>
                  </div>

                  {/* Clickable project card */}
                  <a
                    href="https://cr8tivemindsin.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 bg-white/3 rounded-md p-3 text-xs text-slate-200 hover:scale-[1.02] hover:shadow-lg hover:bg-white/5 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Cr8iveminds.in</span>
                      <span className="text-[11px] text-green-400">Live</span>
                    </div>
                    <div className="mt-2 text-[13px] text-slate-300">
                      Freelance project for a digital Agency
                    </div>
                  </a>
                </div>
              </div>

              {/* subtle floating glow */}
              <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-20 rounded-full blur-3xl bg-gradient-to-r from-indigo-500/20 via-cyan-400/10 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Decorative SVG wave */}
        <div className="mt-12">
          <svg
            className="w-full h-12 md:h-16"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32 C120,96 360,0 720,48 C1080,96 1320,24 1440,64 L1440 0 L0 0 Z"
              fill="rgba(255,255,255,0.02)"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
