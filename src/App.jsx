import { useEffect, useState } from "react";
import "./App.css";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [cityName, setCityName] = useState("");
  const { weatherData, loading, toFetchWeather, fetchByLocation } =
    useWeather();
  const { name, main, weather } = weatherData || {};
  const { temp, humidity } = main || { temp: 0, humidity: 0 };
  const { icon, description, wind } = weather?.[0] || {
    icon: "",
    description: "",
    wind: {
      speed: 0,
    },
  };

  useEffect(() => {
    fetchByLocation();
  }, []);

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center p-4 font-sans flex content-center items-center">
      <div className="bg-black/30 absolute inset-0"></div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 m-auto flex flex-col content-center items-center gap-8">
        <div className="w-full flex gap-4">
          <input
            type="text"
            value={cityName}
            placeholder="Cari kota..."
            className="w-full bg-white/10 px-4 py-2 rounded-3xl border border-white/20 text-white"
            onChange={(e) => setCityName(e.target.value)}
            onKeyDown={(e) => {
              e.key === "Enter" && toFetchWeather(cityName);
            }}
          />
          <button
            className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white"
            tabIndex="0"
            onClick={() => {
              toFetchWeather(cityName);
            }}
          >
            🔍
          </button>
        </div>
        <div className="flex flex-col content-center items-center gap-3">
          {loading ? (
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-32 bg-white/20 rounded-lg mb-4"></div>
              <div className="h-24 w-24 bg-white/20 rounded-full"></div>
            </div>
          ) : (
            <>
              <div className="grid gap-4 place-items-center">
                <p className="text-white font-medium text-3xl">{name}</p>
                <p className="text-white font-bold text-8xl">{temp}°C</p>
              </div>
            </>
          )}
          <div>
            <p className="gap-4 text-white font-light text-xl flex items-center">
              <img
                className="w-1/5"
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              />
              <span className="capitalize">{description}</span>
            </p>
          </div>
        </div>
        <div className="w-full pt-6 border-t border-white/20 grid grid-cols-2 place-items-center text-sm text-white/80 font-light">
          <div className="grid grid-rows-2 place-items-center">
            <p>Kelembaban</p>
            <p className="font-semibold">{humidity}%</p>
          </div>
          <div className="grid grid-rows-2 place-items-center">
            <p>Kecepatan Angin</p>
            <p className="font-semibold">{speed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
