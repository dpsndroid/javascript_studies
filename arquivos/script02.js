function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("Erro! Verifique os dados e tente novamente.")
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - fano.value;
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id","foto");
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade < 10){
                img.setAttribute("src","bebeh.jpg");
            } else if (idade >= 10 && idade < 19) {
                img.setAttribute("src","adolescenteh.jpg");
            } else if (idade >= 19 && idade < 65) {
                img.setAttribute("src","homem.jpg");
            } else if (idade >= 65) {
                img.setAttribute("src","velho.jpg");
            }
        } else if (fsex[1].checked) {
            genero ="Mulher";
            if (idade < 10){
                img.setAttribute("src","bebem.jpg");
            } else if (idade >= 10 && idade < 19) {
                img.setAttribute("src","adolescentem.jpg");
            } else if (idade >= 19 && idade < 65) {
                img.setAttribute("src","mulher.jpg");
            } else if (idade >= 65) {
                img.setAttribute("src","velha.jpg");
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos<br><br>`;
        res.appendChild(img);
        
        
    }
}

function contar(){
    let inicio = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let res = document.getElementById("res");
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível realizar a conta. Faltam parâmetros`;
        
    } else {
        res.innerHTML = "Contando:  ";
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
    if(p<=0){
        window.alert(`Passo inválido. Consiserando passo = 1`);
        p = 1;
    }
    
    if(i<f){ // contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c}  \u{1F449}   `; //formatação unicode para emoji no JS
    }
    } else { // contagem decrescente
        for(let c = i; c>= f; c-= p){
            res.innerHTML += `${c}   \u{1F449}    `;
        }
    }
    }
}

