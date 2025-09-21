import React from "react";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-900 text-white py-20 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          My <span className="text-cyan-400">Achievements</span>
        </h2>
        <p className="mt-3 text-slate-400">
          Certificates, awards, and recognitions that highlight my skills
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition">
          <h3 className="text-xl font-bold mb-2">
            AWS Academy Graduate - Cloud Foundation
          </h3>
          <p className="text-slate-400 text-sm mb-2">AWS Academy, 2024</p>
          <a
            href="https://drive.google.com/file/d/1sQIj_9sRgU66bDkXboalYl5o1HgytLv1/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline text-sm"
          >
            View Certificate
          </a>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition">
          <h3 className="text-xl font-bold mb-2">HTML Completion Test</h3>
          <p className="text-slate-400 text-sm mb-2">Complete Coding, 2024</p>
          <a
            href="https://drive.google.com/file/d/1t0_cJYD6c0XDvD3XkUaNCe841iI0YuZ3/view"
            className="text-cyan-400 hover:underline text-sm"
          >
            View Certificate
          </a>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition">
          <h3 className="text-xl font-bold mb-2">JavaScript Completion Test</h3>
          <p className="text-slate-400 text-sm mb-2">Complete Coding, 2024</p>
          <a
            href="https://drive.google.com/file/d/1tEgyWJEYbJmNGrnyn3lOM7BGZ2p2JmLs/view"
            className="text-cyan-400 hover:underline text-sm"
          >
            View Certificate
          </a>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition">
          <h3 className="text-xl font-bold mb-2">React Completion Test</h3>
          <p className="text-slate-400 text-sm mb-2">Complete Coding, 2025</p>
          <a
            href="https://drive.google.com/file/d/1B5d4p5ynfXhEHVCy2OEodA7ObH4IrB02/view"
            className="text-cyan-400 hover:underline text-sm"
          >
            View Certificate
          </a>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition">
          <h3 className="text-xl font-bold mb-2">ESG Job Simulation</h3>
          <p className="text-slate-400 text-sm mb-2">Tata Forage, 2024</p>
          <a
            href="https://drive.google.com/file/d/1sFcf6rWmk9J1tk-lr0j5dLvOtQz6uZhO/view"
            className="text-cyan-400 hover:underline text-sm"
          >
            View Certificate
          </a>
        </div>

        {/* Add more achievements here */}
      </div>
    </section>
  );
}
