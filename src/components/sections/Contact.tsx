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
        setFeedback("Message sent successfully!");
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
    <section id="contact" className="relative py-[6rem] pb-[3rem]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/3 rounded-[50%] blur-[120px] pointer-events-none" />
      
      <RevealOnScroll>
        <div className="relative z-10 w-[min(1120px,92vw)] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full border border-brand/20 bg-brand/5">
              <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-sm font-ibm-plex-mono font-medium text-brand tracking-wider uppercase">Get in Touch</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-black text-text-main tracking-tight mb-3">
              Let's Work Together
            </h2>
            <p className="text-text-muted max-w-[550px] mx-auto text-[1.05rem] leading-relaxed">
              Have a project in mind or just want to chat? Feel free to reach out. 
              I'm always open to discussing new opportunities and collaborations.
            </p>
          </div>

          {/* Contact Form Card */}
          <article className="relative border border-surface-border/50 bg-surface/60 backdrop-blur-xl rounded-[24px] p-6 sm:p-8 md:p-10">
            {/* Subtle inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.02] via-transparent to-transparent pointer-events-none rounded-[24px]" />
            
            <div className="relative z-10">
              {/* Form Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-[12px] border border-surface-border/40 bg-white/5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.997 12zm0 0h12.007" />
                  </svg>
                </div>
                <div>
                  <h3 className="m-0 text-[1.3rem] font-bold text-text-main">Send a message</h3>
                  <p className="text-sm text-text-muted m-0">I'll get back to you within 24 hours</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="grid gap-5 w-full">
                {/* Name Input */}
                <div className="relative group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-subtle transition-colors duration-300 group-focus-within:text-brand">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(event) => onChange("name", event.target.value)}
                    required
                    className="w-full rounded-[12px] border border-surface-border/40 bg-white/5 text-text-main py-[0.9rem] pl-11 pr-4 placeholder-text-subtle focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-subtle transition-colors duration-300 group-focus-within:text-brand">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(event) => onChange("email", event.target.value)}
                    required
                    className="w-full rounded-[12px] border border-surface-border/40 bg-white/5 text-text-main py-[0.9rem] pl-11 pr-4 placeholder-text-subtle focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <div className="absolute left-3.5 top-3.5 text-text-subtle transition-colors duration-300 group-focus-within:text-brand">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <textarea
                    rows={5}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(event) => onChange("message", event.target.value)}
                    required
                    className="w-full rounded-[12px] border border-surface-border/40 bg-white/5 text-text-main py-[0.9rem] pl-11 pr-4 placeholder-text-subtle focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 focus:bg-white/10 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  className="group/btn relative rounded-[14px] py-[1rem] px-[2rem] font-bold text-[0.95rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-brand text-bg overflow-hidden disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.997 12zm0 0h12.007" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                {/* Feedback */}
                {feedback ? (
                  <div className={`flex items-center gap-2 p-3 rounded-[10px] text-sm font-medium ${
                    feedback.includes("success") 
                      ? "bg-ok/10 border border-ok/20 text-ok" 
                      : "bg-red-400/10 border border-red-400/20 text-red-400"
                  }`}>
                    {feedback.includes("success") ? (
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    )}
                    {feedback}
                  </div>
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