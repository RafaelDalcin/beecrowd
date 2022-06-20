var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());

const valores = [3600, 60, 1];
let resultado = [];

for (let i = 0; i < valores.length; i++) {
    resultado.push (parseInt(valor / valores[i]));
    valor = valor % valores[i];
}

console.log(resultado.join(':'));