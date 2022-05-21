function CalcularSoma (){
    var inNumero1 = document.getElementById("inNumero1");
    var inNumero2 = document.getElementById("inNumero2");
    var inNumero3 = document.getElementById("inNumero3");
    var outFinal = document.getElementById("outFinal");

    var numero1 = parseInt(inNumero1.value);
    var numero2 = parseInt(inNumero2.value);
    var numero3 = parseInt(inNumero3.value);

    var soma = numero1 + numero2 + numero3;

    outFinal.textContent = "O resultado da soma é: " + soma;
}

var btSomar = document.getElementById("btSomar");
btSomar.addEventListener("click", CalcularSoma);