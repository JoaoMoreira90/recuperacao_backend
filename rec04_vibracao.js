// Um sensor mede o nível de vibração de um equipamento em mm/s.
// O programa deve:
// ☐ Até 3 mm/s: situação ESTÁVEL.
// ☐ Acima de 3 até 6 mm/s: situação ATENÇÃO.
// ☐ Acima de 6 mm/s: situação CRÍTICA.
// ☐ Solicitar o valor da vibração pelo terminal.
// ☐ Exibir o valor informado e a classificação.


const entrada = require("readline-sync");

const vibracao = entrada.questionFloat("o nivel de oleo da maquina (em mm/s): ");

if ( vibracao <= 3) {
    console.log(`vibracao: ${vibracao} mm/s`);
    console.log("ESTAVEL");
}else if (vibracao <= 6) {
    console.log(`vibracao: ${vibracao} mm/s`);
    console.log("ATENCAO");
}
