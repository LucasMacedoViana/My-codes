function descobrirArea(){
    var inRaio = document.getElementById("inRaio");
    var outArea = document.getElementById("outArea");

    var raio = Number(inRaio.value);
    var calculo = Math.PI * (raio ** 2);

    outArea.textContent = "A área do círculo é:" + calculo.toFixed(2);

}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", descobrirArea);