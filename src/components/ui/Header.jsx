import { Cloud, Sun, CloudRain, Snowflake } from 'lucide-react';

// Header component showing weather and current time
// Visible on all screens for passive information display (Gunnel's need)
export default function Header() {
  const now = new Date();
  const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  const days = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'];
  const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  const dayName = days[now.getDay()];
  const dateString = `${dayName} ${now.getDate()} ${months[now.getMonth()]}`;

  // Mock weather data (would come from API in production)
  const weather = {
    temp: -5,
    condition: 'clear', // clear, cloudy, rain, snow
    description: 'Klart'
  };

  const WeatherIcon = {
    clear: Sun,
    cloudy: Cloud,
    rain: CloudRain,
    snow: Snowflake
  }[weather.condition] || Sun;

  return (
    <header className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
      {/* Weather info - left side */}
      <div className="flex items-center gap-3">
        <WeatherIcon className="w-8 h-8 text-yellow-400" />
        <span className="text-2xl font-semibold">{weather.temp}°C</span>
        <span className="text-lg text-slate-300">{weather.description}</span>
      </div>

      {/* Date and time - right side */}
      <div className="text-right">
        <div className="text-3xl font-bold">{timeString}</div>
        <div className="text-lg text-slate-300">{dateString}</div>
      </div>
    </header>
  );
}
