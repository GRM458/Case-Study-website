import { useState } from "react";
import { features, productName } from "../../config/site";
import { SectionEyebrow } from "../ui/SectionEyebrow";

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const selectedFeature = features[activeFeature];

  return (
    <section
      className="bg-ink px-6 py-20 text-paper md:px-12 md:py-28 lg:px-[12vw] lg:py-32"
      id="features"
      aria-labelledby="feature-heading"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <SectionEyebrow number="04" label="Key features" inverted />
          <h2
            id="feature-heading"
            className="mt-8 font-sans text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl"
          >
            School activities,
            <br />
            <span className="text-cyan">organized in one place.</span>
          </h2>
        </div>
        <p className="max-w-85 pb-1 text-sm leading-7 text-paper/65">
          The platform’s key features support attendance, study planning,
          classroom updates, assessment review, and school-parent communication.
        </p>
      </div>
      <div className="mt-14 grid border-t border-white/20 lg:grid-cols-[.72fr_1.28fr]">
        <div
          className="flex flex-col border-b border-white/20 py-3 lg:border-b-0 lg:border-r lg:py-6"
          role="tablist"
          aria-label="Platform features"
          aria-orientation="vertical"
        >
          {features.map((feature, index) => (
            <button
              className={`cursor-pointer group flex min-h-16.25 items-center gap-4 border-b border-white/15 px-2 text-left text-sm transition-colors hover:text-lime ${activeFeature === index ? "text-lime" : "text-paper/70"}`}
              id={`feature-tab-${index}`}
              key={feature.number}
              type="button"
              role="tab"
              aria-selected={activeFeature === index}
              aria-controls="feature-panel"
              onClick={() => setActiveFeature(index)}
            >
              <span className="w-7 text-[10px] text-paper/40">
                {feature.number}
              </span>
              <span className="flex-1">{feature.shortTitle}</span>
              <span
                className={`transition-transform group-hover:translate-x-1 ${activeFeature === index ? "opacity-100" : "opacity-0"}`}
                aria-hidden="true"
              >
                ↗
              </span>
            </button>
          ))}
        </div>
        <div
          className="grid gap-9 py-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:py-10 lg:pl-12"
          role="tabpanel"
          id="feature-panel"
          aria-labelledby={`feature-tab-${activeFeature}`}
        >
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-bold uppercase tracking-[1.7px] text-cyan">
              FEATURE {selectedFeature.number}
            </span>
            <h3 className="mt-5 font-sans text-3xl font-semibold leading-tight md:text-4xl">
              {selectedFeature.shortTitle}
            </h3>
            <p className="mt-4 text-sm leading-7 text-paper/65">
              {selectedFeature.description}
            </p>
            <a
              className="mt-auto inline-flex items-center gap-4 border-b border-violet pb-1 pt-7 text-xs font-semibold text-violet"
              href="#audience"
            >
              Explore target audience <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div
            className="flex min-h-64 flex-col justify-between border border-white/10 bg-[#111725] p-6 md:p-8"
            aria-label={`Feature summary: ${selectedFeature.shortTitle}`}
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-muted">
                {productName} / KEY FEATURE
              </span>
              <h4 className="mt-5 max-w-md font-sans text-2xl font-semibold leading-snug text-ink">
                {selectedFeature.shortTitle}
              </h4>
              <p className="mt-4 max-w-lg text-sm leading-7 text-copy">
                {selectedFeature.description}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-4 text-xs text-muted">
              <span className="size-2 rounded-full bg-cyan" />
              Part of the integrated school management system
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
