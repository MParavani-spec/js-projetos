// Base do Codigo

let confirm = document.getElementById(`Confirmar`)

confirm.addEventListener(`click`, clicar)

function clicar(){
let idade = document.getElementById(`idade`)
let valor = Number(idade.value)
let res = document.getElementById(`resultado`)
let resex = document.getElementById(`ressex`)
const elementos = document.querySelectorAll(`header, footer, .exercicio, #Confirmar`)
let fsex = document.getElementsByName(`rad`)
let genero = ``
let img = document.createElement(`img`)
img.setAttribute(`id`, `foto`)

    // Erro

if (idade.value === `` || valor <= 0 || valor > 122 || !Number.isInteger(valor)){
res.innerText = (`Insira uma idade valida, seu merda`)
resex.innerText = (``)
elementos.forEach(el => el.classList.add(`erro`))
}
else {
    
    // Idade

    if (valor >= 18){
    res.innerText = (`Você é maior de 18 anos`)
       elementos.forEach(el => el.classList.remove(`erro`))
    } else {
    res.innerText = (`Você é menor de 18 anos`)
        elementos.forEach(el => el.classList.remove(`erro`))

    // Homem

    } if  (fsex[0].checked) {
        genero = `Homem`
        if (valor >= 1 && valor <= 11){
        img.setAttribute(`src`, `imgs/ney.jpg`)
        }  else if (valor >= 12 && valor <= 20) {
        img.setAttribute(`src`, `imgs/bully.jpg`)
        }  else if (valor >= 21 && valor <= 59) {
        img.setAttribute(`src`, `imgs/steve.webp`)
        } else if (valor >= 60) {
        img.setAttribute(`src`, `imgs/walter.webp`)
        }

        // Mulher

    } else if (fsex[1].checked){
        genero = `Mulher`
          if (valor >= 1 && valor <= 11){
        img.setAttribute(`src`, `imgs/anais.png`)
        }  else if (valor >= 12 && valor <= 20) {
        img.setAttribute(`src`, `imgs/sadie.jpg`)
        }  else if (valor >= 21 && valor <= 59) {
        img.setAttribute(`src`, `imgs/gaga.jpg`)
        } else if (valor >= 60) {
        img.setAttribute(`src`, `imgs/elizabeth.webp`)
        }

        // Outro

    } else if (fsex[2].checked){
        genero = `Fiot`
        img.setAttribute(`src`, `imgs/fiot.jpg`)
    }
    resex.innerHTML = (`Você tem <strong>${valor}</strong> anos e é <strong>${genero}</strong>`)
    resex.appendChild(img)
}
}