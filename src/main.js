//UI
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeRate } from './../src/exchange-rate.js';

$(document).ready(function() {
  $("#currencyExchange").click(function() {
    let currency1 = $("#currencyFrom").val();
    if (currency1 === "null")
      return $("#output").text("You have to pick a currency!");
    let currency2 = $("#currencyTo").val();
    if (currency2 === "null")
      return $("#output").text("You have to pick a currency!");
    let dollarAmount = $("#currencyInput").val();
    if (!dollarAmount) {
      return $("#output").text("You must input currency amount, foo!");
    }
    (async () => {
      let exchangeRate = new ExchangeRate();
      const response = await exchangeRate.getExchangeRate(currency1);
      if (response.error === "invalid-key") {
        alert("You shall not pass! -Gandolf");
      } else if (response.error) {
        alert(response.error);
      }
      let conversionRate = response.conversion_rates[currency2];
      const calculated = exchangeRate.calculateRate(conversionRate, dollarAmount);
      $("#output").text(calculated + " " + currency2);
    })();
  });
});