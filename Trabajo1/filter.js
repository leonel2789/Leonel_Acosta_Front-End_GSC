function findFunction(arreglo, funcion){
    let result = []
    for(let x of arreglo){
        if(funcion(x) === true){
            result.push(x)
        }
    }
    return result;
}

let arr=[1,2,3,4]
let resultado = findFunction(arr, function regla(a){
    return  a < 0;
});

console.log(resultado);