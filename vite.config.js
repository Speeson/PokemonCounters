import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/PokemonCounters/", // <- EXACTO el nombre del repo
});
