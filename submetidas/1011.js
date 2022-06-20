var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

 let raio = parseFloat(lines.shift());
  const pi = 3.14159;
  let volume = (4/3) * pi * (raio * raio * raio);

  console.log(`VOLUME = ${volume.toFixed(3)}`);