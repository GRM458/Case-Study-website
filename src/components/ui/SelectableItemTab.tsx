interface SelectableItemTabProps {
  controls: string;
  id: string;
  isSelected: boolean;
  number: string;
  onSelect: () => void;
  title: string;
}

export function SelectableItemTab({
  controls,
  id,
  isSelected,
  number,
  onSelect,
  title,
}: SelectableItemTabProps) {
  return (
    <button
      className={`group flex min-h-16.25 cursor-pointer items-center gap-4 rounded-lg border-b px-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${isSelected ? "border-cyan/30 bg-cyan/10 text-cyan" : "border-line text-copy hover:border-cyan/30 hover:bg-white/5 hover:text-cyan"}`}
      id={id}
      type="button"
      role="tab"
      aria-selected={isSelected}
      aria-controls={controls}
      onClick={onSelect}
    >
      <span className="w-7 text-[10px] text-muted">{number}</span>
      <span className="flex-1">{title}</span>
      <span
        className={`text-cyan transition-transform group-hover:translate-x-1 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        aria-hidden="true"
      >
        ↗
      </span>
    </button>
  );
}
