import React from "react";
import { useState, useEffect } from "react";
import {
  Cloud,
  CloudRain,
  Sun,
  Wind,
  Sunrise,
  Sunset,
  CloudFog,
  CloudDrizzle,
  CloudSnow,
  Zap,
} from "lucide-react";

const getConditionFromCode = (code: number) => {
  const map: Record<number, { condition: string; icon: React.ReactNode }> = {
    0: {
      condition: "Clear sky",
      icon: <Sun className="w-20 h-20 opacity-80" />,
    },
    1: {
      condition: "Mainly clear",
      icon: <Sun className="w-20 h-20 opacity-80" />,
    },
    2: {
      condition: "Partly cloudy",
      icon: <Cloud className="w-20 h-20 opacity-80" />,
    },
    3: {
      condition: "Overcast",
      icon: <Cloud className="w-20 h-20 opacity-80" />,
    },
    45: {
      condition: "Fog",
      icon: <CloudFog className="w-20 h-20 opacity-80" />,
    },
    48: {
      condition: "Depositing rime fog",
      icon: <CloudFog className="w-20 h-20 opacity-80" />,
    },
    51: {
      condition: "Light drizzle",
      icon: <CloudDrizzle className="w-20 h-20 opacity-80" />,
    },
    53: {
      condition: "Moderate drizzle",
      icon: <CloudDrizzle className="w-20 h-20 opacity-80" />,
    },
    55: {
      condition: "Dense drizzle",
      icon: <CloudDrizzle className="w-20 h-20 opacity-80" />,
    },
    61: {
      condition: "Slight rain",
      icon: <CloudRain className="w-20 h-20 opacity-80" />,
    },
    63: {
      condition: "Moderate rain",
      icon: <CloudRain className="w-20 h-20 opacity-80" />,
    },
    65: {
      condition: "Heavy rain",
      icon: <CloudRain className="w-20 h-20 opacity-80" />,
    },
    71: {
      condition: "Slight snow",
      icon: <CloudSnow className="w-20 h-20 opacity-80" />,
    },
    73: {
      condition: "Moderate snow",
      icon: <CloudSnow className="w-20 h-20 opacity-80" />,
    },
    75: {
      condition: "Heavy snow",
      icon: <CloudSnow className="w-20 h-20 opacity-80" />,
    },
    80: {
      condition: "Rain showers",
      icon: <CloudRain className="w-20 h-20 opacity-80" />,
    },
    81: {
      condition: "Moderate rain showers",
      icon: <CloudRain className="w-20 h-20 opacity-80" />,
    },
    82: {
      condition: "Violent rain showers",
      icon: <CloudRain className="w-20 h-20 opacity-80" />,
    },
    95: {
      condition: "Thunderstorm",
      icon: <Zap className="w-20 h-20 opacity-80" />,
    },
    96: {
      condition: "Thunderstorm with hail",
      icon: <Zap className="w-20 h-20 opacity-80" />,
    },
    99: {
      condition: "Thunderstorm with heavy hail",
      icon: <Zap className="w-20 h-20 opacity-80" />,
    },
  };
  return (
    map[code] || {
      condition: "Unknown",
      icon: <Cloud className="w-20 h-20 opacity-80" />,
    }
  );
};

const Weather = () => {
  const latitude = 11.006;
  const longitude = 77.5609;

  const [currentWeather, setCurrentWeather] = useState({
    temperature: "Loading...",
    condition: "Loading...",
    dayNight: "Loading...",
    icon: <Cloud className="w-20 h-20 opacity-80" />,
  });

  const [sunriseSunset, setSunriseSunset] = useState<
    Array<{ date: string; sunrise: string; sunset: string }>
  >([]);

  const [hourlyForecast, setHourlyForecast] = useState<
    Array<{ time: string; temp: string; condition: string }>
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,weather_code&hourly=temperature_2m,weather_code&daily=sunrise,sunset&timezone=Asia/Kolkata`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Current Weather
        const temp = data.current.temperature_2m.toFixed(1);
        const isDay = data.current.is_day === 1 ? "Day" : "Night";
        const code = data.current.weather_code;
        const { condition, icon } = getConditionFromCode(code);

        setCurrentWeather({
          temperature: temp,
          condition,
          dayNight: isDay,
          icon,
        });

        // Sunrise & Sunset (next 6 days starting today)
        const dailyDates = data.daily.time.slice(0, 6);
        const dailySunrises = data.daily.sunrise.slice(0, 6);
        const dailySunsets = data.daily.sunset.slice(0, 6);

        const formattedSunriseSunset = dailyDates.map(
          (dateStr: string, index: number) => {
            const date = new Date(dateStr);
            const formattedDate = date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
            const sunriseTime = new Date(
              dailySunrises[index]
            ).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            });
            const sunsetTime = new Date(dailySunsets[index]).toLocaleTimeString(
              "en-US",
              { hour: "numeric", minute: "2-digit" }
            );
            return {
              date: formattedDate,
              sunrise: sunriseTime,
              sunset: sunsetTime,
            };
          }
        );

        setSunriseSunset(formattedSunriseSunset);

        // Hourly Forecast (next 8 slots, roughly every 3 hours)
        const hourlyTimes = data.hourly.time.slice(0, 8);
        const hourlyTemps = data.hourly.temperature_2m.slice(0, 8);
        const hourlyCodes = data.hourly.weather_code.slice(0, 8);

        const formattedHourly = hourlyTimes.map(
          (timeStr: string, index: number) => {
            const time = new Date(timeStr).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });
            const temp = hourlyTemps[index].toFixed(1);
            const code = hourlyCodes[index];
            const { condition } = getConditionFromCode(code);
            return { time, temp, condition };
          }
        );

        setHourlyForecast(formattedHourly);

        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch weather data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-20 text-center">Loading weather data...</div>;
  }

  if (error) {
    return <div className="py-20 text-center text-red-600">{error}</div>;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-amber-600">Weather</span> at our Location
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Current Weather</h3>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-6xl font-bold mb-2">
                  {currentWeather.temperature}°C
                </div>
                <div className="text-xl opacity-90">
                  {currentWeather.condition}
                </div>
              </div>
              <Cloud className="w-20 h-20 opacity-80" />
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Day/Night:</span>
                <span>{currentWeather.dayNight}</span>
              </div>
            </div>
          </div>

          {/* Sunrise & Sunset */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Daily Sunrise & Sunset
            </h3>
            <div className="space-y-3">
              {sunriseSunset.map((day, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {day.date}
                  </span>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Sunrise className="w-4 h-4 text-amber-600" />
                      <span className="text-gray-700">{day.sunrise}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Sunset className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">{day.sunset}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hourly Forecast */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Hourly Forecast
            </h3>
            <div className="space-y-3">
              {hourlyForecast.map((hour, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg hover:from-amber-100 hover:to-orange-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 w-20">
                    {hour.time}
                  </span>
                  <span className="text-2xl font-bold text-amber-600">
                    {hour.temp}°C
                  </span>
                  <span className="text-sm text-gray-600 text-right flex-1 ml-2">
                    {hour.condition}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
