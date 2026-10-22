// Base do Codigo

let tentativa = document.getElementById(`txt`)
let validar = document.getElementById(`Validar`)
let res = document.getElementById(`res`)

const NumPerfeito = 6

validar.addEventListener(`click`, clicar)

function clicar(){
let Num = Number(tentativa.value)
if (Num === NumPerfeito){
res.innerText = (`Parabéns Você acertou o numero perfeito!`)
return } 
for (let numtentativa = 1;Num != NumPerfeito;numtentativa++){
res.innerHTML = (`Tente novamente <br> Numero de tentativas: ${numtentativa}`)
} 
}