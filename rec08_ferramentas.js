// Um almoxarifado precisa cadastrar quatro ferramentas. Cada ferramenta possui nome, quantidade disponível e quantidade
// mínima.
// O programa deve:
// ☐ Criar um array vazio para armazenar as ferramentas.
// ☐ Cadastrar 4 ferramentas usando um laço.
// ☐ Criar um objeto para cada ferramenta com nome, quantidade e minimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Percorrer o array após o cadastro.
// ☐ Quando quantidade &lt; minimo, exibir &quot;REPOR&quot;.
// ☐ Caso contrário, exibir &quot;ESTOQUE SUFICIENTE&quot;.
// ☐ Apresentar nome, quantidade, mínimo e situação de cada ferramenta.


const entrada = require("readline-sync");

const ferramentas = [];

for (let i = 0; i < 3; i++) {
    console.log(`\nCadastro de ferramentas ${i + 1}`);

    const nome = entrada.question("Nome: ");
    const quantidade = entrada.questionInt("Quantidade em estoque: ");
    const estoqueMinimo = entrada.questionInt("Estoque minimo: ");

    const componente = {
        nome,
        quantidade,
        estoqueMinimo
    };

    ferramentas.push(ferramentas);
}

console.log("\n=== RELATÓRIO DE ESTOQUE ===");

for (let i = 0; i < componentes.length; i++) {
    const ferramentas = componentes[i];

    console.log(`\nComponente: ${ferramentas.nome}`);
    console.log(`Quantidade: ${ferramentas.quantidade}`);
    console.log(`Estoque mínimo: ${ferramentas.estoqueMinimo}`);

    if (ferramentas.quantidade < ferramentas.estoqueMinimo) {
        console.log("Situação: REPOR ESTOQUE");
    } else {
        console.log("Situação: ESTOQUE OK");
    }
}