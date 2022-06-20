var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let funcionario = Number(lines.shift());
let horaTrabalhada= Number(lines.shift());
let ganhoPorHora = parseFloat(lines.shift());
let salario = horaTrabalhada * ganhoPorHora;

console.log(`NUMBER = ${funcionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);