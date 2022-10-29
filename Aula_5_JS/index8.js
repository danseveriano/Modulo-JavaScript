const number = document.querySelector("#number");
const button = document.querySelector(".transform");
const result = document.querySelector("#fullNumber");

button.addEventListener("click", function(){
    switch(number.value){
        case "0":
            result.value = "zero";
            break;
        case "1":
            result.value = "um";
            break;
        case "2":
            result.value = "dois";
            break;
        case "3":
            result.value = "três";
            break;
        case "4":
            result.value = "quatro";
            break;
        case "5":
            result.value = "cinco";
            break;
        case "6":
            result.value = "seis";
            break;
        case "7":
            result.value = "sete";
            break;
        case "8":
            result.value = "oito";
            break;
        case "9":
            result.value = "nove";
            break;
        case "10":
            result.value = "dez";
            break;
    }
    if(number.value > 10) {
        result.value = "digite um número entre 0 e 10";
    }
});
