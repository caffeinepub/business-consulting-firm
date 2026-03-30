import { Quote, Star } from "lucide-react";
import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    quote:
      "The business plan they created was outstanding — completely SBA-ready and helped us secure a $500K loan.",
    name: "Michael T.",
    role: "Restaurant Owner",
    initials: "MT",
  },
  {
    quote:
      "They exceeded every expectation. The financial projections were detailed, realistic, and exactly what our investors needed.",
    name: "Sarah K.",
    role: "Tech Startup Founder",
    initials: "SK",
  },
  {
    quote:
      "Best investment I've made for my business. Professional, thorough, and delivered ahead of schedule.",
    name: "James R.",
    role: "Retail Entrepreneur",
    initials: "JR",
  },
  {
    quote:
      "Their SBA loan assistance was invaluable. The team knew exactly what lenders want to see.",
    name: "Linda M.",
    role: "Healthcare Practice Owner",
    initials: "LM",
  },
];

const STARS = [1, 2, 3, 4, 5];

export default function TestimonialsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-gray-section section-hidden ${inView ? "section-visible" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
            Client Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-body">
            What Our Clients Say
          </h2>
          <div className="mt-4 w-12 h-1 bg-navy mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-lg shadow-card border border-border p-7 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <Quote className="w-8 h-8 text-navy/20" />
              <p className="text-body text-sm leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-1 mb-1">
                {STARS.map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-body text-sm">{t.name}</p>
                  <p className="text-muted-body text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
