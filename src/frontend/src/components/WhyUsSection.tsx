import { Award, Clock, ShieldCheck, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";

const features = [
  {
    icon: Users,
    title: "Experienced Consultants",
    description:
      "15+ years of industry expertise across diverse sectors, from hospitality to technology.",
  },
  {
    icon: ShieldCheck,
    title: "SBA-Compliant Documents",
    description:
      "All deliverables meet SBA guidelines and lender requirements, reducing rejection risk.",
  },
  {
    icon: Award,
    title: "High Success Rate",
    description:
      "95% of our clients secure funding with our plans — a track record built over hundreds of engagements.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Professional plans delivered in as little as 5-7 business days without sacrificing quality.",
  },
];

export default function WhyUsSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="why-us"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-navy section-hidden ${inView ? "section-visible" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-2">
            The ProConsult Advantage
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
            Why Choose Us
          </h2>
          <div className="mt-4 w-12 h-1 bg-white/40 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className="flex gap-5 group"
              data-ocid={`why-us.item.${i + 1}`}
            >
              <div className="shrink-0 w-14 h-14 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <feat.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
