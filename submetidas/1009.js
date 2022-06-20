var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = (lines.shift());
let salarioFixo = parseFloat(lines.shift());
let montanteDeVenda = parseFloat(lines.shift());
let salario = salarioFixo + (15/100 * montanteDeVenda)

console.log(`TOTAL = R$ ${salario.toFixed(2)}`);