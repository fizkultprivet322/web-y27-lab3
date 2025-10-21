import { defineConfig } from "vite";

export default defineConfig({
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
