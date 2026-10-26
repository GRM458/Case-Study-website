import { useState } from "react";
import { audiences } from "../../config/site";

export function AudienceSection() {
  const [activeAudience, setActiveAudience] = useState(0);
  const selectedAudience = audiences[activeAudience];

  return (
    <section
      className="border-y border-white/5 bg-[radial-gradient(ellipse_at_20%_50%,rgba(35,106,139,.13),transparent_45%)] px-6 py-14 md:px-12 md:py-18 lg:px-[12vw] lg:py-22"
      id="audience"
      aria-labelledby="audience-heading"
    >
      {/* <SectionEyebrow number="05" label="Target audience" /> */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            id="audience-heading"
            className="section-title"
          >
            Targeted to school communities.
          </h2>
          <p className="section-copy mt-5 text-copy">
            BCCG is primarily designed for schools seeking a digital solution to
            organize educational activities and improve communication with
            parents.
          </p>
        </div>


{/* Audience tabs Right side */}

        <div>
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Explore BCCG users"
          >
            {audiences.map((audience, index) => (
              <button
                className={`rounded-xl min-h-10 border px-4 text-xs font-semibold transition-colors cursor-pointer ${activeAudience === index ? "border-cyan bg-cyan/10 text-cyan" : "border-white/10 bg-[#0e1220] text-copy hover:border-white/30"}`}
                id={`audience-tab-${index}`}
                key={audience.name}
                type="button"
                role="tab"
                aria-selected={activeAudience === index}
                aria-controls="audience-panel"
                onClick={() => setActiveAudience(index)}
              >
                {audience.name}
              </button>
            ))}
          </div>
          <div
            className="mt-6 flex min-h-36 items-start gap-5 border-t border-white/10 pt-6"
            role="tabpanel"
            id="audience-panel"
            aria-labelledby={`audience-tab-${activeAudience}`}
          >
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-violet/50 bg-violet/10 text-xs font-semibold text-violet">
              {selectedAudience.initials}
            </span>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-muted">
                Platform user
              </span>
              <h3 className="mt-2 font-sans text-xl font-semibold">
                {selectedAudience.name}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-copy">
                BCCG provides role-based access for{" "}
                {selectedAudience.name.toLowerCase()} as part of school-specific
                management requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
