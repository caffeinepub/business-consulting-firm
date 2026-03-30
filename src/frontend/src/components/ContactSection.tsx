import { CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

export default function ContactSection() {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-dark-section section-hidden ${inView ? "section-visible" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
            Reach Out
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
            Contact Us
          </h2>
          <div className="mt-4 w-12 h-1 bg-white/30 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full gap-4 text-center py-12"
                data-ocid="contact.success_state"
              >
                <CheckCircle2 className="w-16 h-16 text-green-400" />
                <h3 className="text-white text-xl font-bold">Thank you!</h3>
                <p className="text-white/70">We'll be in touch shortly.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="mt-2 text-sm text-white/50 underline hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                data-ocid="contact.modal"
              >
                <div>
                  <label
                    className="block text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white/50 text-sm transition-colors"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    className="block text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white/50 text-sm transition-colors"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    className="block text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(800) 555-0199"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white/50 text-sm transition-colors"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    className="block text-white/70 text-xs font-semibold uppercase tracking-wide mb-1.5"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-white/50 text-sm transition-colors resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-navy text-white font-semibold py-3 rounded hover:bg-navy-dark transition-colors text-sm tracking-wide"
                  data-ocid="contact.submit_button"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-8 justify-center">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">
                Get in Touch
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Ready to get your business plan funded? Reach out today and one
                of our expert consultants will get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide font-semibold mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+18005550199"
                    className="text-white font-semibold hover:text-white/80 transition-colors"
                  >
                    (800) 555-0199
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide font-semibold mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:info@proconsult.com"
                    className="text-white font-semibold hover:text-white/80 transition-colors"
                  >
                    info@proconsult.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide font-semibold mb-0.5">
                    Business Hours
                  </p>
                  <p className="text-white font-semibold">
                    Mon–Fri, 9am–6pm EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
