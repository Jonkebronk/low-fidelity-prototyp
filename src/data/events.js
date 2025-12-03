// Mock event data for the prototype
// Events are sorted by date (ascending) - Gunnarsbyn, Norrbotten
export const events = [
  {
    id: 1,
    title: "Julmarknad",
    titleEn: "Christmas Market",
    date: "2024-12-14",
    startTime: "10:00",
    endTime: "18:00",
    location: "Bygdegården",
    address: "Gunnarsbyvägen 15, 961 95 Gunnarsbyn",
    category: "markets",
    description: "Traditionell julmarknad med lokalt hantverk, hemlagad mat och glögg. Aktiviteter för barn inklusive möte med tomten.",
    organizer: "Gunnarsbyns byaförening"
  },
  {
    id: 2,
    title: "Luciakonsert",
    titleEn: "Lucia Concert",
    date: "2024-12-13",
    startTime: "19:00",
    endTime: "20:30",
    location: "Gunnarsbyns kyrka",
    address: "Kyrkvägen 3, 961 95 Gunnarsbyn",
    category: "culture",
    description: "Traditionell luciakonsert med körsång och luciafirande. Fika serveras efter konserten i församlingshemmet.",
    organizer: "Överluleå församling"
  },
  {
    id: 3,
    title: "Pimpeltävling",
    titleEn: "Ice Fishing Competition",
    date: "2024-12-20",
    startTime: "08:00",
    endTime: "14:00",
    location: "Lule älv",
    address: "Älvvägen, Gunnarsbyn",
    category: "sports",
    description: "Årlig pimpeltävling vid Lule älv. Fina priser och korvgrillning. Anmälan på plats. Fiskekort krävs.",
    organizer: "Gunnarsbyns fiskeklubb"
  },
  {
    id: 4,
    title: "Byastämma",
    titleEn: "Village Meeting",
    date: "2024-12-16",
    startTime: "18:30",
    endTime: "20:00",
    location: "Bygdegården",
    address: "Gunnarsbyvägen 15, 961 95 Gunnarsbyn",
    category: "culture",
    description: "Ordinarie byastämma med diskussion om byns utveckling och vinterunderhåll. Fika ingår.",
    organizer: "Gunnarsbyns byaförening"
  },
  {
    id: 5,
    title: "Julgransplundring",
    titleEn: "Christmas Tree Celebration",
    date: "2025-01-11",
    startTime: "15:00",
    endTime: "17:00",
    location: "Bygdegården",
    address: "Gunnarsbyvägen 15, 961 95 Gunnarsbyn",
    category: "culture",
    description: "Traditionell julgransplundring med dans kring granen. Godispåsar till barnen.",
    organizer: "Gunnarsbyns byaförening"
  },
  {
    id: 6,
    title: "Skidlopp",
    titleEn: "Ski Race",
    date: "2025-01-18",
    startTime: "10:00",
    endTime: "14:00",
    location: "Skidstadion",
    address: "Skidspåret, Gunnarsbyn",
    category: "sports",
    description: "Lokalt skidlopp för alla åldrar. Sträckor: 3km, 5km, 10km. Anmälan senast 15 januari.",
    organizer: "Gunnarsbyns IF"
  }
];

// Categories for filter buttons
export const eventCategories = [
  { id: "all", label: "Alla" },
  { id: "markets", label: "Marknader" },
  { id: "sports", label: "Sport" },
  { id: "culture", label: "Kultur" }
];

// Helper function to format date in Swedish
export function formatDateSwedish(dateString) {
  const date = new Date(dateString);
  const months = [
    "jan", "feb", "mar", "apr", "maj", "jun",
    "jul", "aug", "sep", "okt", "nov", "dec"
  ];
  return `${date.getDate()} ${months[date.getMonth()]}`;
}

// Helper function to get day of week in Swedish
export function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const days = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"];
  return days[date.getDay()];
}
