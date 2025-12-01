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
          <div className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition">
            <div className="overflow-hidden">
              <img
                src="/Cr8iveminds.jpeg"
                alt="Creativeminds.in"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">Cr8iveminds.in</h3>
              <p className="mt-2 text-slate-400 text-sm">
                Freelance Project for a digital Agency
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-slate-700 rounded-md">React</span>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <a
                  href="https://cr8tivemindsin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/justkartiktyagi/cr8tiveminds.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-600 hover:bg-slate-700 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
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
          <div className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition">
            <div className="overflow-hidden">
              <img
                src="/WeatherForcast.png"
                alt="Expense Tracker"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">Weather Forcast</h3>
              <p className="mt-2 text-slate-400 text-sm">
                A Python application with Tkinter that fetches real-time weather
                data using an API and displays it in a simple, user-friendly
                interface.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-slate-700 rounded-md">
                  Python
                </span>
                <span className="px-2 py-1 bg-slate-700 rounded-md">
                  Tkinter
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
                  Get App
                </a>
                <a
                  href="https://github.com/justkartiktyagi/weatherForcast.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-600 hover:bg-slate-700 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition">
            <div className="overflow-hidden">
              <img
                src="/scanyfi.jpeg"
                alt="Scanyfi"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">Expense Tracker</h3>
              <p className="mt-2 text-slate-400 text-sm">
                A web app to book MRI and Other Scans
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-slate-700 rounded-md">React</span>
                <span className="px-2 py-1 bg-slate-700 rounded-md">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-slate-700 rounded-md">
                  Express.js
                </span>
                <span className="px-2 py-1 bg-slate-700 rounded-md">
                  MongoDB
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <a
                  href="https://scanyfi-teal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/justkartiktyagi/ScanyfiFrontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-600 hover:bg-slate-700 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition">
            <div className="overflow-hidden">
              <img
                src="/qrscanner.png"
                alt="QR Generator"
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">Weather Forcast</h3>
              <p className="mt-2 text-slate-400 text-sm">
                A Python application that help to generate a qr code for any
                link provided to the code
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-slate-700 rounded-md">
                  QR Generator
                </span>
                <span className="px-2 py-1 bg-slate-700 rounded-md">
                  Pillow
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
                  Get App
                </a>
                <a
                  href="https://github.com/justkartiktyagi/QRGenerator"
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
