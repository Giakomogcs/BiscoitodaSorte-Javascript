//Adivinhar o numero utilizando repetição

const luck = [
  {
    author: "Jean Paul Sartre",
    phrase: "A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz",
  },

  {
    author: "Giovani Costa Silva",
    phrase: "Só vejo isso como motivos para rir depois",
  },

  {
    author: "Walt Disney",
    phrase: "É sempre divertido fazer o impossível",
  },

  {
    author: "Oscar Wilde",
    phrase: "Experiência é o nome que cada um dá a seus erros",
  },

  {
    author: "John F. Kennedy",
    phrase: "Somente os que ousam errar muito podem realizar muito",
  },

  {
    author: "Aristóteles",
    phrase: "Somos o que repetidamente fazemos. Portanto, a excelência não é um feito, é um hábito",
  },

  {
    author: "Sócrates",
    phrase: "É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo",
  },

  {
    author: "Santo Agostinho",
    phrase: "Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer",
  },

  {
    author: "Sófocles",
    phrase: "Não há sucesso sem dificuldade",
  },

  {
    author: "Thomas Edison",
    phrase: "Se existe uma forma de fazer melhor, descubra-a”",
  },
]


const screen1 = document.querySelector(".screen1") //procurando a classe screen1 pela query
const screen2 = document.querySelector(".screen2") //procurando a classe screen2 pela query

const btnRead = document.querySelector("#btnRead") //procurando o id do botão da screen1
const btnBack = document.querySelector("#btnBack") //procurando o id do botão da screen2

btnRead.addEventListener("click", handleReadClick) //adicionando um evento de click no botão da screen1 e indicando a função
btnBack.addEventListener("click", handleBackClick) //adicionando um evento de click no botão da screen2 e indicando a função

document.addEventListener('keydown', EventEnter)


function handleReadClick(event) {
  event.preventDefault()
  
  let NumRandom = Math.round(Math.random() * 10) //gerando numero random
  //console.log(NumRandom)

  document.querySelector(".screen2 h2").innerText = `"${luck[NumRandom].phrase}"
  
  ${luck[NumRandom].author}`

  toggleScreen()
      
}

function handleBackClick() {

  toggleScreen()
}

function toggleScreen() {
  /*
  screen1.remove("hide") //retirando a classe hide para a screen1 o que irá mostra-la
  screen2.add("hide") //adicionando a classe hide para a screen2 o que irá oculta-la
  */

  screen1.classList.toggle("hide") //inverte as telas
  screen2.classList.toggle("hide")
}

function EventEnter(e) {
  console.log(e.key);
  if(e.key == 'Enter' && screen1.classList.contains("hide")) { 
    handleBackClick() //só vai trocar de tela com o enter já estiver na screen2
  }

  else if(e.key == 'Enter' && screen2.classList.contains("hide")) { 
    handleReadClick(e) //só vai trocar de tela com o enter já estiver na screen2
  }
}