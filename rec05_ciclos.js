// Uma esteira produz uma quantidade fixa de produtos por ciclo. O supervisor quer visualizar a produção acumulada dos ciclos 1
// até 12.
// O programa deve:
// ☐ Solicitar quantos produtos são produzidos por ciclo.
// ☐ Usar um laço for de 1 até 12.
// ☐ Exibir, em cada ciclo, o número do ciclo e a produção acumulada.
// ☐ Não escrever manualmente as doze linhas.

const entrada = require('readline-sync');

console.log("===SISTEMA DE CICLO DA FABRICA ===");
const ciclo = [];

for (let i =0; i <= 11; i++){
    const numero = entrada.questionInt(`Digite o numero: ${i+1}: `);
    ciclo.push(numero);
}

