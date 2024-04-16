let num = document.querySelector('#fnun')
let list = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function isNum(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
    return true
} else {
    return false
}
}


function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNum(num.value) && !inList(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement ('option')
       item.text = `Valor ${num.value} adicionado.`
       list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor invalido ou ja existente')
    } 
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert ('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0
        for(let pos in valores) { 
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.<p>`
        res.innerHTML += `<p> E desses numeros o <strong>maior</strong> valor é de ${maior}.<p>`
        res.innerHTML += `<p> E desses numeros o <strong>menor</strong> valor é de ${menor}`
        res.innerHTML += `<p>E a <strong>soma</strong> de todos os numeros é ${soma}<p>`
        res.innerHTML +=  `<p> Ja a <strong>media</strong> de todos os numeros é ${media}`

    }

}
