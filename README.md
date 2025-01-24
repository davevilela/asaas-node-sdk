# Asaas Node SDK (Unofficial)

An unofficial Node.js/TypeScript SDK for the [Asaas](https://www.asaas.com/) payment platform API.

## Features

- 🚀 Built with Bun
- 📘 Full TypeScript support
- 🔄 Auto-generated from OpenAPI spec
- ⚡ Promise-based API
- 📦 Modern ESM package
- 🎯 Functional API design

## Installation

```bash
# Using npm
npm install asaas-node-sdk

# Using yarn
yarn add asaas-node-sdk

# Using pnpm
pnpm add asaas-node-sdk

# Using bun
bun add asaas-node-sdk
```

## Usage

```typescript
import { createAsaasClient } from 'asaas-node-sdk';

// Initialize the client
const asaas = createAsaasClient({
  apiKey: 'your_api_key',        // Optional: defaults to process.env.ASAAS_API_KEY
  environment: 'sandbox',         // Optional: defaults to 'sandbox' in development, 'production' otherwise
  userAgent: 'my-app/1.0.0'      // Optional: defaults to 'asaas-node-sdk'
});

// Example: List customers
const customers = await asaas.listCustomers({
  query: {
    limit: 10,
    offset: 0
  }
});

// Example: Create a new customer
const customer = await asaas.createNewCustomer({
  body: {
    name: 'John Doe',
    email: 'john@example.com',
    cpfCnpj: '00000000000',
    mobilePhone: '11999999999',
    address: 'Street Name',
    addressNumber: '123',
    province: 'Neighborhood',
    postalCode: '12345678',
    incomeValue: 0
  }
});

// Example: Create a payment
const payment = await asaas.createNewPayment({
  body: {
    customer: customer.id,
    billingType: 'BOLETO',
    value: 100.00,
    dueDate: '2024-12-31'
  }
});

// Example: Get account balance
const balance = await asaas.retrieveAccountBalance();
```

## Environment Variables

The SDK will automatically use these environment variables if available:

- `ASAAS_API_KEY`: Your Asaas API key
- `NODE_ENV`: Used to determine the default environment ('production' or 'sandbox')

## Development

1. Clone the repository
2. Install dependencies with `bun install`
3. Build the project with `bun run build`
4. Run tests with `bun test`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This is an unofficial SDK and is not affiliated with, maintained, authorized, endorsed, or sponsored by Asaas.
