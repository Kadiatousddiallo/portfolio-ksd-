"use client";

import { useState } from "react";
import { Mail, Phone, Link2, Code2, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "+221 XX XXX XX XX", href: "tel:+221XXXXXXXXX" },
  { icon: Mail, label: "kadiatou.diallo@email.com", href: "mailto:kadiatou.diallo@email.com" },
  { icon: Link2, label: "LinkedIn", href: "https://linkedin.com/in/ton-profil" },
  { icon: Code2, label: "GitHub", href: "https://github.com/ton-pseudo" },
  { icon: MapPin, label: "Dakar, Sénégal", href: "" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const body = `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailtoUrl = `mailto:kadiatou.diallo@email.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Coordonnées */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                  <Icon size={18} className="text-blue-400" />
                  <span>{item.label}</span>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block hover:text-blue-400 transition-colors"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors font-medium text-white"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
