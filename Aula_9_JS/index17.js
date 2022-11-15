const dia = document.querySelector("#dia");
const mes = document.querySelector("#mes");
const ano = document.querySelector("#ano");
const genero = document.querySelector("#genero");
const button = document.querySelector("button");
const p = document.querySelector("p");

const vidaHomem = 73.1;
const vidaMulher = 80.1;

//Existem 365,25 dias em 1 ano. Para transformar qualquer valor de anos para dias,
//basta multiplicar o valor em anos pelo fator multiplicador, conhecido também como fator de conversão
//que, neste caso, é igual a 365,25.
//Assim, 1 ano vezes 365,25 corresponde a 365,25 dias.

button.addEventListener("click", function () {

    if (dia.value.length == 2 && mes.value.length == 2 && ano.value.length == 4) {
        let person = {
            birthdate: `${dia.value}/${mes.value}/${ano.value}`,
            gender: `${genero.value}`
        }

        let nascimento = new Date(parseInt(ano.value), parseInt(mes.value) - 1, parseInt(dia.value));

        let diferenca = Date.now() - nascimento.getTime();
        let idade = new Date(diferenca);
        let idadeFormatada = Math.abs(idade.getUTCFullYear() - 1970);

        if (genero.value == "masculino") {
            p.innerText = `Você nasceu em ${person.birthdate} e possui o gênero ${person.gender}. ` +
            `Portanto, faltam ${((vidaHomem - idadeFormatada) * 365.25).toFixed(2)} dias de vida para você.`;
        }

        if (genero.value == "feminino") {
            p.innerText = `Você nasceu em ${person.birthdate} e possui o gênero ${person.gender}. ` +
            `Portanto, faltam ${((vidaMulher - idadeFormatada) * 365.25).toFixed(2)} dias de vida para você.`;
        }
    } else {
        alert("Informe uma data válida")
    }
})