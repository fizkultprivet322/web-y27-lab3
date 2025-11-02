import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "./" : "/",
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
});
