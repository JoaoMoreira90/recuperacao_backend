// Uma indústria deseja calcular o percentual de aproveitamento de matéria-prima. O aproveitamento é calculado por (quantidade
// útil / quantidade total) × 100.
// O programa deve:
// ☐ Criar a função calcularAproveitamento(util, total) que retorne o percentual.
// ☐ Criar a função classificarAproveitamento(percentual).
// ☐ Classificação: 90% ou mais = &quot;EXCELENTE&quot;; de 75% a 89,99% = &quot;ADEQUADO&quot;; abaixo de 75% = &quot;REVISAR PROCESSO&quot;.
// ☐ Solicitar quantidade total e quantidade útil pelo terminal.
// ☐ Chamar as duas funções.
// ☐ Exibir total, quantidade útil, percentual e classificação.


const entrada = require("readline-sync");

function calcularEficiencia(Util, total) {
    return (Util / total) * 100;
}

function classificarEficiencia(percentual) {
    if (percentual >= 90) {
        return "META ATINGIDA";
    } else if (percentual >= 75) {
        return "ATENÇÃO";
    } else {
        return "ABAIXO DA META";
    }
}

const producaoPrevista = entrada.questionFloat("Produçao prevista: ");
const producaoReal = entrada.questionFloat("Producao real: ");

const eficiencia = calcularEficiencia(producaoReal, producaoPrevista);
const classificacao = classificarEficiencia(eficiencia);

console.log("\n=== RELATÓRIO DE EFICIÊNCIA ===");
console.log(`Producao prevista: ${producaoPrevista}`);
console.log(`Producao real: ${producaoReal}`);
console.log(`Eficiencia: ${eficiencia.toFixed(2)}%`);
console.log(`Classificao: ${classificacao}`);