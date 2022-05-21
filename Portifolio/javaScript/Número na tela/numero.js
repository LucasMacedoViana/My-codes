function mostrarNumero(){
    var inEntrada = document.getElementById("inEntrada");
    var outNumero = document.getElementById("outNumero");

    var entrada = Number(inEntrada.value);

    outNumero.textContent = entrada;

}

var btImprimir = document.getElementById("btImprimir");
btImprimir.addEventListener("click", mostrarNumero);