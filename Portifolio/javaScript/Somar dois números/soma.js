function soma (){
    var inNumero1 = document.getElementById("inNumero1");
    var inNumero2 = document.getElementById("inNumero2");
    var outFinal = document.getElementById("outFinal");

    var numero1 = Number(inNumero1.value);
    var numero2 = Number(inNumero2.value);

    var soma = numero1 + numero2;

    outFinal.textContent = "O resultado da soma é: " + soma;
}

var btSomar = document.getElementById("btSomar");
btSomar.addEventListener("click", soma);