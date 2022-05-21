function converterTemperatura () {
    var inFah = document.getElementById("inFah");
    var outCel = document.getElementById("outCel");

    var fah = Number(inFah.value);
    var converter = 5 * ((fah - 32)/9);

    outCel.textContent = fah + "°F" + " equivale a " + converter.toFixed(1) + "°C";

}

var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", converterTemperatura);