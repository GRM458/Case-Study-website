import { productName } from "../../config/site";

export function IntroSection() {
  return (
    <section
      className="border-y border-white/5 bg-[radial-gradient(ellipse_at_80%_10%,rgba(44,69,122,.16),transparent_50%)] px-4 py-12 md:px-8 md:py-16 lg:px-[12vw] lg:py-20"
      id="introduction"
      aria-labelledby="intro-title"
    >
      {/* <SectionEyebrow number="01" label="Introduction" /> */}
      <div className="mt-9 grid gap-10 lg:grid-cols-[1.2fr_.62fr] lg:gap-20">
        <h2 id="intro-title" className="section-title max-w-195">
          ERP-based <span className="text-cyan">school management system.</span>
        </h2>
        <div className="section-copy space-y-5 self-end text-copy">
          <p>
            {productName} is designed to help schools manage educational
            activities, monitor student performance, and improve communication
            between teachers, students, and parents.
          </p>
          <p>
            {productName} provides different user roles, including students,
            parents, teachers, examination staff, inventory management, and
            other roles based on school requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
