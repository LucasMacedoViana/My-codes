function calcularQuestao(){
    var inNumero1 = document.getElementById("inNumero1");
    var inNumero2 = document.getElementById("inNumero2");
    var inNumero3 = document.getElementById("inNumero3");
    var outResposta1 = document.getElementById("outResposta1");
    var outResposta2 = document.getElementById("outResposta2");
    var outResposta3 = document.getElementById("outResposta3");

    var numero1 = Number.parseInt(inNumero1.value);
    var numero2 = Number.parseInt(inNumero2.value);
    var numero3 = Number(inNumero3.value);

    var calculo1 = (numero1.toFixed(0) *2 ) * (numero2.toFixed(0) / 2);
    var calculo2 = (numero1.toFixed(0) *3 ) + numero3;
    var calculo3 = (numero3 ** 3);

    outResposta1.textContent = "o produto do dobro do primeiro com metade do segundo é igual a: " + calculo1;
    outResposta2.textContent = "o produto do dobro do primeiro com metade do segundo é igual a: " + calculo2;
    outResposta3.textContent = "o terceiro elevado ao cubo é igual a: " + calculo3;

}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularQuestao);