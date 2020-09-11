{
    let heightElement = document.querySelector(".jsBmiHeight");
    let weightElement = document.querySelector(".jsBmiWeight");
    let formElement = document.querySelector(".jsForm");
    let bmiElement = document.querySelector(".jsBmiResult");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let height = heightElement.value;
        let weight = weightElement.value;
        let bmi = weight / ((height / 100) ** 2);

        if (bmi < 18.5) {
            bmiElement.innerText = `Twoje BMI wynosi ${bmi.toFixed(2)}, masz niedowagę`;
        } else if (bmi > 24.99) {
            bmiElement.innerText = `Twoje BMI wynosi ${bmi.toFixed(2)}, masz nadwagę`;
        } else {
            bmiElement.innerText = `Twoje BMI wynosi ${bmi.toFixed(2)} i jest w normie, gratuluję!`;
        }
    });
}

{
    let amountElement = document.querySelector(".jsAmount");
    let resultElement = document.querySelector(".jsCurrencyResult");
    let formElement = document.querySelector(".jsCurrencyForm");
    let currencyElement = document.querySelector(".jsCurrency");

    let rateUSD = 3.9058;
    let rateEUR = 4.4278;
    let rateGBP = 4.9384;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let amount = +amountElement.value;
        let currency = currencyElement.value;

        let result;

        switch (currency) {
            case "EUR":
                result = amount / rateEUR;
                break;

            case "USD":
                result = amount / rateUSD;
                break;

            case "GBP":
                result = amount / rateGBP;
                break;
        }

            resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
        
    });
















}