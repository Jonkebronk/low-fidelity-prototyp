// Mock tourism data for Gunnarsbyn and surrounding area
// Focus on outdoor activities, nature, and local attractions

export const attractions = [
  // Outdoor activities
  {
    id: 1,
    category: "outdoor",
    name: "Gunnarsbyns skidspår",
    description: "Preparerade längdskidspår genom vacker skog. 3 km och 5 km slingor. Belyst 2 km slinga för kvällsåkning.",
    distance: "0 km",
    address: "Skidstadion, Gunnarsbyn",
    season: "Vinter",
    isOpen: true,
    openHours: "Alltid öppet",
    facilities: ["Parkering", "Omklädningsrum", "Belysning"],
    tip: "Skidor kan hyras vid bygdegården under helger"
  },
  {
    id: 2,
    category: "outdoor",
    name: "Pimpelfiske - Lule älv",
    description: "Utmärkt pimpelfiske efter abborre, gädda och lake. Flera populära ställen längs älven.",
    distance: "2 km",
    address: "Lule älv vid Gunnarsbyn",
    season: "Vinter (december-april)",
    isOpen: true,
    openHours: "Fiskekort krävs",
    facilities: ["Vindskydd", "Eldplats"],
    tip: "Fiskekort säljs i ICA Boden eller online via iFiske"
  },
  {
    id: 3,
    category: "outdoor",
    name: "Snöskoterleder",
    description: "Markerade snöskoterleder med anslutning till Bodens och Luleås lednät. Totalt över 100 km i området.",
    distance: "1 km",
    address: "Start vid Gunnarsbyvägen",
    season: "Vinter",
    isOpen: true,
    openHours: "Alltid öppet",
    facilities: ["Rastplatser", "Vindskydd"],
    tip: "Kolla ledstatus på snöskoterled.se"
  },

  // Attractions
  {
    id: 4,
    category: "attraction",
    name: "Rödbergsfortet",
    description: "Historiskt försvarsverk från tidigt 1900-tal. Guidade turer berättar om fortets historia och roll i försvaret av Norrbotten.",
    distance: "25 km",
    address: "Boden",
    season: "Hela året",
    isOpen: true,
    openHours: "Lör-Sön 11-15 (vintertid)",
    facilities: ["Parkering", "Café", "Butik", "Toalett"],
    tip: "Boka guidning i förväg, speciellt för grupper"
  },
  {
    id: 5,
    category: "attraction",
    name: "Norrbottens museum",
    description: "Länsmuseum med utställningar om Norrbottens historia, samisk kultur och natur. Barnvänligt.",
    distance: "65 km",
    address: "Storgatan 2, Luleå",
    season: "Hela året",
    isOpen: true,
    openHours: "Tis-Sön 10-16",
    facilities: ["Parkering", "Café", "Butik", "Tillgänglighet"],
    tip: "Gratis entré!"
  },
  {
    id: 6,
    category: "attraction",
    name: "Gammelstads kyrkstad",
    description: "UNESCO världsarv! Nordens bäst bevarade kyrkstad med över 400 stugor från 1400-talet.",
    distance: "55 km",
    address: "Gammelstad, Luleå",
    season: "Hela året",
    isOpen: true,
    openHours: "Besökscenter: 10-16",
    facilities: ["Parkering", "Café", "Guidade turer"],
    tip: "Upplev julmarknaden första advent-helgen!"
  },

  // Aurora viewing
  {
    id: 7,
    category: "aurora",
    name: "Norrskenspunkt Gunnarsbyn",
    description: "Öppen plats med fri sikt norrut - perfekt för norrskenskådning. Lite ljusförorening.",
    distance: "1 km",
    address: "Väster om byn, vid Lule älv",
    season: "Sept-Mars",
    isOpen: true,
    openHours: "Bäst 21-02",
    facilities: ["Parkering"],
    tip: "Kolla norrskensprognosen på SMHI eller Spaceweather"
  },

  // Food & accommodation
  {
    id: 8,
    category: "food",
    name: "Bygdegårdens café",
    description: "Lokalt café med hembakat fika. Öppet i samband med evenemang och helger.",
    distance: "0 km",
    address: "Bygdegården, Gunnarsbyn",
    season: "Hela året",
    isOpen: false,
    openHours: "Helger 11-15 (vid evenemang)",
    facilities: ["Tillgänglighet"],
    tip: "Kolla Facebook för öppettider"
  },
  {
    id: 9,
    category: "food",
    name: "Restaurang Rallaren",
    description: "Klassisk svensk husmanskost. Dagens lunch och à la carte.",
    distance: "30 km",
    address: "Kungsgatan 45, Boden",
    season: "Hela året",
    isOpen: true,
    openHours: "Mån-Fre 11-14, 17-21",
    facilities: ["Parkering", "Tillgänglighet"],
    tip: "Boka bord på helger"
  }
];

// Tourism categories
export const tourismCategories = [
  { id: "all", label: "Alla", icon: "Compass" },
  { id: "outdoor", label: "Friluftsliv", icon: "Trees" },
  { id: "attraction", label: "Sevärdheter", icon: "Landmark" },
  { id: "aurora", label: "Norrsken", icon: "Sparkles" },
  { id: "food", label: "Mat & Boende", icon: "UtensilsCrossed" }
];

// Get attractions by category
export function getAttractionsByCategory(category) {
  if (category === "all") {
    return attractions;
  }
  return attractions.filter(a => a.category === category);
}
