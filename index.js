//Задание 1

const lessNumber = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }

}

console.log(lessNumber(8, 8));

//Задание 2

let userNumber = Number(prompt('Введите число'));

function evenNumber() {
    if (userNumber % 2 == 0) {
        return `Число четное`;
    } else {
        return `Число нечетное`;
    }

}

evenNumber();

//Задание 3

let userNum = Number(prompt('Введите число'));

function squareNumber() {
    console.log(userNum ** 2);
    return userNum ** 2;
}

squareNumber();

//Задание 4

let userAge = Number(prompt('Сколько вам лет?'));

function age() {
    if (userAge < 0) {
        alert("Вы ввели неправильное значение");
    } else if (userAge > 0 && userAge < 12) {
        alert("Привет, друг!");
    } else if (userAge >= 13) {
        alert("Добро пожаловать!");
    }

}

age();

//Задание 5

let userAnswer1 = prompt('Введите число №1');
let userAnswer2 = prompt('Введите число №2');

function ifNumber() {
    if (Number.isNaN(userAnswer1) === true || Number.isNaN(userAnswer2) === true) {
        alert("Одно или оба значения не являются числом");
    } else {
        alert(userAnswer1 * userAnswer2);
    }

}

ifNumber();

//Задание 6

let userN = prompt('Введите число');

function cube() {
    if (isNaN(userN) === false) {
        let numberCube = userN ** 3;
        alert(`n в кубе равняется ${numberCube}`);
    } else {
        alert('Переданный параметр не является числом');
    }
}

cube();

//Задание 7

let month = Number(prompt('Введите номер месяца'));

function season() {
    if (month === 1 || month === 2 || month === 12) {
        alert('Время года - Зима');
    } else if (month === 3 || month === 4 || month === 5) {
        alert('Время года - Весна');
    } else if (month === 6 || month === 7 || month === 8) {
        alert('Время года - Лето');
    } else if (month === 9 || month === 10 || month === 11) {
        alert('Время года - Осень');
    } else {
        alert('Введено некорректное значение')
    }
}

season();