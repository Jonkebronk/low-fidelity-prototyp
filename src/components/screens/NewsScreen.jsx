import { useState } from 'react';
import { Newspaper, Car, Users, Building2, AlertTriangle, MapPin } from 'lucide-react';
import BackButton from '../ui/BackButton';
import FilterButton from '../ui/FilterButton';
import { news, newsCategories, getRelativeTime, getSeverityColor } from '../../data/news';

// Icon mapping for categories
const CategoryIcons = {
  traffic: Car,
  community: Users,
  municipality: Building2,
  emergency: AlertTriangle,
  all: Newspaper
};

// News screen with local news for Gunnarsbyn
// Category filters and severity indicators
export default function NewsScreen({ onBack }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter news
  const filteredNews = activeFilter === 'all'
    ? news
    : news.filter(item => item.category === activeFilter);

  // Sort by timestamp (newest first), but urgent items at top
  const sortedNews = [...filteredNews].sort((a, b) => {
    if (a.severity === 'urgent' && b.severity !== 'urgent') return -1;
    if (b.severity === 'urgent' && a.severity !== 'urgent') return 1;
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex items-center gap-4">
        <BackButton onClick={onBack} />
        <h1 className="text-3xl font-bold text-slate-800 flex-1 text-center pr-16">
          Lokala nyheter
        </h1>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        {/* Filter buttons */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {newsCategories.map((category) => {
            const Icon = CategoryIcons[category.id];
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-lg font-medium transition-colors min-h-[48px] ${
                  activeFilter === category.id
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* News list */}
        <div className="space-y-4">
          {sortedNews.map((item) => {
            const CategoryIcon = CategoryIcons[item.category] || Newspaper;
            return (
              <article
                key={item.id}
                className={`bg-white rounded-xl shadow-md p-5 border-l-4 ${
                  item.severity === 'urgent' ? 'border-red-500' :
                  item.severity === 'warning' ? 'border-orange-500' :
                  'border-blue-500'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Category icon */}
                  <div className={`p-3 rounded-full flex-shrink-0 ${
                    item.severity === 'urgent' ? 'bg-red-100' :
                    item.severity === 'warning' ? 'bg-orange-100' :
                    'bg-blue-100'
                  }`}>
                    <CategoryIcon className={`w-6 h-6 ${
                      item.severity === 'urgent' ? 'text-red-600' :
                      item.severity === 'warning' ? 'text-orange-600' :
                      'text-blue-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-xl font-bold text-slate-800">
                        {item.severity === 'urgent' && (
                          <span className="text-red-600">⚠ </span>
                        )}
                        {item.title}
                      </h2>
                      <span className="text-base text-slate-500 flex-shrink-0">
                        {getRelativeTime(item.timestamp)}
                      </span>
                    </div>

                    <p className="text-lg text-slate-600 mt-2">
                      {item.summary}
                    </p>

                    <div className="flex items-center gap-4 mt-3 text-base text-slate-500">
                      <span className="font-medium">{item.source}</span>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {sortedNews.length === 0 && (
          <div className="text-center py-12 text-xl text-slate-500">
            Inga nyheter i denna kategori just nu.
          </div>
        )}
      </main>
    </div>
  );
}
