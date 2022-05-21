function dividirPremio (){
    var inPremio = document.getElementById("inPremio");
    var outGanhador1 = document.getElementById("outGanhador1");
    var outGanhador2 = document.getElementById("outGanhador2");
    var outGanhador3 = document.getElementById("outGanhador3");
 
    var premio = Number(inPremio.value);
    var ganhador1 = premio * 0.47;
    var ganhador2 = premio * 0.31;
    var ganhador3 = premio * 0.22;
 
    outGanhador1.textContent = "o Ganhador 1 vai receber R$" + ganhador1.toFixed(2);
    outGanhador2.textContent = "o Ganhador 2 vai receber R$" + ganhador2.toFixed(2);
    outGanhador3.textContent = "o Ganhador 3 vai receber R$" + ganhador3.toFixed(2);
 }
 
 var btDividir = document.getElementById("btDividir");
 btDividir.addEventListener("click", dividirPremio);