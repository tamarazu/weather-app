import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Tambahkan bagian ini
    hmr: {
      overlay: true, // Menampilkan error di browser jika HMR gagal
    },
    watch: {
      usePolling: true,
    },
    host: true, // Memastikan bisa diakses via IP lokal
  },
});
