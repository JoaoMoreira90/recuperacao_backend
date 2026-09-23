// O nível de óleo de uma máquina deve permanecer entre 40% e 80%, inclusive. Fora desse intervalo, a máquina precisa de
// inspeção.
// O programa deve:
// ☐ Solicitar o nível de óleo em porcentagem.
// ☐ Usar if/else para verificar se o nível está dentro do intervalo.
// ☐ Exibir &quot;NÍVEL NORMAL&quot; quando estiver entre 40 e 80.
// ☐ Exibir &quot;INSPEÇÃO NECESSÁRIA&quot; nos demais casos.
// ☐ Exibir também o valor informado.


const entrada = require("readline-sync");

const oleo = entrada.questionFloat("o nivel de oleo da maquina (em %): ");

let classificacao;

if (oleo <= 40) {
    classificacao = "NORMAL";
} else if (oleo <= 80) {
    classificacao = "ATENÇÃO";
} else {
    classificacao = "CRÍTICA";
}

console.log("\n=== SITUAÇÃO DA MÁQUINA de ÓLEO ===");
console.log(`Temperatura: ${oleo} %`);
console.log(`Classificação do oleo: ${classificacao}`);
