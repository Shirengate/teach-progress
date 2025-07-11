import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        cleanupOutdatedCaches: true,
      },
      manifest: {
        theme_color: "#edebef",
        background_color: "#c7c7c7",
        icons: [
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "/icon512_maskable.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "/icon512_rounded.png",
            type: "image/png",
          },
        ],
        orientation: "any",
        display: "standalone",
        lang: "ru",
        name: "Teach Progress",
        short_name: "TP",
        start_url: "/",
        description: "My app for tacking your progress ",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
