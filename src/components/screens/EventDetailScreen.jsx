import { Calendar, Clock, MapPin, QrCode } from 'lucide-react';
import BackButton from '../ui/BackButton';
import { formatDateSwedish, getDayOfWeek } from '../../data/events';

// Event detail screen with full event info + QR code bridge to mobile (Erik's need)
// All key info above fold - no scrolling needed (Gunnel's need)
export default function EventDetailScreen({ event, onBack }) {
  if (!event) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <p className="text-xl text-slate-500">Evenemang hittades inte</p>
      </div>
    );
  }

  const dateFormatted = formatDateSwedish(event.date);
  const dayOfWeek = getDayOfWeek(event.date);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4">
        <BackButton onClick={onBack} />
      </header>

      <main className="flex-1 p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          {/* Event Title */}
          <h1 className="text-4xl font-bold text-slate-800 mb-6">
            {event.title}
          </h1>

          <div className="flex gap-8 mb-8">
            {/* Date and Time badges */}
            <div className="flex gap-4 flex-1">
              <div className="bg-blue-100 text-blue-800 px-5 py-3 rounded-xl flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <span className="text-xl font-semibold">
                  {dayOfWeek} {dateFormatted}
                </span>
              </div>

              <div className="bg-green-100 text-green-800 px-5 py-3 rounded-xl flex items-center gap-3">
                <Clock className="w-6 h-6" />
                <span className="text-xl font-semibold">
                  {event.startTime}
                  {event.endTime && ` - ${event.endTime}`}
                </span>
              </div>
            </div>

            {/* QR Code - bridge to personal device (Erik's need) */}
            <div className="bg-slate-100 rounded-xl p-4 text-center">
              <div className="w-24 h-24 bg-white border-2 border-slate-300 rounded-lg flex items-center justify-center mb-2">
                <QrCode className="w-16 h-16 text-slate-400" />
              </div>
              <p className="text-sm text-slate-600">Skanna för mer info</p>
            </div>
          </div>

          {/* Location box with full address */}
          <div className="bg-slate-50 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-slate-600 mt-1 flex-shrink-0" />
              <div>
                <div className="text-xl font-semibold text-slate-800">
                  {event.location}
                </div>
                <div className="text-lg text-slate-600 mt-1">
                  {event.address}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-slate-50 rounded-xl p-5">
            <h2 className="text-xl font-semibold text-slate-700 mb-3">
              Om evenemanget
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Organizer */}
          {event.organizer && (
            <div className="mt-6 text-base text-slate-500">
              Arrangör: {event.organizer}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
