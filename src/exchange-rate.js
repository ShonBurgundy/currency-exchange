//Business Logic
export class ExchangeRate {
  
  async getExchangeRate(currency1) {
    try {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/${currency1}`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      alert("Service is down, go outside, but maintain social distancing!");
      return false;
    }
  }

  calculateRate (conversionRate, dollarAmount) {
    let finalRate = conversionRate * dollarAmount;
    return "You're conversion would come out to " + finalRate.toFixed(2);
  }
}
 