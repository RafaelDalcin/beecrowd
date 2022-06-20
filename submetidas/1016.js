var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = lines.shift();
tempo = distancia * 2
console.log(`${tempo} minutos`);