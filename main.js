const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll("aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos [i]. classList.add 

    }
}


const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05t00: 00: 00")

contadores [0]. textContent = calculatempo(tempoObjetivo1) - tempoatual;

function calculatempo (tempoObjetivo){
    let tempoatual = new Date()
    let tempofinal =tempoobjetivo - tempoatual
    let segundos = tempofinal/100;
    return segundos;
}