const stringPalavra = "Chegou chegando";

function palavrasDistintas(stringPalavra){
    let novoArray = stringPalavra.split(" ");
    let arrayInvertido = novoArray.reverse();
    let resultado = arrayInvertido.join(" ");
    console.log(resultado);
}

palavrasDistintas(stringPalavra);