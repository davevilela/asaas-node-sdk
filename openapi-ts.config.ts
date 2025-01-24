import { defaultPlugins, defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "https://docs.asaas.com/openapi/6629591da8894c001e4e7998",
  output: {
    format: "prettier",
    lint: "eslint",
    path: "./src/client",
  },
  plugins: [
    ...defaultPlugins,
    "@hey-api/schemas",
    {
      dates: true,
      name: "@hey-api/transformers",
    },
    {
      enums: "javascript",
      name: "@hey-api/typescript",
    },
    {
      asClass: false,
      throwOnError: true,

      name: "@hey-api/sdk",
    },
  ],
});
