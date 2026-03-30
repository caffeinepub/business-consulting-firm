import { motion } from "motion/react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-consulting.dim_1920x1080.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.07_240/0.92)] via-[oklch(0.25_0.09_240/0.85)] to-[oklch(0.20_0.06_240/0.80)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Business Consulting Experts
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
            Professional Business Plans
            <br />
            <span className="text-[oklch(0.78_0.08_210)]">
              &nbsp;That Get Funded
            </span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            SBA-ready business plans, financial projections, and expert
            consulting to help your business secure funding and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="bg-navy text-white font-semibold px-8 py-3.5 rounded hover:bg-navy-dark transition-colors duration-200 text-sm tracking-wide"
              data-ocid="hero.primary_button"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded hover:bg-white hover:text-navy transition-all duration-200 text-sm tracking-wide"
              data-ocid="hero.secondary_button"
            >
              Request a Quote
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto border-t border-white/20 pt-10"
        >
          {[
            { value: "500+", label: "Plans Funded" },
            { value: "95%", label: "Success Rate" },
            { value: "15+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs sm:text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
