const inputFirst = document.querySelector(".stringFirst");
const inputSecond = document.querySelector(".stringSecond");
const button = document.querySelector("button");
const result = document.querySelector("p");
const reset = document.querySelector(".reset")

button.addEventListener("click", function () {
    if (inputFirst.value && inputSecond.value) {
    if (inputFirst.value.length > inputSecond.value.length) {
        result.innerText = `${inputFirst.value} é maior que ${inputSecond.value}`;
    } else if (inputFirst.value.length < inputSecond.value.length) {
        result.innerText = `${inputFirst.value} é menor que ${inputSecond.value}`;
    } else {
        result.innerText = `${inputFirst.value} é igual a ${inputSecond.value}`;
    }
}
})

reset.addEventListener("click", function () {
    result.innerText = ""
})

