const elementoResposta = document.querySelector("#resposta")
const inputPerunta= document.querySelector("#inputPergunta")
const btnPeruntar= document.querySelector("#btnPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


//onsole.log(numeroAleatorio)
function fazerPergunta(){

  if(inputPerunta.value==""){
    alert("Digite sua pergunta")
    return
  }

  btnPeruntar.setAttribute("disabled",true)
  
  const pergunta="<div>"+inputPerunta.value+"</div>"

 // gerar numero aleatorio
  const totalRespostas=respostas.length
  const numeroAleatorio = Math.floor(Math.random()*totalRespostas)
  
  elementoResposta.innerHTML = pergunta+respostas[numeroAleatorio]

  elementoResposta.style.opacity=1;
  
//sumir a resposta depois de 3 segundos
  setTimeout(function(){
      elementoResposta.style.opacity=0;
      btnPeruntar.removeAttribute("disabled");
  },3000) 

}