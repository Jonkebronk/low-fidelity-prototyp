// Navigation button for home screen grid
// Large touch targets (48x48px+) and icon + text for redundant affordance
export default function NavButton({ icon: Icon, label, onClick, colorClass }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] min-h-[140px] ${colorClass}`}
    >
      <Icon className="w-12 h-12" strokeWidth={1.5} />
      <span className="text-xl font-semibold">{label}</span>
    </button>
  );
}

// Predefined color classes for each nav button type
export const navColors = {
  events: "bg-gradient-to-br from-blue-500 to-blue-600",
  bus: "bg-gradient-to-br from-green-500 to-green-600",
  weather: "bg-gradient-to-br from-orange-500 to-orange-600",
  news: "bg-gradient-to-br from-purple-500 to-purple-600",
  tourism: "bg-gradient-to-br from-teal-500 to-teal-600",
  contacts: "bg-gradient-to-br from-rose-500 to-rose-600"
};
