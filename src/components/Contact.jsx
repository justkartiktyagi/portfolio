import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_9w7ls0k", // 🔹 replace with your Service ID
        "template_r8nmmss", // 🔹 replace with your Template ID
        form.current,
        "0UXeMjU0T4fizEZ-6" // 🔹 replace with your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-16 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-slate-300 mb-10">
          Have a project in mind or just want to say hi? Drop me a message 👇
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-cyan-400 outline-none"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-cyan-400 outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-cyan-400 outline-none"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 hover:opacity-90 transition font-medium"
        >
          Send Message
        </button>

        {status && <p className="mt-4 text-center text-sm">{status}</p>}
      </form>
    </section>
  );
}
