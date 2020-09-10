let heightElement = document.querySelector(".jsBmiHeight");
let weightElement = document.querySelector(".jsBmiWeight");
let formElement = document.querySelector(".jsForm");
let bmiElement = document.querySelector(".jsBmiButton");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let height = heightElement.value;
    let weight = weightElement.value;
    
    

    let bmi = weight / ((height / 100) ** 2 )
    
    console.log( bmi );
});
