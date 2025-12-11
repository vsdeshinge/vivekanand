// src/pages/Contact.jsx
import { useState } from "react";
import { db } from "../firebase";
import { ref, push, set } from "firebase/database";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const contactRef = ref(db, "contacts");
      const newContactRef = push(contactRef);

      await set(newContactRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (err) {
      console.error("Error saving contact form:", err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-10 md:py-14 md:px-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row">
        {/* LEFT: Intro + contact info */}
        <div className="md:w-5/12 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Contact
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
              Let&apos;s{" "}
              <span className="text-brand-gradient">build something</span>{" "}
              together.
            </h1>
            <p className="mt-4 text-sm text-slate-300 md:text-base">
              Whether you need a website, a campaign, motion visuals, or a full
              exhibition experience, tell me what you&apos;re planning and
              I&apos;ll get back with ideas, timelines and next steps.
            </p>
          </div>

          {/* Quick info */}
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Direct contact
            </p>

            <div className="space-y-1 text-sm text-slate-200">
              <p>
                <span className="text-slate-400">Contact No:</span>{" "}
                <a
                  href="tel:+916361588219"
                  className="font-medium text-slate-100 hover:text-slate-50 hover:underline"
                >
                  +91 6361588219
                </a>
              </p>

              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <a
                  href="mailto:maharshivivekanands@gmail.com"
                  className="font-medium text-slate-100 hover:text-slate-50 hover:underline"
                >
                  maharshivivekanands@gmail.com
                </a>
              </p>

              <p>
                <span className="text-slate-400">Based in:</span>{" "}
                <span className="font-medium text-slate-100">
                  Bengaluru, India
                </span>
              </p>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              Usually reply within{" "}
              <span className="text-slate-200">24–48 hours</span> on weekdays.
            </p>
          </div>

          {/* Optional social links */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Social / portfolio
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300">
              <a
                href="#"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-slate-500"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-slate-500"
              >
                Behance / Dribbble
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-slate-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="md:w-7/12">
          <form
            className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/30"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Maharshi"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="project-type"
                className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
              >
                What do you need help with?
              </label>
              <select
                id="project-type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              >
                <option value="">Select one</option>
                <option value="web">Website / Web App</option>
                <option value="design">Branding / Design</option>
                <option value="motion">Motion / Video</option>
                <option value="events">Event / Exhibition</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Approx. budget (optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                >
                  <option value="">Not sure yet</option>
                  <option value="low">₹25k – ₹75k</option>
                  <option value="mid">₹75k – ₹2L</option>
                  <option value="high">₹2L+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                >
                  <option value="">Flexible</option>
                  <option value="soon">ASAP / next 2 weeks</option>
                  <option value="month">Within 1–2 months</option>
                  <option value="later">Just exploring</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a bit about your project, goals, and any links or references you have…"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-brand-gradient px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/40 transition hover:shadow-orange-400/60 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Send message"}
              </button>
              <p className="text-xs text-slate-400">
                By sending this, you&apos;re okay with me replying over email or
                WhatsApp for follow-ups.
              </p>
            </div>

            {status === "success" && (
              <p className="text-xs text-emerald-400">
                Thank you! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-400">
                Something went wrong. Please try again in a bit.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
