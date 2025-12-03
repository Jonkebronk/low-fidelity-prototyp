import { MapPin, Calendar, Clock } from 'lucide-react';
import { formatDateSwedish, getDayOfWeek } from '../../data/events';

// Event card showing key info at a glance (Erik's need for quick scanning)
export default function EventCard({ event, onClick }) {
  const dateFormatted = formatDateSwedish(event.date);
  const dayOfWeek = getDayOfWeek(event.date);

  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 text-left border border-slate-200"
    >
      <div className="flex justify-between items-start gap-4">
        {/* Event info - left side */}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-bold text-slate-800 mb-2 truncate">
            {event.title}
          </h3>
          <div className="flex items-center gap-2 text-lg text-slate-600 mb-1">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* Date and time - right side */}
        <div className="text-right flex-shrink-0">
          <div className="text-xl font-bold text-slate-800">
            {dayOfWeek} {dateFormatted}
          </div>
          <div className="flex items-center justify-end gap-1 text-lg text-slate-600 mt-1">
            <Clock className="w-5 h-5" />
            <span>
              {event.startTime}
              {event.endTime && `-${event.endTime}`}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
