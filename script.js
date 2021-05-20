let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_symb = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~'];

const compareRandom = ( ) => Math.random() - 0.5;

const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatePassword() {
    let arr = [];
    if(document.querySelector('#arr_num').checked || document.querySelector('#arr_en').checked || document.querySelector('#arr_EN').checked || document.querySelector('#arr_symb').checked) {

        if (document.querySelector('#arr_num').checked) arr = arr.concat(arr_num);
        if (document.querySelector('#arr_en').checked) arr = arr.concat(arr_en);
        if (document.querySelector('#arr_EN').checked) arr = arr.concat(arr_EN);
        if (document.querySelector('#arr_symb').checked) arr = arr.concat(arr_symb);

        arr.sort(compareRandom);

        let password = '';
        let passLenght = document.querySelector('#passLenght').value;

        for (let i = 0; i < passLenght; i++) {
            password += arr[randomInteger(0, arr.length - 1)];
        }

        document.querySelector('#result').textContent = password;
    } else {
        document.querySelector('#result').textContent = 'Виберіть символи!';
    }
}

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    }

document.querySelector('#pass_start').addEventListener('click', () => {
    generatePassword();
});

generatePassword();