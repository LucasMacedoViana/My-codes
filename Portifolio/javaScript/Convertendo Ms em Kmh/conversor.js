function calcularConversao(){
    var inMs = document.getElementById("inMs");
    var outKmh = document.getElementById("outKmh");

    var Ms = Number(inMs.value);

    var calculo = Ms * 3.6;

    outKmh.textContent = "A velocidade é: " + calculo.toFixed(1) + "Km/h";

}

var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", calcularConversao);