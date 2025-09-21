import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-slate-900 text-slate-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          About Me
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-4">
          Hi, I’m <strong className="text-indigo-400">Kartik Tyagi</strong>, a
          dedicated <strong>MERN Developer</strong> with strong expertise in
          building full-stack web applications. I also have a solid command over
          Python and its popular libraries for automation, data processing, and
          backend tasks.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed">
          I focus on creating efficient, scalable, and maintainable code. From
          dynamic web applications using{" "}
          <strong>React, Node.js, MongoDB, and Express</strong> to powerful
          Python scripts leveraging libraries like{" "}
          <strong>Pandas, NumPy, and Flask</strong>, I strive to deliver
          high-quality solutions that solve real-world problems.
        </p>
      </div>
    </section>
  );
}
