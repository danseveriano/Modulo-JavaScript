{/* <label for="operator" class="fraction">Número não inteiro </label>
<input class="numberFraction" type="text" size="15" />
<button class="round" type="button" value="round"></button>
<label for="result">Número Inteiro <input disabled="disabled" class="numberRound" /></label> */}

let number = document.querySelector(".numberFraction");
const round = document.querySelector(".round");
const x = document.querySelector(".numberRound");

round.addEventListener("click", function () {
    if (number.value) {
        if (isNaN(number.value)) {
            x.value = "Valor inválido inserido";
        } else { 
            x.value = Math.floor(number.value);
        }
    }
    })