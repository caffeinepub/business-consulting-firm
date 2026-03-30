import { CheckCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";

const highlights = [
  "Over 500 funded business plans",
  "Expert SBA loan specialists",
  "Industry-specific financial modeling",
  "Dedicated consultant for every client",
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-white section-hidden ${inView ? "section-visible" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-body mb-6">
              About Us
            </h2>
            <div className="w-12 h-1 bg-navy rounded-full mb-8" />
            <p className="text-muted-body leading-relaxed mb-6">
              We are a team of experienced business consultants dedicated to
              helping entrepreneurs and established businesses secure funding
              and achieve their goals. With over 15 years of combined
              experience, we have helped hundreds of businesses obtain SBA
              loans, attract investors, and build sustainable growth strategies.
            </p>
            <p className="text-muted-body leading-relaxed mb-8">
              Our proven process ensures every deliverable meets lender and
              investor standards — giving you the confidence to pursue funding
              with a plan that truly represents your vision.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 text-sm text-body"
                >
                  <CheckCircle className="w-5 h-5 text-navy shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-navy text-white font-semibold px-8 py-3 rounded hover:bg-navy-dark transition-colors text-sm"
              data-ocid="about.primary_button"
            >
              Work With Us
            </button>
          </div>

          <div className="relative">
            <div className="bg-[oklch(0.33_0.09_240)] rounded-lg p-10 text-white">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Business Plans" },
                  { value: "95%", label: "Funding Rate" },
                  { value: "15+", label: "Years Experience" },
                  { value: "48h", label: "Avg. First Draft" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 rounded-lg p-5 text-center"
                  >
                    <div className="text-3xl font-extrabold">{stat.value}</div>
                    <div className="text-white/70 text-xs mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-white/80 text-sm leading-relaxed italic">
                  "Our mission is simple: help you secure the funding you need
                  with a plan that accurately reflects your business potential."
                </p>
                <p className="text-white/60 text-xs mt-2">
                  — ProConsult Founding Team
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[oklch(0.78_0.08_210/0.3)] rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
