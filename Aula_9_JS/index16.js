const first = document.querySelector("#input-first");
const second = document.querySelector("#input-second");
const soma = document.querySelector("#soma");
const subtracao = document.querySelector("#subtracao");
const multiplicacao = document.querySelector("#multiplicacao");
const divisao = document.querySelector("#divisao");
const potenciacao = document.querySelector("#potenciacao");
const p = document.querySelector("p");

// Soma
function somar(first, second) {
    if (first.value && second.value) {
        p.innerText = parseFloat(first.value) + parseFloat(second.value);
    } else if (!first.value || !second.value) {
        alert("Preencha ambos os campos!");
    }
}

soma.addEventListener("click", function () {
    somar(first, second);
});

// Subtracao
function subtrair(first, second) {
    if (first.value && second.value) {
        p.innerText = parseFloat(first.value) - parseFloat(second.value);
    } else if (!first.value || !second.value) {
        alert("Preencha ambos os campos!");
    }
}

subtracao.addEventListener("click", function () {
    subtrair(first, second);
});

// Multiplicao
function multiplicar(first, second) {
    if (first.value && second.value) {
        p.innerText = parseFloat(first.value) * parseFloat(second.value);
    } else if (!first.value || !second.value) {
        alert("Preencha ambos os campos!");
    }
}

multiplicacao.addEventListener("click", function () {
    multiplicar(first, second);
});

// Divisao
function dividir(first, second) {
    if (first.value && second.value) {
        p.innerText = parseFloat(first.value) / parseFloat(second.value);
    } else if (!first.value || !second.value) {
        alert("Preencha ambos os campos!");
    }
}

divisao.addEventListener("click", function () {
    dividir(first, second);
});

// Potenciacao
function potencializar(first, second) {
    if (first.value && second.value) {
        p.innerText = Math.pow(parseFloat(first.value), parseFloat(second.value));
    } else if (!first.value || !second.value) {
        alert("Preencha ambos os campos!");
    }
}

potenciacao.addEventListener("click", function () {
    potencializar(first, second);
});