const inputFirst = document.querySelector(".numberFirst");
const inputSecond = document.querySelector(".numberSecond");
const button = document.querySelector("button");
const result = document.querySelector("p");
const reset = document.querySelector(".reset")

button.addEventListener("click", function () {
    if (inputFirst.value && inputSecond.value) {
    if (inputFirst.value > inputSecond.value) {
        result.innerText = `${inputFirst.value} é maior que ${inputSecond.value}`;
    } else if (inputFirst.value < inputSecond.value) {
        result.innerText = `${inputFirst.value} é menor que ${inputSecond.value}`;
    } else {
        result.innerText = `${inputFirst.value} é igual a ${inputSecond.value}`;
    }
}
})

reset.addEventListener("click", function () {
    result.innerText = ""
})

