const fullName = document.querySelector('#name');
const birthDay = document.querySelector(".inputDay");
const birthMonth = document.querySelector(".inputMonth");
const birthYear = document.querySelector(".inputYear");
const heightNumber = document.querySelector(".inputWeight");
const weightNumber = document.querySelector(".inputHeigth");
const genderSelect = document.querySelector(".inputGender");
const button = document.querySelector(".button");

button.addEventListener('click', function () {
    let user = {
    name: fullName.value,
    dayBirthday: new Date(birthDay.value).getDate(),
    monthBirthday: new Date(birthMonth.value).getUTCMonth() + 1,
    yearBirthday: new Date(birthYear.value).getUTCFullYear(),
    weight: parseFloat(heightNumber.value),
    height: parseInt(weightNumber.value * 100),
    gender: genderSelect.value,
};

if (birthDay.value <= 0 || birthDay.value > 31){
    birthDay.value = "data"
    birthMonth.value = "não"
    birthYear.value = "existe"
} else if (birthMonth.value <= 0 || birthMonth.value > 12){
    birthDay.value = "data"
    birthMonth.value = "não"
    birthYear.value = "existe"
} else if (birthYear.value <= 0 || birthYear.value > 2021){
    birthDay.value = "insira"
    birthMonth.value = "outra"
    birthYear.value = "data"
} else {
    let maxDays
    switch (birthMonth.value) {
        case 1: maxDays = 31; break
        case 2: maxDays = 28; break
        case 3: maxDays = 31; break
        case 4: maxDays = 30; break
        case 5: maxDays = 31; break
        case 6: maxDays = 30; break
        case 7: maxDays = 31; break
        case 8: maxDays = 31; break
        case 9: maxDays = 30; break
        case 10: maxDays = 31; break
        case 11: maxDays = 30; break
        case 12: maxDays = 31; break
    }
    if (birthYear.value % 4 === 0 && birthMonth ===1) {
        maxDays = 29;
    } 
    if (birthDay.value > maxDays) {
        return false
    }
}

console.log(user);

});