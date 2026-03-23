function calcularDesconto() {
    const preco = parseFloat(document.getElementById("preco").value);
    const percentual = parseFloat(document.getElementById("desconto").value);

    const valorDesconto = preco * (percentual / 100);
    const precoFinal = preco - valorDesconto;

    const resultado = `
    Preço original: ${preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} <br>
    Desconto: ${percentual}% <br>
    Você economizou: ${valorDesconto.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} <br>
    Preço final: ${precoFinal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
    `;

    document.getElementById("resultado").innerHTML = resultado;
}