function verificarParquimetro(){
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value);

    if(valor == "" || isNaN(valor)){
        alert("Digite o valor depositado!")
        inValor.focus();
        return;
    }

    if(valor < 1){
        alert("Valor iinsuficiente");
        inValor.focus();
        return;
    }
    if(valor == 1 || valor < 1.75){
        var troco = valor - 1;
        outTempo.textContent = "Tempo: 30 min";
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    } else if(valor == 1.75 || valor < 3){
        var troco = valor - 1.75;
        outTempo.textContent = "Tempo: 60 min";
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    }else{
        troco = valor - 3;
        outTempo.textContent = "Tempo: 120 min";
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    }
}
var btDeposito = document.getElementById("btDeposito");
btDeposito.addEventListener("click",verificarParquimetro);