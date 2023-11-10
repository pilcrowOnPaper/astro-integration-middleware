import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    {
      name: "middleware-test",
      hooks: {
        "astro:config:setup": ({ addMiddleware }) => {
          addMiddleware({
            order: "pre",
            entrypoint: "./middleware.js",
          });
        },
      },
    },
  ],
});
