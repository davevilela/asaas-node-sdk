import * as Asaas from "./client/sdk.gen";

export interface AsaasConfig {
  apiKey?: string;
  userAgent?: string;
  environment?: "sandbox" | "production";
}

export function createAsaasClient(config: AsaasConfig = {}) {
  const {
    apiKey = process.env.ASAAS_API_KEY,
    userAgent = "asaas-node-sdk",
    environment = process.env.NODE_ENV === "production"
      ? "production"
      : "sandbox",
  } = config;

  const baseUrl =
    environment === "production"
      ? "https://api.asaas.com"
      : "https://sandbox.asaas.com";

  Asaas.client.setConfig({
    baseUrl,
    headers: {
      "User-Agent": userAgent,
      access_token: apiKey,
    },
  });

  return Asaas;
}

export * from "./client/types.gen";

const client = createAsaasClient();
