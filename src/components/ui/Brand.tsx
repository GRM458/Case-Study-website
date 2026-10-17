import { productName } from '../../config/site'

type BrandProps = {
  light?: boolean
  onClick?: () => void
}

export function Brand({ light = false, onClick }: BrandProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 font-sans font-bold tracking-[-1px] ${light ? 'text-paper text-xl' : 'text-ink text-[29px]'}`}
      href="#home"
      onClick={onClick}
      aria-label={`${productName} home`}
    >
      <span className={`grid place-items-center rounded-full bg-lime font-sans font-black text-ink ${light ? 'size-7 text-base' : 'size-9 text-[22px]'}`} aria-hidden="true">b</span>
      <span>{productName}<span className="text-coral">.</span></span>
    </a>
  )
}