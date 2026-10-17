import { productName } from '../../config/site'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function IntroSection() {
  return (
    <section className="border-y border-white/5 bg-[radial-gradient(ellipse_at_80%_10%,rgba(44,69,122,.16),transparent_50%)] px-6 py-20 md:px-12 md:py-28 lg:px-[12vw] lg:py-32" id="introduction" aria-labelledby="intro-title">
      <SectionEyebrow number="01" label="Introduction" />
      <div className="mt-9 grid gap-10 lg:grid-cols-[1.2fr_.62fr] lg:gap-20">
        <h2 id="intro-title" className="max-w-195 font-sans text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">An integrated ERP-based <span className="text-cyan">school management system.</span></h2>
        <div className="space-y-5 self-end text-[15px] leading-7 text-copy">
          <p>{productName} is designed to help schools manage educational activities, monitor student performance, and improve communication between teachers, students, and parents.</p>
          <p>{productName} provides different user roles, including students, parents, teachers, examination staff, inventory management, and other roles based on school requirements.</p>
        </div>
      </div>
    </section>
  )
}