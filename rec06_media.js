// Uma equipe registrou o tempo, em minutos, de seis atendimentos técnicos e deseja calcular a média.
// O programa deve:
// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço para solicitar exatamente 6 tempos.
// ☐ Somar cada valor ao acumulador.
// ☐ Calcular a média ao final.
// ☐ Exibir a soma dos tempos e a média.



const entrada = require("readline-sync");

const ciclo_acumulado = entrada.questionInt("Quantos ciclo? ");

console.log("\n=== CICLOS ACUMULADOS ===");

for (let ciclo = 0; ciclo <= 6; ciclo++) {
    const acumulado = ciclo_acumulado * ciclo;
    console.log(`Ciclo ${ciclo}: ${acumulado} ciclo`);
}