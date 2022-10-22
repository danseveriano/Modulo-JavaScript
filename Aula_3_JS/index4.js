let x = document.querySelector(".valorX");
let y = document.querySelector(".valorY");
const calc = document.querySelector(".calculate");
const result = document.querySelector("p");
const reset = document.querySelector(".reset")
const convert = document.querySelector(".converter")

calc.addEventListener('click', function () {
    if(x.value && y.value) {
        if(convert.value === "adicionar") {
            result.innerText = parseFloat(x.value) + parseFloat(y.value);
        } else if(convert.value === "subtrair") {
            result.innerText = parseFloat(x.value) - parseFloat(y.value);
        } else if (convert.value === "multiplicar") {
            result.innerText = parseFloat(x.value) * parseFloat(y.value);
        } else if (convert.value === "dividir") {
            result.innerText = parseFloat(x.value) / parseFloat(y.value);
        }
    }
})

reset.addEventListener('click', function () {
    x.value = "";
    y.value = "";
    result.innerText = "";
})
