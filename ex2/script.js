// Base do Codigo

let contar = document.getElementById(`Contar`)

contar.addEventListener(`click`, clicar)

let inicio = document.getElementById(`txti`)
let final = document.getElementById(`txtf`)
let passo = document.getElementById(`txtp`)

function clicar(){

    let VI = Number(inicio.value)
    let VF = Number(final.value)
    let VP = Number(passo.value)
    let res = document.getElementById(`resultado`)

    res.innerText = ``

    if (inicio.value == 0 || final.value == 0 || passo.value <= 0){
        window.alert(`Atenção: Prencha todos os dados corretamente antes de prosseguir, fiot`)
    } else {

        for(let c = VI; c <= VF; c += VP){
        res.innerText += ` ${c} > `
    }   res.innerText += ` Fim!`
}

    
}