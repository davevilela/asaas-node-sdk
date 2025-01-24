# Asaas Node SDK Examples

This directory contains examples of how to use the Asaas Node SDK in different environments.

## Examples Structure

- `typescript/` - TypeScript examples showing basic usage with ESM imports
- `javascript/` - JavaScript examples showing CommonJS usage
- `nestjs/` - NestJS service example showing integration with NestJS

## Running the Examples

### Prerequisites

1. Install dependencies:
```bash
npm install asaas-node-sdk
# or
yarn add asaas-node-sdk
# or
pnpm add asaas-node-sdk
# or
bun add asaas-node-sdk
```

2. Set up environment variables:
```bash
export ASAAS_API_KEY=your_api_key_here
```

### TypeScript Example

```bash
cd typescript
ts-node basic-usage.ts
```

### JavaScript Example

```bash
cd javascript
node basic-usage.js
```

### NestJS Example

The NestJS example shows how to create an injectable service that wraps the Asaas SDK. To use it in your NestJS application:

1. Copy `asaas.service.ts` to your services directory
2. Import `AsaasService` in your module:

```typescript
import { Module } from '@nestjs/common';
import { AsaasService } from './asaas.service';

@Module({
  providers: [AsaasService],
  exports: [AsaasService],
})
export class AsaasModule {}
