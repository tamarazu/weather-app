import { useState } from "react";
import { Search } from "lucide-react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  // return Home();
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center p-4 font-sans flex content-center items-center">
      {/* Overlay Gelap agar teks terbaca */}
      <div className="bg-black/30 absolute inset-0"></div>

      <div className="w-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 m-auto flex flex-col content-center items-center">
        <div className="w-full flex gap-4">
          <input
            type="text"
            placeholder="Cari kota..."
            className="w-full bg-white/10 px-4 py-2 rounded-3xl border border-white/20 text-white"
          />
          <button className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white">
            <Search />
          </button>
        </div>
        <div>Jakarta, ID</div>
        <div>
          <p>28 C</p>
        </div>
        <div>
          <p>gambar, cerah berawan</p>
        </div>
        <div>Border</div>
        <div>
          <div>
            <p>Kelembaban</p>
            <p>75%</p>
          </div>
          <div>
            <p>Kecepatan Angin</p>
            <p>12 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
