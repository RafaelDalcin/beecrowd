var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = Number(lines.shift());
let B = Number(lines.shift());
let PROD = A * B;

console.log(`PROD = ${PROD}`);