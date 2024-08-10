const passwordBox = document.getElementById("password");
const lenght = 12;


const upperCase ="ABCDEFGHIJKLMNOPQURSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqurstuvwxyz";
const number ="0123456789";
const symbol ="!@#$%^&*()_+{}|:?/][]><";
const allChars = upperCase + lowerCase + number + symbol;

let createPassword = () =>{
    let password ="";
    password+=upperCase[Math.floor(Math.random() * upperCase.length)]
    password+=lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password+=number[Math.floor(Math.random() * number.length)]
    password+=symbol[Math.floor(Math.random() * symbol.length)]

    while (lenght >password.length) {
        password+=allChars[Math.floor(Math.random() * allChars.length)]

    }
    passwordBox.value = password
}
let copyPassword = () =>{
    passwordBox.select();
    document.execCommand("copy")
}