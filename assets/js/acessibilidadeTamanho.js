const aumentarFonte = document.querySelector('#aumentarFonte')
const diminuirFonte = document.querySelector('#diminuirFonte')
const body = document.querySelector('body')
var tamanho = 16

aumentarFonte.addEventListener('click', () => {
  tamanho += 1
  body.style.fontSize = tamanho + "px"
})

diminuirFonte.addEventListener('click', () => {
  tamanho -= 1
  body.style.fontSize = tamanho + "px"
})