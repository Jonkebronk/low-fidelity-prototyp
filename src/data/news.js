// Mock news data for Gunnarsbyn area
// Local news relevant for rural community

export const news = [
  {
    id: 1,
    category: "traffic",
    severity: "warning", // info, warning, urgent
    title: "Älgvarning: Väg 97 vid Gunnarsbyn",
    summary: "Flera älgobservationer rapporterade vid väg 97 mellan Gunnarsbyn och Boden. Var försiktig, särskilt i gryning och skymning.",
    source: "Trafikverket",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2h ago
    location: "Väg 97"
  },
  {
    id: 2,
    category: "community",
    severity: "info",
    title: "Julmarknad i Gunnarsbyn 14 december",
    summary: "Byaföreningen bjuder in till traditionell julmarknad vid bygdegården. Lokalt hantverk, hembakat och glögg. Tomten kommer kl 14!",
    source: "Gunnarsbyns byaförening",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    location: "Bygdegården"
  },
  {
    id: 3,
    category: "municipality",
    severity: "info",
    title: "Ny sopstation öppnad vid Gunnarsbyvägen",
    summary: "Bodens kommun har öppnat en ny återvinningsstation för hushållsavfall. Öppet vardagar 07-19, helger 09-17.",
    source: "Bodens kommun",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    location: "Gunnarsbyvägen"
  },
  {
    id: 4,
    category: "traffic",
    severity: "info",
    title: "Plogning av byvägar påbörjad",
    summary: "Plogning av kommunala vägar i Gunnarsbyn påbörjas kl 05:00. Sand/salt-blandning läggs ut vid backar och korsningar.",
    source: "Bodens kommun",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5h ago
    location: "Gunnarsbyn"
  },
  {
    id: 5,
    category: "emergency",
    severity: "urgent",
    title: "Planerat strömavbrott 5 december",
    summary: "Vattenfall planerar underhållsarbete som medför strömavbrott i delar av Gunnarsbyn. Beräknad tid: 09:00-14:00.",
    source: "Vattenfall",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12h ago
    location: "Östra Gunnarsbyn"
  },
  {
    id: 6,
    category: "community",
    severity: "info",
    title: "Skidspåren preparerade",
    summary: "Skidspåren vid Gunnarsbyn är nu preparerade för säsongen. 3 km och 5 km spår tillgängliga. Tack till alla frivilliga!",
    source: "Gunnarsbyns IF",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    location: "Skidstadion"
  },
  {
    id: 7,
    category: "municipality",
    severity: "info",
    title: "Bodens kommun: Bidrag till föreningar",
    summary: "Ansökan om föreningsbidrag för 2025 är nu öppen. Sista ansökningsdag 15 januari. Mer info på boden.se",
    source: "Bodens kommun",
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    location: null
  }
];

// News categories
export const newsCategories = [
  { id: "all", label: "Alla", icon: "Newspaper" },
  { id: "traffic", label: "Trafik", icon: "Car" },
  { id: "community", label: "Lokalt", icon: "Users" },
  { id: "municipality", label: "Kommun", icon: "Building2" },
  { id: "emergency", label: "Akut", icon: "AlertTriangle" }
];

// Helper to format relative time in Swedish
export function getRelativeTime(timestamp) {
  const now = new Date();
  const then = new Date(timestamp);
  const diffMs = now - then;
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 60) {
    return `${diffMins} min sedan`;
  } else if (diffHours < 24) {
    return `${diffHours} tim sedan`;
  } else if (diffDays === 1) {
    return "Igår";
  } else {
    return `${diffDays} dagar sedan`;
  }
}

// Get severity color class
export function getSeverityColor(severity) {
  const colors = {
    info: "bg-blue-100 text-blue-800 border-blue-300",
    warning: "bg-orange-100 text-orange-800 border-orange-300",
    urgent: "bg-red-100 text-red-800 border-red-300"
  };
  return colors[severity] || colors.info;
}
