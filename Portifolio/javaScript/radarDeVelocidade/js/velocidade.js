function verificarVelocidade(){
    var inPermitida = document.getElementById("inPermitida");
    var inCondutor = document.getElementById("inCondutor");
    var outSituacao = document.getElementById("outSituacao");

    var permitida = Number(inPermitida.value);
    var condutor = Number(inCondutor.value);

    if (permitida == "" || isNaN(permitida)){
        alert("Informe a velocidade permitida na via!");
        inPermitida.focus();
        return;
    }
    if (condutor == "" || isNaN(condutor)) {
        alert("Informe a velocidade em que o condutor estava!");
        inCondutor.focus();
        return;
    }

    if (condutor <= permitida){
        outSituacao.textContent = "Situação: Sem Multa";
    } else {
        var maisVinte = permitida * 1.20;
        if(condutor <= maisVinte){
            outSituacao.textContent = "Situação: Multa Leve";
        } else{
            outSituacao.textContent = "Situação: Multa Grave";
        }
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);