function converterDuracao(){
    //criar referência aos elementos da página
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

    //Obter conteudo com campo de entrada
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

    //Arredondar para baixo o resultado da divisão
    var horas = Math.floor(duracao/60);

    //Obeter resto da divisão entre os numeros
    var minutos = duracao % 60;

    //Altera o conteudo do paragrafor de resposta(out)
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + "Hora(s) e " + minutos + "Minuto(s).";
}

//criar referencia ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
//registrar evento assoviado ao botão, para carregar a função
btConverter.addEventListener("click", converterDuracao);