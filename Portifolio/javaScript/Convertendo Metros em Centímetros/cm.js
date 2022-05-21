function conversor(){
  var inMetros = document.getElementById("inMetros");
  var outCentimetros = document.getElementById("outCentimetros");

  var metros = Number(inMetros.value);

  var transformar = metros*100;

  outCentimetros.textContent = metros + "m equivalem a " + transformar + "Cm";
  
}
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", conversor);