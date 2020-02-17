let pointBtn = document.querySelector(".calculator-wrap__dot");
let cleanAllBtn = document.querySelector(".calculator-wrap__clean-all");
let cleanBtn = document.querySelector(".calculator-wrap__clean");
let numbersBtn = document.querySelectorAll(".calculator-wrap__number");
let symbolBtn = document.querySelectorAll(".calculator-wrap__symbol");
let degreeBtn = document.querySelectorAll(".calculator-wrap__degree");
let equallyBtn = document.querySelector(".calculator-wrap__equally");
let textForm = document.querySelector(".calculator-form");
let result = "";

numbersBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
        if (textForm.value > 0) {
            textForm.value += e.target.value;
            result += e.target.value;
        } else {
            textForm.value = e.target.value;
            result += e.target.value;
        }
    });
});

symbolBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
        textForm.value = e.target.value;
        result += e.target.value;
    });
});

degreeBtn.forEach((element) => {
    element.addEventListener("click", () => {
        textForm.value = Math.pow(textForm.value, 2);
        result = textForm.value
    });
});

cleanAllBtn.addEventListener("click", () => {
    textForm.value = "";
    result = "";
});

cleanBtn.addEventListener("click", () => {
    textForm.value = textForm.value.slice(0, textForm.value.length - 1);
});

pointBtn.addEventListener("click", () => {
    textForm.value += ".";
    result += ".";
});

equallyBtn.addEventListener("click", () => {
    console.log(result)
    textForm.value = eval(result);
});