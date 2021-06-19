// Быки и коровы.

let s = '';

//комп создает рандомное число без повторений

let compRandomeNumber = function (a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}


let compNumber = function () {
    let c = 0;
    for( let i = 0; i < 4; i++) {
         do {
            c = compRandomeNumber (0, 9);
         } while (s.indexOf(c) >= 0){
            s = s + c;
         }
    }
    return s;
}
console.log(compNumber());

// число компа розделяеться на 4 числа (firstCompNumber, secondCompNumber, thirdCompNumber, fourthCompNumber)

let firstCompNumber = (Math.floor(s % 10000 / 1000));
let secondCompNumber = (Math.floor(s % 1000 / 100));
let thirdCompNumber = (Math.floor(s % 100 / 10));
let fourthCompNumber = (s % 10);

console.log(firstCompNumber, secondCompNumber, thirdCompNumber, fourthCompNumber);

// пользователь вводит число

let userNumber = 3418;

let firstUserNumber = (Math.floor(userNumber % 10000 / 1000));
let secondUserNumber = (Math.floor(userNumber % 1000 / 100));
let thirdUserNumber = (Math.floor(userNumber % 100 / 10));
let fourthUserNumber = (userNumber % 10);

console.log(firstUserNumber, secondUserNumber, thirdUserNumber, fourthUserNumber);

// проверка совпадений числа компа и пользователся

if(firstUserNumber == firstCompNumber) {
    console.log(`${firstUserNumber} Bull`)
} else if(firstUserNumber == secondCompNumber || firstUserNumber == thirdCompNumber || firstUserNumber == fourthCompNumber) {
    console.log(`${firstUserNumber} Cow`)
} 

if(secondUserNumber == secondCompNumber) {
    console.log(`${secondUserNumber} Bull`)
} else if(secondUserNumber == firstCompNumber || secondUserNumber == thirdCompNumber || secondUserNumber == fourthCompNumber) {
    console.log(`${secondUserNumber} Cow`)
} 

if(thirdUserNumber == thirdCompNumber) {
    console.log(`${thirdUserNumber} Bull`)
} else if(thirdUserNumber == firstCompNumber || thirdUserNumber == secondCompNumber || thirdUserNumber == fourthCompNumber) {
    console.log(`${thirdUserNumber} Cow`)
} 

if(fourthUserNumber == fourthCompNumber) {
    console.log(`${fourthUserNumber} Bull`)
} else if(fourthUserNumber == firstCompNumber || fourthUserNumber == thirdCompNumber || fourthUserNumber == secondCompNumber) {
    console.log(`${fourthUserNumber} Cow`)
} 

if(firstUserNumber == firstCompNumber && secondUserNumber == secondCompNumber && thirdUserNumber == thirdCompNumber && fourthUserNumber == fourthCompNumber) {
    console.log('You Win!!')
}
