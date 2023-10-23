function cero(op){
    return op ? op(0) : 0;
}
function uno(op){
    return op ? op(1) : 1;
}
function dos(op){
    return op ? op(2) : 2;
}
function tres(op){
    return op ? op(3) : 3;
}
function cuatro(op){
    return op ? op(4) : 4;
}
function cinco(op){
    return op ? op(5) : 5;
}
function seis(op){
    return op ? op(6) : 6;
}
function siete(op){
    return op ? op(7) : 7;
}
function ocho(op){
    return op ? op(8) : 8;
}
function nueve(op){
    return op ? op(9) : 9;
}

function mas(a){
    return function(b){
        return a + b;
    };
}
function menos(a){
    return function(b){
        return b - a;
    };
}
function por(a){
    return function(b){
        return a * b;
    };
}
function dividido(a){
    return function(b){
        return Math.floor(b / a);
    };
}

console.log(cero(mas(uno())));
console.log(siete(menos(cuatro())));
console.log(tres(por(tres())));
console.log(seis(dividido(tres())));