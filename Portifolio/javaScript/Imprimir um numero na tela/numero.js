function mostrarNumero(){
   outNumero.textContent = Math.random() * 1000;

}

var btImprimir = document.getElementById("btImprimir");
btImprimir.addEventListener("click", mostrarNumero);