import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
          My Portfolio
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a
            href="#about"
            className="hover:text-cyan-400 transition duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-cyan-400 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-cyan-400 transition duration-200"
          >
            Skills
          </a>
          <a
            href="#achievements"
            className="hover:text-cyan-400 transition duration-200"
          >
            Achievements
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-200"
          >
            Contact
          </a>{" "}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          {isOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 text-white px-6 py-4 space-y-4">
          <a href="#about" className="block hover:text-cyan-400 transition">
            About
          </a>
          <a href="#projects" className="block hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#skills" className="block hover:text-cyan-400 transition">
            Skills
          </a>
          <a
            href="#achievements"
            className="block hover:text-cyan-400 transition"
          >
            Achievements
          </a>
          <a href="#contact" className="block hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
