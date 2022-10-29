const date = document.querySelector("#date");
const button = document.querySelector(".transform");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const dayWeek = document.querySelector("#dayWeek");
const dateValue = document.querySelector("#dateValue");

button.addEventListener("click", function () {
    const dateFormated = new Date(date.value);
    
    dayWeek.value = dateFormated.getUTCDay() + 1;

    switch (dayWeek.value) {
        case "1":
            dayWeek.value = "domingo";
            break;
        case "2":
            dayWeek.value = "segunda-feira";
            break;
        case "3":
            dayWeek.value = "terça-feira";
            break;
        case "4":
            dayWeek.value = "quarta-feira";
            break;
        case "5":
            dayWeek.value = "quinta-feira";
            break;
        case "6":
            dayWeek.value = "sexta-feira";
            break;
        case "7":
            dayWeek.value = "sábado";
            break;
    }
    
    if (date.value) {
        day.value = dateFormated.getUTCDate();
        month.value = dateFormated.getUTCMonth() + 1;
        year.value = dateFormated.getUTCFullYear();
        dateValue.value = dateFormated.getTime();
    }

})