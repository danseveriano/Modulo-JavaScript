let k = document.querySelector(".kilos");
let h = document.querySelector(".height");
const calc = document.querySelector(".calc");
const imc = document.querySelector(".imc")
const classification = document.querySelector(".classification")

calc.addEventListener("click", function () {
    if (k.value && h.value) {
        let result = k.value / Math.pow(h.value, 2);
        imc.value = result.toFixed(2);
        if (isNaN(k.value)) {
            imc.value = "Valor inválido inserido";
        } else if (isNaN(h.value)) {
            imc.value = "Valor inválido inserido";
        } else if (imc.value < 18.5) {
            classification.value = "Abaixo do peso";
        } else if (imc.value >= 18.5 && imc.value < 25) {
            classification.value = "Peso normal";
        } else if (imc.value >= 25 && imc.value < 30) {
            classification.value = "Sobrepeso (acima do peso ideal)";
        } else {
            classification.value = "Obesidade";
        }
    }
})