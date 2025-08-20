import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://the.graphics.gd/",
  redirects: {
    "/": "/guide",
  },
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    starlight({
      title: "the.graphics.gd/guide",

      social: [
        {
          icon: "github",
          label: "Github",
          href: "https://github.com/quaadgras/graphics.gd",
        },
      ],
      customCss: ["./src/styles/iframe.css"],
      sidebar: [
        {
          label: "Guide",
          autogenerate: { directory: "guide" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "License",
          autogenerate: { directory: "license" },
        },
      ],
    }),
  ],
});
