function verificarNumero (){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if (numero == "" || isNaN(numero)){
        alert("Informe o numero corretamente!")
        inNumero.focus();
        return;
    }

    if (numero % 2 == 0){
        outResposta.textContent = "Resposta: " + numero + " é PAR!";
    } else{
        outResposta.textContent = "Resposta: " + numero + " é ÍMPAR";
    }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarNumero);