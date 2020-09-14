{
    {

        const bmiResult = () => {

            const heightElement = document.querySelector(".jsBmiHeight");
            const weightElement = document.querySelector(".jsBmiWeight");

            const height = heightElement.value;
            const weight = weightElement.value;

            return weight / ((height / 100) ** 2);
        }

        const updateResultText = () => {

            const bmiElement = document.querySelector(".jsBmiResult");
            
            bmi = bmiResult();

            if (bmi < 18.5) {
                bmiElement.innerText = `Twoje BMI wynosi ${bmi.toFixed(2)}, masz niedowagę`;
            } else if (bmi > 24.99) {
                bmiElement.innerText = `Twoje BMI wynosi ${bmi.toFixed(2)}, masz nadwagę`;
            } else {
                bmiElement.innerText = `Twoje BMI wynosi ${bmi.toFixed(2)} i jest w normie, gratuluję!`;
            }

        }

        const onFormSubmit = (event) => {
            event.preventDefault();

            updateResultText();

        };

        const init = () => {
            const formElement = document.querySelector(".jsForm");

            formElement.addEventListener("submit", onFormSubmit);
        }
        init();
    }


}


{
    {
        const calculateResult = (amount, currency) => {
            const rateUSD = 3.9058;
            const rateEUR = 4.4278;
            const rateGBP = 4.9384;

            switch (currency) {
                case "EUR":
                    return amount / rateEUR;

                case "USD":
                    return amount / rateUSD;

                case "GBP":
                    return amount / rateGBP;
            }
        };

        const updateResultText = (amount, result, currency) => {
            const resultElement = document.querySelector(".jsCurrencyResult");
            resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
        }

        const onFormSubmit = (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".jsAmount");
            const currencyElement = document.querySelector(".jsCurrency");

            const amount = +amountElement.value;
            const currency = currencyElement.value;

            let result = calculateResult(amount, currency);

            updateResultText(amount, result, currency);
        };

        const init = () => {
            const formElement = document.querySelector(".jsCurrencyForm");

            formElement.addEventListener("submit", onFormSubmit);

        };
        init();
    }

}