function calcularCompra(){
    var inAreaPintada = document.getElementById("inAreaPintada");
    var outLata = document.getElementById("outLata");
    var outValor = document.getElementById("outValor");

    var areaPintada = Number(inAreaPintada.value);

    var latas = Math.ceil(areaPintada/54);
    var preco = latas * 80;

    outLata.textContent = "Quantidade de lata(s):" + latas;
    outValor.textContent = "Valor Toral R$" + preco.toFixed(2);
}

var btCompra = document.getElementById("btCompra");
btCompra.addEventListener("click",calcularCompra);