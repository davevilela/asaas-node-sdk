import { describe, expect, it } from "bun:test";
import { createAsaasClient } from '../index';

describe('Asaas SDK', () => {
  const sdk = createAsaasClient({
    apiKey: process.env.ASAAS_API_KEY || 'your-api-key',
    environment: 'sandbox',
  });

  describe('Configuration', () => {
    it('should create SDK instance with default config', () => {
      const defaultSdk = createAsaasClient();
      expect(defaultSdk).toBeDefined();
    });

    it('should create SDK instance with custom config', () => {
      const customSdk = createAsaasClient({
        apiKey: 'custom-key',
        environment: 'sandbox',
        userAgent: 'custom-agent',
      });
      expect(customSdk).toBeDefined();
    });
  });

  describe('API Methods', () => {
    it('should have all API methods available', () => {
      // Payments
      expect(typeof sdk.listPayments).toBe('function');
      expect(typeof sdk.createNewPayment).toBe('function');
      expect(typeof sdk.retrieveASinglePayment).toBe('function');
      expect(typeof sdk.updateExistingPayment).toBe('function');
      expect(typeof sdk.deletePayment).toBe('function');

      // Customers
      expect(typeof sdk.listCustomers).toBe('function');
      expect(typeof sdk.createNewCustomer).toBe('function');
      expect(typeof sdk.retrieveASingleCustomer).toBe('function');
      expect(typeof sdk.updateExistingCustomer).toBe('function');
      expect(typeof sdk.removeCustomer).toBe('function');

      // Subscriptions
      expect(typeof sdk.listSubscriptions).toBe('function');
      expect(typeof sdk.createNewSubscription).toBe('function');
      expect(typeof sdk.retrieveASingleSubscription).toBe('function');
      expect(typeof sdk.updateExistingSubscription).toBe('function');
      expect(typeof sdk.removeSubscription).toBe('function');

      // Pix
      expect(typeof sdk.createStaticQrcode).toBe('function');
      expect(typeof sdk.listKeys).toBe('function');
      expect(typeof sdk.createAKey).toBe('function');

      // Finance
      expect(typeof sdk.retrieveAccountBalance).toBe('function');
      expect(typeof sdk.billingStatistics).toBe('function');

      // Account
      expect(typeof sdk.retrieveBusinessData).toBe('function');
      expect(typeof sdk.updateBusinessData).toBe('function');
    });
  });
});
