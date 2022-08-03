function parimpar(n) {
    if(n%2==0){
        return "par";
    } else {
        return "impar";
    }
}
function soma(n1=0, n2=0) {  //Parâmetros opcionais, se não for passado nada, será 0
    return n1 + n2;
}

let v = function(x) { // a variável v recebe uma função, depois é só chamar a variável
    return x*2;
}

function fatorial(z) {
    let fat = 1;
    for(let c = z; c > 1; c--){
        fat *= c;
    }
    return fat
}
// recursividade
function fato(h){
    if(h==1){
        return 1;
    } else {
        return h * fato(h-1);
    }
}
console.log();
console.log(parimpar(7));
console.log();
console.log((soma(2,5)));
console.log();
console.log(v(15));
console.log();
console.log(fatorial(5));
console.log();
console.log(fato(5));
console.log();