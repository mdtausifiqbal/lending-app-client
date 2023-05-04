class PaymentService {
  static async makePayment(amount) {
    const response = await fetch('/api/payments', { // replace with real API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to make payment');
    }
  }

  static async getPaymentHistory() {
    const response = await fetch('/api/payments'); // replace with real API endpoint

    if (response.ok) {
      const data = await response.json();
      return data.payments;
    } else {
      throw new Error('Failed to get payment history');
    }
  }
}

export default PaymentService;
/*
The makePayment method sends a POST request to /api/payments with the payment amount. If the request is successful, it returns the response data. If the request is not successful (i.e., the response status was not OK), it throws an error.

The getPaymentHistory method sends a GET request to /api/payments to retrieve the payment history. If the request is successful, it returns the payments data from the response. If the request is not successful, it throws an error.

These are just examples and the actual implementation may vary based on the actual API you're working with.
*/