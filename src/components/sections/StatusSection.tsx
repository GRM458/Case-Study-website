import { marketingFocus, productName } from '../../config/site'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function StatusSection() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28 lg:px-[12vw] lg:py-32" id="status" aria-labelledby="status-heading">
      <SectionEyebrow number="06" label="Current status & marketing focus" />
      <div className="mt-9 grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div><h2 id="status-heading" className="font-sans text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">Designed. Now focused on <span className="text-cyan">reaching schools.</span></h2><p className="mt-5 text-base leading-7 text-copy">According to the provided information, {productName} has already been designed. The next focus is marketing the product to schools and communicating its practical value.</p></div>
        <div><h3 className="mb-5 text-xs font-bold uppercase tracking-[1.5px] text-muted">Marketing efforts can emphasize</h3><ul className="grid gap-3 sm:grid-cols-2">{marketingFocus.map((item) => <li className="flex min-h-[72px] items-center gap-4 border border-white/10 bg-[#0e1220] px-4 text-sm text-ink" key={item}><span className="grid size-7 shrink-0 place-items-center rounded-full border border-cyan/40 text-xs text-cyan">↗</span>{item}</li>)}</ul><p className="mt-5 border-l-2 border-violet pl-4 text-xs leading-6 text-muted">Implementation results, customer feedback, adoption figures, and marketing performance have not yet been provided and should be added when verified.</p></div>
      </div>
    </section>
  )
}