import {
  ArrowRight,
  BarChart2,
  DollarSign,
  FileText,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: FileText,
    title: "Business Plans",
    description:
      "Comprehensive, investor-ready business plans tailored to your industry and goals.",
  },
  {
    icon: TrendingUp,
    title: "Financial Projections",
    description:
      "Detailed 3-5 year financial models including income statements, balance sheets, and cash flow.",
  },
  {
    icon: DollarSign,
    title: "SBA Loan Assistance",
    description:
      "Expert preparation of SBA 7(a) and 504 loan packages with a high approval rate.",
  },
  {
    icon: BarChart2,
    title: "Market Research",
    description:
      "In-depth market analysis and competitive intelligence to validate your business concept.",
  },
  {
    icon: Lightbulb,
    title: "Startup Consulting",
    description:
      "End-to-end startup guidance from ideation to launch, including strategy and operational planning.",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-gray-section section-hidden ${inView ? "section-visible" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-body">
            Our Services
          </h2>
          <div className="mt-4 w-12 h-1 bg-navy mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="bg-white rounded-lg shadow-card border border-border p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-12 h-12 bg-[oklch(0.95_0.02_240)] rounded-lg flex items-center justify-center">
                <svc.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-lg font-bold text-body">{svc.title}</h3>
              <p className="text-sm text-muted-body leading-relaxed flex-1">
                {svc.description}
              </p>
              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-1.5 text-navy text-sm font-semibold hover:gap-3 transition-all duration-200 w-fit"
                data-ocid={`services.link.${i + 1}`}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
