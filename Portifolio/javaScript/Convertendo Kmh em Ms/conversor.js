function calcularConversao(){
    var inKmh = document.getElementById("inKmh");
    var outMs = document.getElementById("outMs");

    var kmh = Number(inKmh.value);

    var calculo = kmh/3.6;

    outMs.textContent = "A velocidade é: " + calculo.toFixed(1) + "M/s";

}

var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", calcularConversao);