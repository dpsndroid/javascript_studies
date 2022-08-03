let num = [5,8,2,9,3];
console.log(`Nosso vetor é o ${num}`);
num[3] = 6;
console.log(`O novo vetor é o ${num}`);
num.push(7); //acrescenta valores ao vetor, no final
console.log(`O novo vetor é o ${num}`);
console.log(num.length); // conta quantos elementos há no vetor
num.sort(); // vai colocar os elementos em ordem crescente
console.log(`Nosso vetor é o ${num}`);
console.log(num[1]);
console.log();
for (let pos=0;pos<num.length;pos++) { //código tradicional de se fazer
    console.log(`${num[pos]} ..`);
}
for (let pos=0;pos<num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
console.log()
for(let pos in num) { //código mais novo, simplificado
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
console.log(num.indexOf(7));
console.log(num.indexOf(4)); // vai retornar -1, significa que não existe