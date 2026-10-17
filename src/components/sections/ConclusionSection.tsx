import { productName } from '../../config/site'
import { ButtonLink } from '../ui/ButtonLink'

export function ConclusionSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#101626] px-6 py-20 md:px-12 md:py-28 lg:px-[12vw] lg:py-32" id="conclusion" aria-labelledby="conclusion-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_50%,rgba(112,50,190,.16),transparent_48%)]" aria-hidden="true" />
      <div className="relative max-w-4xl"><span className="text-[10px] font-bold uppercase tracking-[2px] text-cyan">Conclusion</span><h2 id="conclusion-heading" className="mt-6 font-sans text-4xl font-bold leading-[1.04] md:text-5xl lg:text-7xl">More connected, organized, and <span className="bg-linear-to-r from-cyan to-violet bg-clip-text text-transparent">transparent.</span></h2><p className="mt-6 max-w-3xl text-base leading-8 text-copy">{productName} brings attendance, study planning, classroom topic coverage, student assessments, and multiple user roles into one platform. It seeks to help schools strengthen parent involvement and better monitor student learning.</p><p className="mt-5 font-semibold text-ink">{productName} — Connecting Schools, Parents, and Student Progress.</p><ButtonLink className="mt-8" href="#introduction">Review the case study <span aria-hidden="true">↗</span></ButtonLink></div>
    </section>
  )
}