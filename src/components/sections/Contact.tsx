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
      // Keep full error in devtools for quick debugging of EmailJS responses.
      console.error("EmailJS send failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <RevealOnScroll>
        <div className="layout">
          <h2>Contact</h2>
          <article className="card">
            <h3>Send a message</h3>
            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(event) => onChange("name", event.target.value)}
              />
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(event) => onChange("email", event.target.value)}
              />
              <textarea
                rows={5}
                placeholder="Your message"
                value={formData.message}
                onChange={(event) => onChange("message", event.target.value)}
              />
              <button className="btn primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {feedback ? <p>{feedback}</p> : null}
            </form>
          </article>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
