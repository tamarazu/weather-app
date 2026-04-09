// Kerangka dasar UI yang bisa kamu mulai
function WeatherApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-lg w-full max-w-md border border-white/30 text-white">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Cari kota..."
          className="w-full p-3 rounded-xl bg-white/10 outline-none placeholder:text-white/70"
        />

        {/* Main Info */}
        <div className="text-center mt-10">
          <h1 className="text-6xl font-bold">28°C</h1>
          <p className="text-xl">Jakarta</p>
          <p className="mt-2 font-light">Cerah Berawan</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
