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
        window.alert('Tudo ok')
    } else {
        window.alert('valor invalido ou ja existente')
    } 


}