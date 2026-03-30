import { useInView } from "../hooks/useInView";

export default function CTABanner() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-gradient-to-r from-[oklch(0.25_0.09_240)] via-[oklch(0.33_0.09_240)] to-[oklch(0.28_0.08_250)] section-hidden ${inView ? "section-visible" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide mb-4">
          Get Your Business Plan Today
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
          Join hundreds of businesses that secured funding with our expert
          plans.
        </p>
        <button
          type="button"
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="border-2 border-white text-white font-semibold px-10 py-3.5 rounded hover:bg-white hover:text-navy transition-all duration-200 text-sm tracking-wide"
          data-ocid="cta.primary_button"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
