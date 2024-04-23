function anoBissexto () {
    let pergAno = parseFloat(prompt('Que ano quer pesquisar?'))
    if (isNaN(pergAno)) {
    alert('Por favor digite um numero valido')
    return;}
    if ((pergAno % 4 === 0 && pergAno % 100 !== 0) || (pergAno % 400 === 0)) {
        res.innerHTML = `É um ano bissexto!!`

    } else {
        res.innerHTML = `Nao e um ano bissexto!!`
    }
}
