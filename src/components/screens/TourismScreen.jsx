import { useState } from 'react';
import { Compass, Trees, Landmark, Sparkles, UtensilsCrossed, MapPin, Clock, CheckCircle, XCircle } from 'lucide-react';
import BackButton from '../ui/BackButton';
import { attractions, tourismCategories, getAttractionsByCategory } from '../../data/tourism';

// Icon mapping
const CategoryIcons = {
  all: Compass,
  outdoor: Trees,
  attraction: Landmark,
  aurora: Sparkles,
  food: UtensilsCrossed
};

// Tourism screen showing local activities and attractions
// Card-based layout with distance and season info
export default function TourismScreen({ onBack }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredAttractions = getAttractionsByCategory(activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex items-center gap-4">
        <BackButton onClick={onBack} />
        <h1 className="text-3xl font-bold text-slate-800 flex-1 text-center pr-16">
          Turism & Friluftsliv
        </h1>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        {/* Filter buttons */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {tourismCategories.map((category) => {
            const Icon = CategoryIcons[category.id];
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-lg font-medium transition-colors min-h-[48px] ${
                  activeFilter === category.id
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Attractions grid */}
        <div className="grid grid-cols-2 gap-5">
          {filteredAttractions.map((item) => {
            const CategoryIcon = CategoryIcons[item.category] || Compass;
            return (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Placeholder for image */}
                <div className={`h-32 flex items-center justify-center ${
                  item.category === 'outdoor' ? 'bg-gradient-to-br from-green-400 to-emerald-600' :
                  item.category === 'aurora' ? 'bg-gradient-to-br from-purple-600 to-blue-800' :
                  item.category === 'food' ? 'bg-gradient-to-br from-orange-400 to-red-500' :
                  'bg-gradient-to-br from-slate-400 to-slate-600'
                }`}>
                  <CategoryIcon className="w-16 h-16 text-white/80" strokeWidth={1} />
                </div>

                <div className="p-5">
                  {/* Title and status */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="text-xl font-bold text-slate-800">
                      {item.name}
                    </h2>
                    {item.isOpen ? (
                      <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                        <CheckCircle className="w-4 h-4" />
                        Öppet
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-slate-400 text-sm font-medium">
                        <XCircle className="w-4 h-4" />
                        Stängt
                      </span>
                    )}
                  </div>

                  <p className="text-base text-slate-600 line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.openHours}
                    </span>
                  </div>

                  {/* Season badge */}
                  <div className="mt-3">
                    <span className="inline-block bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
                      {item.season}
                    </span>
                  </div>

                  {/* Tip */}
                  {item.tip && (
                    <div className="mt-3 p-3 bg-teal-50 rounded-lg text-sm text-teal-700">
                      💡 {item.tip}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {filteredAttractions.length === 0 && (
          <div className="text-center py-12 text-xl text-slate-500">
            Inga aktiviteter i denna kategori.
          </div>
        )}
      </main>
    </div>
  );
}
