function mostrarPromocao(){
    //criar referência aos elementos da página
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    //Obter conteudo com campo de entrada
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    //calculando o valor da entrada e das parcelas
    var entrada = preco * 0.50;
    var parcela = (preco * 0.50) / 12;

    //Altera o conteudo do paragrafor de resposta(out)
    outVeiculo.textContent = "Promoção" + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = " + 12x de R$: " + parcela.toFixed(2);
}

//criar referencia ao elemento btVerPromocao (botão)
var btVerPromocao = document.getElementById("btVerPromocao");
//registrar evento assoviado ao botão, para carregar a função
btVerPromocao.addEventListener("click", mostrarPromocao);
