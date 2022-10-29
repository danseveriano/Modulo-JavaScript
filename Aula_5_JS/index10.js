const select = document.querySelector("select");
const button = document.querySelector(".button");
const result = document.querySelector(".result");
const img = document.querySelector("img");
const product = document.querySelector("h3")
const price = document.querySelector("h4")
const text = document.querySelector("p")

button.addEventListener('click', function(event) {

    switch(select.value){
        case "brownie":
            img.src = `./images/brownie.png`;
            product.innerText ="Brownie Tradicional"
            price.innerText = "R$ 8,00"
            text.innerText = "Brownie Tradicional 50% Cacau: Produção Artesanal"
            break;
        case "nozes":
            img.src = `./images/nozes.png`;
            product.innerText ="Brownie De Nozes"
            price.innerText = "R$ 10,00"
            text.innerText = "Brownie De Nozes 50% Cacau: Produção Artesanal"
            break;
        case "pizza":
            img.src = `./images/pizza.png`;
            product.innerText ="Pizza Brownie"
            price.innerText = "R$ 12,00"
            text.innerText = "Pizza Brownie com Cobertura e Complementos: Producão Artesanal"
            break;
        case "bolinho":
            img.src = `./images/bolinho.png`;
            product.innerText ="Brownitone"
            price.innerText = "R$ 10,00"
            text.innerText = "Brownitone de Chocolate recheado com Mouse de Maracujá: Produção artesanal" 
            break;
        case "marmitinha":
            img.src = `./images/marmitinha.png`;
            product.innerText ="Marmitinha de Brownie"
            price.innerText = "R$ 12,00"
            text.innerText = "Pedaços de Brownie Tradicional 50% Cacau: Producão Artesanal"
            break;
        case "redVelvet":
            img.src = `./images/redVelvet.png`;
            product.innerText ="Brownie Red Velvet"
            price.innerText = "R$ 10,00"
            text.innerText = "Brownie Red VelveT recheado com brigadeiro de Cream Cheese: Producão Artesanal"
            break;
        case "sorvet":
            img.src = `./images/sorvet.png`;
            product.innerText ="Brownie com Sorvete"
            price.innerText = "R$ 12,00"
            text.innerText = "Brownie Tradicional 50% Cacau com sorvete de Creme: Producão Artesanal"
            break;
        default:
            img.src = "";
            product.innerText = "";
            price.innerText = "";
            text.innerText = "";
            break;
    }
})