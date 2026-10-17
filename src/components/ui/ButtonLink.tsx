import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'light' | 'text' | 'accent'
}

const variants = {
  primary: 'min-h-14 rounded-full bg-linear-to-r from-cyan to-violet px-7 text-[#0b0e17] shadow-[0_8px_28px_rgba(53,196,244,.12)] hover:brightness-110',
  light: 'min-h-14 rounded-full border border-white/10 bg-[#141a28] px-7 text-ink hover:border-cyan/50 hover:bg-[#192133]',
  accent: 'min-h-14 rounded-full bg-linear-to-r from-cyan to-violet px-7 text-[#0b0e17] hover:brightness-110',
  text: 'gap-3 text-copy hover:text-cyan',
}

export function ButtonLink({ children, variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-4 text-sm font-semibold transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

export function ArrowLink({ children, className = '', ...props }: ButtonLinkProps) {
  return (
    <ButtonLink variant="text" className={className} {...props}>
      {children}<span aria-hidden="true">↗</span>
    </ButtonLink>
  )
}