// Zadanie 1
let h='Hello';
let w='world!';
let hw=`${h} ${w}`;
console.log(hw);
// Zadanie 2
const multiply = (number1 = 1,number2 = 1) => console.log(number1*number2);
multiply(2);
// Zadanie 3
const average = (...args) => {var aver=0;args.forEach(arg => {return aver=aver + arg/(args.length);});console.log(aver)};
average(3,4,5);
// Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);
// Zadanie 5
const strange = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,imię, , nazwisko] = strange;
console.log(imię,' ', nazwisko);