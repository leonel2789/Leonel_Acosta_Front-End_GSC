function mapFunction(arreglo, funcion){
    arrFinal = []
    for(let x of arreglo){
        let r = funcion(x);
        arrFinal.push(r);
    }
    return arrFinal
}

let arr=[1,2,3,4]
let resultado = mapFunction(arr, function regla(a){
    return a * 2;
});

console.log(resultado);