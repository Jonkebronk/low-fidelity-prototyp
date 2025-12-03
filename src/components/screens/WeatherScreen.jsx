import { Sun, Cloud, Snowflake, CloudRain, Wind, Droplets, Sunrise, Sunset, Sparkles, AlertTriangle } from 'lucide-react';
import BackButton from '../ui/BackButton';
import { currentWeather, sunTimes, auroraForecast, forecast, warnings, formatTemp } from '../../data/weather';

// Weather icons mapping
const WeatherIcons = {
  clear: Sun,
  cloudy: Cloud,
  snow: Snowflake,
  rain: CloudRain
};

// Weather screen with large temperature display and aurora forecast
// Extra large text for accessibility (Gunnel's need)
export default function WeatherScreen({ onBack }) {
  const WeatherIcon = WeatherIcons[currentWeather.condition] || Cloud;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 flex flex-col text-white">
      {/* Header */}
      <header className="bg-slate-800/50 px-6 py-4 flex items-center justify-between">
        <BackButton onClick={onBack} label="Tillbaka" />
        <h1 className="text-2xl font-bold">Väder - Gunnarsbyn</h1>
        <div className="text-sm text-slate-400">
          Uppdaterad: {new Date().toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        {/* Weather warnings */}
        {warnings.length > 0 && (
          <div className="mb-6 space-y-2">
            {warnings.map(warning => (
              <div
                key={warning.id}
                className={`rounded-xl p-4 flex items-center gap-3 ${
                  warning.severity === 'yellow' ? 'bg-yellow-500/20 border border-yellow-500/50' :
                  warning.severity === 'orange' ? 'bg-orange-500/20 border border-orange-500/50' :
                  'bg-red-500/20 border border-red-500/50'
                }`}
              >
                <AlertTriangle className={`w-6 h-6 flex-shrink-0 ${
                  warning.severity === 'yellow' ? 'text-yellow-400' :
                  warning.severity === 'orange' ? 'text-orange-400' :
                  'text-red-400'
                }`} />
                <div>
                  <span className="font-bold">{warning.title}:</span> {warning.description}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-3 gap-6">
          {/* Current weather - large display */}
          <div className="col-span-2 bg-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-8">
              <WeatherIcon className="w-32 h-32 text-white/90" strokeWidth={1} />
              <div>
                <div className="text-8xl font-bold">{formatTemp(currentWeather.temperature)}</div>
                <div className="text-2xl text-white/70 mt-2">
                  Känns som {formatTemp(currentWeather.feelsLike)}
                </div>
                <div className="text-3xl mt-4">{currentWeather.description}</div>
              </div>
            </div>

            {/* Wind and humidity */}
            <div className="flex gap-8 mt-8 text-xl">
              <div className="flex items-center gap-2">
                <Wind className="w-6 h-6 text-white/70" />
                <span>{currentWeather.windSpeed} m/s {currentWeather.windDirection}</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-6 h-6 text-white/70" />
                <span>{currentWeather.humidity}% luftfuktighet</span>
              </div>
            </div>
          </div>

          {/* Sun times and Aurora */}
          <div className="space-y-4">
            {/* Sun times - important in winter! */}
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white/70 mb-4">Soltider</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xl">
                  <div className="flex items-center gap-2">
                    <Sunrise className="w-6 h-6 text-orange-400" />
                    <span>Soluppgång</span>
                  </div>
                  <span className="font-bold">{sunTimes.sunrise}</span>
                </div>
                <div className="flex items-center justify-between text-xl">
                  <div className="flex items-center gap-2">
                    <Sunset className="w-6 h-6 text-orange-400" />
                    <span>Solnedgång</span>
                  </div>
                  <span className="font-bold">{sunTimes.sunset}</span>
                </div>
                <div className="text-center text-white/60 pt-2 border-t border-white/20">
                  Dagsljus: {sunTimes.daylightHours}
                </div>
              </div>
            </div>

            {/* Aurora forecast */}
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Norrskensprognos
              </h3>
              <div className="text-4xl font-bold text-white mb-2">
                {auroraForecast.probability}% chans
              </div>
              <div className="text-lg text-white/70">
                Kp-index: {auroraForecast.kpIndex}
              </div>
              <div className="text-lg text-white/70 mt-2">
                {auroraForecast.conditions}
              </div>
              <div className="text-base text-purple-300 mt-3">
                Bäst: {auroraForecast.bestTime}
              </div>
            </div>
          </div>
        </div>

        {/* 5-day forecast */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">5-dygnsprognos</h3>
          <div className="grid grid-cols-5 gap-4">
            {forecast.map((day, index) => {
              const DayIcon = WeatherIcons[day.condition] || Cloud;
              return (
                <div
                  key={index}
                  className={`bg-white/10 rounded-xl p-4 text-center ${index === 0 ? 'ring-2 ring-white/30' : ''}`}
                >
                  <div className="text-lg font-bold">{day.day}</div>
                  <div className="text-sm text-white/60">{day.date}</div>
                  <DayIcon className="w-12 h-12 mx-auto my-3 text-white/80" />
                  <div className="text-2xl font-bold">{formatTemp(day.high)}</div>
                  <div className="text-lg text-white/60">{formatTemp(day.low)}</div>
                  <div className="text-sm text-white/50 mt-2">{day.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
