type FilterChipProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export function FilterChip({ label, active = false, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-all ${
        active
          ? "border-accent bg-accent text-white"
          : "border-black/10 bg-white text-foreground hover:border-accent/40"
      }`}
    >
      {label}
    </button>
  );
}
