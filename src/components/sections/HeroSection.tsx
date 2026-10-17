import { productName } from '../../config/site'
import { ButtonLink } from '../ui/ButtonLink'

export function HeroSection() {
  return (
    <section className="relative grid min-h-[calc(100svh-76px)] grid-cols-1 items-center px-6 pb-20 pt-14 md:px-12 md:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-6 lg:px-[10vw] lg:pb-24 lg:pt-16" id="home" aria-labelledby="hero-title">
      <div className="relative z-10 max-w-150">
        <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.03] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[1.1px] text-cyan"><span aria-hidden="true">✣</span> Integrated school management</p>
        <h1 id="hero-title" className="max-w-157.5 font-sans text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">An integrated ERP-based school management system for <span className="bg-linear-to-r from-cyan via-[#6589f5] to-violet bg-clip-text text-transparent">better-connected schools.</span></h1>
        <p className="mt-7 max-w-117.5 text-base leading-7 text-copy md:text-lg md:leading-8">{productName} helps schools manage educational activities, monitor student performance, and improve communication between teachers, students, and parents.</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
          <ButtonLink href="#introduction">Explore the case study <span aria-hidden="true">↗</span></ButtonLink>
          <ButtonLink variant="text" href="#features">Explore key features <span className="text-cyan" aria-hidden="true">↓</span></ButtonLink>
        </div>
      </div>
      <div className="relative hidden min-h-[470px] overflow-hidden lg:block" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,44,130,.16),transparent_66%)]" />
        <div className="absolute left-[18%] top-[34%] h-px w-[68%] rotate-[27deg] bg-linear-to-r from-transparent via-cyan/40 to-violet/30" />
        <div className="absolute left-[15%] top-[53%] h-px w-[70%] -rotate-[23deg] bg-linear-to-r from-cyan/20 via-violet/40 to-transparent" />
        <div className="absolute left-[29%] top-[20%] h-px w-[53%] rotate-[62deg] bg-linear-to-r from-transparent via-cyan/30 to-violet/35" />
        <div className="absolute left-[25%] top-[28%] h-px w-[54%] -rotate-[54deg] bg-linear-to-r from-violet/20 via-cyan/35 to-transparent" />
        <div className="absolute left-[42%] top-[18%] h-px w-[39%] rotate-[88deg] bg-linear-to-r from-cyan/20 via-violet/40 to-transparent" />
        <div className="absolute left-[33%] top-[68%] h-px w-[42%] rotate-[5deg] bg-linear-to-r from-cyan/20 to-violet/30" />
        {[
          { left: '20%', top: '34%', color: 'bg-cyan', size: 'size-2' },
          { left: '36%', top: '27%', color: 'bg-violet', size: 'size-1.5' },
          { left: '53%', top: '39%', color: 'bg-cyan', size: 'size-1.5' },
          { left: '72%', top: '29%', color: 'bg-violet', size: 'size-2' },
          { left: '29%', top: '58%', color: 'bg-violet', size: 'size-1.5' },
          { left: '47%', top: '52%', color: 'bg-cyan', size: 'size-2' },
          { left: '66%', top: '62%', color: 'bg-violet', size: 'size-1.5' },
          { left: '79%', top: '48%', color: 'bg-cyan', size: 'size-2' },
          { left: '43%', top: '77%', color: 'bg-violet', size: 'size-1.5' },
          { left: '58%', top: '19%', color: 'bg-cyan', size: 'size-2' },
          { left: '17%', top: '51%', color: 'bg-violet', size: 'size-1.5' },
          { left: '76%', top: '74%', color: 'bg-violet', size: 'size-2' },
        ].map((node) => <span className={`absolute rounded-full opacity-80 shadow-[0_0_16px_currentColor] ${node.color} ${node.size}`} style={{ left: node.left, top: node.top }} key={`${node.left}-${node.top}`} />)}
        <div className="absolute inset-x-1/4 bottom-[18%] top-[18%] bg-[radial-gradient(ellipse,rgba(53,196,244,.06),transparent_65%)]" />
      </div>
      <a className="absolute bottom-7 left-6 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[1.5px] text-muted lg:left-[10vw] lg:flex" href="#introduction"><span className="h-8 w-px bg-cyan" /> Scroll to explore</a>
    </section>
  )
}