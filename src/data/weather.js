// Mock weather data for Gunnarsbyn, Norrbotten
// Winter season (December) - short days, cold, aurora season

export const currentWeather = {
  temperature: -12,
  feelsLike: -18,
  condition: "snow", // clear, cloudy, snow, rain
  description: "Lätt snöfall",
  humidity: 85,
  windSpeed: 4, // m/s
  windDirection: "NV",
  visibility: 5, // km
  pressure: 1015, // hPa
  updatedAt: new Date().toISOString()
};

// Sun times for Gunnarsbyn in December (very short days!)
export const sunTimes = {
  sunrise: "09:42",
  sunset: "13:58",
  daylightHours: "4t 16min",
  civilTwilightStart: "08:15",
  civilTwilightEnd: "15:25"
};

// Aurora forecast (Norrsken)
export const auroraForecast = {
  probability: 65, // percent
  kpIndex: 4, // 0-9 scale
  bestTime: "21:00 - 02:00",
  conditions: "Bra chanser ikväll",
  tip: "Bäst sikt västerut mot Lule älv"
};

// 5-day forecast
export const forecast = [
  {
    day: "Idag",
    date: "3 dec",
    high: -10,
    low: -15,
    condition: "snow",
    description: "Lätt snö",
    precipitation: "2 mm",
    wind: "4 m/s"
  },
  {
    day: "Tor",
    date: "4 dec",
    high: -8,
    low: -14,
    condition: "cloudy",
    description: "Molnigt",
    precipitation: "0 mm",
    wind: "3 m/s"
  },
  {
    day: "Fre",
    date: "5 dec",
    high: -5,
    low: -12,
    condition: "cloudy",
    description: "Växlande molnighet",
    precipitation: "0 mm",
    wind: "5 m/s"
  },
  {
    day: "Lör",
    date: "6 dec",
    high: -14,
    low: -22,
    condition: "clear",
    description: "Klart & kallt",
    precipitation: "0 mm",
    wind: "2 m/s"
  },
  {
    day: "Sön",
    date: "7 dec",
    high: -18,
    low: -25,
    condition: "clear",
    description: "Mycket kallt",
    precipitation: "0 mm",
    wind: "1 m/s"
  }
];

// Weather warnings
export const warnings = [
  {
    id: 1,
    type: "cold",
    severity: "yellow", // yellow, orange, red
    title: "Kyla",
    description: "Temperaturer under -20°C väntas under helgen. Undvik längre utevistelse.",
    validFrom: "2024-12-06",
    validTo: "2024-12-08"
  },
  {
    id: 2,
    type: "ice",
    severity: "yellow",
    title: "Halka",
    description: "Risk för ishalka på vägar och gångbanor.",
    validFrom: "2024-12-03",
    validTo: "2024-12-04"
  }
];

// Helper to get weather icon name based on condition
export function getWeatherIcon(condition) {
  const icons = {
    clear: "Sun",
    cloudy: "Cloud",
    snow: "Snowflake",
    rain: "CloudRain",
    fog: "CloudFog"
  };
  return icons[condition] || "Cloud";
}

// Helper to format temperature
export function formatTemp(temp) {
  return `${temp > 0 ? "+" : ""}${temp}°`;
}
