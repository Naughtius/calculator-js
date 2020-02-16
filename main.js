let pointBtn = document.querySelector(".calculator-wrap__dot");
let cleanBtn = document.querySelector(".calculator-wrap__clean");
let numbersBtn = document.querySelectorAll(".calculator-wrap__number");
let symbolBtn = document.querySelectorAll(".calculator-wrap__symbol");
let bracketBtn = document.querySelectorAll(".calculator-wrap__bkt");
let equallyBtn = document.querySelector(".calculator-wrap__equally");
let textResult = document.querySelector(".calculator-form");

numbersBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
        textResult.value += e.target.value;
    });
});

symbolBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
        textResult.value = e.target.value;
    });
});

bracketBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
        textResult.value += e.target.value;
    });
});

cleanBtn.addEventListener("click", () => {
    textResult.value = '';
});

equallyBtn.addEventListener("click", () => {
    textResult.value = '';
});

pointBtn.addEventListener("click", () => {
    textResult.value += '.';
});