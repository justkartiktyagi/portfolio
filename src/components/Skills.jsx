import React from "react";

export default function Skills() {
  const skills = [
    { name: "MongoDB", color: "bg-green-600" },
    { name: "Express.js", color: "bg-gray-600" },
    { name: "React", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Python", color: "bg-yellow-400" },
    { name: "Pandas", color: "bg-indigo-500" },
    { name: "NumPy", color: "bg-purple-500" },
    { name: "TailwindCSS", color: "bg-teal-400" },
    { name: "BootStrap ", color: "bg-purple-500" },
    { name: "JavaScript", color: "bg-yellow-300" },
    { name: "C", color: "bg-gray-600" },
  ];

  return (
    <section id="skills" className="bg-slate-800 text-slate-200 py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`rounded-lg p-4 flex items-center justify-center font-medium ${skill.color} text-white shadow-md hover:scale-105 transform transition`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
