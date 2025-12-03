// Toggle filter button for events list
// No dropdowns - simple tap interaction (Gunnel's need)
export default function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 rounded-full text-lg font-medium transition-colors min-h-[48px] ${
        active
          ? "bg-blue-600 text-white shadow-md"
          : "bg-slate-200 text-slate-700 hover:bg-slate-300"
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
