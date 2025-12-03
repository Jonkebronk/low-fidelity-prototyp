// Important local contacts for Gunnarsbyn area
// Organized by category for easy access

export const contacts = [
  // Emergency
  {
    id: 1,
    category: "emergency",
    name: "Nödnummer",
    description: "Polis, ambulans, räddningstjänst",
    phone: "112",
    isEmergency: true,
    available: "Dygnet runt"
  },
  {
    id: 2,
    category: "emergency",
    name: "Sjukvårdsrådgivning",
    description: "Medicinsk rådgivning och vårdguide",
    phone: "1177",
    isEmergency: true,
    available: "Dygnet runt"
  },
  {
    id: 3,
    category: "emergency",
    name: "Giftinformation",
    description: "Vid misstänkt förgiftning",
    phone: "010-456 67 00",
    isEmergency: true,
    available: "Dygnet runt"
  },

  // Healthcare
  {
    id: 4,
    category: "healthcare",
    name: "Vårdcentral Boden",
    description: "Läkare, sjuksköterska, provtagning",
    phone: "0921-174 00",
    address: "Parkgatan 12, Boden",
    openHours: "Mån-Fre 08:00-17:00",
    available: "Vardagar"
  },
  {
    id: 5,
    category: "healthcare",
    name: "Folktandvården Boden",
    description: "Tandvård, akut tandvård",
    phone: "0921-174 30",
    address: "Parkgatan 10, Boden",
    openHours: "Mån-Fre 08:00-16:30",
    available: "Vardagar"
  },
  {
    id: 6,
    category: "healthcare",
    name: "Apotek Hjärtat Boden",
    description: "Läkemedel, receptuttag",
    phone: "0771-405 405",
    address: "Kungsgatan 21, Boden",
    openHours: "Mån-Fre 09-18, Lör 10-14",
    available: "Vardagar & lördag"
  },

  // Municipality
  {
    id: 7,
    category: "municipality",
    name: "Bodens kommun",
    description: "Medborgarservice, allmänna frågor",
    phone: "0921-620 00",
    website: "boden.se",
    openHours: "Mån-Fre 08:00-16:30",
    available: "Vardagar"
  },
  {
    id: 8,
    category: "municipality",
    name: "Hemtjänst Boden",
    description: "Hjälp i hemmet, omsorg",
    phone: "0921-621 00",
    openHours: "Mån-Fre 08:00-16:00",
    available: "Vardagar"
  },
  {
    id: 9,
    category: "municipality",
    name: "Felanmälan vägar",
    description: "Rapportera hål, plogning, belysning",
    phone: "0921-620 00",
    website: "boden.se/felanmalan",
    available: "Vardagar"
  },

  // Local community
  {
    id: 10,
    category: "local",
    name: "Gunnarsbyns byaförening",
    description: "Lokala frågor, evenemang, bygdegården",
    phone: "070-123 45 67",
    email: "byaforeningen@gunnarsbyn.se",
    available: "Kvällstid"
  },
  {
    id: 11,
    category: "local",
    name: "Överluleå församling",
    description: "Kyrkan, dop, vigsel, begravning",
    phone: "0920-23 28 00",
    address: "Kyrkvägen 1, Gunnarsbyn",
    openHours: "Mån-Fre 09:00-12:00",
    available: "Vardagar"
  },

  // Transport
  {
    id: 12,
    category: "transport",
    name: "Länstrafiken Norrbotten",
    description: "Bussinfo, tidtabeller, störningar",
    phone: "0771-100 110",
    website: "ltnbd.se",
    available: "Mån-Fre 07-19"
  },
  {
    id: 13,
    category: "transport",
    name: "Vägassistans / Bärgning",
    description: "Motorstopp, olycka, utelåsning",
    phone: "020-912 912",
    available: "Dygnet runt"
  },
  {
    id: 14,
    category: "transport",
    name: "Trafikverket",
    description: "Väglag, trafikinfo, vägarbeten",
    phone: "0771-921 921",
    website: "trafikverket.se",
    available: "Dygnet runt"
  },

  // Utilities
  {
    id: 15,
    category: "utilities",
    name: "Vattenfall strömavbrott",
    description: "Rapportera eller kolla strömavbrott",
    phone: "020-82 00 00",
    website: "vattenfall.se/stromavbrott",
    available: "Dygnet runt"
  }
];

// Contact categories
export const contactCategories = [
  { id: "emergency", label: "Akut", icon: "AlertTriangle", color: "red" },
  { id: "healthcare", label: "Vård", icon: "Heart", color: "pink" },
  { id: "municipality", label: "Kommun", icon: "Building2", color: "blue" },
  { id: "local", label: "Lokalt", icon: "Home", color: "green" },
  { id: "transport", label: "Transport", icon: "Car", color: "yellow" },
  { id: "utilities", label: "Service", icon: "Zap", color: "purple" }
];

// Get contacts by category
export function getContactsByCategory(category) {
  return contacts.filter(c => c.category === category);
}

// Get category info
export function getCategoryInfo(categoryId) {
  return contactCategories.find(c => c.id === categoryId);
}
