import { defineConfig } from "vite";

const isCI = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

export default defineConfig({
  base: isCI && repository ? `/${repository}/` : "/",
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
