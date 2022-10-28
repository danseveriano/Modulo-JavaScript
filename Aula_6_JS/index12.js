const cep = document.querySelector(".cep")

cep.addEventListener("input", function (event){
    const numbers = event.target.value.replace(/[^0-9]/g, "");
    const cursor = cep.selectionStart;

    switch (numbers.length) {
        case 0:
        case 1:
        case 2:         
        case 3:
        case 4:
        case 5:  
            cep.value = numbers;         
            break;
        default:
            cep.value = `${numbers.slice(0, 5)} - ${numbers.slice(5, 8)}`;
    };

    switch (numbers.length) {
        case 6:
            if (cursor === 6 && event.inputType !== "deleteContentBackward") {
                cep.setSelectionRange(cursor + 1);
                break
            }
        default:
            cep.setSelectionRange(cursor, cursor);
    };
});