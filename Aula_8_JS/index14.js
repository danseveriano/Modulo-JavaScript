const fullName = document.querySelector('#name');
const birthDate = document.querySelector(".birthDate");
const heightNumber = document.querySelector(".inputHeigth"); 
const weightNumber = document.querySelector(".inputWeight");
const genderSelect = document.querySelector(".inputGender");
const button = document.querySelector(".button");
const nameResult = document.querySelector('#nameHide');
const birthResult = document.querySelector(".birthHide");
const heightResult = document.querySelector(".heigthHide"); 
const weightResult = document.querySelector(".weightHide");
const genderResult = document.querySelector(".genderHide");
const formResult = document.querySelector("#formResult");


// Emitir erro de ‘Field “name” is invalid!’ se o nome estiver sem valor preenchido ou tenha tamanho inferior a 5 caracteres;
// Emitir erro ‘Field “birthDate” is invalid!’ se a data de nascimento for superior a data atual ou se a data for impossível (inválida);
// Emitir erro ‘Field “weight” is invalid!’, se não for do tipo numérico;
// Emitir erro ‘Field “height” is invalid!’, se não for do tipo numérico e não for inteiro;
// Emitir erro ‘Field “gender” is invalid!’, caso não seja um dos gêneros possíveis determinados por você no formulário.
// || new Date(birthDate.value) < new Date()

window.onload = function () {
  formResult.classList.add("hide");
}

button.addEventListener('click', function () {
  try {
    if(!fullName.value || fullName.value.length < 5)
    throw 'Field “name” is invalid!';
    if(new Date(birthDate.value) > new Date() || !birthDate.value || new Date(birthDate.value) <= new Date(1899, 11, 31))
    throw 'Field “birthDate” is invalid!';
    if(weightNumber.value === "" || isNaN(weightNumber.value))
    throw 'Field “weight” is invalid!';
    if(isNaN(heightNumber.value) || heightNumber.value != parseInt(heightNumber.value))
    throw 'Field “height” is invalid!';
    if(genderSelect.value == "Selecione")
    throw 'Field “gender” is invalid!';
  } catch (error) {
    console.log(error);
  }

    let user = {
    name: fullName.value,
    birth: new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).format(
        new Date(birthDate.value.slice(0, 10).split('-')),
      ),
    height: parseFloat(heightNumber.value),
    weight: parseInt(weightNumber.value),
    gender: genderSelect.value,
};

formResult.classList.remove("hide");

nameResult.value = user.name;
birthResult.value = user.birth;
weightResult.value = user.weight;
heightResult.value = user.height;
genderResult.value = user.gender;

console.log(JSON.stringify(user.name));
console.log(JSON.stringify(user.birth));
console.log(JSON.stringify(user.weight));
console.log(JSON.stringify(user.height));
console.log(JSON.stringify(user.gender));
});

