function verificarLados(){
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outValidacao = document.getElementById("outValidacao");
    var outTipo = document.getElementById("outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if((ladoA == "" || isNaN(ladoA)) || (ladoB == "" || isNaN(ladoB)) || (ladoC == "" || isNaN(ladoC)) ){
        alert("Informe todos os lados do triângulo!");
        return;
    }     

    if((ladoA > (ladoB + ladoC)) || (ladoB > (ladoA + ladoC)) || (ladoC > (ladoA + ladoB))){
        outValidacao.textContent = "Lados não podem formar um triângulo!";
        outTipo.textContent = "";
        return;
    } else if((ladoA == ladoB) && (ladoB == ladoC) && (ladoA == ladoC)){
        outValidacao.textContent = "Lados podem formar um triângulo";
        outTipo.textContent = "Tipo: Equilátero";
    } else if((ladoA == ladoB) || (ladoB == ladoC) || (ladoA == ladoC)){
        outValidacao.textContent = "Lados podem formar um triângulo";
        outTipo.textContent = "Tipo: Iósceles"; 
    } else{
        outValidacao.textContent = "Lados podem formar um triângulo";
        outTipo.textContent = "Tipo: Escaledo";
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarLados);