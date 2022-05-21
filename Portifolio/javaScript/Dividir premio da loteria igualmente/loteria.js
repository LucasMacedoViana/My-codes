function dividirPremio (){
   var inPremio = document.getElementById("inPremio");
   var outValorDividido = document.getElementById("outValorDividido");

   var premio = Number(inPremio.value);
   var divisao = premio/3;

   outValorDividido.textContent = "Cada um vai receber R$" + divisao.toFixed(2);
}

var btDividir = document.getElementById("btDividir");
btDividir.addEventListener("click", dividirPremio);