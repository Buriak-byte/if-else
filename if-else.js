//1
const string = "akrakadavra"
const string1 = ""
if (string.length && string1.length > 0) {
console.log(prompt = "Обидва поля заповнені")
}
else{
console.log((prompt = "не всі поля заповнені"));
}
//2
const number = 5
const number1 = 13;
if(number + number1 >= 10){
    console.log((prompt = "Сума більша за 10"));
}
else{
    console.log((prompt = "Сума менша або дорівнює 10"));
}
//3 
const text = "ne mistyt JavaScript";
if(text.includes("JavaScript"))
{console.log(prompt = "Текст містить слово JavaScript")}
else {console.log(prompt = "Текст містить слово JavaScript")}
// 4
// Створіть змінну для зберігання числа. Перевірте, чи це число більше 10 і менше 20. Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
const three = 3
if(three > 10 && three < 20){
    console.log(prompt = "Число входить в діапазон від 10 до 20")
}
else{console.log(prompt = "Число не входить в діапазон від 10 до 20")}
// 5 Створіть змінні для зберігання значень полів (ім'я, email, пароль). Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ та крапку після нього, а пароль не менше 6 символів. Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".
const nama= "Oleksii"
const email = ".this-is-not-my-email0@.gmail.com";
const password = 1234567890
if( nama.length > 2 && email.includes("@.")&& password.length > 5){
    console.log(prompt = "Перенаправлення на іншу сторінку")}
else {console.log(prompt = "Помилка: неправильне заповнення")}