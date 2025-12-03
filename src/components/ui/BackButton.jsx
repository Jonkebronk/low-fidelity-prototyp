import { ArrowLeft } from 'lucide-react';

// Large back button for easy navigation (Gunnel's need)
// Touch target: 48x48px minimum as per accessibility requirements
export default function BackButton({ onClick, label = "Tillbaka" }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-3 text-xl font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors min-h-[48px] min-w-[48px]"
      aria-label={label}
    >
      <ArrowLeft className="w-7 h-7" />
      <span className="sr-only md:not-sr-only">{label}</span>
    </button>
  );
}
