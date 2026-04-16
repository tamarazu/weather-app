import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center p-4 font-sans">
      {/* Overlay Gelap agar teks terbaca */}
      <div className="bg-black/30 absolute inset-0"></div>

      <div>
        <p>Ini card baruz ada cek yang baru ada test lagi</p>
      </div>
    </div>
  );
}

export default Home;
