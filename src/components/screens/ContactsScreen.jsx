import { Phone, AlertTriangle, Heart, Building2, Home, Car, Zap, Clock, Globe, Mail } from 'lucide-react';
import BackButton from '../ui/BackButton';
import { contacts, contactCategories, getContactsByCategory, getCategoryInfo } from '../../data/contacts';

// Icon mapping
const CategoryIcons = {
  emergency: AlertTriangle,
  healthcare: Heart,
  municipality: Building2,
  local: Home,
  transport: Car,
  utilities: Zap
};

// Category colors
const CategoryColors = {
  emergency: 'bg-red-500',
  healthcare: 'bg-pink-500',
  municipality: 'bg-blue-500',
  local: 'bg-green-500',
  transport: 'bg-yellow-500',
  utilities: 'bg-purple-500'
};

// Contacts screen with important local phone numbers
// Large text for phone numbers (Gunnel's accessibility need)
export default function ContactsScreen({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex items-center gap-4">
        <BackButton onClick={onBack} />
        <h1 className="text-3xl font-bold text-slate-800 flex-1 text-center pr-16">
          Viktiga kontakter
        </h1>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        {/* Emergency numbers - always at top */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Akutnummer
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {getContactsByCategory('emergency').map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-xl shadow-md p-5 border-2 border-red-200"
              >
                <div className="text-lg font-medium text-slate-700 mb-2">
                  {contact.name}
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">
                  {contact.phone}
                </div>
                <div className="text-base text-slate-500">
                  {contact.description}
                </div>
                <div className="text-sm text-slate-400 mt-2 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {contact.available}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other categories */}
        <div className="grid grid-cols-2 gap-6">
          {contactCategories
            .filter(cat => cat.id !== 'emergency')
            .map((category) => {
              const CategoryIcon = CategoryIcons[category.id];
              const categoryContacts = getContactsByCategory(category.id);

              return (
                <section key={category.id}>
                  <h2 className={`text-lg font-bold mb-3 flex items-center gap-2 ${
                    category.id === 'healthcare' ? 'text-pink-600' :
                    category.id === 'municipality' ? 'text-blue-600' :
                    category.id === 'local' ? 'text-green-600' :
                    category.id === 'transport' ? 'text-yellow-600' :
                    'text-purple-600'
                  }`}>
                    <CategoryIcon className="w-5 h-5" />
                    {category.label}
                  </h2>

                  <div className="space-y-3">
                    {categoryContacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="bg-white rounded-xl shadow-sm p-4 border border-slate-200"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="text-lg font-semibold text-slate-800">
                              {contact.name}
                            </div>
                            <div className="text-base text-slate-500">
                              {contact.description}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                              <Phone className="w-5 h-5 text-slate-400" />
                              {contact.phone}
                            </div>
                          </div>
                        </div>

                        {/* Additional info */}
                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">
                          {contact.openHours && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {contact.openHours}
                            </span>
                          )}
                          {contact.website && (
                            <span className="flex items-center gap-1">
                              <Globe className="w-4 h-4" />
                              {contact.website}
                            </span>
                          )}
                          {contact.email && (
                            <span className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {contact.email}
                            </span>
                          )}
                          {contact.address && (
                            <span className="text-slate-400">
                              {contact.address}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
        </div>
      </main>
    </div>
  );
}
