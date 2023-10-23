function reduceFunction(arreglo, funcion, vi = 0) {
    let acumulador = vi;
    for (let x of arreglo) {
        let va = acumulador
        acumulador = funcion(x, va)
    }
    return acumulador;
  }

let arr=[1,2,3,4]
let resultado = reduceFunction(arr, function regla(a, valorActual){
    return  a + valorActual;
});

console.log(resultado);