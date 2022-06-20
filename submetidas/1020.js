var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = lines.shift();

const valores = [365, 30, 1];
let resultado = [];

for (let i = 0; i < valores.length; i++) {
    resultado.push (parseInt(valor / valores[i]));
    valor = valor % valores[i];
}

console.log(`${resultado[0]} ano(s)\n${resultado[1]} mes(es)\n${resultado[2]} dia(s)`);