const select = document.querySelector(".classicCars");
const img = document.querySelector("img");

select.addEventListener('change', function (event) {
    img.src = `./images/${event.target.value}.png`;

    if(event.target.value == "select") {
        img.src = "";
    }
})