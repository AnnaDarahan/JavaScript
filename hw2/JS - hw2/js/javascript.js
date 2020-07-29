// Задание №1
console.log(1 == 2);
console.log(1 != 2);
console.log(1 == 1);
console.log(1 != 1);
console.log("text" == 5);
console.log("text" != 5);
console.log("text" == "Text");
console.log("text" == "text");
console.log(true == "true");
console.log(true == false);
console.log(false == 0);
console.log(false === 0);
console.log("" == false);
console.log("" !== false);
console.log(undefined === null);
console.log(undefined == null);
console.log(17 === true);
console.log("17" === true);
console.log({} === {});
// Задание №2, №3
var rate = prompt("Введите любое целое число", "");
if (isNaN(rate)) alert("Это не число");
else alert(rate % 2 == false ? "Число чётное" : "Число нечётное");
// Задание №4
let number = 8816;
console.log((number += 8816));
console.log((number *= 8816));
console.log((number %= 8816));
// Задание №5
let a = "100";
console.log(typeof Number(a));
console.log(typeof +a);
console.log(typeof -a);
// Задание №6
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let firstNumber = getRandomInt(1, 88);
let lastNumber = getRandomInt(1, 16);
let formulaNumber =
  (firstNumber + lastNumber) * (firstNumber - lastNumber) ==
  firstNumber ** 2 - lastNumber ** 2;
console.log(formulaNumber);
// Задание со звёздочкой №1
var formula0 = prompt("Введите первое число");
var formula1 = prompt("Введите второе число");
var formula2 = prompt("Введите третье число");
formula0 = Number(formula0) + 10;
formula1 = Number(formula1) + 10;
formula2 = Number(formula2) + 10;
alert(Number(formula0) + formula1 + formula2);
// Задание со звёздочкой №2
let sideA = +prompt("Введите первое число");
let sideB = +prompt("Введите второе число");
let sideC = +prompt("Введите третье число");
let triangle =
  (sideA + sideB > sideC == sideB + sideC > sideA) == sideA + sideC > sideB;
if (triangle == true) alert("Треугольник существует");
if (triangle == false) alert("Треугольник не существует");
console.log(triangle);
// Задание со звёздочкой №3
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let firstRate = getRandomInt(1, 30);
let lastRate = getRandomInt(1, 75);
let formula =
  (firstRate + lastRate) ** 3 ==
  firstRate ** 3 +
    3 * (firstRate ** 2 * lastRate) +
    3 * (firstRate * lastRate ** 2) +
    lastRate ** 3;
console.log(formula);
