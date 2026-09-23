// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
// O programa deve:
// ☐ Importar a biblioteca readline-sync.
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
// ☐ Calcular o valor total da compra.
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total.
// Arquivo para entrega rec02_materiais.js
// Teste mínimo Exemplo: 12 rolamentos a R$ 18,50 devem resultar em R$ 222,00.

const entrada = require("readline-sync");

const peca = entrada.question("Nome da peca: ");
const quantidade = entrada.questionInt("Quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Preco unitario R$: ");

const total = quantidade * precoUnitario;

console.log("\n=== RESUMO DA COMPRA ===");
console.log(`peca: ${peca}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);


