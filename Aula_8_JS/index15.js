const form = document.querySelector("#form");
const button = document.querySelector("button");
const p = document.querySelector("p");
const reset = document.querySelector(".reset");

button.addEventListener("click", function () {
    try {
        let obj = `{"mensagem": "${form.value}"}`;
        let json = JSON.parse(obj);
        console.log(json);
        p.innerText = "Parsable JSON string!"; 
    } catch (error) {
        console.log(error);
    }
})

reset.addEventListener("click", function () {
    form.value = "";
    p.innerText = "";
})
