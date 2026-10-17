type SectionEyebrowProps = {
  number: string
  label: string
  inverted?: boolean
}

export function SectionEyebrow({ number, label, inverted = false }: SectionEyebrowProps) {
  return (
    <div className={`text-[10px] font-bold uppercase tracking-[2px] ${inverted ? 'text-paper/55' : 'text-muted'}`}>
      <span className={inverted ? 'text-lime' : 'text-coral'}>{number}</span> / {label}
    </div>
  )
}