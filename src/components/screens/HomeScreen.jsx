import { Calendar, Bus, Cloud, Newspaper, Mountain, Phone } from 'lucide-react';
import Header from '../ui/Header';
import NavButton, { navColors } from '../ui/NavButton';
import { getNextDepartures } from '../../data/busSchedule';
import { events, formatDateSwedish } from '../../data/events';

// Home screen with navigation grid + quick info sidebar
// Sidebar enables passive viewing for Gunnel
// Source attribution in footer builds trust for Erik
export default function HomeScreen({ onNavigate }) {
  const nextBuses = getNextDepartures(2);
  const todayEvent = events[0]; // First upcoming event

  const navItems = [
    { id: 'events', icon: Calendar, label: 'Evenemang', color: navColors.events },
    { id: 'bus', icon: Bus, label: 'Busstider', color: navColors.bus },
    { id: 'weather', icon: Cloud, label: 'Väder', color: navColors.weather },
    { id: 'news', icon: Newspaper, label: 'Nyheter', color: navColors.news },
    { id: 'tourism', icon: Mountain, label: 'Turism', color: navColors.tourism },
    { id: 'contacts', icon: Phone, label: 'Kontakter', color: navColors.contacts },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">
      <Header />

      <main className="flex-1 p-6 flex gap-6">
        {/* Navigation Grid - 2x3 */}
        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-5">
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              colorClass={item.color}
              onClick={() => onNavigate(item.id)}
            />
          ))}
        </div>

        {/* Quick Info Sidebar - passive viewing for Gunnel */}
        <aside className="w-72 flex flex-col gap-5">
          {/* Next Bus Section */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-lg font-bold text-slate-600 mb-3 flex items-center gap-2">
              <Bus className="w-5 h-5 text-green-600" />
              NÄSTA BUSS
            </h2>
            {nextBuses.map((bus, index) => (
              <div
                key={bus.id}
                className={`py-2 ${index === 0 ? 'border-l-4 border-green-500 pl-3 bg-green-50 rounded' : 'pl-4 text-slate-600'}`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-2xl font-bold ${index === 0 ? 'text-green-700' : 'text-slate-700'}`}>
                    {bus.time}
                  </span>
                  {index === 0 && (
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NÄSTA
                    </span>
                  )}
                </div>
                <div className="text-base text-slate-600">→ {bus.destination}</div>
              </div>
            ))}
          </div>

          {/* Today's Event Section */}
          {todayEvent && (
            <div className="bg-white rounded-xl shadow-md p-5">
              <h2 className="text-lg font-bold text-slate-600 mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                KOMMANDE
              </h2>
              <div className="border-l-4 border-blue-500 pl-3 bg-blue-50 rounded py-2">
                <div className="text-xl font-bold text-slate-800">{todayEvent.title}</div>
                <div className="text-base text-slate-600 mt-1">
                  {formatDateSwedish(todayEvent.date)} kl {todayEvent.startTime}
                </div>
                <div className="text-base text-slate-500">@ {todayEvent.location}</div>
              </div>
            </div>
          )}
        </aside>
      </main>

      {/* Footer with source attribution - builds trust for Erik */}
      <footer className="bg-slate-800 text-slate-400 px-6 py-3 text-sm flex justify-between items-center">
        <span>Senast uppdaterad: {new Date().toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}</span>
        <span>Källa: Bodens kommun, Länstrafiken Norrbotten, SMHI, Gunnarsbyns byaförening</span>
      </footer>
    </div>
  );
}
