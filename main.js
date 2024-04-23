
const botoes = document.querySelectorAll(".botao")


for(let i = 0; i<botoes.length; i++){
	botoes[i].onclick = function(){
		for (let j = 0;j<botoes.length; j++){
			botoes[j].classList.remove('ativo')
}
		botoes[i].classList.add('ativo')
	}
}

const conteudo = document.querySelectorAll(".aba-conteudo")

for(let i = 0; i<conteudo.length; i++){
	conteudo[i].onclick = function(){
		for (let j = 0;j<conteudo.length; j++){
			conteudo[j].classList.remove('ativo')
}
		conteudo[i].classList.add('ativo')
	}
}