
const botoes = document.querySelectorAll(".botao")
const texto  = document.querySelectorAll(".aba-conteudo")

for(let i = 0; i<botoes.length; i++){
	botoes[i].onclick = function(){
		for (let j = 0;j<botoes.length; j++){
			botoes[j].classList.remove('ativo');
			texto[j].classList.remove('ativo')
}
		botoes[i].classList.add('ativo');
		texto[i].classList.add('ativo')
	}
}

const contadores = document.querySelectorAll(".contador")
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-10-05T00:00:00");
const tempoObjetivo3 = new Date("2024-10-05T00:00:00");
const tempoObjetivo4 = new Date("2024-10-05T00:00:00");
let tempoAtual = new Date()

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]
function atualizaCronometro(){

	for (let i=0;i<contadores.length;)i++{
		contadores[i].textContent = calculaTempo(tempos[i]);
	}
}

atualizaCronometro();
setInterval(atualizaCronometro, 1000);

contadores[0].textContent = (tempoObjetivo1 - tempoAtual)/1000/60/60/24


function calculaTempo(tempoObjetivo1){

let tempoAtual = new Date();
let tempoFinal = tempoObjetivo1 - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

return dias;	

}