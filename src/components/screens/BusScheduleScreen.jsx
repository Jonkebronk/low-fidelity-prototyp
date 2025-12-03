import { useState } from 'react';
import { BusFront, Info } from 'lucide-react';
import BackButton from '../ui/BackButton';
import BusDepartureRow from '../ui/BusDepartureRow';
import FilterButton from '../ui/FilterButton';
import {
  getTodayDepartures,
  getTomorrowDepartures,
  getWeekendDepartures,
  busStopInfo,
  getLastUpdated
} from '../../data/busSchedule';

// Bus schedule screen with NEXT badge - critical for Gunnel's use case
// Extra-large times for readability from distance
// Day selector uses simple toggles (no calendar picker)
export default function BusScheduleScreen({ onBack }) {
  const [selectedDay, setSelectedDay] = useState('today');

  const dayOptions = [
    { id: 'today', label: 'Idag' },
    { id: 'tomorrow', label: 'Imorgon' },
    { id: 'weekend', label: 'Helg' }
  ];

  // Get departures based on selected day
  const getDepartures = () => {
    switch (selectedDay) {
      case 'tomorrow':
        return getTomorrowDepartures();
      case 'weekend':
        return getWeekendDepartures();
      default:
        return getTodayDepartures();
    }
  };

  const departures = getDepartures();
  const lastUpdated = getLastUpdated();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">
      {/* Header with back button, title, and last updated */}
      <header className="bg-white shadow-sm px-6 py-4">
        <div className="flex items-center justify-between">
          <BackButton onClick={onBack} />
          <div className="text-center flex-1">
            <h1 className="text-3xl font-bold text-slate-800">Busstider</h1>
            <div className="flex items-center justify-center gap-2 text-slate-600 mt-1">
              <BusFront className="w-5 h-5" />
              <span className="text-lg">{busStopInfo.name} (#{busStopInfo.number})</span>
            </div>
          </div>
          <div className="text-right text-slate-500 text-sm">
            Uppdaterad: {lastUpdated}
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        {/* Day selector - simple toggle buttons, no calendar */}
        <div className="flex gap-3 mb-6">
          {dayOptions.map((day) => (
            <FilterButton
              key={day.id}
              label={day.label}
              active={selectedDay === day.id}
              onClick={() => setSelectedDay(day.id)}
            />
          ))}
        </div>

        {/* Departures list */}
        <div className="space-y-2">
          {departures.map((departure) => (
            <BusDepartureRow key={departure.id} departure={departure} />
          ))}
        </div>

        {/* Info notice about schedule variations */}
        <div className="mt-6 bg-blue-50 rounded-xl p-4 flex items-start gap-3">
          <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-base text-blue-800">
            <p className="font-medium">Information</p>
            <p className="mt-1">
              Helgtidtabell kan avvika. Förseningar visas i realtid när data finns tillgänglig.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
