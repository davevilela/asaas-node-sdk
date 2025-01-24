import { createAsaasClient } from "asaas-node-sdk";

async function main() {
  // Initialize the client
  const asaas = createAsaasClient({
    apiKey: process.env.ASAAS_API_KEY, // Replace with your API key. If not specified, it will be retrieved from environment variables.
    environment: "sandbox", // Replace with your environment. If not specified, it will be set to 'sandbox'.
  });

  try {
    // Create a customer
    const customer = await asaas.createNewCustomer({
      body: {
        name: "John Doe",
        email: "john@example.com",
        cpfCnpj: "00000000000",
        mobilePhone: "11999999999",
        address: "Street Name",
        addressNumber: "123",
        province: "Neighborhood",
        postalCode: "12345678",
      },
    });

    if (!customer.error || !customer.data?.id) {
      return;
    }

    console.log("Customer created:", customer);

    // Create a payment for the customer
    const payment = await asaas.createNewPayment({
      body: {
        customer: customer.data?.id!,
        billingType: "BOLETO",
        value: 100.0,
        dueDate: new Date(),
        description: "Product purchase",
      },
    });
    console.log("Payment created:", payment);

    // List customer's payments
    const payments = await asaas.listPayments({
      query: {
        customer: customer.data?.id!,
        limit: 10,
        offset: 0,
      },
    });
    console.log("Customer payments:", payments);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
