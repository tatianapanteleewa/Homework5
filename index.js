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

function evenNumber(userNumber) {
    if (userNumber % 2 == 0) {
        return `Число четное`;
    } else {
        return `Число нечетное`;
    }

}

evenNumber(7);

//Задание 3

function squareNumber1(num) {
    console.log(num ** 2);
}

function squareNumber2(num) {
    return num ** 2;
}

squareNumber1(3);
console.log(squareNumber2(4));

//Задание 4

function age() {

    let userAge = Number(prompt('Сколько вам лет?'));

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

function ifNumber(userAnswer1, userAnswer2) {
    if (Number.isNaN(userAnswer1) === true || Number.isNaN(userAnswer2) === true) {
        return ("Одно или оба значения не являются числом");
    } else {
        return (userAnswer1 * userAnswer2);
    }

}

ifNumber(3, 5);

//Задание 6

function cube() {
    let userN = prompt('Введите число');
    if (isNaN(userN) === false) {
        let numberCube = userN ** 3;
        return (`n в кубе равняется ${numberCube}`);
    } else {
        return ('Переданный параметр не является числом');
    }
}

cube();