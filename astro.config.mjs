import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://the.graphics.gd/",
  redirects: {
    "/": "/guide",
  },
  integrations: [
    starlight({
      title: "the.graphics.gd/guide",

      social: {
        github: "https://github.com/quaadgras/graphics.gd",
      },
      customCss: ["./src/styles/iframe.css"],
      sidebar: [
        {
          label: "Guide",
          autogenerate: { directory: "guide" },
          order: 1,
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
          order: 2,
        },
        {
          label: "License",
          autogenerate: { directory: "license" },
          order: 3,
        },
      ],
    }),
  ],
});
