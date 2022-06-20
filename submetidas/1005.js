var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let MEDIA = ((A * 7/2) + (B * 15/2)) / 11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);