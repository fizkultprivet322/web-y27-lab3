import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "./" : "/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        catalog: "catalog.html",
        blog: "blog.html",
        about: "about.html",
      }
    }
  }
}));
