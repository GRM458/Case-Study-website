import { objectives, productName } from '../../config/site'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function ObjectivesSection() {
  return (
    <section className="border-y border-white/5 bg-[#0e1220] px-6 py-20 md:px-12 md:py-28 lg:px-[12vw] lg:py-32" id="objectives" aria-labelledby="objectives-heading">
      {/* <SectionEyebrow number="03" label="Objectives" /> */}
      <div className="mt-8 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div><h2 id="objectives-heading" className="font-sans text-4xl font-bold leading-[1.06] md:text-5xl lg:text-6xl">What <span className="text-cyan">{productName}</span> is designed to do.</h2><p className="mt-5 max-w-md text-sm leading-7 text-copy">A centralized platform to connect school activities, student progress, and family communication.</p></div>
        <ol className="border-t border-white/10">{objectives.map((objective, index) => <li className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/10 py-5 md:py-6" key={objective}><span className="pt-1 font-mono text-xs text-cyan">0{index + 1}</span><p className="text-base leading-7 text-ink md:text-lg">{objective}</p></li>)}</ol>
      </div>
    </section>
  )
}