import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-slate-900 text-white py-20 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            A showcase of the work I’ve done using MERN and Python.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Expense Tracker Project */}
          <div className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition">
            <div className="overflow-hidden">
              <img
                src="/ExpenseTracker.png"
                alt="Expense Tracker"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">Expense Tracker</h3>
              <p className="mt-2 text-slate-400 text-sm">
                A web app to track and manage your expenses with ease 💰
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-slate-700 rounded-md">React</span>
                <span className="px-2 py-1 bg-slate-700 rounded-md">
                  Node.js
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <a
                  href="https://expense-tracker-theta-navy-49.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/justkartiktyagi/Expense-Tracker-frontend.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-600 hover:bg-slate-700 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Add more projects here later */}
        </div>
      </div>
    </section>
  );
}
