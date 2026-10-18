import { SectionEyebrow } from "../ui/SectionEyebrow";
import { useState } from "react";

export function ProblemSection() {
  const provides = [
    {
      title: "Class topics",
      para: "Parents are often unaware of the specific topics covered in class.",
    },
    {
      title: "Attendance",
      para: "Limited visibility into their children's attendance records.",
    },
    {
      title: "Test results",
      para: "Lack of timely access to test scores and performance feedback.",
    },
    {
      title: "Academic weaknesses",
      para: "Insufficient information about their children's academic challenges.",
    },
  ];

  return (
    <section
      className="px-6 py-20 md:px-12 md:py-28 lg:px-[12vw] lg:py-32"
      id="problem"
      aria-labelledby="problem-heading"
    >
      <SectionEyebrow number="02" label="Problem statement" />

      <div className="mt-9 grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <h2
          id="problem-heading"
          className="font-sans text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl"
        >
          A gap between classroom learning and{" "}
          <span className="bg-linear-to-r from-cyan to-violet bg-clip-text text-transparent">
            parent awareness.
          </span>
        </h2>
        <div className="space-y-5 text-base leading-8 text-copy md:text-lg">
          <p>
            Traditional school management and communication methods can create
            gaps between classroom learning and parental awareness.
          </p>
          <p>
            Parents may have limited visibility into the topics covered in
            class, their children’s attendance, test results, and academic
            weaknesses.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-4">
        {provides.map((item, index) => (
          <ProblemCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}



function ProblemCard({
  item,
  index,
}: {
  item: { title: string; para: string };
  index: number;
}) {
  const [isPinnedOpen, setIsPinnedOpen] = useState(false);

  const detailsId = `problem-card-details-${index}`;

  return (




    <div
      className={`group relative ${
        isPinnedOpen ? "z-20" : "z-0 hover:z-20 focus-within:z-20 cursor-pointer"
      }`}
    >



      <button
        type="button"
        aria-expanded={isPinnedOpen}
        aria-controls={detailsId}
        // onClick={() => setIsPinnedOpen((open) => !open)}
        className={`rounded-xl flex min-h-20 w-full cursor-pointer flex-col items-start justify-center border bg-white/[.02] p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan sm:p-4 ${
          isPinnedOpen
            ? "border-cyan/40 bg-white/[.04]"
            : "border-white/10 hover:border-cyan/40 hover:bg-white/[.04]"
        }`}
      >
        <span className="font-mono text-xs text-cyan">0{index + 1}</span>
        <span className="mt-2 text-base font-semibold text-ink sm:text-lg">
          {item.title}
        </span>
      </button>


      {/* Droup info */}
      <div
        id={detailsId}
        className={`rounded-2xl invisible absolute left-0 top-[calc(100%+0.5rem)] z-30 w-full translate-y-1 border border-white/10 bg-[#111725] p-3 text-sm leading-5 text-copy opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:p-4 ${
          isPinnedOpen ? "visible translate-y-0 opacity-100" : ""
        }`}
      >
        <p className="mb-1 font-mono text-[10px] text-cyan">
          0{index + 1} / {item.title}
        </p>
        <p>{item.para}</p>
      </div>



    </div>



  );
}
