import { SectionEyebrow } from "../ui/SectionEyebrow";
import {useState} from "react";

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

      <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {provides.map((item, index) => (
          <ProblemCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}



function ProblemCard({ item, index }: { item: { title: string; para: string }; index: number }) {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className="flex flex-col bg-[var(--color-paper)] relative z-10">
            <div className="flex min-h-24 items-center gap-4 bg-paper px-5 cursor-pointer" key={item.title} onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
            <span className="font-mono text-xs text-cyan">0{index + 1}</span>
            <span className="text-sm font-medium text-ink">{item.title}</span>
          </div>
        {isOpen && <p className="text-md text-ink gap-4 bg-paper px-5 rounded-sm absolute z-10 shadow-lg top-26 border p-5 border-white/10 shadow-sm shadow-gray-500">{item.para}</p>}
    </div>

  );
}
