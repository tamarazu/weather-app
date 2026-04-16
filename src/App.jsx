import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Jakarta");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "78bbe6e941df4fa7afc5923c2bb74f9d";
  const toFetchWeather = async (city) => {
    try {
      console.log(city);
      setLoading(true);
      // const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=id`
      // );
      // const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("kota tidak ditemukan");
      }
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center p-4 font-sans flex content-center items-center">
      <div className="bg-black/30 absolute inset-0"></div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 m-auto flex flex-col content-center items-center gap-8">
        <div className="w-full flex gap-4">
          <input
            type="text"
            placeholder="Cari kota..."
            className="w-full bg-white/10 px-4 py-2 rounded-3xl border border-white/20 text-white"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white"
            onClick={toFetchWeather}
          >
            🔍
          </button>
        </div>
        <div className="flex flex-col content-center items-center gap-3">
          <div>
            <p className="text-white font-medium text-3xl">Jakarta, ID</p>
          </div>
          <div>
            <p className="text-white font-bold text-8xl">28°C</p>
          </div>
          <div>
            <p className="text-white font-light text-xl">
              ⛅ <span className="capitalize">cerah berawan</span>
            </p>
          </div>
        </div>
        <div className="w-full pt-6 border-t border-white/20 grid grid-cols-2 place-items-center text-sm text-white/80 font-light">
          <div className="grid grid-rows-2 place-items-center">
            <p>Kelembaban</p>
            <p className="font-semibold">75%</p>
          </div>
          <div className="grid grid-rows-2 place-items-center">
            <p>Kecepatan Angin</p>
            <p className="font-semibold">12 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
