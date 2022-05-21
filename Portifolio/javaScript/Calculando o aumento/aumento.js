function calcularAumento(){
    var inSalario = document.getElementById("inSalario");
    var outAumento = document.getElementById("outAumento");

    var salario = Number(inSalario.value);

    var calculo = salario * 1.25;

    outAumento.textContent = "Seu salário atual é de R$" + calculo.toFixed(2);

}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularAumento);