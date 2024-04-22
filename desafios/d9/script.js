function reajuste() {
    let nome = prompt('Qual o nome do funcionario?')
    let valor = parseFloat(prompt(`Qual o seu salario ${nome}?`))
    let valorReajuste = parseFloat(prompt('Qual e o valor do reajuste?'))
    if (isNaN(valor && valorReajuste)){
        alert('Coloque um valor valido do salario')
        return;
    }
    let reajuste = valor * (valorReajuste / 100 )
    
    res.innerHTML = (`${nome},<br>
    O seu salario atual era de R$ ${valor.toFixed(2)}, <br>
    Com um amento de ${valorReajuste}%, o salario vai aumentar ${reajuste.toFixed(2)} no proximo mes, <br>
    E entao ${nome} vai passar a receber R$ ${(reajuste+valor).toFixed(2)}.`)
}
    