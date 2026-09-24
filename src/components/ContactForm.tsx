"use client";

import { useState, useEffect, type SubmitEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!status) return;

    const timeout = setTimeout(() => {
      setStatus("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [status]);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("Something went wrong. Please try again.");
        return;
      }

      setStatus("Message sent successfully!");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-grey-900">
          Your Name <span className="text-orange-800">*</span>
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-grey-400 px-4 py-3 text-sm outline-none transition-colors focus:border-orange-800"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-grey-900">
          Your Email <span className="text-orange-800">*</span>
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-grey-400 px-4 py-3 text-sm outline-none transition-colors focus:border-orange-800"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm text-grey-900">
          Subject
        </label>

        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border border-grey-400 px-4 py-3 text-sm outline-none transition-colors focus:border-orange-800"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-grey-900">
          Your Message <span className="text-orange-800">*</span>
        </label>

        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={7}
          className="w-full resize-none border border-grey-400 px-4 py-3 text-sm outline-none transition-colors focus:border-orange-800"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded bg-orange-800 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-grey-800"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      <p
        className={`mt-4 min-h-5 text-sm text-grey-700 ${
          status ? "visible" : "invisible"
        }`}
      >
        {status || "\u00A0"}
      </p>
    </form>
  );
}
