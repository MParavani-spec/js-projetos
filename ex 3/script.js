// Base do Codigo

let gerar = document.getElementById(`Gerar`)

gerar.addEventListener(`click`, clicar)

let N = document.getElementById(`txt`)
let Tab = document.getElementById(`seltab`)

/* Se o valor de N estiver vazio ou com espaços
ou o valor de Num não é um numero finito, então dara erro*/
function clicar (){

let Num = Number(N.value)

if (N.value.trim() === `` || !Number.isFinite(Num)){
window.alert(`Prencha os dados corretamente, fiot`)
return }

    Tab.innerText = ``

    for(let t = 1; t <=10; t++){
        let item = document.createElement(`option`)
        item.text = `${Num} X ${t} = ${Num*t} `
        Tab.appendChild(item)
    }

}

