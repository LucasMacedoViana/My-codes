function calcularPreco(){
    //criar refêrencia aos elemetos da pagina
    var inPreco = document.getElementById("inPreco");
    var inPeso = document.getElementById("inPeso");
    var outPagar = document.getElementById("outPagar");

    //obter conteudo com campo de entrada
    var preco = Number(inPreco.value);
    var peso = Number(inPeso.value);

    //calculando o valor do prato
    var pagar = (peso / 1000) * preco;

    //alterando o conteudo do paragrafo de resposta
    outPagar.textContent = "O valor a pagar R$: " + pagar.toFixed(2);
}

//criar referencia ao elemento btCalcularPreco
var btCalcularPreco = document.getElementById("btCalcularPreco");
//registar evento associado ao botão para acarregar a funçao
btCalcularPreco.addEventListener("click", calcularPreco);