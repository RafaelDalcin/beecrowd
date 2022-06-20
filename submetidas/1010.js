var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));


    let [cod1, qtd1, valorUnitario1] = pegarValores(lines.shift());
    let [cod2, qtd2, valorUnitario2] = pegarValores(lines.shift());
    
    let total = (qtd1 * valorUnitario1) + (qtd2 * valorUnitario2);



    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);