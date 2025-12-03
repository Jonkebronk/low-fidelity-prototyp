import { useState } from 'react';
import BackButton from '../ui/BackButton';
import FilterButton from '../ui/FilterButton';
import EventCard from '../ui/EventCard';
import { events, eventCategories } from '../../data/events';

// Events list screen with filter buttons (no dropdowns - Gunnel's need)
// Quick scanning of key info on cards (Erik's need)
export default function EventsListScreen({ onBack, onSelectEvent }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter events based on active category
  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter(event => event.category === activeFilter);

  // Sort by date (chronological)
  const sortedEvents = [...filteredEvents].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex items-center gap-4">
        <BackButton onClick={onBack} />
        <h1 className="text-3xl font-bold text-slate-800 flex-1 text-center pr-16">
          Kommande evenemang
        </h1>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        {/* Filter buttons - toggle style, no dropdown */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {eventCategories.map((category) => (
            <FilterButton
              key={category.id}
              label={category.label}
              active={activeFilter === category.id}
              onClick={() => setActiveFilter(category.id)}
            />
          ))}
        </div>

        {/* Event cards list */}
        <div className="space-y-4">
          {sortedEvents.length > 0 ? (
            sortedEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => onSelectEvent(event)}
              />
            ))
          ) : (
            <div className="text-center py-12 text-xl text-slate-500">
              Inga evenemang i denna kategori just nu.
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        {sortedEvents.length > 3 && (
          <div className="text-center mt-6 text-slate-500 text-lg">
            ↓ Scrolla för fler evenemang
          </div>
        )}
      </main>
    </div>
  );
}
