let novoArray = [[1,2],[3,4],[5,6]];
let matrizTrnas = [];
let matrizTrnas2 = [];
let matrixTransposta = [];


for(let valor of novoArray){
    let arrayConvertido = valor.toString();
    let primeiroNumero = arrayConvertido.slice(0,1);
    matrizTrnas.push(primeiroNumero);
    let segundoNumero =  arrayConvertido.slice(2);
    matrizTrnas2.push(segundoNumero);
}

matrixTransposta.push(matrizTrnas);
matrixTransposta.push(matrizTrnas2);
console.log(matrixTransposta);
