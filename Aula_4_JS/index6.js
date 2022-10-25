let min = document.querySelector(".valorMin");
let max = document.querySelector(".valorMax");
const draw = document.querySelector(".draw");
const result = document.querySelector(".classification");

draw.addEventListener("click", function () {
    if (min.value && max.value) {
        if (isNaN(min.value)) {
            result.value = "Valor inválido inserido";
        } else if (isNaN(max.value)) {
            result.value = "Valor inválido inserido";
        } else if (isNaN(min.value) && isNaN(max.value)) {
            result.value = "Valores inválidos inseridos";
        } else if (min.value >= max.value) {
            result.value = "Primeiro número deve ser menor que o último número"
        } else if (min.value < max.value) { 
            result.value = Math.floor(Math.random() * (max.value - min.value + 1) + min.value);
        }
    }
})
