var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempoGasto = Number(lines.shift());
let velocidadeMedia = Number(lines.shift());
let distancia = velocidadeMedia * tempoGasto
let quantidadeLitros = distancia / 12

console.log(`${quantidadeLitros.toFixed(3)}`);