import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Get in <span className="text-cyan-400">Touch</span>
        </h2>
        <p className="mt-3 text-slate-400">
          Have a project, job opportunity, or just want to say hi? Send me a
          message!
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form
          action="mailto:your-email@example.com"
          method="POST"
          className="bg-slate-800 p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 font-medium transition"
          >
            Send Message
          </button>
        </form>

        {/* Optional: Direct Contact Info */}
        <div className="mt-8 text-center text-slate-400 space-y-2">
          <p>
            Email:{" "}
            <a
              href="mailto:your-email@example.com"
              className="text-cyan-400 hover:underline"
            >
              kartik20tyagi05@gmail.com
            </a>
          </p>
          <p>
            Phone: <span className="text-cyan-400">+91 9068786449</span>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/kartik-tyagi-76497a230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              linkedin.com/in/kartik-tyagi
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
