function findFunction(arreglo, funcion){
    for(let x of arreglo){
        if(funcion(x) === true){
            return x;
        }
    }
    return undefined;
}

let arr=[1,2,3,4]
let resultado = findFunction(arr, function regla(a){
    return  a > 2;
});

console.log(resultado);