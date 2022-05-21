function converterTemperatura () {
    var inCel = document.getElementById("inCel");
    var outFah = document.getElementById("outFah");

    var cel = Number(inCel.value);
    var converter = (cel * 9/5) + 32;

    outFah.textContent = cel + "°C" + " equivale a " + converter.toFixed(1) + "°F";

}

var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", converterTemperatura);