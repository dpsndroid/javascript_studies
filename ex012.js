let amigo = {
    nome:"José", sexo:"m", peso:84.5, engordar(p=0){
        console.log(`Engordou`);
        this.peso += p;
    }
};
console.log();
console.log(typeof amigo);
console.log();
amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso} kgs`);
console.log();
