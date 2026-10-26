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
      className="px-6 py-14 md:px-12 md:py-18 lg:px-[12vw] lg:py-22"
      id="problem"
      aria-labelledby="problem-heading"
    >
      {/* <SectionEyebrow number="02" label="Problem statement" /> */}

      <div className="mt-9 grid gap-8 lg:grid-cols-2 lg:gap-16">
        <h2
          id="problem-heading"
          className="section-title"
        >
          A gap between classroom learning and{" "}
          <span className="bg-linear-to-r from-cyan to-violet bg-clip-text text-transparent">
            parent awareness.
          </span>
        </h2>
        <div className="section-copy space-y-5 text-copy">
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
  const detailsId = `problem-card-details-${index}`;

  return (
    <div className="group relative z-0 hover:z-20 focus-within:z-20">
      <button
        type="button"
        aria-describedby={detailsId}
        className="flex min-h-20 w-full cursor-pointer flex-col items-start justify-center rounded-xl border border-white/10 bg-white/[.02] p-3 text-left transition-colors hover:border-cyan/40 hover:bg-white/[.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan sm:p-4"
      >
        <span className="font-mono text-xs text-cyan">0{index + 1}</span>
        <span className="mt-2 text-base font-semibold text-ink sm:text-lg">
          {item.title}
        </span>
      </button>

      <div
        id={detailsId}
        className="invisible absolute left-0 top-[calc(100%+0.5rem)] z-30 w-full translate-y-1 rounded-2xl border border-white/10 bg-[#111725] p-3 text-sm leading-5 text-copy opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:p-4"
      >
        <p className="mb-1 font-mono text-[10px] text-cyan">
          0{index + 1} / {item.title}
        </p>
        <p>{item.para}</p>
      </div>
    </div>
  );
}
