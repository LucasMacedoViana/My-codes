function calcularMedia (){
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var inNota3 = document.getElementById("inNota3");
    var inNota4 = document.getElementById("inNota4");
    var outMedia = document.getElementById("outMedia");

    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);
    var nota3 = Number(inNota3.value);
    var nota4 = Number(inNota4.value);

    var media = (nota1 + nota2 + nota3 + nota4) / 4

    outMedia.textContent = "1ª nota: " + nota1 + "/" + "2ª nota: " + nota2 + "/" + "3ª nota: " + nota3 + "/"  + "4ª nota: " + nota4 + "/" + "Média: " + media.toFixed(2);
}
var btMedia = document.getElementById("btMedia");
btMedia.addEventListener("click", calcularMedia);