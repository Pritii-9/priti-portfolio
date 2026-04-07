import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import RevealOnScroll from "../RevealOnScroll";
import type { ContactPayload } from "../../types/portfolio";

const initialState: ContactPayload = {
  name: "",
  email: "",
  message: ""
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactPayload>(initialState);
  const [feedback, setFeedback] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (field: keyof ContactPayload, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          name: formData.name,
          reply_to: formData.email,
          email: formData.email,
          message: formData.message
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      if (result.status === 200) {
        setFeedback("Message sent successfully.");
        setFormData(initialState);
      } else {
        setFeedback("Failed to send message. Please try again.");
      }
    } catch (error) {
      const message =
        typeof error === "object" && error && "text" in error
          ? String(error.text)
          : "Failed to send message. Please try again.";
      setFeedback(message);
      console.error("EmailJS send failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[5.5rem] pb-[2.5rem] md:pt-[4.8rem]">
      <RevealOnScroll>
        <div className="w-[min(1120px,92vw)] mx-auto">
          <h2 className="m-0 mb-[1.2rem] [font-size:clamp(1.55rem,2.8vw,2.25rem)]">Contact</h2>
          <article className="relative overflow-hidden rounded-[14px] p-[1.5rem] bg-gradient-to-br from-[#0c1a3a] to-[#0f2847] border border-[rgba(59,130,246,0.25)]">
            {/* Decorative gradient orb */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-blue-400 blur-3xl opacity-10" />

            <div className="relative z-10">
              <h3 className="m-0 mb-4 text-[1.15rem] font-semibold text-[#e2e8f0]">Send a message</h3>
              <form onSubmit={handleSubmit} className="grid gap-[0.8rem]">
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(event) => onChange("name", event.target.value)}
                  className="w-full rounded-[10px] border border-[rgba(59,130,246,0.25)] bg-[rgba(15,23,42,0.7)] text-[#e2e8f0] py-[0.75rem] px-[0.9rem] placeholder-[#64748b] focus:outline-none focus:border-[rgba(59,130,246,0.6)] focus:ring-1 focus:ring-[rgba(59,130,246,0.3)] transition-all duration-200"
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(event) => onChange("email", event.target.value)}
                  className="w-full rounded-[10px] border border-[rgba(59,130,246,0.25)] bg-[rgba(15,23,42,0.7)] text-[#e2e8f0] py-[0.75rem] px-[0.9rem] placeholder-[#64748b] focus:outline-none focus:border-[rgba(59,130,246,0.6)] focus:ring-1 focus:ring-[rgba(59,130,246,0.3)] transition-all duration-200"
                />
                <textarea
                  rows={5}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(event) => onChange("message", event.target.value)}
                  className="w-full rounded-[10px] border border-[rgba(59,130,246,0.25)] bg-[rgba(15,23,42,0.7)] text-[#e2e8f0] py-[0.75rem] px-[0.9rem] placeholder-[#64748b] focus:outline-none focus:border-[rgba(59,130,246,0.6)] focus:ring-1 focus:ring-[rgba(59,130,246,0.3)] transition-all duration-200 resize-none"
                />
                <button
                  className="rounded-[10px] py-[0.8rem] px-[1.2rem] font-semibold transition-all duration-200 hover:-translate-y-0.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500 hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {feedback ? (
                  <p className={`text-[0.9rem] ${feedback.includes("success") ? "text-green-400" : "text-red-400"}`}>{feedback}</p>
                ) : null}
              </form>
            </div>
          </article>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;