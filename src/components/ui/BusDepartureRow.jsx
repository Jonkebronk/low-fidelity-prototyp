import { ArrowRight } from 'lucide-react';

// Bus departure row with extra-large time (Gunnel's accessibility need)
// Highlights next departure with green background and "NEXT" badge
export default function BusDepartureRow({ departure }) {
  const { time, destination, line, delay, isNext, isPast } = departure;

  if (isPast) {
    return null; // Don't show past departures
  }

  return (
    <div
      className={`rounded-xl p-4 mb-3 transition-all ${
        isNext
          ? "bg-green-100 border-2 border-green-400 shadow-md"
          : "bg-white border border-slate-200"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Time - extra large for readability */}
        <div className="flex items-center gap-3">
          <span className={`text-3xl font-bold ${isNext ? "text-green-700" : "text-slate-800"}`}>
            {time}
          </span>

          {/* NEXT badge */}
          {isNext && (
            <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
              NÄSTA
            </span>
          )}

          {/* Delay badge */}
          {delay > 0 && (
            <span className="bg-orange-200 text-orange-700 text-sm font-bold px-3 py-1 rounded-full">
              +{delay} min
            </span>
          )}
        </div>

        {/* Destination and line */}
        <div className="flex items-center gap-4 text-right">
          <div className="flex items-center gap-2 text-xl text-slate-700">
            <ArrowRight className="w-5 h-5" />
            <span>{destination}</span>
          </div>
          <span className="text-lg text-slate-500 font-medium">
            Linje {line}
          </span>
        </div>
      </div>
    </div>
  );
}
