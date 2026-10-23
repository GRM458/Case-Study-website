import { useState } from "react";
import { features, productName } from "../../config/site";
import { SelectableItemTab } from "../ui/SelectableItemTab";

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const selectedFeature = features[activeFeature];

  return (
    <section
      className="bg-paper px-6 py-20 text-ink md:px-12 md:py-28 lg:px-[12vw] lg:py-32"
      id="features"
      aria-labelledby="feature-heading"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          {/* <SectionEyebrow number="04" label="Key features" inverted /> */}
          <h2
            id="feature-heading"
            className="section-title mt-8"
          >
            School activities,
            <br />
            <span className="text-cyan">organized in one place.</span>
          </h2>
        </div>
        <p className="section-copy max-w-85 pb-1 text-copy">
          The platform’s key features support attendance, study planning,
          classroom updates, assessment review, and school-parent communication.
        </p>
      </div>
      <div className="mt-14 grid border-t border-line lg:grid-cols-[.72fr_1.28fr]">
        <div
          className="flex flex-col border-b border-line py-3 lg:border-b-0 lg:border-r lg:py-6"
          role="tablist"
          aria-label="Platform features"
          aria-orientation="vertical"
        >
          {features.map((feature, index) => (
            <SelectableItemTab
              controls="feature-panel"
              id={`feature-tab-${index}`}
              key={feature.number}
              isSelected={activeFeature === index}
              number={feature.number}
              onSelect={() => setActiveFeature(index)}
              title={feature.shortTitle}
            />
          ))}
        </div>
        <div
          className="grid gap-9 py-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:py-10 lg:pl-12"
          role="tabpanel"
          id="feature-panel"
          aria-labelledby={`feature-tab-${activeFeature}`}
        >
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-semibold uppercase tracking-[1.7px] text-cyan">
              FEATURE {selectedFeature.number}
            </span>
            <h3 className="mt-5 font-sans text-3xl font-semibold leading-tight md:text-4xl">
              {selectedFeature.shortTitle}
            </h3>
            <p className="mt-4 text-sm leading-7 text-copy">
              {selectedFeature.description}
            </p>
            <a
              className="mt-auto inline-flex items-center gap-4 border-b border-violet pb-1 pt-7 text-xs font-semibold text-violet transition-colors hover:border-cyan hover:text-cyan"
              href="#audience"
            >
              Explore target audience <span aria-hidden="true">↗</span>
            </a>
          </div>
          <img
            className="w-full rounded-xl border border-white/10 object-cover"
            src={selectedFeature.imageUrl}
            alt={`${productName} feature: ${selectedFeature.shortTitle}`}
          />
        </div>
      </div>
    </section>
  );
}
