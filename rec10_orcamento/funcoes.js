function calcularMaoDeObra(horas) {
    return horas * 80;
}

function calcularTotal(valorPecas, horas) {
    const maoDeObras = calcularMaoDeObra(horas);
    return valorPecas + maoDeObras;
}

function verificarGarantia(meses) {
    if (meses <= 6) {
        return "EM GARANTIA";
    } else {
        return "FORA DA GARANTIA";
    }
}

module.exports = {
    calcularMaoDeObras,
    calcularTotal,
    verificarGarantia
};
