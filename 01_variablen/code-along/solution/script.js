let name = 'Lea';
let money_at_home = 300;
let money_at_bank = 30000.30;
// name = 'Marco';

// let greeting = 'Hallo ' + name
// let greeting = `Hallo ${name}, schön bist du da!`;
// let greeting_scream = greeting.toUpperCase();

let money = money_at_home + money_at_bank;
let rent = 2000;

// eom = end of month
let money_eom = money - rent;
let interest = 1.05;
let money_eom_interest = money_eom * interest;
money_eom_interest = Math.round(money_eom_interest)

console.log(`Ich bin ${name} und ich habe ${ money_eom_interest } CHF.`)
// console.log('Ich bin ' + name + ' und ich habe ' + money_eom_interest + ' CHF.')

let x = '2'
let y = 4
console.log(x + y)
