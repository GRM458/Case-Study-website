import { Brand } from '../ui/Brand'

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 bg-ink px-6 py-6 text-xs text-paper/65 sm:flex-row sm:items-center md:px-12 lg:px-[7vw]">
      <Brand light /><span>Connecting schools, parents, and student progress.</span><a className="transition-colors hover:text-paper" href="#home">Back to top ↑</a>
    </footer>
  )
}