import { objectives, productName } from "../../config/site";

export function ObjectivesSection() {
  return (
    <section
      className="border-y border-white/5 bg-[#0e1220] px-6 py-14 md:px-12 md:py-18 lg:px-[12vw] lg:py-22"
      id="objectives"
      aria-labelledby="objectives-heading"
    >
      {/* <SectionEyebrow number="03" label="Objectives" /> */}
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="objectives-heading" className="section-title">
            What <span className="text-cyan">{productName}</span> is designed to
            do.
          </h2>
          <p className="section-copy mt-5 max-w-md text-copy">
            A centralized platform to connect school activities, student
            progress, and family communication.
          </p>
        </div>
        <ol className="border-t border-white/10">
          {objectives.map((objective, index) => (
            <li
              className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/10 py-5 md:py-6"
              key={objective}
            >
              <span className="pt-1 font-mono text-xs text-cyan">
                0{index + 1}
              </span>
              <p className="section-copy text-ink">{objective}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
